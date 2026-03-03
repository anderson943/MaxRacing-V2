import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Wrench, AlertTriangle, CheckCircle, Shield, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";

interface ToolItem {
  name: string;
}

interface TorqueItem {
  bolt_size: string;
  torque_nm: string;
  application: string;
}

interface GuideSectionData {
  id: string;
  label: string;
}

const DEFAULT_INSTALL_SECTIONS = [
  { id: "important-notice", label: "Important Notice" },
  { id: "required-tools", label: "Required Tools" },
  { id: "safety-instructions", label: "Safety Instructions" },
  { id: "torque-recommendations", label: "Torque Recommendations" },
  { id: "mounting-bracket", label: "Mounting Bracket" },
  { id: "installation-procedure", label: "Installation Procedure" },
  { id: "stroke-centering", label: "Stroke Centering" },
  { id: "alignment-check", label: "Alignment Check" },
  { id: "cable-clearance", label: "Cable & Clearance" },
  { id: "final-tightening", label: "Final Tightening" },
  { id: "test-ride", label: "Test Ride" },
];

const DEFAULT_TOOLS = [
  "4mm Hex Key",
  "5mm Hex Key",
  "6mm Hex Key",
  "10mm Socket / Wrench",
  "Thread-locking compound (Blue)",
  "Torque Wrench (Nm)",
  "Cleaning cloth & mild degreaser"
];

const DEFAULT_TORQUE: TorqueItem[] = [
  { bolt_size: "M6 Bolts", torque_nm: "10 Nm", application: "Brackets to frame / triple tree" },
  { bolt_size: "M8 Bolts", torque_nm: "22 Nm", application: "Main mounting points" },
  { bolt_size: "M10 Bolts", torque_nm: "35 Nm", application: "Heavy-duty frame mounts (if applicable)" },
  { bolt_size: "Damper Clamp Bolt", torque_nm: "8 Nm", application: "Clamp to damper body (Do not overtighten)" },
  { bolt_size: "Rod End Bolt", torque_nm: "12 Nm", application: "Rod end to steering bracket" },
];

