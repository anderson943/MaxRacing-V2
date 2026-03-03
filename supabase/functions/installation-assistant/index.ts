import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the official MaxRacing Installation Assistant — a precise, professional technical support AI for MaxRacing hydraulic steering dampers and CNC accessories.

## YOUR KNOWLEDGE BASE

You have access to the official MaxRacing installation manuals. Below is the complete technical knowledge base:

---

### MAXRACING STEERING DAMPER — UNIVERSAL INSTALLATION OVERVIEW

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

*Issue: Missing parts in kit*
→ Contact MaxRacing support: info@maxracing.us or +1 (727) 377-9546

*Issue: Torque value question for specific bolt size*
→ M6 bolts: 8–10 Nm | M8 bolts: 15–20 Nm | M10 bolts: 25–30 Nm (with Loctite 243)

**Disclaimer:**
Installation must be performed by a qualified motorcycle mechanic. Incorrect installation may compromise rider safety. MaxRacing is not responsible for damage resulting from improper installation. Always verify fitment compatibility before installation.

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

### REARSETS INSTALLATION

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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, productModel, imageBase64 } = await req.json();
    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured");
    }

    // Build messages array for the API
    const apiMessages: Array<{ role: string; content: string | Array<{ type: string; text?: string; image_url?: { url: string } }> }> = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    // Add context about selected product
    if (productModel) {
      apiMessages.push({
        role: "system",
        content: `The user has selected product: "${productModel}". Tailor your responses to this specific product.`,
      });
    }

    // Add conversation history
    for (const msg of messages) {
      if (msg.imageBase64 && msg.role === "user") {
        apiMessages.push({
          role: "user",
          content: [
            { type: "text", text: msg.content },
            {
              type: "image_url",
              image_url: { url: `data:image/jpeg;base64,${msg.imageBase64}` },
            },
          ],
        });
      } else {
        apiMessages.push({ role: msg.role, content: msg.content });
      }
    }

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: apiMessages,
          stream: true,
          max_tokens: 1500,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI usage limit reached. Please check your account credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(
        JSON.stringify({ error: "AI service error. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("installation-assistant error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
