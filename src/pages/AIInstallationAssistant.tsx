import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Paperclip, Trash2, Bot, User, ChevronDown, AlertCircle, X, Wrench, HelpCircle, AlertTriangle, Package } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

import { supabase } from "@/integrations/supabase/client";

const QUICK_ACTIONS = [
  { icon: AlertTriangle, label: "Incorrect alignment", prompt: "My steering damper is misaligned after installation. The rod is not horizontal when handlebars are straight. How do I fix the alignment?" },
  { icon: Package, label: "Bolt does not fit", prompt: "One of the bolts from the hardware kit does not fit into the mounting point. What should I do? Could this be a wrong bracket issue?" },
  { icon: HelpCircle, label: "Torque value question", prompt: "What are the correct torque specifications for all bolts in the installation? Please list all values with their locations." },
  { icon: Wrench, label: "Missing parts", prompt: "I opened my MaxRacing package and some parts appear to be missing from the kit. What should be included and how do I proceed?" },
];

const DEFAULT_PRODUCTS = [
  { value: "MaxRacing Max10", label: "Max10" },
  { value: "MaxRacing Max20", label: "Max20" },
  { value: "MaxRacing Rearset", label: "Rearset" },
];

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  imageBase64?: string;
  imagePreview?: string;
}

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
// Note: The SDK defaults to v1beta for some models, but let's try to be explicit if it continues to fail
// For now, let's try to fix the model name if it was the issue, but 404 on v1beta is strange.

