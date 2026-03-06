import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Cog, Trophy, Users, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";

const iconMap: Record<string, any> = {
  Target,
  Cog,
  Trophy,
  Users,
};

const DEFAULT_ABOUT = {
  history: {
    title: "Built for Riders Who Demand More",
    content: "MaxRacing was founded on a simple belief: riders deserve race-grade steering control without the European premium price tag. Since 2010, we've focused on engineering dampers that provide high-end performance and precision fitment for a fraction of the cost."
  },
  philosophy: {
    title: "The Pursuit of Stability",
    content: "We believe that steering confidence is the foundation of riding enjoyment. Our goal is to provide every rider with predictable, high-performance damping that allows them to push their limits safely, whether on a daily commute or at a track day."
  }
};

const About = () => {
  const [values, setValues] = useState<any[]>([]);
  const [history, setHistory] = useState<any>(null);
  const [philosophy, setPhilosophy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // We'll use the values array for the main cards for now
        // But for this refactor, I'll just fetch from about_content
        const { data: contentData } = await supabase
          .from("about_content" as any)
          .select("*");

        if (contentData) {
          setHistory(contentData.find((c: any) => c.section_name === "history"));
          setPhilosophy(contentData.find((c: any) => c.section_name === "philosophy"));
        }

        // We can also have an 'about_values' table if we want to be 100% dynamic
        // For now I'll use the hardcoded values or create a quick table if needed
        // Let's assume the user wants the core text dynamic first.
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const staticValues = [
    { icon: Target, title: "Precision First", description: "Every decision — from material selection to tolerances — is driven by measurable performance outcomes." },
    { icon: Cog, title: "Engineering Over Marketing", description: "We'd rather show you a cross-section than a lifestyle photo. The product speaks for itself." },
    { icon: Trophy, title: "Race-Proven Design", description: "Our dampers are developed and tested in real riding conditions — track, street, and everything between." },
    { icon: Users, title: "Rider-Centric", description: "Built by riders, for riders. We understand what you need because we ride the same roads." },
  ];

  return (
    <Layout>
      <Helmet>
        <title>About MaxRacing | Engineering Race-Grade Steering Control</title>
        <meta name="description" content="Since 2010, MaxRacing has focused on engineering high-performance motorcycle steering dampers that provide race-grade control at a fraction of the cost." />
        <link rel="canonical" href="https://www.maxracing.us/about" />
      </Helmet>
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 max-w-2xl"
          >
            <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">OUR STORY</p>
            <h1 className="mb-6 font-heading text-5xl text-foreground md:text-6xl">
              {history?.title || DEFAULT_ABOUT.history.title}
            </h1>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              {history?.content || DEFAULT_ABOUT.history.content}
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-10">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            <>
              <div className="mb-24 grid gap-6 md:grid-cols-2">
                {staticValues.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-lg border border-border/30 bg-gradient-card p-8"
                  >
                    <v.icon className="mb-4 h-7 w-7 text-primary" strokeWidth={1.5} />
                    <h3 className="mb-2 font-heading text-xl text-foreground">{v.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{v.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-24 rounded-lg border border-primary/20 bg-gradient-card p-12"
              >
                <h2 className="mb-4 font-heading text-3xl text-foreground">
                  {philosophy?.title || DEFAULT_ABOUT.philosophy.title}
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {philosophy?.content || DEFAULT_ABOUT.philosophy.content}
                </p>
              </motion.div>
            </>
          )}

        </div>
      </section>
    </Layout>
  );
};

export default About;
