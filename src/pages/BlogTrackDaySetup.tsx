import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Info, CheckCircle2, AlertTriangle, Settings2, Gauge } from "lucide-react";
import { Helmet } from "react-helmet-async";

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Track Day Damper Setup Guide",
    "image": "/images/blog/track-day-setup-hero.png",
    "author": { "@type": "Organization", "name": "MaxRacing" },
    "publisher": { "@type": "Organization", "name": "MaxRacing" },
    "datePublished": "2026-02-26",
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <h2 className="mb-4 mt-12 font-heading text-2xl text-foreground md:text-3xl">{children}</h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-3 mt-8 font-heading text-lg text-foreground md:text-xl">{children}</h3>
);

const TipCard = ({ title, content }: { title: string, content: string }) => (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-6">
        <h4 className="mb-2 flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-primary">
            <CheckCircle2 className="h-4 w-4" /> {title}
        </h4>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
);

const BlogTrackDaySetup = () => {
    return (
        <Layout>
            <Helmet>
                <title>Track Day Damper Setup Guide | MaxRacing</title>
                <meta
                    name="description"
                    content="Master your MaxRacing steering damper settings for the track. Learn how to dial in your 20-click adjuster for different circuit conditions."
                />
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            </Helmet>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <img
                    src="/images/blog/track-day-setup-hero.png"
                    alt="Track Day Damper Setup - Adjusting MaxRacing Damper"
                    className="h-[400px] w-full object-cover md:h-[540px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="container absolute inset-0 flex flex-col justify-end pb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Link to="/blog" className="mb-4 inline-flex items-center gap-1 font-heading text-xs tracking-widest text-primary hover:underline">
                            <ArrowLeft className="h-3 w-3" /> BACK TO BLOG
                        </Link>
                        <p className="mb-2 font-heading text-xs tracking-[0.3em] text-primary uppercase">Tech & Race Prep</p>
                        <h1 className="max-w-4xl font-heading text-4xl text-foreground md:text-6xl">
                            Track Day Damper Setup Guide
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Article body */}
            <article className="py-16">
                <div className="container max-w-4xl">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <p className="mb-8 font-body text-xl leading-relaxed text-foreground/90">
                            A steering damper is one of the most critical tools in your track day arsenal. When set correctly, it provides the stability needed to charge over curbs and power out of corners with confidence. Set incorrectly, it can make the bike feel heavy, unresponsive, and fatiguing.
                        </p>

                        <p className="mb-12 font-body text-lg leading-relaxed text-muted-foreground">
                            MaxRacing dampers feature a high-precision <strong>20-click adjustment system</strong>. This guide will help you understand how to navigate those clicks to find your perfect track-side setup.
                        </p>

                        <SectionHeading>The "Baseline" Philosophy</SectionHeading>
                        <p className="mb-6 font-body text-muted-foreground leading-relaxed">
                            Before you touch the dial, you need a starting point. For most track environments, we recommend starting in the <strong>middle of the range (Click 10)</strong>.
                        </p>
                        <TipCard
                            title="Note on Click Count"
                            content="Always count clicks from 'Full Soft' (turned all the way counter-clockwise). This ensures consistency every time you adjust."
                        />

                        <SectionHeading>Tuning by Track Condition</SectionHeading>

                        <SubHeading>1. Bumpy Circuits & Aggressive Curbs</SubHeading>
                        <p className="mb-4 font-body text-muted-foreground leading-relaxed">
                            Tracks with significant surface ripples or where you're aggressively using the curbing require more high-speed damping control to prevent headshake when the front wheel regains contact.
                        </p>
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 mb-8">
                            <Settings2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                            <p className="font-body text-sm text-foreground"><strong>Adjustment:</strong> Increase damping by 1-2 clicks from baseline. You want enough resistance to calm the bars after a hit, but not so much that the front feels 'dead'.</p>
                        </div>

                        <SubHeading>2. High-Speed Sweepers vs. Tight Chicanes</SubHeading>
                        <p className="mb-4 font-body text-muted-foreground leading-relaxed">
                            If the track is mostly fast, wide-open sweepers, you can afford a bit more damping to keep the chassis rock-steady at speed. If the track is a technical 'stop-and-go' layout with quick transitions (chicanes), less damping is usually better for flickability.
                        </p>
                        <TipCard
                            title="The Flickability Test"
                            content="If you find yourself overshooting apexes in quick chicanes, try backing off 1 click. Heavy damping increases the effort required for rapid directional changes."
                        />

                        <SectionHeading>Diagnosis Table: Symptoms & Solutions</SectionHeading>
                        <div className="mb-12 overflow-x-auto rounded-xl border border-border/30">
                            <table className="w-full font-body text-sm min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-border/30 bg-secondary/50">
                                        <th className="px-6 py-4 text-left font-heading text-xs tracking-widest text-foreground uppercase">Symptom</th>
                                        <th className="px-6 py-4 text-left font-heading text-xs tracking-widest text-foreground uppercase">What It Means</th>
                                        <th className="px-6 py-4 text-left font-heading text-xs tracking-widest text-foreground uppercase">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    <tr className="border-b border-border/20">
                                        <td className="px-6 py-4 text-foreground font-medium">Headshake on Exit</td>
                                        <td className="px-6 py-4">Front end is too light/active as load moves rearward.</td>
                                        <td className="px-6 py-4 text-primary">+1 to 2 Clicks (Stiffer)</td>
                                    </tr>
                                    <tr className="border-b border-border/20">
                                        <td className="px-6 py-4 text-foreground font-medium">Bike Resists Turn-in</td>
                                        <td className="px-6 py-4">High initial resistance is fighting your steering input.</td>
                                        <td className="px-6 py-4 text-primary">-1 to 2 Clicks (Softer)</td>
                                    </tr>
                                    <tr className="border-b border-border/20">
                                        <td className="px-6 py-4 text-foreground font-medium">Forearm Fatigue</td>
                                        <td className="px-6 py-4">You're working too hard to overcome the damper.</td>
                                        <td className="px-6 py-4 text-primary">-1 to 3 Clicks (Softer)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-foreground font-medium">Unstable Over Curbs</td>
                                        <td className="px-6 py-4">Not enough control for high-speed bar movement.</td>
                                        <td className="px-6 py-4 text-primary">+2 Clicks (Stiffer)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mb-12 p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                            <h4 className="flex items-center gap-2 font-heading text-base text-yellow-500 mb-3">
                                <AlertTriangle className="h-5 w-5" /> Safety Check
                            </h4>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                A steering damper is not a fix for poor chassis setup. If you're experiencing violent tank-slappers, first check your tire pressures, suspension sag, and headstock bearings. The damper is the 'safety net', not the foundation.
                            </p>
                        </div>

                        <SectionHeading>Practical Track-Side Tips</SectionHeading>
                        <ul className="space-y-6 mb-16">
                            <li className="flex gap-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-heading text-sm font-bold">1</div>
                                <div>
                                    <h5 className="font-heading text-foreground mb-1">Log Your Clicks</h5>
                                    <p className="font-body text-sm text-muted-foreground">Keep a track diary. Note the ambient temp, track name, and your final click setting. Heat affects oil viscosity, so your 'perfect' click might change by midday.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-heading text-sm font-bold">2</div>
                                <div>
                                    <h5 className="font-heading text-foreground mb-1">One Change at a Time</h5>
                                    <p className="font-body text-sm text-muted-foreground">Never adjust your suspension AND your damper in the same session. You won't know which change actually helped (or hurt).</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-heading text-sm font-bold">3</div>
                                <div>
                                    <h5 className="font-heading text-foreground mb-1">The 20-Click Advantage</h5>
                                    <p className="font-body text-sm text-muted-foreground">Because MaxRacing offers a wide range, even a single click is noticeable to an experienced rider. Don't be afraid to fine-tune.</p>
                                </div>
                            </li>
                        </ul>

                        {/* CTA */}
                        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-transparent p-10 text-center shadow-accent">
                            <h2 className="mb-4 font-heading text-3xl text-foreground">Race-Ready Performance</h2>
                            <p className="mx-auto mb-8 max-w-xl font-body text-base text-muted-foreground leading-relaxed">
                                MaxRacing steering dampers are engineered for the rigors of the track. Discover why top riders trust our precision 20-click system.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="https://hauerimports.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-heading text-sm tracking-wider text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
                                >
                                    SHOP MAXRACING <ChevronRight className="h-4 w-4" />
                                </a>
                                <Link
                                    to="/installation-assistant"
                                    className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary border border-border/50 px-8 py-4 font-heading text-sm tracking-wider text-foreground transition-all hover:bg-secondary/70"
                                >
                                    AI ASSISTANT
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogTrackDaySetup;
