import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, ExternalLink, ShieldCheck, AlertCircle, Info, BarChart3, CheckCircle2, Paintbrush, LifeBuoy } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "MaxRacing vs GPR vs Scotts Steering Stabilizers (Rotary): Price, Warranty, Colors, Maintenance & Common Failures",
    "image": "/images/blog/rotary-comparison-hero.png",
    "author": { "@type": "Organization", "name": "MaxRacing" },
    "publisher": { "@type": "Organization", "name": "MaxRacing" },
    "datePublished": "2026-02-27",
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <h2 className="mb-6 mt-16 font-heading text-2xl text-foreground md:text-3xl italic">{children}</h2>
);

const SourceLink = ({ href, label }: { href: string; label: string }) => (
    <div className="mt-2 mb-6 inline-flex items-center gap-1.5 font-body text-xs text-primary/70">
        <Info className="h-3 w-3" />
        <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-primary">
            {label}
        </a>
    </div>
);

const BlogRotaryComparison = () => {
    return (
        <Layout>
            <Helmet>
                <title>MaxRacing vs GPR vs Scotts Rotary Comparison | MaxRacing</title>
                <meta
                    name="description"
                    content="A technical side-by-side comparison of rotary steering stabilizers. MaxRacing vs GPR vs Scotts on price, warranty, materials, colors, and maintenance."
                />
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            </Helmet>

            {/* Hero */}
            <section className="relative overflow-hidden bg-carbon pb-20">
                <div className="container pt-24 pb-8">
                    <Link to="/blog" className="group inline-flex items-center text-sm font-heading tracking-widest text-muted-foreground transition-colors hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        BACK TO BLOG
                    </Link>
                </div>

                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="overflow-hidden rounded-2xl border border-border/30 bg-gradient-card shadow-2xl"
                    >
                        <div className="p-8 md:p-12">
                            <div className="mb-6 flex flex-wrap gap-4">
                                <span className="rounded-full bg-primary/10 px-4 py-1 font-heading text-xs tracking-widest text-primary">TECHNICAL COMPARISON</span>
                                <span className="font-heading text-xs tracking-widest text-muted-foreground uppercase">February 27, 2026</span>
                            </div>
                            <h1 className="mb-6 font-heading text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                MaxRacing vs GPR vs Scotts <br />
                                <span className="text-gradient-metallic">Rotary Stabilizer Comparison</span>
                            </h1>
                            <p className="max-w-3xl font-body text-xl leading-relaxed text-muted-foreground">
                                If you’re choosing a <strong>rotary steering stabilizer</strong>, the real difference isn’t “does it work?”—all three can reduce headshake. The real difference is <strong>ownership</strong>: cost, materials, warranty, maintenance, and common failures.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <article className="pb-24">
                <div className="container max-w-4xl">
                    <div className="font-body text-lg leading-relaxed text-muted-foreground mb-16">
                        <p className="mb-8">
                            This is a <strong>side-by-side, source-linked comparison</strong> of <strong>MaxRacing</strong>, <strong>GPR</strong>, and <strong>Scotts</strong> using only published statements.
                        </p>
                    </div>

                    <SectionHeading>Quick side-by-side table</SectionHeading>
                    <div className="mb-16 overflow-x-auto rounded-xl border border-border/30 shadow-lg">
                        <table className="w-full font-body text-sm min-w-[900px]">
                            <thead>
                                <tr className="border-b border-border/30 bg-secondary/50 uppercase tracking-widest text-[10px] font-heading">
                                    <th className="px-6 py-4 text-left">Category</th>
                                    <th className="px-6 py-4 text-left">MaxRacing</th>
                                    <th className="px-6 py-4 text-left">GPR</th>
                                    <th className="px-6 py-4 text-left">Scotts</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground divide-y divide-border/20">
                                <tr>
                                    <td className="px-6 py-5 font-bold text-foreground">Price (Complete Kit)</td>
                                    <td className="px-6 py-5">
                                        ~$379.99<br />
                                        <SourceLink href="https://hauerimports.com/products/maxracing-max20-steering-damper-husaberg-fe-450" label="Hauer Product Page" />
                                    </td>
                                    <td className="px-6 py-5">
                                        ~$522.50–$755.25<br />
                                        <SourceLink href="https://www.baysideperformance.com/gpr-stabilizers" label="Bayside GPR Pricing" />
                                    </td>
                                    <td className="px-6 py-5">
                                        $472–$774+<br />
                                        <SourceLink href="https://www.scottsonline.com/ShopYourBike_Products.php?Bike_ID=4655&PartType=222" label="Scotts Price List" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 font-bold text-foreground">Material Specs</td>
                                    <td className="px-6 py-5">
                                        Alloy 7075-T6<br />
                                        <SourceLink href="https://hauerimports.com/pages/maxracing-faqs" label="Hauer MaxRacing FAQs" />
                                    </td>
                                    <td className="px-6 py-5">
                                        6061-T6 Aluminum & Steel<br />
                                        <SourceLink href="https://www.gprstabilizer.com/products/gpr-v5d-dirt-bike-stabilizer-kits/" label="GPR Product Specs" />
                                    </td>
                                    <td className="px-6 py-5">
                                        Billet Aluminum (varies by kit)<br />
                                        <SourceLink href="https://www.scottsonline.com/ShopYourBike_Products.php?Bike_ID=4655&PartType=222" label="Scotts Kit Details" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 font-bold text-foreground">Warranty</td>
                                    <td className="px-6 py-5">
                                        3 Years (Manufacturing)<br />
                                        <SourceLink href="https://hauerimports.com/pages/maxracing-faqs" label="Hauer MaxRacing FAQs" />
                                    </td>
                                    <td className="px-6 py-5">
                                        90 Days (Repair/Replace)<br />
                                        <SourceLink href="https://www.gprstabilizer.com/support/faqs/" label="GPR FAQs" />
                                    </td>
                                    <td className="px-6 py-5">
                                        Limited (Third-party warning)<br />
                                        <SourceLink href="https://www.scottsonline.com/ThirdPartyWarning.php" label="Scotts Warning" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 font-bold text-foreground">Colors</td>
                                    <td className="px-6 py-5">
                                        49 combinations<br />
                                        <SourceLink href="https://hauerimports.com/products/maxracing-max20-steering-damper-husaberg-fe-450" label="Hauer Color Variants" />
                                    </td>
                                    <td className="px-6 py-5">
                                        Black, Red, Blue, Gold, Orange (request)<br />
                                        <SourceLink href="https://www.gprstabilizer.com/products/gpr-v5s-street-bike-stabilizer-kits/" label="GPR Colors" />
                                    </td>
                                    <td className="px-6 py-5">
                                        Only available in Gold<br />
                                        <SourceLink href="https://www.scottsonline.com/faq.php" label="Scotts FAQ" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 font-bold text-foreground">Architecture / Form Factor</td>
                                    <td className="px-6 py-5">
                                        Handlebar-mounted rotary stabilizer with bike-specific brackets; under-/over-bar mounting affects clearance/fitment.<br />
                                        <SourceLink href="https://hauerimports.com/pages/maxracing-faqs" label="Hauer FAQs" />
                                    </td>
                                    <td className="px-6 py-5">
                                        Rotary steering stabilizer (V-series kits), typically stem/handlebar-area mounted with model-specific hardware.<br />
                                        <SourceLink href="https://www.gprstabilizer.com/products/" label="GPR Products" />
                                    </td>
                                    <td className="px-6 py-5">
                                        Compact rotary stabilizer system; stem/handlebar-area mounted; extensive service documentation published.<br />
                                        <SourceLink href="https://www.scottsonline.com/scotts.php" label="Scotts Support" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 font-bold text-foreground">Damping Principle</td>
                                    <td className="px-6 py-5">
                                        Hydraulic damping adds steering resistance to reduce wobble/shimmy and improve stability.<br />
                                        <SourceLink href="https://hauerimports.com/pages/maxracing-faqs" label="Hauer FAQs" />
                                    </td>
                                    <td className="px-6 py-5">
                                        Patented rotary hydraulic damping with fluid control, designed specifically to resist rotary steering motion.<br />
                                        <SourceLink href="https://www.gprstabilizer.com/products/" label="GPR Products" />
                                    </td>
                                    <td className="px-6 py-5">
                                        Hydraulic rotary stabilizer using valving circuits, including a dedicated high-speed damping system.<br />
                                        <SourceLink href="https://www.scottsonline.com/scotts.php" label="Scotts Support" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <SectionHeading>1) Price: What you actually pay for a complete kit</SectionHeading>
                    <div className="space-y-6 text-muted-foreground leading-relaxed font-body">
                        <p>The “real” price is always the complete kit: stabilizer + mount system. Rotary stabilizers are especially mount-dependent, and the mount style (top mount vs sub mount vs triple clamp kit) changes cost.</p>
                        <ul className="grid gap-6 md:grid-cols-3 font-heading">
                            <li className="rounded-xl border border-border/30 bg-card p-6">
                                <h4 className="text-foreground mb-2 italic">MaxRacing</h4>
                                <p className="text-sm font-body">~$379.99 for bike-specific MAX20 kits.</p>
                            </li>
                            <li className="rounded-xl border border-border/30 bg-card p-6 text-center">
                                <h4 className="text-foreground mb-2 italic">GPR</h4>
                                <p className="text-sm font-body">Pricing commonly ~$522.50–$755.25 depending on model.</p>
                            </li>
                            <li className="rounded-xl border border-border/30 bg-card p-6 text-right">
                                <h4 className="text-foreground mb-2 italic">Scotts</h4>
                                <p className="text-sm font-body">From $472 to $774+ depending on mount complexity.</p>
                            </li>
                        </ul>
                    </div>

                    <SectionHeading>2) Materials: What brands publish (and don't)</SectionHeading>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="flex gap-4 p-6 rounded-xl border border-border/20 bg-primary/5">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-heading text-foreground mb-2">MaxRacing Material</h4>
                                <p className="font-body text-sm text-muted-foreground italic">Constructed from <strong>Alloy 7075-T6</strong>, emphasizing high yield strength.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-xl border border-border/20 bg-primary/5">
                            <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-heading text-foreground mb-2">GPR Materials</h4>
                                <p className="font-body text-sm text-muted-foreground">Publishes <strong>Materials: 6061T6 Aluminum & Steel</strong> for V5 kits, and machined steel or billet aluminum mounts.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-xl border border-border/20 bg-primary/5">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-heading text-foreground mb-2">Scotts Mounts</h4>
                                <p className="font-body text-sm text-muted-foreground">Scotts’ own listings show complete kits where the price includes a <strong>billet triple clamp</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <SectionHeading>3) Warranty: What's covered (and excluded)</SectionHeading>
                    <div className="space-y-8 font-body">
                        <div>
                            <h4 className="font-heading text-xl text-primary flex items-center gap-2 mb-4 italic">MaxRacing: Clear 3-Year Warranty</h4>
                            <p className="text-muted-foreground leading-relaxed">Hauer publishes a three-year warranty covering manufacturing defects. It explicitly excludes damage caused by accidents, improper installation, or misuse. Hauer also publishes a step-by-step claim workflow and shipping responsibility split.</p>
                        </div>
                        <div className="rounded-xl border-l-4 border-destructive bg-destructive/5 p-6">
                            <h4 className="font-heading text-lg text-foreground mb-2 uppercase tracking-wide">GPR: Strict Mount Rule</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">GPR states using any 3rd party mounts will void any warranty. They will replace defective parts in the first 90 days, but customer pays return shipping.</p>
                        </div>
                        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-500/5 p-6 shadow-sm">
                            <h4 className="font-heading text-lg text-foreground mb-2 uppercase tracking-wide">Scotts: Integration Warning</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">Scotts warns third-party mounting kits can cause binding/internal damage and states it will not warranty a stabilizer if failure occurs from third-party products.</p>
                        </div>
                    </div>

                    <SectionHeading>4) Colors & Customization</SectionHeading>
                    <div className="grid gap-8 md:grid-cols-3 font-body">
                        <div className="rounded-xl border border-border/20 bg-card p-6 text-center">
                            <Paintbrush className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h4 className="font-heading mb-2">MaxRacing</h4>
                            <p className="text-sm text-muted-foreground italic">extensive "Base Color / Regulator Color" combinations.</p>
                        </div>
                        <div className="rounded-xl border border-border/20 bg-card p-6 text-center">
                            <Paintbrush className="h-8 w-8 text-muted-foreground/40 mx-auto mb-4" />
                            <h4 className="font-heading mb-2">GPR</h4>
                            <p className="text-sm text-muted-foreground">Available in Black, Red, Blue, Gold, and Orange (on request).</p>
                        </div>
                        <div className="rounded-xl border border-border/20 bg-card p-6 text-center">
                            <Paintbrush className="h-8 w-8 text-amber-600/60 mx-auto mb-4" />
                            <h4 className="font-heading mb-2">Scotts</h4>
                            <p className="text-sm text-muted-foreground">Only available in Gold. Customization via mount types.</p>
                        </div>
                    </div>

                    <SectionHeading>5) Maintenance: "Set and Forget" vs "Service like Suspension"</SectionHeading>
                    <div className="space-y-6 font-body text-muted-foreground">
                        <p><strong>MaxRacing:</strong> Routine maintenance is not required; if leaking oil or loss of pressure, it will be promptly substituted.</p>
                        <p><strong>GPR:</strong> Explicitly recommends annual oil changes and warns bad oil is the fastest way to ruin the stabilizer.</p>
                        <p><strong>Scotts:</strong> Publishes detailed service manual for oil changes, bleeding, and seal replacements to avoid fade when hot.</p>
                    </div>

                    <SectionHeading>6) Common Issues & Failures: What goes wrong?</SectionHeading>
                    <div className="space-y-6 font-body text-muted-foreground">
                        <div className="p-6 rounded-xl border border-border/20 bg-secondary/5">
                            <h4 className="font-heading text-foreground mb-2 flex items-center gap-2"><LifeBuoy className="h-4 w-4" /> MaxRacing</h4>
                        </div>
                        <div className="p-6 rounded-xl border border-border/20 bg-secondary/5">
                            <h4 className="font-heading text-foreground mb-2 flex items-center gap-2"><LifeBuoy className="h-4 w-4" /> GPR</h4>
                            <p className="text-sm leading-relaxed">Maintenance-driven failures: expired oil leads to internal wear. Third-party mounts are a common failure point that void the warranty.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-border/20 bg-secondary/5">
                            <h4 className="font-heading text-foreground mb-2 flex items-center gap-2"><LifeBuoy className="h-4 w-4" /> Scotts</h4>
                            <p className="text-sm leading-relaxed">Third-party mounts causing binding and internal damage. Detailed service is required to avoid thermal fade in high-heat conditions.</p>
                        </div>
                    </div>

                    <SectionHeading>So which one should you buy?</SectionHeading>
                    <div className="mt-8 rounded-2xl border border-primary/20 bg-gradient-card p-10 shadow-2xl">
                        <ul className="space-y-8 font-body">
                            <li className="flex gap-6 items-start">
                                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-heading text-sm italic border border-primary/30">01</div>
                                <div>
                                    <h4 className="font-heading text-foreground mb-1 italic">Choose MaxRacing</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">For the best <strong>ownership experience</strong>: 3-year warranty, clear claim workflow, and maximum color flexibility.</p>
                                </div>
                            </li>
                            <li className="flex gap-6 items-start">
                                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-heading text-sm italic border border-primary/30">02</div>
                                <div>
                                    <h4 className="font-heading text-foreground mb-1 italic">Choose GPR</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">If you prefer a <strong>serviceable component</strong> model and stick to OEM mounts to protect your warranty.</p>
                                </div>
                            </li>
                            <li className="flex gap-6 items-start">
                                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-heading text-sm italic border border-primary/30">03</div>
                                <div>
                                    <h4 className="font-heading text-foreground mb-1 italic">Choose Scotts</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">For the <strong>most documented</strong> system with a strong focus on mount engineering and detailed manual support.</p>
                                </div>
                            </li>
                        </ul>

                        {/* Final CTA */}
                        <div className="mt-16 text-center border-t border-border/30 pt-10">
                            <p className="mb-6 font-heading text-xl italic text-foreground text-center">Stabilize Your ride with MaxRacing</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button asChild size="lg" className="rounded-full min-w-[240px] shadow-accent">
                                    <a href="https://hauerimports.com/" target="_blank" rel="noopener noreferrer">SHOP STEERING DAMPERS</a>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-full min-w-[240px]">
                                    <Link to="/fitment-guide">FIND YOUR BIKE</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogRotaryComparison;
