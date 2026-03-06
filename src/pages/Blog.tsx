import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const placeholderPosts = [
  {
    title: "MaxRacing vs GPR vs Scotts Steering Stabilizers (Rotary)",
    category: "Tech",
    date: "February 2026",
    excerpt: "A technical side-by-side comparison of rotary steering stabilizers. Comparing price, warranty, materials, and maintenance.",
    slug: "/blog/rotary-comparison",
    image: "/images/blog/rotary-comparison-hero.png"
  },
  {
    title: "Why 7075-T6 Aluminum? Strength vs. Weight Comparison",
    category: "Tech",
    date: "February 2026",
    excerpt: "Why material choice makes or breaks long-term reliability. A technical look at 7075-T6 vs 6061-T6 alloys.",
    slug: "/blog/why-7075-aluminum",
    image: "/images/blog/why-7075-aluminum-hero.png"
  },
  {
    title: "Rotary vs. Linear: Which Steering Damper is Right for You?",
    category: "Tech",
    date: "February 2026",
    excerpt: "Explore the pros and cons of rotary and linear steering dampers to find the best fit for your riding style and motorcycle.",
    slug: "/blog/rotary-vs-linear",
    image: "/images/blog/rotary-vs-linear-hero.png"
  },
  {
    title: "Steering Stabilizer Warranty Comparison",
    category: "Support",
    date: "February 2026",
    excerpt: "A deep dive into steering stabilizer warranties. Comparing MaxRacing, Öhlins, Hyperpro, GPR, and Scotts.",
    slug: "/blog/warranty-comparison",
    image: "/images/blog/warranty-comparison-hero-v3.jpg"
  },
  {
    title: "Track Day Damper Setup Guide",
    category: "Tech",
    date: "February 2026",
    excerpt: "How to dial in your MaxRacing damper for different track conditions and riding styles.",
    slug: "/blog/track-day-setup",
    image: "/images/blog/track-day-setup-hero.png"
  },
  {
    title: "Understanding Progressive Damping",
    category: "Tech",
    date: "February 2026",
    excerpt: "A deep dive into how hydraulic steering dampers use oil flow to create speed-sensitive resistance.",
    slug: "/blog/progressive-damping",
    image: "/images/blog/progressive-damping-hero-v3.png"
  },
  {
    title: "Handlebar Wobble vs. Weave: What's the Difference?",
    category: "Tech",
    date: "July 2025",
    excerpt: "Learn the difference between handlebar wobble, weave, and tank slapper—plus a step-by-step diagnosis.",
    slug: "/blog/wobble-vs-weave",
    image: "/images/blog/wobble-vs-weave-hero.png"
  },
  {
    title: "What Causes Handlebar Shaking?",
    category: "Tech",
    date: "July 2025",
    excerpt: "Learn why motorcycle handlebars shake and how a MaxRacing steering damper stabilizes your bike.",
    slug: "/blog/handlebar-shaking",
    image: "/images/blog/handlebar-shaking-hero.webp"
  },
];

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>MaxRacing Blog | Technical Guides & Motorcycle Stability</title>
        <meta name="description" content="Expert insights on motorcycle stability, steering damper technology, and track day setup. Read official technical guides from MaxRacing engineering." />
        <link rel="canonical" href="https://www.maxracing.us/blog" />
      </Helmet>
      <div className="min-h-screen bg-background pt-24 pb-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight md:text-6xl">
              MaxRacing <span className="text-primary italic">Blog</span>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
              Technical guides, race insights, and everything you need to know about steering stability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {placeholderPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
              >
                <Link to={post.slug}>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-primary/90 px-3 py-1 font-heading text-[10px] tracking-widest text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground font-heading">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1 uppercase tracking-widest text-[9px]">
                        <User className="h-3 w-3" />
                        MaxRacing
                      </div>
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-bold leading-tight transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 font-body text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 font-heading text-xs tracking-widest text-primary group-hover:underline">
                      READ ARTICLE <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-8 md:p-12 text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold">Have a technical question?</h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-muted-foreground">
              Our engineering team is constantly developing new guides. Use our AI Installation Assistant for immediate help or contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="shadow-accent">
                <Link to="/support/ai-installation-assistant">AI ASSISTANT</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">CONTACT US</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
