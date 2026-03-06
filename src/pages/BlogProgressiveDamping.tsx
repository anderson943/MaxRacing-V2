import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Info, Zap, Droplets, Target, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Understanding Progressive Damping",
    "image": "/images/blog/progressive-damping-hero-v3.png",
    "author": { "@type": "Organization", "name": "MaxRacing" },
    "publisher": { "@type": "Organization", "name": "MaxRacing" },
    "datePublished": "2026-02-26",
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <h2 className="mb-4 mt-12 font-heading text-2xl text-foreground md:text-3xl">{children}</h2>
);

const SourceLink = ({ href, label }: { href: string; label: string }) => (
    <div className="mt-2 mb-6 inline-flex items-center gap-1.5 font-body text-xs text-primary/70">
        <Info className="h-3 w-3" />
        <span>Source: </span>
        <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-primary">
            {label}
        </a>
    </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="rounded-xl border border-border/40 bg-card p-6 shadow-sm">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
        </div>
        <h4 className="mb-2 font-heading text-base text-foreground">{title}</h4>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
);

const BlogProgressiveDamping = () => {
    return (
        <Layout>
            <Helmet>
                <title>Understanding Progressive Damping | MaxRacing Blog</title>
                <meta
                    name="description"
                    content="Deep dive into hydraulic steering damper tech. Learn how progressive damping creates speed-sensitive resistance for better stability and feel."
                />
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            </Helmet>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <img
                    src="/images/blog/progressive-damping-hero-v3.png"
                    alt="Understanding Progressive Damping - Internal Hydraulic View"
                    className="h-[400px] w-full object-cover md:h-[540px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="container absolute inset-0 flex flex-col justify-end pb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Link to="/blog" className="mb-4 inline-flex items-center gap-1 font-heading text-xs tracking-widest text-primary hover:underline">
                            <ArrowLeft className="h-3 w-3" /> BACK TO BLOG
                        </Link>
                        <p className="mb-2 font-heading text-xs tracking-[0.3em] text-primary uppercase">Tech & Engineering</p>
                        <h1 className="max-w-4xl font-heading text-4xl text-foreground md:text-6xl">
                            Understanding Progressive Damping
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Article body */}
            <article className="py-16">
                <div className="container max-w-4xl">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <p className="mb-8 font-body text-xl leading-relaxed text-foreground/90 italic">
                            Progressive damping is the reason a good hydraulic steering damper can feel light and natural during normal steering inputs, yet become firm and protective during sudden hits like curb strikes, bumps, or headshake events.
                        </p>

                        <p className="mb-12 font-body text-lg leading-relaxed text-muted-foreground">
                            In this deep dive, we’ll break down how oil flow creates speed-sensitive resistance, what the adjuster really changes, and why different damper designs can feel different on the bike.
                        </p>

                        <div className="mb-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
                            <h2 className="mb-4 font-heading text-xl uppercase tracking-widest text-primary">Progressive damping in one sentence</h2>
                            <p className="mx-auto max-w-2xl font-body text-lg font-medium text-foreground">
                                A hydraulic steering damper resists motion by forcing oil through controlled restrictions—and the faster the steering tries to move, the harder it becomes to push that oil through the available flow paths, so damping force rises with speed.
                            </p>
                        </div>

                        <SectionHeading>The basics: oil flow is the “spring” that fights unwanted steering motion</SectionHeading>
                        <p className="mb-6 font-body text-muted-foreground leading-relaxed">
                            In a hydraulic damper, steering motion displaces a volume of oil. That oil must move from one side of the internal system to the other. Resistance comes from <strong>how difficult it is for oil to flow</strong> through passages and valves.
                        </p>
                        <p className="mb-12 font-body text-muted-foreground leading-relaxed">
                            At slow steering speeds, flow demand is low, so oil passes more easily. At high steering speeds, flow demand spikes, restrictions become “bottlenecks,” pressure rises quickly, and you feel stronger resistance.
                        </p>

                        <div className="grid gap-6 md:grid-cols-3 mb-16">
                            <FeatureCard
                                icon={Droplets}
                                title="Bleed Flow"
                                description="Small bypass path for low-speed control. Allows the bike to feel light during slow inputs."
                            />
                            <FeatureCard
                                icon={Target}
                                title="Orifices"
                                description="Fixed openings that limit flow as speed increases, creating natural speed-sensitive resistance."
                            />
                            <FeatureCard
                                icon={Zap}
                                title="Valving"
                                description="Complex shim stacks that shape the force curve, preventing harsh pressure spikes."
                            />
                        </div>

                        <SourceLink href="https://tech.dvosuspension.com/shim-stack-technology/" label="Shim-Stack Technology (DVO)" />
                        <SourceLink href="https://www.shimrestackor.com/Physics/Fluid_Dynamics/fluid-dyn.htm" label="Physics of Fluid Dynamics" />

                        <SectionHeading>Why speed-sensitive damping matters</SectionHeading>
                        <p className="mb-8 font-body text-muted-foreground leading-relaxed">
                            Steering inputs come in two very different “flavors”:
                        </p>
                        <div className="space-y-4 mb-12">
                            <div className="flex gap-4 p-4 rounded-xl bg-secondary/30">
                                <div className="font-heading text-primary font-bold">01</div>
                                <div>
                                    <h4 className="font-heading text-foreground mb-1">Intentional Steering</h4>
                                    <p className="font-body text-sm text-muted-foreground">Smooth, controlled bar movement during turn-in, line corrections, and transitions.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl bg-secondary/30">
                                <div className="font-heading text-primary font-bold">02</div>
                                <div>
                                    <h4 className="font-heading text-foreground mb-1">Unwanted Disturbances</h4>
                                    <p className="font-body text-sm text-muted-foreground">Sharp impacts and oscillations caused by bumps, crests, curb hits, or headshake.</p>
                                </div>
                            </div>
                        </div>

                        <SectionHeading>What the adjuster actually changes</SectionHeading>
                        <p className="mb-8 font-body text-muted-foreground leading-relaxed">
                            On most hydraulic steering dampers, the clicker changes how easily oil can pass through a controlled path (often related to low-speed/bleed flow). In plain terms:
                        </p>
                        <ul className="mb-12 list-disc pl-6 space-y-3 font-body text-muted-foreground">
                            <li><strong>More clicks (stiffer):</strong> Less flow → higher pressure → more resistance.</li>
                            <li><strong>Fewer clicks (softer):</strong> More flow → lower pressure → less resistance.</li>
                        </ul>

                        <div className="mb-16 rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 shadow-inner">
                            <h3 className="mb-6 font-heading text-2xl text-foreground">MaxRacing: Finding Your Feel</h3>
                            <p className="mb-6 font-body text-muted-foreground">
                                MaxRacing units feature a <strong>20-click range</strong>. Treat each change as meaningful: move in 1-click steps and validate over multiple laps or sections.
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="border-l-2 border-red-500/50 pl-4 py-2">
                                    <span className="block font-heading text-xs text-red-500 uppercase tracking-widest mb-1">Too Stiff</span>
                                    <p className="text-sm text-muted-foreground italic">Heavy steering, slower turn-in, reduced transition confidence.</p>
                                </div>
                                <div className="border-l-2 border-primary/50 pl-4 py-2">
                                    <span className="block font-heading text-xs text-primary uppercase tracking-widest mb-1">Too Soft</span>
                                    <p className="text-sm text-muted-foreground italic">Twitchiness over bumps, headshake tendency on hard exits.</p>
                                </div>
                            </div>
                        </div>

                        <SectionHeading>Competitor Design Choices</SectionHeading>
                        <div className="space-y-8 mb-16">
                            <div className="rounded-xl border border-border/50 p-6">
                                <h4 className="font-heading text-lg text-foreground mb-3 flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-primary" /> Öhlins: Pressurized Fluid
                                </h4>
                                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                                    Öhlins uses pressurized fluid to eliminate free play and keep response consistent. This translates into a very "connected" initial response.
                                </p>
                                <SourceLink href="https://www.ohlins.com/en-us/landing-pages/motorcycle/motorcycle-steering-dampers" label="Öhlins Steering Dampers" />
                            </div>

                            <div className="rounded-xl border border-border/50 p-6">
                                <h4 className="font-heading text-lg text-foreground mb-3 flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-primary" /> Rotary Stabilizers (GPR, Scotts)
                                </h4>
                                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                                    These use a different rotary architecture focused on separating normal steering feel from high-speed hit control.
                                </p>
                                <div className="flex gap-4">
                                    <Link to="/shop" className="text-xs text-primary hover:underline">GPR Products</Link>
                                    <Link to="/shop" className="text-xs text-primary hover:underline">Scotts Products</Link>

                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-transparent p-10 text-center shadow-accent">
                            <h2 className="mb-4 font-heading text-3xl text-foreground">Precision Steering Control</h2>
                            <p className="mx-auto mb-8 max-w-xl font-body text-base text-muted-foreground leading-relaxed">
                                Ready to experience the benefits of precision progressive damping? Explore our range of race-grade steering dampers.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to="/fitment-guide"
                                    className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary border border-border/50 px-8 py-4 font-heading text-sm tracking-wider text-foreground transition-all hover:bg-secondary/70"
                                >
                                    FITMENT GUIDE
                                </Link>
                                <Link
                                    to="/shop"
                                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
                                >
                                    SHOP DAMPERS <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-border/30">
                            <h5 className="font-heading text-xs tracking-widest text-muted-foreground uppercase mb-4">Official Retailer</h5>
                            <Link to="/shop" className="font-body text-primary hover:underline">
                                Shop MaxRacing at Official Store
                            </Link>

                        </div>
                    </motion.div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogProgressiveDamping;