const InstallationGuide = () => {
  const [activeSection, setActiveSection] = useState("important-notice");
  const [sections, setSections] = useState<GuideSectionData[]>(DEFAULT_INSTALL_SECTIONS);
  const [tools, setTools] = useState<string[]>(DEFAULT_TOOLS);
  const [torqueData, setTorqueData] = useState<TorqueItem[]>(DEFAULT_TORQUE);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch sections
        const { data: sectionsData, error: sectionsError } = await supabase
          .from("installation_sections")
          .select("slug, label, display_order")
          .order("display_order");

        if (sectionsError) {
          console.error("Sections error:", sectionsError);
        } else if (sectionsData && sectionsData.length > 0) {
          const formattedSections = (sectionsData as any[]).map(s => ({
            id: s.slug,
            label: s.label
          }));
          setSections(formattedSections);
        }

        // Fetch tools
        const { data: toolsData } = await supabase
          .from("installation_tools")
          .select("name, display_order")
          .order("display_order");

        if (toolsData && toolsData.length > 0) {
          setTools(toolsData.map(t => t.name));
        }

        // Fetch torque recommendations
        const { data: tData, error: torqueError } = await supabase
          .from("torque_recommendations")
          .select("bolt_size, torque_nm, application, display_order")
          .order("display_order");

        if (torqueError) {
          console.error("Torque error:", torqueError);
        } else if (tData && tData.length > 0) {
          setTorqueData((tData as any[]).map(t => ({
            bolt_size: t.bolt_size,
            torque_nm: t.torque_nm,
            application: t.application
          })));
        }
      } catch (error) {
        console.error("Error fetching installation data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location.hash]);

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0.1 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(24_95%_53%/0.08),transparent_70%)]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block font-heading text-sm tracking-widest text-primary uppercase">
              Technical Documentation
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              General Installation{" "}
              <span className="text-gradient-metallic">Guide</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-lg text-muted-foreground">
              MaxRacing Steering Dampers — Complete mounting and setup guidelines.
            </p>
            <Button
              className="mt-6 font-heading tracking-wider uppercase"
              onClick={() => window.print()}
            >
              <Download className="mr-2 h-4 w-4" /> Download / Print PDF
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="container py-16">
        <div className="flex gap-12">
          {/* Sticky sidebar — desktop only */}
          <aside className="hidden lg:block w-56 shrink-0">
            <nav className="sticky top-28 space-y-1">
              {loading ? (
                <div className="flex items-center gap-2 px-3 py-1.5 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Loading...</span>
                </div>
              ) : (
                sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`block w-full text-left px-3 py-1.5 rounded font-body text-sm transition-colors ${activeSection === id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {label}
                  </button>
                ))
              )}
            </nav>
          </aside>

          {/* Main content */}
          <div className="min-w-0 flex-1 max-w-3xl space-y-16">
            {/* Important Notice */}
            <GuideSection id="important-notice" icon={<AlertTriangle className="h-6 w-6 text-primary" />} title="Important Notice">
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
                <p className="font-body text-muted-foreground leading-relaxed">
                  This guide provides <strong className="text-foreground">general installation guidelines</strong> for MaxRacing hydraulic steering dampers. Every motorcycle model is different — bracket geometry, handlebar angle, and frame clearance will vary.
                </p>
                <p className="mt-3 font-body text-muted-foreground leading-relaxed">
                  Always refer to your <strong className="text-foreground">vehicle-specific kit instructions</strong> (if included) before proceeding. If you are unsure about any step, consult a qualified motorcycle technician.
                </p>
              </div>
            </GuideSection>

            {/* Required Tools */}
            <GuideSection id="required-tools" icon={<Wrench className="h-6 w-6 text-primary" />} title="Required Tools">
              <ul className="grid gap-2 sm:grid-cols-2">
                {loading ? (
                  <div className="col-span-2 flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    Loading tools...
                  </div>
                ) : (
                  tools.map((tool) => (
                    <li key={tool} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {tool}
                    </li>
                  ))
                )}
              </ul>
            </GuideSection>

            {/* Safety Instructions */}
            <GuideSection id="safety-instructions" icon={<Shield className="h-6 w-6 text-primary" />} title="Safety Instructions">
              <ol className="list-decimal list-inside space-y-3 font-body text-muted-foreground leading-relaxed">
                <li>Perform all work on a <strong className="text-foreground">stable motorcycle stand or lift</strong>. The front wheel must be off the ground and handlebars free to move.</li>
                <li>Disconnect the battery before working near electrical components.</li>
                <li>Never reuse deformed or damaged hardware.</li>
                <li>Always apply thread-locking compound to all bolts unless otherwise specified.</li>
                <li>After installation, perform a <strong className="text-foreground">full steering lock-to-lock check</strong> before riding.</li>
                <li>Wear appropriate personal protective equipment (gloves, eye protection).</li>
              </ol>
            </GuideSection>

            {/* Torque Recommendations */}
            <GuideSection id="torque-recommendations" title="General Torque Recommendations">
              <p className="mb-4 font-body text-muted-foreground">
                Below are general recommendations. Always prioritize vehicle-specific or kit-specific torque values when provided.
              </p>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-left font-body text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="px-4 py-3 font-heading text-xs tracking-widest text-metallic uppercase">Bolt Size</th>
                      <th className="px-4 py-3 font-heading text-xs tracking-widest text-metallic uppercase">Torque (Nm)</th>
                      <th className="px-4 py-3 font-heading text-xs tracking-widest text-metallic uppercase">Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {loading ? (
                      <tr>
                        <td colSpan={3} className="px-4 py-8 text-center">
                          <Loader2 className="mx-auto h-6 w-6 animate-spin text-primary" />
                        </td>
                      </tr>
                    ) : (
                      torqueData.map((t, idx) => (
                        <tr key={idx} className="border-b border-border/50 last:border-0">
                          <td className="px-4 py-3 font-medium text-foreground">{t.bolt_size}</td>
                          <td className="px-4 py-3 text-primary font-medium">{t.torque_nm}</td>
                          <td className="px-4 py-3">{t.application}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </GuideSection>

            {/* Mounting Bracket */}
            <GuideSection id="mounting-bracket" title="Mounting Bracket Positioning Logic">
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  The steering damper mounts between the <strong className="text-foreground">frame (or upper triple clamp)</strong> and the <strong className="text-foreground">handlebar / lower triple clamp</strong>. The damper body is typically fixed to the frame side, and the rod end connects to the steering side.
                </p>
                <div className="rounded-lg border border-border bg-card p-5 space-y-3">
                  <h4 className="font-heading text-sm tracking-widest text-metallic uppercase">Key Principles</h4>
                  <ul className="space-y-2">
                    {[
                      "The damper must be mounted as close to horizontal as possible.",
                      "At full steering lock (both directions), the damper must not bottom out or fully extend.",
                      "Ensure minimum 2–3mm clearance from all cables, hoses, and bodywork throughout the full steering range.",
                      "The mounting points must be rigid — no flex or vibration in the brackets.",
                      "Route the damper so that it does not interfere with rider movement or controls.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GuideSection>

            {/* Installation Procedure */}
            <GuideSection id="installation-procedure" title="Installation Procedure">
              <ol className="space-y-6 font-body text-muted-foreground leading-relaxed">
                {[
                  {
                    title: "Prepare the motorcycle",
                    desc: "Place the bike on a stand with the front wheel off the ground. Remove any bodywork or components that block access to mounting areas.",
                  },
                  {
                    title: "Identify mounting points",
                    desc: "Locate the frame-side and steering-side attachment points as indicated in your kit instructions. Clean all surfaces.",
                  },
                  {
                    title: "Install the frame-side bracket",
                    desc: "Attach the frame-side bracket using the supplied hardware. Hand-tighten only at this stage.",
                  },
                  {
                    title: "Install the steering-side bracket",
                    desc: "Mount the steering-side bracket to the triple clamp or handlebar mount. Hand-tighten only.",
                  },
                  {
                    title: "Attach the damper body",
                    desc: "Connect the damper body to the frame-side bracket. Insert the bolt and apply thread-locking compound. Hand-tighten.",
                  },
                  {
                    title: "Connect the rod end",
                    desc: "Extend or compress the damper to align with the steering-side bracket. Insert the rod end bolt with thread-locking compound. Hand-tighten.",
                  },
                  {
                    title: "Check full steering range",
                    desc: "Slowly turn the handlebars lock-to-lock in both directions. Verify the damper does not bottom out, fully extend, or contact any part of the motorcycle.",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-heading text-base text-foreground">{step.title}</h4>
                      <p className="mt-1">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </GuideSection>

            {/* Stroke Centering */}
            <GuideSection id="stroke-centering" title="Damper Stroke Centering Procedure">
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Proper stroke centering ensures the damper has equal travel in both directions from the straight-ahead position.
                </p>
                <ol className="list-decimal list-inside space-y-3">
                  <li>Point the handlebars straight ahead.</li>
                  <li>Measure the exposed damper rod length on each side of the damper body.</li>
                  <li>The rod should be at the <strong className="text-foreground">midpoint of its total stroke</strong> when the bars are centered.</li>
                  <li>If not centered, loosen the rod end bolt and adjust the rod end position by threading it in or out.</li>
                  <li>Re-check by turning lock-to-lock. The remaining stroke should be approximately equal in both directions.</li>
                </ol>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm">
                    <strong className="text-primary">Tip:</strong> A perfectly centered damper improves feel and prevents harsh stops at full lock.
                  </p>
                </div>
              </div>
            </GuideSection>

            {/* Alignment Check */}
            <GuideSection id="alignment-check" title="Alignment Check">
              <ul className="space-y-3 font-body text-muted-foreground leading-relaxed">
                {[
                  "The damper body must remain parallel (or near-parallel) to the ground throughout the steering range.",
                  "There should be no binding or resistance caused by misalignment.",
                  "If binding occurs, reposition the brackets slightly and re-check.",
                  "Ensure rod end bearings rotate freely without play or stiffness.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GuideSection>

            {/* Cable & Clearance */}
            <GuideSection id="cable-clearance" title="Cable & Clearance Check">
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>Before final tightening, perform a thorough clearance inspection:</p>
                <ul className="space-y-2">
                  {[
                    "Throttle cables — must move freely without contact with the damper.",
                    "Brake lines — check for pinching or rubbing at full lock.",
                    "Clutch cable — ensure no tension change when turning.",
                    "Wiring harness — no pulling or stretching.",
                    "Bodywork / fairings — verify nothing contacts the damper or brackets.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  Use zip ties to secure any loose cables away from moving components.
                </p>
              </div>
            </GuideSection>

            {/* Final Tightening */}
            <GuideSection id="final-tightening" title="Final Tightening">
              <ol className="list-decimal list-inside space-y-3 font-body text-muted-foreground leading-relaxed">
                <li>Once alignment and clearance are confirmed, torque all bolts to specification.</li>
                <li>Follow the torque values in the <button onClick={() => scrollTo("torque-recommendations")} className="text-primary hover:underline">Torque Recommendations</button> section or your kit-specific instructions.</li>
                <li>Apply thread-locking compound to all fasteners.</li>
                <li>Double-check that no bolts are missed.</li>
                <li>Perform one final lock-to-lock steering check after tightening.</li>
              </ol>
            </GuideSection>

            {/* Test Ride */}
            <GuideSection id="test-ride" icon={<CheckCircle className="h-6 w-6 text-primary" />} title="Test Ride Checklist">
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>Before your first ride, confirm the following:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Steering feels smooth with no binding",
                    "No unusual noises when turning",
                    "All bolts are torqued and thread-locked",
                    "Cables and hoses move freely",
                    "Damper does not bottom out at full lock",
                    "Damper adjustment (if applicable) is set to a baseline setting",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm">
                    <strong className="text-primary">Recommendation:</strong> Start with a short, low-speed ride in a safe area. Gradually increase speed and test the damper feel before riding in traffic.
                  </p>
                </div>
              </div>
            </GuideSection>

            {/* Warning */}
            <GuideSection id="warning" icon={<AlertTriangle className="h-6 w-6 text-destructive" />} title="Warning">
              <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 space-y-3 font-body text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Improper installation can result in loss of vehicle control, serious injury, or death.</strong>
                </p>
                <p>
                  If you are not confident in performing this installation, have the work done by a qualified motorcycle technician. MaxRacing is not responsible for damage or injury resulting from incorrect installation.
                </p>
                <p>
                  Do not ride the motorcycle if the damper shows signs of oil leakage, physical damage, or loosening hardware. Inspect the damper and all mounting hardware regularly.
                </p>
              </div>
            </GuideSection>

            {/* Disclaimer */}
            <GuideSection id="disclaimer" title="Disclaimer">
              <div className="rounded-lg border border-border bg-card p-6 font-body text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  This installation guide is provided for general reference purposes only. MaxRacing steering dampers are designed to fit specific motorcycle models using dedicated mounting kits. Always follow the instructions included with your specific kit.
                </p>
                <p>
                  MaxRacing assumes no liability for damage, injury, or death caused by improper installation, modification, or misuse of our products. By installing a MaxRacing product, you accept full responsibility for ensuring proper fitment, installation, and maintenance.
                </p>
                <p>
                  Modifying or tampering with the damper unit voids all warranties. For questions or technical support, contact us at{" "}
                  <a href="mailto:info@maxracing.us" className="text-primary hover:underline">
                    info@maxracing.us
                  </a>.
                </p>
              </div>
            </GuideSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

/* Reusable section wrapper */
const GuideSection = ({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4 }}
    className="scroll-mt-28"
  >
    <div className="mb-6 flex items-center gap-3">
      {icon}
      <h2 className="font-heading text-2xl font-bold md:text-3xl">{title}</h2>
    </div>
    <div className="border-l-2 border-primary/20 pl-6">{children}</div>
  </motion.section>
);

export default InstallationGuide;
