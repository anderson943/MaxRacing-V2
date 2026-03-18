import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Gauge, Bike, DollarSign, Palette, ArrowRight, Loader2 } from "lucide-react";
import heroVideo from "@/assets/explore-dampers-hero.mp4";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const iconMap: Record<string, any> = {
  Bike,
  Shield,
  Gauge,
  DollarSign,
  Palette,
};

const DEFAULT_COMPARISON_ROWS = [
  { category: "Target Bike Size", icon: "Bike", max10_value: "Smaller / lower cc (below ~500 cc)", max20_value: "Larger / higher cc motorcycles" },
  { category: "Fitment Range", icon: "Shield", max10_value: "Street sports & smaller models (Ninja 400, R3, etc.)", max20_value: "Broad range of bigger bikes (MT-09, GSX-S1000, etc.)" },
  { category: "Adjustability", icon: "Gauge", max10_value: "10 clicks of precision adjustment", max20_value: "20 clicks of precision adjustment" },
  { category: "Price (US Retail)", icon: "DollarSign", max10_value: "~$259.99 USD", max20_value: "~$379.99 USD" },
  { category: "Warranty", icon: "Shield", max10_value: "3 Years", max20_value: "3 Years" },
];

const DEFAULT_COLOR_OPTIONS = [
  { name: "Black", gradient: "radial-gradient(ellipse at 30% 30%, hsl(0 0% 30%), hsl(0 0% 8%) 70%)" },
  { name: "Red", gradient: "radial-gradient(ellipse at 30% 30%, hsl(0 80% 65%), hsl(0 85% 35%) 70%)" },
  { name: "Blue", gradient: "radial-gradient(ellipse at 30% 30%, hsl(220 90% 70%), hsl(220 90% 35%) 70%)" },
  { name: "Golden", gradient: "radial-gradient(ellipse at 30% 30%, hsl(45 95% 75%), hsl(40 85% 40%) 70%)" },
  { name: "Green", gradient: "radial-gradient(ellipse at 30% 30%, hsl(145 60% 55%), hsl(145 70% 25%) 70%)" },
  { name: "Grey", gradient: "radial-gradient(ellipse at 30% 30%, hsl(0 0% 30%), hsl(0 0% 55%) 70%)" },
  { name: "Orange", gradient: "radial-gradient(ellipse at 30% 30%, hsl(30 95% 65%), hsl(20 90% 38%) 70%)" },
];

