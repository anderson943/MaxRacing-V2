import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Gauge, Cpu, Zap, AlertTriangle, CheckCircle2, ArrowLeft, Info, ChevronRight, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const BlogWhy7075 = () => {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Why 7075-T6 Aluminum Steering Damper Bodies Beat 6061-T6",
        "description": "A technical comparison of aluminum alloys used in steering stabilizers. Why MaxRacing chooses 7075-T6 for its flagship dampers.",
        "image": "/images/blog/why-7075-aluminum-hero.png",
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
            "@id": "https://maxracing.us/blog/why-7075-aluminum"
        }
    };

    return (
        <Layout>
            <Helmet>
                <title>Why 7075-T6 Aluminum? | MaxRacing Blog</title>
                <meta name="description" content="Technical deep dive: 7075-T6 vs 6061-T6 Aluminum in motorcycle steering dampers. Learn why material choice impacts long-term reliability and yield strength." />
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
                                src="/images/blog/why-7075-aluminum-hero.png"
                                alt="7075-T6 vs 6061-T6 Aluminum Comparison"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        </div>
                        <div className="p-8 md:p-12">
                            <div className="mb-6 flex flex-wrap gap-4">
                                <span className="rounded-full bg-primary/10 px-4 py-1 font-heading text-xs tracking-widest text-primary">MATERIAL SCIENCE</span>
                                <span className="font-heading text-xs tracking-widest text-muted-foreground uppercase">February 27, 2026</span>
                            </div>
                            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                Why Aerospace Grade 7075-T6 <br />
                                <span className="text-gradient-metallic">Beats Structural 6061-T6</span>
                            </h1>
                            <p className="max-w-3xl font-body text-xl leading-relaxed text-muted-foreground">
                                A steering stabilizer is only as good as the parts that keep it aligned. Explore why material choice impacts long-term reliability and yield strength.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Introduction */}
                <section className="container mb-16 px-4 md:px-0">
                    <div className="mx-auto max-w-4xl font-body text-lg leading-relaxed text-muted-foreground">
                        <p className="mb-8">
                            A steering stabilizer is only as good as the parts that keep it aligned: the body, clamp faces, threaded interfaces, and mounting hardware. While damping design matters, material choice can make or break long-term reliability—especially for components that live under vibration, repeated torque checks, and occasional installation mistakes.
                        </p>

                        <div className="mb-12 rounded-2xl border border-border/30 bg-carbon p-8">
                            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground italic">The Short Version</h2>
                            <ul className="grid gap-6 md:grid-cols-3">
                                <li className="space-y-2 border-l-2 border-primary pl-4 py-2">
                                    <h4 className="font-heading text-lg text-primary uppercase text-sm tracking-widest">Ultimate Strength</h4>
                                    <p className="text-sm">7075-T6 is dramatically stronger than 6061-T6, resisting permanent deformation.</p>
                                </li>
                                <li className="space-y-2 border-l-2 border-primary pl-4 py-2">
                                    <h4 className="font-heading text-lg text-primary uppercase text-sm tracking-widest">Precision Feel</h4>
                                    <p className="text-sm">Yield strength margins prevent clamp deformation and "bed-in" issues over time.</p>
                                </li>
                                <li className="space-y-2 border-l-2 border-primary pl-4 py-2">
                                    <h4 className="font-heading text-lg text-primary uppercase text-sm tracking-widest">Premium Finish</h4>
                                    <p className="text-sm">MaxRacing pairs 7075-T6 with racing-grade anodizing for superior corrosion resistance.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Technical Comparison Section */}
                <section className="border-y border-border/30 bg-carbon py-20">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center mb-16">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                                <BarChart3 className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">Aerospace 7075-T6 vs Structural 6061-T6</h2>
                            <p className="font-body text-lg text-muted-foreground">
                                What actually changes on a stabilizer body when the alloy is upgraded?
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
                            <div className="space-y-6">
                                <h3 className="font-heading text-2xl text-primary italic">1) Resistance to Deformation</h3>
                                <p className="font-body text-muted-foreground">
                                    The most important practical difference is <strong>yield strength</strong>—the point where metal stops springing back and starts deforming permanently. In steering damper hardware, that matters at clamp faces, bracket interfaces, and threaded bosses.
                                </p>
                                <div className="space-y-4 pt-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm uppercase tracking-widest font-heading">
                                            <span>6061-T6 (Yield)</span>
                                            <span className="text-muted-foreground">~240 MPa</span>
                                        </div>
                                        <div className="h-2 w-full bg-border/30 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: "45%" }} className="h-full bg-muted-foreground" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm uppercase tracking-widest font-heading text-primary">
                                            <span>7075-T6 (Yield)</span>
                                            <span>~505 MPa</span>
                                        </div>
                                        <div className="h-2 w-full bg-border/30 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} className="h-full bg-primary" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground italic flex items-center gap-2">
                                    <Info className="h-3 w-3" /> Source: Alliance Org & TheWorldMaterial.com
                                </p>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-transparent p-8 border border-border/20">
                                <h3 className="mb-6 font-heading text-2xl text-foreground italic">2) The Stiffness Reality</h3>
                                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                                    Many riders assume “stronger” means “much stiffer.” With these two alloys, stiffness (Elastic Modulus) is actually very close.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-sm text-foreground">
                                        <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                                        <span>6061-T6 Modulus: ~68.9 GPa</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-foreground">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span>7075-T6 Modulus: ~72 GPa</span>
                                    </li>
                                </ul>
                                <div className="mt-8 rounded-xl bg-background/50 p-6 border border-border/20">
                                    <p className="text-sm italic text-muted-foreground">
                                        <strong>Translation:</strong> 7075-T6 isn’t “twice as stiff,” but it is far more resistant to permanent deformation—preventing looseness, misalignment, and long-term mounting issues.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practical Impact Section */}
                <section className="py-24">
                    <div className="container">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">3) Threads, Fasteners, and Dealer Reality</h2>
                            <div className="grid gap-12 md:grid-cols-2 items-center">
                                <div className="space-y-6">
                                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                                        Dealers see the same failure patterns over and over: stripped threads, distorted clamp faces, and hardware that loosens after a few heat cycles.
                                    </p>
                                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                                        Higher yield strength helps protect threaded areas and clamp interfaces from over-torque and repeated re-torquing.
                                    </p>
                                    <div className="rounded-xl border-l-4 border-amber-500 bg-amber-500/5 p-6">
                                        <p className="text-sm text-foreground">
                                            <strong>Key Takeaway:</strong> 7075-T6 doesn’t just help in a crash scenario—it helps prevent “slow failures” that show up as play or inconsistent feel months later.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div className="rounded-xl border border-border/30 bg-card p-6 flex gap-4">
                                        <Shield className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h4 className="font-heading text-lg mb-1">Impact Resistance</h4>
                                            <p className="text-sm text-muted-foreground">Brackets maintain alignment even under curb strikes.</p>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-border/30 bg-card p-6 flex gap-4">
                                        <Cpu className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h4 className="font-heading text-lg mb-1">Thread Integrity</h4>
                                            <p className="text-sm text-muted-foreground">Deep aerospace threads avoid stripping during install.</p>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-border/30 bg-card p-6 flex gap-4">
                                        <Gauge className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h4 className="font-heading text-lg mb-1">Tolerance Stability</h4>
                                            <p className="text-sm text-muted-foreground">Internal oil circuits remain true to thousandths of an inch.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Corrosion Section */}
                <section className="bg-carbon py-20">
                    <div className="container max-w-4xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl font-bold text-foreground">But what about corrosion?</h2>
                        </div>
                        <div className="bg-background/50 rounded-2xl border border-border/20 p-8 md:p-12">
                            <p className="mb-6 font-body text-lg text-muted-foreground leading-relaxed">
                                7075-T6 is a high-strength alloy and can be more sensitive to corrosion than more general-purpose aluminum families depending on environment.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <p className="mb-6 font-body text-muted-foreground">
                                        That’s why <strong>coatings/anodizing quality matters</strong> for long-term durability. If your stabilizer lives through rain, road salt, or coastal air, look for high-quality anodizing and avoid harsh chemicals/solvents when cleaning.
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest">
                                        <div className="h-1 w-8 bg-primary" /> MaxRacing Protective Standards
                                    </div>
                                </div>
                                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-transparent p-6 border border-primary/20">
                                    <h4 className="font-heading text-lg text-foreground mb-4">Racing-Grade Finish</h4>
                                    <p className="text-sm text-muted-foreground italic mb-4">
                                        "MaxRacing uses specialized industrial anodizing designed for the humid and varied road conditions of Brazil."
                                    </p>
                                    <Link to="/faq" className="text-xs text-primary underline">Verify Specification</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MaxRacing Advantage Section */}
                <section className="py-24">
                    <div className="container">
                        <div className="rounded-3xl border border-primary/30 bg-gradient-card p-8 md:p-16">
                            <div className="mx-auto max-w-4xl">
                                <h2 className="mb-12 text-center font-heading text-4xl font-bold text-foreground">Where MaxRacing Fits In</h2>
                                <div className="grid gap-12 md:grid-cols-2">
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="font-heading text-xl text-primary flex items-center gap-2 mb-4">
                                                <Zap className="h-5 w-5" /> 7075-T6 Full Body
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                MaxRacing positions itself as a high-quality manufacturer. Unlike rotary units that rely on lower-grade billet, MaxRacing uses <strong>7075-T6 for the entire flagship damper body</strong>.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-xl text-primary flex items-center gap-2 mb-4">
                                                <CheckCircle2 className="h-5 w-5" /> 15 Years of Proven Durability
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                The clean, defensible evidence is in-market presence. Founded in 2010, MaxRacing has documented cases of long-term track use without failure or material fatigue.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="rounded-2xl bg-background/50 border border-border/30 p-8 text-center">
                                            <h4 className="font-heading text-xl mb-6 italic">The Bottom Line</h4>
                                            <p className="text-muted-foreground mb-8 text-lg">
                                                The 7075-T6 advantage is straightforward: <strong>far more strength margin</strong> at the exact places that cause real-world problems.
                                            </p>
                                            <Button asChild size="lg" className="shadow-accent w-full">
                                                <Link to="/blog/rotary-comparison">COMPARE MODELS</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="container border-t border-border/30 pt-20 text-center">
                    <h2 className="mb-6 font-heading text-3xl font-bold italic">Stabilize with Aerospace Grade Aluminium</h2>
                    <p className="mx-auto mb-10 max-w-md font-body text-muted-foreground">
                        Experience the difference that premium material science makes in your steering stability.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row font-heading">
                        <Button asChild variant="outline" size="lg">
                            <Link to="/fitment-guide">CHECK COMPATIBILITY</Link>
                        </Button>
                        <Button asChild size="lg">
                            <Link to="/shop">SHOP THE MAX SERIES</Link>
                        </Button>
                    </div>
                </section>
            </article>
        </Layout>
    );
};

export default BlogWhy7075;