const SYSTEM_PROMPT = `You are the official MaxRacing Installation Assistant — a precise, professional technical support AI for MaxRacing hydraulic steering dampers and CNC accessories.

## YOUR KNOWLEDGE BASE

You have access to the official MaxRacing installation manuals. Below is the complete technical knowledge base:

---

### MAX10 & MAX20 INSTALLATION

**Manual ID:** MR-SD-UNIVERSAL-001

**Product Compatibility:** All MaxRacing hydraulic steering dampers with CNC mounting brackets.

**Required Tools:**
- Allen key set (4mm, 5mm, 6mm, 8mm)
- Torque wrench (capable of 5–25 Nm)
- Thread-locking compound (medium strength, Loctite 243 or equivalent)
- Ruler or vernier caliper
- Clean lint-free cloth
- Safety glasses

**Torque Specifications:**
- Damper body clamp bolts: 12–15 Nm
- Bar clamp top bridge bolts: 18–22 Nm
- Damper rod end bolt: 8–10 Nm
- Mounting bracket to frame: 15–20 Nm
- Pivot bolts: 10–12 Nm

**Step-by-Step Installation Procedure:**

1. **Pre-Installation Inspection**
   - Verify all components are present: damper body, mounting bracket, rod end, hardware kit
   - Inspect damper for any shipping damage or fluid leaks
   - Clean mounting surfaces on the steering head and handlebar clamp

2. **Mounting Bracket Installation**
   - Identify the correct mounting bracket for your motorcycle model
   - Position bracket at the steering head (below top triple clamp)
   - Hand-thread bracket bolts; do NOT torque yet
   - Ensure bracket is centered and level using a ruler

3. **Damper Body Positioning**
   - Mount damper body to bracket using provided hardware
   - Orient damper so adjustment knob faces rider (accessible position)
   - Hand-thread all bolts before torquing in sequence

4. **Rod End Connection**
   - Connect rod end to handlebar clamp attachment point
   - The rod end must be centered when handlebars are in the straight-ahead position
   - Use provided shims if gap exists between rod end and mount

5. **Stroke Centering (Critical Step)**
   - Turn handlebars to full left lock — measure damper extension
   - Turn handlebars to full right lock — measure damper extension
   - Adjust rod end position until both measurements are equal (±2mm tolerance)
   - This ensures damper is centered at neutral steering position

6. **Torque Sequence**
   - Start with bracket-to-frame bolts: 15–20 Nm with Loctite
   - Torque damper body clamp bolts: 12–15 Nm
   - Torque rod end bolt: 8–10 Nm
   - Final check: all fasteners tight, no movement in bracket

7. **Alignment Verification**
   - With handlebars straight, verify damper rod is horizontal (±5° tolerance)
   - Check for cable/hose clearance throughout full steering sweep
   - Verify no contact between damper and any fairings or components

8. **Damping Adjustment**
   - Start at middle setting (5 clicks from full soft on a 10-click adjuster)
   - Test ride at low speed first
   - Increase damping for high-speed stability; decrease for slow-speed maneuverability

9. **Test Ride Checklist**
   - Slow-speed figure-eight: steering must feel free, not stiff
   - Highway speeds: verify high-speed stability improvement
   - Full lock turns in parking lot: ensure no binding
   - Emergency stop: handlebar must not jerk or oscillate

**Important Safety Notes:**
- NEVER install with bolts hand-tight only — always torque to spec
- NEVER use steel bolts in aluminum threads without Loctite
- Re-check all bolts after first 50km of riding
- If the damper feels stiff at low speed, reduce damping setting

**Common Issues & Troubleshooting:**

*Issue: Handlebars feel heavy at low speed*
→ Reduce damping clicks to softer setting. Start at 3 clicks from full soft.

*Issue: Bolt does not fit mounting point*
→ Verify you have the correct model-specific bracket. Check bracket part number matches your motorcycle.

*Issue: Damper bottoms out on one side only*
→ Stroke centering is off. Re-center the rod end per Step 5. Difference should not exceed 2mm per side.

*Issue: Vibration/chatter still present after installation*
→ Increase damping setting by 2 clicks. Check all mounting bolts are torqued correctly.

*Issue: Missing parts or warranty claim*
→ Contact MaxRacing through the Hauer Imports warranty portal (accessible on the official site). Provide name, email, and order number. Approval takes 1–5 business days; replacements are shipped quickly. info@maxracing.us or +1 (727) 377-9546

*Issue: Torque value question for specific bolt size*
→ M6 bolts: 8–10 Nm | M8 bolts: 15–20 Nm | M10 bolts: 25–30 Nm (with Loctite 243)

**Disclaimer:**
Installation must be performed by a qualified motorcycle mechanic. Incorrect installation may compromise rider safety. MaxRacing is not responsible for damage resulting from improper installation. Always verify fitment compatibility before installation.

---

### MAX20 INSTALLATION

**Manual ID:** MR-SD-MAX20-001

**Product Compatibility:** MaxRacing Max20 hydraulic steering dampers.

(Note: See MAX10 section above for general installation steps, as procedure is similar but model-specific.)

---

### SEMIHANDLEBARS (CLIP-ONS) INSTALLATION

**Manual ID:** MR-SH-001

**Required Tools:**
- Allen key set (4mm, 5mm, 6mm)
- Torque wrench
- Anti-seize compound for aluminum threads

**Torque Specifications:**
- Clip-on clamp bolts: 18–22 Nm
- Control clamp bolts (brake, clutch): 5–7 Nm
- Handlebar end weight: 8–10 Nm

**Installation Steps:**

1. Remove OEM handlebars and all controls
2. Slide clip-ons onto fork tubes at desired angle
3. Position at preferred height and angle (typically 0–15° below horizontal)
4. Torque clamp bolts in cross pattern: 18–22 Nm
5. Re-install all controls, verify full throttle rotation
6. Check clearance from fairings throughout full steering sweep

---

### REARSET INSTALLATION

**Manual ID:** MR-RS-001

**Required Tools:**
- Allen key set (4mm, 5mm, 6mm, 8mm, 10mm)
- Torque wrench
- Thread-locking compound

**Torque Specifications:**
- Main mounting bolts: 22–25 Nm
- Footpeg pivot bolts: 12–15 Nm
- Brake lever pivot: 8–10 Nm

**Installation Steps:**

1. Remove OEM rearsets completely
2. Install MaxRacing mounting plates to frame mounting points
3. Attach rearset assembly to mounting plate
4. Connect brake and clutch linkages (model-specific)
5. Adjust footpeg height to rider preference (multiple positions available)
6. Verify brake light activates correctly

---

## RESPONSE FORMAT

Always respond using this structure:

**Product Identified:** [product name]
**Manual Used:** [manual ID]

**Installation Steps:**
1. [step]
2. [step]
...

**Required Tools:**
- [tool list]

**Torque Specifications:**
- [specifications]

**Important Notes:**
- [safety notes]

**Final Verification:**
- [checklist]

## RULES

1. NEVER fabricate torque values, procedures, or part names not found in the knowledge base above
2. If the answer is not in the database, respond: "This information is not available in the official installation manual. Please confirm the model or send a photo."
3. Be technical, precise, and professional
4. Never speculate about compatibility
5. Always reference the Manual ID when answering
6. Keep responses focused and actionable`;