const ExploreDampers = () => {
  const [comparisonRows, setComparisonRows] = useState<any[]>(DEFAULT_COMPARISON_ROWS);
  const [colorOptions, setColorOptions] = useState<any[]>(DEFAULT_COLOR_OPTIONS);
  const [selectedBody, setSelectedBody] = useState("Black");
  const [selectedAdjuster, setSelectedAdjuster] = useState("Black");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: compData } = await supabase
          .from("product_internal_comparisons" as any)
          .select("*")
          .order("display_order");

        const { data: colorData } = await supabase
          .from("product_colors" as any)
          .select("*")
          .order("display_order");

        if (compData && compData.length > 0) {
          const merged = (compData as any[]).map(dbRow => {
            const localRow = DEFAULT_COMPARISON_ROWS.find(r => r.category === dbRow.category);
            return localRow ? { ...dbRow, ...localRow } : dbRow;
          });
          setComparisonRows(merged);
        }
        if (colorData && colorData.length > 0) setColorOptions((colorData as any[]).map(c => ({ name: c.name, gradient: c.color_code })));
      } catch (error) {
        console.error("Error fetching explore data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {/* Hero with video background */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 font-heading text-sm tracking-[0.3em] text-primary"
            >
              CHOOSE YOUR DAMPER
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 font-heading text-5xl font-bold leading-[1.1] text-foreground md:text-7xl"
            >
              Max10 vs Max20 —{" "}
              <span className="text-gradient-metallic">Which one fits your ride?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-10 max-w-lg font-body text-lg leading-relaxed text-muted-foreground"
            >
              Same race-grade technology. Tuned for different machines. Find the perfect match for your motorcycle.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button asChild size="lg" className="font-heading text-base tracking-wider uppercase shadow-accent">
                <Link to="/fitment-guide">Find Your Bike <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Core shared features */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">WHAT THEY SHARE</p>
            <h2 className="mb-4 font-heading text-4xl text-foreground md:text-5xl">Same DNA. Different Missions.</h2>
            <p className="mx-auto max-w-xl font-body text-muted-foreground">
              Both the Max10 and Max20 are hydraulic steering dampers built for stability and control.
              CNC-machined, rebuildable, and backed by a 3-year warranty.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
            {[
              { label: "Hydraulic Damping", desc: "Precision oil valving resists sudden movement" },
              { label: "CNC Billet Body", desc: "Machined aluminum for strength & precision" },
              { label: "Plug-and-Play", desc: "Bike-specific mounts, no modifications needed" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-border/30 bg-gradient-card p-6 text-center"
              >
                <h3 className="mb-2 font-heading text-lg text-primary">{item.label}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-border/30 bg-carbon py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">HEAD TO HEAD</p>
            <h2 className="mb-4 font-heading text-4xl text-foreground md:text-5xl">Max10 vs Max20</h2>
            <p className="mx-auto max-w-xl font-body text-muted-foreground">
              The key difference? Engine size. Max10 is tuned for bikes under 500 cc. Max20 is built for bigger machines that demand more damping range.
            </p>
          </motion.div>

          {/* Comparison table */}
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border/30"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/30 bg-gradient-card">
                    <th className="px-6 py-4 text-left font-heading text-sm tracking-widest text-muted-foreground" />
                    <th className="px-6 py-4 text-left font-heading text-lg tracking-widest text-primary">MAX10</th>
                    <th className="px-6 py-4 text-left font-heading text-lg tracking-widest text-primary">MAX20</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => {
                    const Icon = iconMap[row.icon] || Shield;
                    return (
                      <tr key={row.category} className="border-b border-border/20 last:border-b-0">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <Icon className="h-6 w-6 text-primary" />
                            <span className="font-heading text-base font-bold tracking-wider text-foreground">{row.category}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 font-body text-sm text-muted-foreground">{row.max10_value}</td>
                        <td className="px-6 py-5 font-body text-sm text-muted-foreground">{row.max20_value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </section>

      {/* 49 Color Configurator */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">BUILD YOUR OWN</p>
            <h2 className="mb-4 font-heading text-4xl text-foreground md:text-5xl">
              Interactive 3D Configurator
            </h2>
            <p className="mx-auto max-w-xl font-body text-muted-foreground">
              7 body colors × 7 adjuster colors = 49 combinations. Select your preferred style below to instantly preview your exact damper.
            </p>
          </motion.div>

          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* 3D Showcase Window */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center rounded-2xl border border-border/40 bg-gradient-card overflow-hidden h-[400px] md:h-[600px] shadow-2xl relative"
            >
              <div className="absolute top-4 left-4 z-10 font-heading text-xs tracking-widest text-muted-foreground uppercase">
                {selectedBody} Body / {selectedAdjuster} Adjuster
              </div>
              <img 
                key={`${selectedBody}-${selectedAdjuster}`}
                src={`/dampers/${selectedBody.toLowerCase()}-${selectedAdjuster.toLowerCase()}.jpg`} 
                alt={`${selectedBody} Damper with ${selectedAdjuster} Adjuster`}
                className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
              />
            </motion.div>

            {/* Selection UI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              {/* BODY SELECTION */}
              <div>
                <h3 className="mb-4 font-heading text-2xl text-foreground">1. Select Body Color</h3>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-7">
                  {colorOptions.map((color) => (
                    <button
                      key={`body-${color.name}`}
                      onClick={() => setSelectedBody(color.name)}
                      className={`group flex flex-col items-center gap-2 transition-transform ${selectedBody === color.name ? 'scale-110' : 'hover:scale-105'}`}
                    >
                      <div
                        className={`h-12 w-12 md:h-14 md:w-14 rounded-full border-2 shadow-lg transition-all ${
                          selectedBody === color.name ? 'border-primary ring-4 ring-primary/20 scale-110' : 'border-border/40 group-hover:border-primary/50'
                        }`}
                        style={{ background: color.gradient }}
                      />
                      <span className={`font-heading text-[10px] md:text-xs tracking-wider uppercase transition-colors ${selectedBody === color.name ? 'text-primary' : 'text-muted-foreground'}`}>
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* ADJUSTER SELECTION */}
              <div>
                <h3 className="mb-4 font-heading text-2xl text-foreground">2. Select Adjuster Color</h3>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-7">
                  {colorOptions.map((color) => (
                    <button
                      key={`adjuster-${color.name}`}
                      onClick={() => setSelectedAdjuster(color.name)}
                      className={`group flex flex-col items-center gap-2 transition-transform ${selectedAdjuster === color.name ? 'scale-110' : 'hover:scale-105'}`}
                    >
                      <div
                        className={`h-10 w-10 md:h-12 md:w-12 rounded-full border-2 shadow-inner transition-all ${
                          selectedAdjuster === color.name ? 'border-primary ring-4 ring-primary/20 scale-110' : 'border-border/40 group-hover:border-primary/50'
                        }`}
                        style={{ background: color.gradient }}
                      />
                      <span className={`font-heading text-[10px] md:text-xs tracking-wider uppercase transition-colors ${selectedAdjuster === color.name ? 'text-primary' : 'text-muted-foreground'}`}>
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
                 <p className="font-heading text-3xl text-primary md:text-5xl">49 Combinations</p>
                 <p className="mt-2 font-body text-sm text-muted-foreground">Every color combination shown is instantly available on both the Max10 and Max20 models to seamlessly match your motorcycle.</p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/30 bg-carbon py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-heading text-3xl text-foreground md:text-4xl">Ready to Choose?</h2>
            <p className="mx-auto mb-8 max-w-md font-body text-muted-foreground">
              Select your motorcycle and we'll show you the right damper — Max10 or Max20 — with the perfect fitment.
            </p>
            <Button asChild size="lg" className="font-heading text-base tracking-wider uppercase shadow-accent">
              <Link to="/fitment-guide">Find Your Bike <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ExploreDampers;
