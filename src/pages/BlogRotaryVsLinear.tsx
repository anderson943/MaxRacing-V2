import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Gauge, Settings, AlertTriangle, CheckCircle2, Info, ArrowLeft, Bike } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const BlogRotaryVsLinear = () => {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Rotary vs. Linear Steering Dampers for Motorcycles",
        "description": "How they’re built, how they work, and the real pros/cons of linear and rotary steering stabilizers.",
        "image": "/images/blog/rotary-vs-linear-hero.png",
        "author": {
            "@type": "Organization",
            "name": "MaxRacing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "MaxRacing",
            "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
            }
        },
        "datePublished": "2026-02-27",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://maxracing.us/blog/rotary-vs-linear"
        }
    };

    return (
        <Layout>
            <Helmet>
                <title>Rotary vs. Linear Steering Dampers | MaxRacing Blog</title>
                <meta name="description" content="A deep dive into the architectures of motorcycle steering stabilizers. Compare MaxRacing, GPR, Scotts rotary units with Ohlins, Hyperpro linear dampers." />
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            </Helmet>

            <article className="min-h-screen bg-background pb-20">
                {/* Navigation */}
                <div className="container pt-24 pb-8">
                    <Link to="/blog" className="group inline-flex items-center text-sm font-heading tracking-widest text-muted-foreground transition-colors hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        BACK TO BLOG
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="container mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="overflow-hidden rounded-2xl border border-border/30 bg-gradient-card shadow-2xl"
                    >
                        <div className="relative aspect-[21/9] w-full">
                            <img
                                src="/images/blog/rotary-vs-linear-hero.png"
                                alt="Rotary vs Linear Steering Dampers Comparison"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        </div>
                        <div className="p-8 md:p-12">
                            <div className="mb-6 flex flex-wrap gap-4">
                                <span className="rounded-full bg-primary/10 px-4 py-1 font-heading text-xs tracking-widest text-primary">TECHNICAL GUIDE</span>
                                <span className="font-heading text-xs tracking-widest text-muted-foreground uppercase">February 27, 2026</span>
                            </div>
                            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                                Rotary vs. Linear <br />
                                <span className="text-gradient-metallic">Steering Dampers</span>
                            </h1>
                            <p className="max-w-3xl font-body text-xl leading-relaxed text-muted-foreground">
                                How they’re built, how they work, and the real pros/cons. A side-by-side breakdown of the two main hydraulic architectures dominating motorcycle stability.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Introduction */}
                <section className="container mb-16 px-4 md:px-0">
                    <div className="mx-auto max-w-4xl font-body text-lg leading-relaxed text-muted-foreground">
                        <p className="mb-8">
                            Motorcycle steering dampers (steering stabilizers) come in two main hydraulic architectures:
                        </p>
                        <div className="mb-12 grid gap-6 md:grid-cols-2">
                            <div className="rounded-xl border border-border/30 bg-carbon p-6">
                                <h3 className="mb-2 font-heading text-lg text-primary">Linear ("Rod-Style")</h3>
                                <p className="text-sm">A piston slides through oil inside a cylinder, often mounted alongside the frame or across the triple clamp.</p>
                            </div>
                            <div className="rounded-xl border border-border/30 bg-carbon p-6">
                                <h3 className="mb-2 font-heading text-lg text-primary">Rotary</h3>
                                <p className="text-sm">Mounted on or near the steering stem, the unit forces oil through internal passages as it rotates around its axis.</p>
                            </div>
                        </div>
                        <p>
                            Both aim to reduce headshake/tank slappers and calm sudden bar movements, but they achieve it with different packaging, adjustment strategies, and service needs.
                        </p>
                    </div>
                </section>

                {/* Linear Dampers Section */}
                <section className="border-y border-border/30 bg-carbon py-20">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                                <Bike className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">1) Linear Dampers</h2>
                            <p className="mb-12 font-body text-lg text-muted-foreground">
                                Predominant on European sportbikes and premium road racers like <strong>Öhlins</strong> and <strong>Hyperpro</strong>.
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                            <div className="space-y-6">
                                <h3 className="font-heading text-xl text-primary">Structure & Mechanism</h3>
                                <p className="font-body text-muted-foreground">
                                    A linear damper behaves like a miniature shock absorber. It uses a <strong>piston and rod</strong> assembly that moves through a cylinder filled with high-viscosity oil.
                                </p>
                                <p className="font-body text-muted-foreground">
                                    Higher-end designs, such as those from Öhlins, feature a <strong>pressurized reservoir</strong> to manage oil volume changes caused by temperature spikes, ensuring consistent damping through the entire stroke.
                                </p>
                                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 italic text-sm">
                                    "The RSC Adds an 'extra progressive damping' response when things get violent (tank slappers / wobbling)." — Hyperpro
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-transparent p-8">
                                <h3 className="mb-6 font-heading text-xl text-foreground">Pros & Cons</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                        <div>
                                            <span className="font-bold text-foreground">Predictable Feel:</span>
                                            <p className="text-sm text-muted-foreground">Direct push/pull damping along a straight stroke.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                        <div>
                                            <span className="font-bold text-foreground">Versatile Strokes:</span>
                                            <p className="text-sm text-muted-foreground">Available in many lengths for specific geometries.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
                                        <div>
                                            <span className="font-bold text-foreground">Exposure Risk:</span>
                                            <p className="text-sm text-muted-foreground">Rods can be damaged by debris or in crashes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rotary Dampers Section */}
                <section className="py-24">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                                <Gauge className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">2) Rotary Stabilizers</h2>
                            <p className="mb-12 font-body text-lg text-muted-foreground">
                                The standard for many adventure, off-road, and high-performance street builds. Focuses on <strong>MaxRacing</strong>, <strong>GPR</strong>, and <strong>Scotts</strong>.
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
                            <div className="order-2 space-y-8 md:order-1">
                                <div className="rounded-2xl border border-border/30 bg-carbon p-8">
                                    <h3 className="mb-4 font-heading text-xl text-primary">Technical Edge: MaxRacing</h3>
                                    <p className="mb-4 font-body text-sm text-muted-foreground">
                                        MaxRacing uses a top-mount rotary ecosystem. Unlike linear rods, these units sit directly over the steering stem, making them compact and less prone to environmental damage.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2 text-sm text-foreground">
                                            <CheckCircle2 className="h-4 w-4 text-primary" /> 20-Click precision adjuster
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-foreground">
                                            <CheckCircle2 className="h-4 w-4 text-primary" /> Under-bar & Over-bar compatibility
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-foreground">
                                            <CheckCircle2 className="h-4 w-4 text-primary" /> 3-Year industry-leading warranty
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-heading text-xl text-foreground">Internal Logic</h3>
                                    <p className="font-body text-muted-foreground">
                                        Rotary units force oil through internal "sweep" passages. Large visible dials allow for <strong>on-the-fly adjustment</strong> while riding—a vital feature for changing track or road temperatures.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 flex flex-col justify-center md:order-2">
                                <h3 className="mb-6 font-heading text-xl text-foreground">The "Pros" Advantage</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                                        <div>
                                            <h4 className="font-heading text-lg text-foreground">Compact Packaging</h4>
                                            <p className="text-sm text-muted-foreground">No awkward rod clearance issues on naked or adventure bikes.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                                        <div>
                                            <h4 className="font-heading text-lg text-foreground">Deeper Tuning</h4>
                                            <p className="text-sm text-muted-foreground">Multi-circuit controls (like Scotts) or high-speed valves.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                                        <div>
                                            <h4 className="font-heading text-lg text-foreground">Durability</h4>
                                            <p className="text-sm text-muted-foreground">Brazilian engineering with USA distribution. Built for a lifetime of use.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Failure Modes Section */}
                <section className="bg-carbon py-20">
                    <div className="container px-4">
                        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">3) Where Things Go Wrong</h2>
                        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                            <div className="rounded-2xl border border-red-500/20 bg-background/50 p-8">
                                <h3 className="mb-4 flex items-center gap-2 font-heading text-xl text-red-500">
                                    <AlertTriangle className="h-5 w-5" /> Linear Failure
                                </h3>
                                <ul className="space-y-4 font-body text-sm text-muted-foreground">
                                    <li>• Seal leakage is common; Öhlins advises immediate stop if weeping occurs.</li>
                                    <li>• Oil aeration under extreme heat if not properly pressurized.</li>
                                    <li>• Rod pitting or bending from stone chips or minor slides.</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-amber-500/20 bg-background/50 p-8">
                                <h3 className="mb-4 flex items-center gap-2 font-heading text-xl text-amber-500">
                                    <AlertTriangle className="h-5 w-5" /> Rotary Failure
                                </h3>
                                <ul className="space-y-4 font-body text-sm text-muted-foreground">
                                    <li>• Oil degradation leads to internal wear; GPR recommends annual fluid changes.</li>
                                    <li>• Mounting alignment errors (tower pin centering) can cause bind.</li>
                                    <li>• Internal O-ring wear may lead to "weeping" around the adjuster dial.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MaxRacing Advantage */}
                <section className="py-24">
                    <div className="container">
                        <div className="rounded-3xl border border-primary/30 bg-gradient-card p-8 md:p-16">
                            <div className="mx-auto max-w-3xl text-center">
                                <h2 className="mb-8 font-heading text-4xl font-bold text-foreground">The MaxRacing Edge</h2>
                                <div className="mb-12 grid gap-8 md:grid-cols-2 text-left">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Shield className="h-6 w-6 text-primary" />
                                            <h4 className="font-heading text-lg text-foreground">3-Year Guarantee</h4>
                                        </div>
                                        <p className="text-muted-foreground text-sm">A transparent warranty with a US-based center and 1-5 day approval process.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Settings className="h-6 w-6 text-primary" />
                                            <h4 className="font-heading text-lg text-foreground">Competitive Precision</h4>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Brazilian engineered with high-viscosity hydraulic oil, delivering same or superior quality as the top European brands at a fraction of the cost.</p>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-primary/10 p-6 text-primary italic">
                                    "Customers report using MaxRacing daily for over 15 years without failure."
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decision Guide */}
                <section className="container pb-24">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/30">
                        <div className="bg-carbon p-8 text-center border-b border-border/30">
                            <h2 className="font-heading text-2xl font-bold">Quick Decision Guide</h2>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 border-b md:border-b-0 md:border-r border-border/30">
                                <h3 className="mb-4 font-heading text-xl font-bold text-primary italic">PICK ROTARY IF:</h3>
                                <ul className="space-y-3 font-body text-muted-foreground">
                                    <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> You want compact, stem-area layout.</li>
                                    <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> You need on-the-fly adjustment for track days.</li>
                                    <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> You ride adventure or naked bikes.</li>
                                    <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> High-speed hit control is your priority.</li>
                                </ul>
                            </div>
                            <div className="p-8">
                                <h3 className="mb-4 font-heading text-xl font-bold text-muted-foreground italic">PICK LINEAR IF:</h3>
                                <ul className="space-y-3 font-body text-muted-foreground">
                                    <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" /> You prefer traditional "stroke-based" damping.</li>
                                    <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" /> Your bike has a dedicated OE frame mount.</li>
                                    <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" /> You want a pressurized-reservoir system.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="container border-t border-border/30 pt-20 text-center">
                    <h2 className="mb-6 font-heading text-3xl font-bold">Stabilize Your Ride</h2>
                    <p className="mx-auto mb-10 max-w-md font-body text-muted-foreground">
                        Explore our model-specific kits and find the perfect Rotary stabilizer for your motorcycle.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row font-heading">
                        <Button asChild size="lg" className="shadow-accent">
                            <a href="https://hauerimports.com/" target="_blank" rel="noopener noreferrer">EXPLORE DAMPERS</a>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link to="/fitment-guide">CHECK COMPATIBILITY</Link>
                        </Button>
                    </div>
                </section>
            </article>
        </Layout>
    );
};

export default BlogRotaryVsLinear;
