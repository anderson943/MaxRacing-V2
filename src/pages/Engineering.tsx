import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Droplets, Wrench, Layers, Gauge, Factory, RefreshCw, Loader2, Cog } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";

const iconMap: Record<string, any> = {
  Droplets,
  Wrench,
  Layers,
  Gauge,
  Factory,
  RefreshCw,
};

const DEFAULT_SECTIONS = [
  {
    icon: "Droplets",
    title: "How Hydraulic Damping Works",
    content: "A hydraulic steering damper uses oil forced through precision valving to resist sudden handlebar rotation. As the handlebars are deflected quickly — by a bump, road imperfection, or acceleration force — oil flows through calibrated orifices inside the damper body. The faster the deflection, the greater the resistance. Normal steering inputs pass through freely."
  },
  {
    icon: "Gauge",
    title: "Progressive Resistance",
    content: "Unlike friction-based dampers that apply constant drag, hydraulic dampers provide progressive resistance. Low-speed steering inputs (turning into a corner, navigating parking lots) feel natural and unrestricted. High-speed oscillations (tank slappers, headshake) meet exponentially increasing resistance — catching the danger before you feel it."
  },
  {
    icon: "Layers",
    title: "Friction vs. Hydraulic",
    content: "Cheap friction dampers apply constant drag to the steering — slowing every input equally. This deadens feel and increases rider fatigue. True hydraulic dampers are speed-sensitive: they only intervene when steering movement exceeds normal thresholds. The result is full feel during riding, full protection during emergencies."
  },
  {
    icon: "Factory",
    title: "Why CNC Machining Matters",
    content: "Every MaxRacing damper body is CNC-machined from premium Aluminium 7075-T6 — the same high-strength alloy used in aerospace and professional racing. Every unit is finished with specialized racing-grade anodizing and protective coatings to ensure maximum durability and consistent performance. CNC machining ensures tolerances within thousandths of an inch, creating consistent oil flow paths and perfect seal surfaces."
  },
  {
    icon: "Wrench",
    title: "20-Click Adjustability",
    content: "MaxRacing dampers feature a 20-position precision adjuster. Each click changes the oil flow rate through the damper's valving circuit. Low settings (1–6) for city and commuting — minimal resistance, full feel. Medium settings (7–13) for sport riding and spirited street use. High settings (14–20) for track days and aggressive canyon riding."
  },
  {
    icon: "RefreshCw",
    title: "Rebuildable by Design",
    content: "MaxRacing dampers are fully serviceable. Seals, oil, and internal components can be replaced — extending the damper's life indefinitely. Unlike sealed disposable units, a MaxRacing damper is an investment that can be maintained, rebuilt, and re-tuned for years of reliable service."
  }
];

const Engineering = () => {
  const [sections, setSections] = useState<any[]>(DEFAULT_SECTIONS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const { data } = await supabase
          .from("engineering_sections" as any)
          .select("*")
          .order("display_order");
        if (data && data.length > 0) {
          setSections(data as any[]);
        }
      } catch (error) {
        console.error("Error fetching engineering sections:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSections();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Engineering & Technology | MaxRacing Steering Dampers</title>
        <meta name="description" content="The science of motorcycle stability. Learn how MaxRacing hydraulic dampers use speed-sensitive valving and CNC 7075-T6 aluminum to eliminate headshake." />
        <link rel="canonical" href="https://www.maxracing.us/engineering" />
      </Helmet>
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 max-w-2xl"
          >
            <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">TECHNOLOGY</p>
            <h1 className="mb-6 font-heading text-5xl text-foreground md:text-6xl">
              Engineering That Earns Trust
            </h1>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              No marketing fluff. Here's how hydraulic steering damping actually works — and why MaxRacing builds it better.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {sections.map((section, i) => {
                const Icon = iconMap[section.icon] || Cog;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-lg border border-border/30 bg-gradient-card p-8"
                  >
                    <Icon className="mb-4 h-7 w-7 text-primary" strokeWidth={1.5} />
                    <h3 className="mb-3 font-heading text-xl text-foreground">{section.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {section.content}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Engineering;