export default function AIInstallationAssistant() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productModels, setProductModels] = useState<{ value: string; label: string }[]>(DEFAULT_PRODUCTS);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pendingImage, setPendingImage] = useState<{ base64: string; preview: string } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await supabase
          .from("products" as any)
          .select("name");
        setProductModels((data as any[]).map(p => ({
          value: p.name,
          label: p.name.replace("MaxRacing ", "").replace(" Steering Damper Rod", "")
        })));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "Image too large", description: "Please upload an image under 5MB.", variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1];
      setPendingImage({ base64, preview: result });
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const sendMessage = async (overrideContent?: string) => {
    const content = overrideContent ?? input.trim();
    if (!content || !selectedProduct) return;
    if (isLoading) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      imageBase64: pendingImage?.base64,
      imagePreview: pendingImage?.preview,
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setPendingImage(null);
    setIsLoading(true);

    const assistantId = crypto.randomUUID();
    setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }]);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const history = updatedMessages.slice(0, -1).map(m => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      }));

      const chat = model.startChat({
        history,
        systemInstruction: {
          role: "system",
          parts: [{ text: SYSTEM_PROMPT + `\nThe user has selected product: "${selectedProduct}". Tailor your responses to this specific product.` }]
        },
      });

      const promptParts: any[] = [content];
      if (pendingImage) {
        promptParts.push({
          inlineData: {
            data: pendingImage.base64,
            mimeType: "image/jpeg"
          }
        });
      }

      const result = await chat.sendMessageStream(promptParts);

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        if (chunkText) {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, content: m.content + chunkText } : m))
          );
        }
      }
    } catch (e: any) {
      console.error(e);
      toast({
        title: "Connection error",
        description: e.message || "Could not reach the assistant. Please try again.",
        variant: "destructive"
      });
      setMessages((prev) => prev.filter((m) => m.id !== assistantId));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearConversation = () => {
    setMessages([]);
    setPendingImage(null);
  };

  const chatReady = !!selectedProduct;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <Bot className="h-4 w-4 text-primary" />
              <span className="font-heading text-xs tracking-widest uppercase text-primary">AI Support</span>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              AI Installation Assistant
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
              Get step-by-step installation support based on official MaxRacing manuals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-3xl">

          {/* Section 1: Product Selection */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 rounded-xl border border-border/60 bg-card p-6"
          >
            <label className="mb-3 block font-heading text-sm tracking-widest uppercase text-muted-foreground">
              Step 1 — Select Your Product Model
              <span className="ml-1 text-primary">*</span>
            </label>
            <Select value={selectedProduct} onValueChange={setSelectedProduct}>
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Choose a product to enable the assistant…" />
              </SelectTrigger>
              <SelectContent>
                {productModels.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {!chatReady && (
              <p className="mt-2 flex items-center gap-1.5 font-body text-xs text-muted-foreground">
                <AlertCircle className="h-3.5 w-3.5" />
                Product selection required before starting the chat.
              </p>
            )}
          </motion.div>

          {/* Quick Actions */}
          <AnimatePresence>
            {chatReady && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6"
              >
                <p className="mb-3 font-heading text-xs tracking-widest uppercase text-muted-foreground">
                  Common Issues — Click to Ask
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {QUICK_ACTIONS.map(({ icon: Icon, label, prompt }) => (
                    <button
                      key={label}
                      onClick={() => sendMessage(prompt)}
                      disabled={isLoading}
                      className="flex flex-col items-center gap-2 rounded-lg border border-border/60 bg-card p-3 text-center transition-colors hover:border-primary/50 hover:bg-primary/5 disabled:opacity-50"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="font-body text-xs text-muted-foreground leading-tight">{label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Section 2: Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`rounded-xl border border-border/60 bg-card overflow-hidden transition-opacity ${!chatReady ? "opacity-40 pointer-events-none" : ""}`}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-border/50 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <span className="font-heading text-sm font-semibold tracking-wide text-foreground">
                  MaxRacing Assistant
                </span>
                {selectedProduct && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 font-body text-xs text-primary">
                    {productModels.find((p) => p.value === selectedProduct)?.label}
                  </span>
                )}
              </div>
              {messages.length > 0 && (
                <button
                  onClick={clearConversation}
                  className="flex items-center gap-1 font-body text-xs text-muted-foreground transition-colors hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Clear
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="flex h-[420px] flex-col overflow-y-auto p-5 space-y-4 scroll-smooth">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                  <Bot className="mb-3 h-10 w-10 opacity-30" />
                  <p className="font-heading text-sm tracking-wide">Ask me anything about installation</p>
                  <p className="mt-1 font-body text-xs opacity-60">
                    I'll reference only official MaxRacing manuals
                  </p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${msg.role === "user" ? "bg-primary/20" : "bg-primary/15"
                        }`}
                    >
                      {msg.role === "user" ? (
                        <User className="h-4 w-4 text-primary" />
                      ) : (
                        <Bot className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className={`max-w-[80%] space-y-2 ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                      {msg.imagePreview && (
                        <img
                          src={msg.imagePreview}
                          alt="Uploaded"
                          className="max-h-48 rounded-lg border border-border/50 object-contain"
                        />
                      )}
                      <div
                        className={`rounded-xl px-4 py-2.5 font-body text-sm leading-relaxed ${msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted/60 text-foreground"
                          }`}
                      >
                        {msg.content ? (
                          <pre className="whitespace-pre-wrap font-body text-sm">{msg.content}</pre>
                        ) : (
                          <span className="flex gap-1 items-center text-muted-foreground">
                            <span className="animate-pulse">●</span>
                            <span className="animate-pulse delay-150">●</span>
                            <span className="animate-pulse delay-300">●</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Image Preview */}
            {pendingImage && (
              <div className="border-t border-border/40 px-5 py-2">
                <div className="relative inline-block">
                  <img
                    src={pendingImage.preview}
                    alt="Pending upload"
                    className="h-16 rounded-lg border border-border/50 object-contain"
                  />
                  <button
                    onClick={() => setPendingImage(null)}
                    className="absolute -right-2 -top-2 rounded-full bg-destructive p-0.5 text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-border/50 p-4">
              <div className="flex items-end gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={!chatReady || isLoading}
                  className="shrink-0 rounded-lg border border-border/50 bg-background p-2.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-40"
                  title="Attach image"
                >
                  <Paperclip className="h-4 w-4" />
                </button>
                <Textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Describe your installation question…"
                  disabled={!chatReady || isLoading}
                  rows={1}
                  className="max-h-32 min-h-[42px] resize-none overflow-auto font-body text-sm"
                />
                <Button
                  onClick={() => sendMessage()}
                  disabled={!chatReady || isLoading || (!input.trim() && !pendingImage)}
                  size="sm"
                  className="shrink-0 h-[42px] w-[42px] p-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-2 font-body text-xs text-muted-foreground text-center">
                Powered by official MaxRacing manuals · Never speculates · Press Enter to send
              </p>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-center font-body text-xs text-muted-foreground/60"
          >
            This assistant references only official MaxRacing installation documentation. For complex cases, contact{" "}
            <a href="mailto:info@maxracing.us" className="underline hover:text-primary transition-colors">
              info@maxracing.us
            </a>
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
