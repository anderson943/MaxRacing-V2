import { useState, useMemo, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Loader2 } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  description: string;
  items: FAQItem[];
}

const DEFAULT_FAQ_DATA: FAQCategory[] = [
  {
    title: "General Information",
    description: "Getting to know MaxRacing and our mission.",
    items: [
      { question: "What is MaxRacing?", answer: "Founded in 2010, MaxRacing delivers race-grade steering control designed for mid-range and sport motorcycles. We bridge the gap between expensive European brands and entry-level dampers." },
      { question: "What makes MaxRacing 'premium'?", answer: "Quality is in our DNA. We use premium Aluminium 7075-T6, precision hydraulic valving, and high-grade synthetic oil. Every unit is finished with specialized racing-grade anodizing and protective coatings for maximum durability. Every unit is rebuildable and backed by a 3-year warranty." },
      { question: "How does MaxRacing compare on materials to Öhlins, Hyperpro, Bitubo, GPR?", answer: "MaxRacing uses premium Aluminium 7075-T6, often surpassing the standard 6061 billet aluminum used by some competitors. We combine this high-grade alloy with advanced surface coatings to ensure superior strength and consistency." },
      { question: "How long can I expect a MaxRacing damper to last?", answer: "MaxRacing dampers are engineered for long-term durability. We have numerous reports from long-term customers who have been using the same equipment for more than 15 years. Routine maintenance is not required; contact support if leaking oil or loss of pressure. The unit will be replaced." },
      { question: "Are MaxRacing parts made locally or overseas?", answer: "MaxRacing components are engineered, produced and assembled in-house by our specialized team, ensuring that every damper meets our strict internal tolerances before it reaches your machine." },
      { question: "Does MaxRacing offer products other than steering dampers?", answer: "Yes. While steering dampers are our core expertise, we also engineer high-performance clip-ons (semihandlebars) and adjustable rearsets." },
      { question: "Does MaxRacing offer semihandlebars (clip-ons)?", answer: "Yes, we offer CNC-machined adjustable clip-ons designed for both track and street use, providing superior ergonomics and durability." },
    ]
  },
  {
    title: "Engineering & Technology",
    description: "Understanding the physics and mechanics of MaxRacing steering control.",
    items: [
      { question: "What is a steering damper and why do I need one?", answer: "A steering damper is a hydraulic device that resists sudden, uncontrolled handlebar movement. You need one to maintain stability over bumps, during hard acceleration, and to prevent dangerous speed wobbles." },
      { question: "What is a tank slapper and how does a steering damper prevent it?", answer: "A tank slapper is a violent oscillation of the handlebars. A hydraulic damper absorbs the energy of these sudden movements through precision valving, slowing the oscillation before it becomes uncontrollable." },
      { question: "How does the MaxRacing hydraulic damping system work internally?", answer: "It uses a speed-sensitive piston. At low speeds (turning), oil passes freely through large ports. At high speeds (impacts), the oil is forced through smaller calibrated orifices, creating resistance that stabilizes the front end." },
      { question: "What is progressive damping?", answer: "Unlike friction dampers which provide constant resistance, progressive hydraulic damping increases resistance exponentially as the speed of the handlebar movement increases." },
      { question: "Do I need a steering damper for street riding or only track use?", answer: "Both. While track use involves higher speeds, city streets often have potholes, ruts, and expansion joints that can trigger instability regardless of speed. A damper provides a safety net for both environments." },
    ]
  },
  {
    title: "Technical Specifications",
    description: "Detailed specs and materials used in our products.",
    items: [
      { question: "What materials are MaxRacing dampers made from?", answer: "The primary body and brackets are CNC-machined from premium Aluminium 7075-T6. Every unit features high-resistance racing-grade anodizing and protective coatings. The rods are hardened stainless steel for wear resistance and perfect seal seating." },
      { question: "How do I choose between MAX10 and MAX20?", answer: "Choose based on engine size. The MAX10 is tuned for motorcycles under 500cc (Ninja 400, R3, etc.). The MAX20 is designed for larger machines (MT-09, GSX-S1000, etc.) that require a broader damping range." },
      { question: "How many adjustment levels does a MaxRacing damper have?", answer: "MaxRacing offers two models: the MAX10 with 10 clicks of precision adjustment and the MAX20 with 20 clicks for broader tuning range." },
      { question: "What is the stroke range of MaxRacing dampers?", answer: "MaxRacing dampers are designed with a generous stroke range to accommodate a wide variety of machines. Specific stroke measurements are kit-dependent to ensure no bottoming out at full lock." },
      { question: "What colors are available for MaxRacing dampers?", answer: "We offer 7 primary colors: Black, Red, Blue, Gold, Green, Silver, and Orange." },
      { question: "Do colors affect performance or only aesthetics?", answer: "Colors are purely aesthetic. All dampers, regardless of color, feature the same internal race-grade hydraulic components." },
      { question: "Can I mix base and adjuster colors?", answer: "Yes. With 7 body colors and 7 adjuster colors, you can create up to 49 unique combinations to match your bike." },
      { question: "What type of seals does MaxRacing use?", answer: "We use high-performance oil seals designed for high-frequency oscillation and resistance to varied weather conditions." },
    ]
  },
  {
    title: "Fitment & Compatibility",
    description: "Find out if a MaxRacing damper fits your motorcycle.",
    items: [
      { question: "How do I know if a MaxRacing damper fits my motorcycle?", answer: "Use our Fitment Guide tool. It contains hundreds of confirmed applications by year, make, and model." },
      { question: "What types of mounting systems does MaxRacing offer?", answer: "We offer both Top-Mount kits (above the triple clamp) and various side-mount or frame-mount kits depending on your specific motorcycle geometry." },
      { question: "Do MaxRacing kits include everything I need?", answer: "Yes. Our bike-specific kits include the damper body, model-specific mounting brackets, and all necessary hardware for installation." },
      { question: "Can I use a MaxRacing damper on a custom build?", answer: "No, we do not offer universal kits. All MaxRacing steering dampers are designed with bike-specific mounting hardware to ensure perfect fitment and safety geometry." },
    ]
  },
  {
    title: "Installation",
    description: "Everything you need to know about installing your damper.",
    items: [
      { question: "Is the MaxRacing damper easy to install?", answer: "Most riders with basic mechanical experience and tools can install the kit in 30–60 minutes. We provide detailed guide instructions for every bike-specific kit." },
      { question: "Do I need to modify my motorcycle to install a MaxRacing damper?", answer: "Most kits are designed to be 'plug-and-play.' No drilling, cutting, or permanent modification is required; however, a few kits require plastic trimming. If plastic trimming is necessary, it is noted in the product description." },
      { question: "Where can I find detailed installation instructions?", answer: "Each kit includes high-resolution digital instructions. You can also view our general installation guide on the website." },
      { question: "What torque settings should I use for MaxRacing hardware?", answer: "Typically, 10Nm for M6 bolts and 22Nm for M8 bolts. Always refer to your specific kit instructions for exact torque values." },
    ]
  },
  {
    title: "Adjustment & Tuning",
    description: "Get the most out of your steering damper.",
    items: [
      { question: "How do I adjust the damping on my MaxRacing steering damper?", answer: "Simple. Turn the knurled dial on top of the damper. Clockwise increases resistance (stiffer); counter-clockwise decreases it (softer)." },
      { question: "What damping setting should I use for city riding vs. track riding?", answer: "For city riding, use settings 1–6 (low resistance). For track days or aggressive canyon riding, use settings 14–20 (high resistance)." },
      { question: "Can I adjust the damper while riding?", answer: "Yes, the adjuster is designed to be easily manipulated with gloves. However, we recommend adjusting your settings while stopped for maximum safety." },
      { question: "Does temperature affect damping performance?", answer: "As with all hydraulic systems, extreme temperature changes can slightly affect oil viscosity. MaxRacing uses high-grade synthetic oil to ensure consistent performance across a wide range of riding temperatures." },
    ]
  },
  {
    title: "Maintenance & Longevity",
    description: "Keep your damper performing at its best.",
    items: [
      { question: "Do MaxRacing dampers require maintenance?", answer: "Yes. To maintain peak performance, we recommend a basic service (oil and seal check) every 15,000–20,000 miles, or seasonally for track-only machines." },
      { question: "How long do MaxRacing dampers last?", answer: "Because they are rebuildable, a MaxRacing damper can last the lifetime of your motorcycle with proper care and regular service." },
      { question: "Can a MaxRacing damper be rebuilt or serviced?", answer: "Yes. Seals, oil, and internal components are all replaceable. We offer service kits or can perform the rebuild at our facility." },
      { question: "How should I clean my MaxRacing damper?", answer: "Use a clean rag and mild degreaser. Avoid high-pressure water near the seals and do not use harsh chemicals that can damage the anodized finish." },
    ]
  },
  {
    title: "Ordering & Dealer Program",
    description: "Information about purchasing and becoming a dealer.",
    items: [
      { question: "How can I purchase a MaxRacing steering damper?", answer: "You can purchase directly from maxracing.us or through our network of authorized motorcycle dealers and workshops." },
      { question: "Does MaxRacing offer wholesale or dealer pricing?", answer: "Yes. We have a robust Dealer Program with tiered wholesale pricing for businesses and workshops." },
      { question: "What are the benefits of becoming a MaxRacing dealer?", answer: "Benefits include aggressive margins, marketing assets, dedicated support, and global shipping support." },
      { question: "Does MaxRacing ship internationally?", answer: "Yes, we provide worldwide shipping with reliable logistics and full customs documentation." },
      { question: "Does MaxRacing offer drop shipping for dealers?", answer: "Yes, we offer direct dropshipping to your customers, allowing you to sell without the need to hold local inventory." },
    ]
  },
  {
    title: "Safety & Performance",
    description: "How our dampers keep you safer on the road and track.",
    items: [
      { question: "Will a steering damper make my motorcycle harder to steer?", answer: "No. At normal steering speeds, the damper is almost invisible. It only provides significant resistance during rapid, dangerous oscillations." },
      { question: "Can a steering damper save me from a crash?", answer: "While no device can guarantee safety, a damper significantly reduces the risk of crashes caused by tank slappers and front-end instability." },
      { question: "Is a steering damper required for track days?", answer: "Most racing organizations and track day providers highly recommend or require a steering damper for safety." },
      { question: "Does a MaxRacing damper affect low-speed handling?", answer: "No. Our hydraulic valving is designed to provide minimal resistance at low steering speeds, ensuring parking lot maneuvers remain effortless." },
    ]
  },
  {
    title: "Warranty & Support",
    description: "Our commitment to quality and customer satisfaction.",
    items: [
      { question: "Does MaxRacing offer a warranty on its products?", answer: "Yes. We provide a 3-Year Limited Warranty covering any defects in materials or workmanship from the date of purchase." },
      { question: "What is NOT covered by the warranty?", answer: "The warranty excludes damage from crashes, improper installation, racing use, misuse (like using handlebars as a lever), and normal cosmetic wear." },
      { question: "What if my damper develops a leak?", answer: "If the leak is due to a manufacturing defect within the warranty period, we will repair or replace the unit. Leaks caused by misuse are not covered." },
      { question: "Can I get a refund on a MaxRacing product?", answer: "Unopened items can be returned within 30 days. Opened products are eligible for warranty repair or replacement only." },
      { question: "How do I file a warranty claim?", answer: "The process is simple: internationally and in the USA, file through the official Hauer Imports warranty portal (accessible via our Contact or FAQ pages). Provide your name, email, and order number. Claims are typically approved in 1–5 business days, with replacements shipped out immediately after approval." },
      { question: "How do I contact MaxRacing for technical support?", answer: "You can reach us at info@maxracing.us or call our support line at +1 (727) 377-9546." },
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [faqData, setFaqData] = useState<FAQCategory[]>(DEFAULT_FAQ_DATA);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const { data: categories, error: catError } = await supabase
          .from("faq_categories")
          .select("id, title, description, display_order")
          .order("display_order");

        if (catError) throw catError;

        const { data: items, error: itemError } = await supabase
          .from("faqs")
          .select("category_id, question, answer, display_order")
          .order("display_order");

        if (itemError) throw itemError;

        const groupedData: FAQCategory[] = (categories || []).map((cat) => ({
          title: cat.title,
          description: cat.description || "",
          items: (items || [])
            .filter((item) => item.category_id === cat.id)
            .map((item) => ({
              question: item.question,
              answer: item.answer,
            })),
        }));

        if (groupedData.length > 0) {
          setFaqData(groupedData);
        }
      } catch (error: any) {
        console.error("Error fetching FAQs:", error);
        // Using fallback data, so we don't show a destructive toast error
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, [toast]);


  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return faqData;
    const q = searchQuery.toLowerCase();
    return faqData
      .map((cat) => ({
        ...cat,
        items: (cat.items || []).filter(
          (item) =>
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [searchQuery, faqData]);

  const totalQuestions = useMemo(() => (faqData || []).reduce((sum, cat) => sum + (cat.items?.length || 0), 0), [faqData]);

  // JSON-LD structured data for SEO
  const faqJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faqData || []).flatMap((cat) =>
      (cat.items || []).map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
    ),
  }), [faqData]);

  return (
    <Layout>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-heading text-xs tracking-widest text-primary">
              KNOWLEDGE BASE
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-6xl">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
              {totalQuestions} expert answers about MaxRacing steering dampers — engineering, installation, tuning, and more.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-xl"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-card py-3 pl-12 pr-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-background py-16 md:py-24">
        <div className="container max-w-4xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="mt-4 font-heading text-muted-foreground">Loading expert answers...</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-heading text-xl text-muted-foreground">
                No results found for "{searchQuery}"
              </p>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Try different keywords or browse all categories below.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 font-heading text-sm text-primary hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredData.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                className="mb-12"
              >
                <div className="mb-6">
                  <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-3 h-px w-16 bg-primary" />
                </div>

                <Accordion type="single" collapsible className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <AccordionItem
                      key={itemIdx}
                      value={`${catIdx}-${itemIdx}`}
                      className="rounded-lg border border-border/50 bg-card px-6 transition-colors data-[state=open]:border-primary/30 data-[state=open]:bg-card"
                    >
                      <AccordionTrigger className="font-heading text-base font-semibold tracking-wide text-foreground hover:text-primary hover:no-underline md:text-lg">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-body leading-relaxed text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-gradient-dark py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-muted-foreground">
            Our team is ready to help with fitment, installation, or technical support.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-heading text-sm font-medium tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </a>
            <a
              href="/fitment-guide"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 font-heading text-sm font-medium tracking-wider uppercase text-foreground transition-colors hover:bg-accent"
            >
              Fitment Guide
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
