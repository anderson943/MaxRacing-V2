import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, ExternalLink, ShieldCheck, AlertCircle, Info } from "lucide-react";

import { Helmet } from "react-helmet-async";

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Steering Stabilizer Warranty Comparison: MaxRacing vs Öhlins vs Hyperpro vs GPR vs Scotts (Claims & Shipping)",
    "image": "/images/blog/warranty-comparison-hero-v4.jpg",
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

const SourceLink = ({ href, label }: { href: string; label: string }) => (
    <div className="mt-2 mb-6 inline-flex items-center gap-1.5 font-body text-xs text-primary/70">
        <Info className="h-3 w-3" />
        <span>Source: </span>
        <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-primary">
            {label}
        </a>
    </div>
);

const BlogWarrantyComparison = () => {
    return (
        <Layout>
            <Helmet>
                <title>Steering Stabilizer Warranty Comparison | MaxRacing</title>
                <meta
                    name="description"
                    content="A deep dive into steering stabilizer warranties. Comparing MaxRacing, Öhlins, Hyperpro, GPR, and Scotts on claims, shipping, and fine print."
                />
                <meta
                    name="keywords"
                    content="steering stabilizer warranty, motorcycle damper support, MaxRacing warranty, ohlins warranty, gpr warranty, scotts warranty, motorcycle part claims"
                />
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            </Helmet>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <img
                    src="/images/blog/warranty-comparison-hero-v4.jpg"
                    alt="Steering Stabilizer Warranty Comparison: MaxRacing vs Öhlins vs Hyperpro vs GPR vs Scotts"
                    className="h-[340px] w-full object-cover md:h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="container absolute inset-0 flex flex-col justify-end pb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Link to="/blog" className="mb-4 inline-flex items-center gap-1 font-heading text-xs tracking-widest text-primary hover:underline">
                            <ArrowLeft className="h-3 w-3" /> BACK TO BLOG
                        </Link>
                        <p className="mb-2 font-heading text-xs tracking-[0.3em] text-primary">TECH & SUPPORT</p>
                        <h1 className="max-w-4xl font-heading text-3xl text-foreground md:text-5xl">
                            Steering Stabilizer Warranty Comparison: MaxRacing vs Öhlins vs Hyperpro vs GPR vs Scotts
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Article body */}
            <article className="py-16">
                <div className="container max-w-4xl">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <p className="mb-8 font-body text-lg leading-relaxed text-muted-foreground">
                            Most steering damper "comparisons" stop at performance. This one is different: it compares what customers actually care about when something goes wrong—how to start a claim, where you ship it, what proof you need, and who covers shipping.
                        </p>

                        <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 mb-12">
                            <h4 className="mb-2 flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-primary">
                                <ShieldCheck className="h-4 w-4" /> We only publish what we can verify
                            </h4>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                Every factual statement below is followed by a source link. If a brand doesn't publish a detail (for example: who pays inbound shipping), we do not guess.
                            </p>
                        </div>

                        {/* MaxRacing */}
                        <SectionHeading>MaxRacing — Why this is the simplest support path</SectionHeading>
                        <p className="mb-4 font-body text-muted-foreground leading-relaxed">
                            MaxRacing's advantage is not just product design—it's the support structure: Hauer Imports publishes the MaxRacing warranty FAQs and acts as the single point of contact for claims.
                        </p>
                        <SourceLink href="/faq" label="MaxRacing FAQs" />


                        <div className="grid gap-6 md:grid-cols-2 mb-12">
                            <div className="rounded-lg border border-border/40 bg-card p-5">
                                <h4 className="mb-2 font-heading text-sm text-foreground uppercase tracking-wide">Simple Portal Access</h4>
                                <p className="font-body text-sm text-muted-foreground">
                                    The process is highly streamlined: internationally and in the USA, customers or dealers contact MaxRacing through the official Hauer Imports warranty portal (accessible via the FAQ or Contact pages).
                                </p>
                            </div>
                            <div className="rounded-lg border border-border/40 bg-card p-5">
                                <h4 className="mb-2 font-heading text-sm text-foreground uppercase tracking-wide">1-5 Day Approval</h4>
                                <p className="font-body text-sm text-muted-foreground">
                                    Simply provide your name, email, and order number. Approval typically takes just 1-5 days, with replacements shipped out immediately after approval.
                                </p>
                                <Link to="/contact" className="mt-2 inline-flex items-center gap-1 font-body text-xs text-primary hover:underline">
                                    Go to Warranty Portal <ArrowRight className="h-4 w-4" />
                                </Link>

                            </div>
                        </div>
                        {/* Öhlins */}
                        <SectionHeading>Öhlins — Dealer-based warranty (strong network, more steps)</SectionHeading>
                        <p className="mb-4 font-body text-muted-foreground leading-relaxed">
                            To make a warranty claim (US policy): Öhlins instructs customers to return the defective product/part with the dated original receipt to the dealer/retailer where it was purchased.
                        </p>
                        <SourceLink href="https://www.ohlins.com/en-us/service-and-support/warranty/warranty-us" label="Öhlins Warranty US" />
                        <p className="mb-6 font-body text-sm text-muted-foreground">
                            Öhlins also states the warranty does not apply to purchases through unauthorized retailers/shop, including unauthorized online sellers.
                        </p>

                        {/* Hyperpro */}
                        <SectionHeading>Hyperpro — Very clear written rules (but paperwork-heavy)</SectionHeading>
                        <p className="mb-4 font-body text-muted-foreground leading-relaxed">
                            Hyperpro requires a valid dated proof of purchase and product details/serial number, and the claim is handled through the dealer channel.
                        </p>
                        <SourceLink href="https://hyperpro.com/wp-content/uploads/2016/02/Hyperpro-warranty-conditions-A5.pdf" label="Hyperpro Warranty Conditions PDF" />
                        <p className="mb-6 font-body text-sm text-muted-foreground">
                            Hyperpro states it is not responsible for transportation costs or damages occurring during transit.
                        </p>

                        {/* GPR */}
                        <SectionHeading>GPR — Clear limited warranty + strict mount rules</SectionHeading>
                        <p className="mb-4 font-body text-muted-foreground leading-relaxed">
                            GPR offers a limited warranty covering replacement of defective parts/products sold by GPR or its authorized dealers.
                        </p>
                        <SourceLink href="https://www.gprstabilizer.com/support/faqs/" label="GPR FAQs" />

                        <div className="mb-8 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                            <p className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                                <span><strong>Mounting Rule:</strong> GPR states using any 3rd party mounts will void any warranty.</span>
                            </p>
                        </div>
                        <p className="mb-4 font-body text-sm text-muted-foreground">
                            Additionally, GPR states customers are responsible for paying their own shipping costs for returning items.
                        </p>
                        <SourceLink href="https://www.gprstabilizer.com/support/terms-conditions/" label="GPR Terms & Conditions" />

                        {/* Scotts */}
                        <SectionHeading>Scotts — Service-intake driven + third-party mount warning</SectionHeading>
                        <p className="mb-4 font-body text-muted-foreground leading-relaxed">
                            Scotts publishes a clear warning about third-party mounting kits causing damage and potentially affecting warranty outcomes.
                        </p>
                        <SourceLink href="https://www.scottsonline.com/ThirdPartyWarning.php" label="Scotts Third Party Warning" />
                        <p className="mb-6 font-body text-sm text-muted-foreground leading-relaxed">
                            They provide a specific repair/service form that must be filled out when sending a stabilizer in for service or warranty assessment.
                        </p>
                        <SourceLink href="https://www.scottsonline.com/litrack/367.pdf" label="Scotts Repair Form PDF" />

                        {/* Comparison Tables */}
                        <SectionHeading>The Big Comparison: Claims &amp; Shipping</SectionHeading>

                        <div className="mb-12 overflow-x-auto rounded-xl border border-border/30 shadow-lg">
                            <table className="w-full font-body text-sm min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-border/30 bg-secondary/50">
                                        <th className="px-6 py-4 text-left font-heading text-xs tracking-widest text-foreground uppercase">Brand</th>
                                        <th className="px-6 py-4 text-left font-heading text-xs tracking-widest text-foreground uppercase">Where Claim Starts</th>
                                        <th className="px-6 py-4 text-left font-heading text-xs tracking-widest text-foreground uppercase">What You Provide</th>
                                        <th className="px-6 py-4 text-left font-heading text-xs tracking-widest text-foreground uppercase">Warranty "Gotchas"</th>
                                        <th className="px-6 py-4 text-left font-heading text-xs tracking-widest text-foreground uppercase">Shipping</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    <tr className="border-b border-border/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                                        <td className="px-6 py-5 text-foreground font-semibold">MaxRacing</td>
                                        <td className="px-6 py-5">Hauer Imports Warranty Portal (Official)</td>
                                        <td className="px-6 py-5">Name, Email, Order # / Proof info</td>
                                        <td className="px-6 py-5">Standard exclusions (accidents/misuse)</td>
                                        <td className="px-6 py-5">1-5 day approval; quick replacement. Customer may be charged for return cost.</td>
                                    </tr>
                                    <tr className="border-b border-border/20 hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5 text-foreground">Öhlins</td>
                                        <td className="px-6 py-5">Original Dealer/Retailer (US)</td>
                                        <td className="px-6 py-5">Dated original receipt</td>
                                        <td className="px-6 py-5">Unauthorized sellers excluded</td>
                                        <td className="px-6 py-5">Varies by distributor</td>
                                    </tr>
                                    <tr className="border-b border-border/20 hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5 text-foreground">Hyperpro</td>
                                        <td className="px-6 py-5">Dealer channel</td>
                                        <td className="px-6 py-5">Receipt + Serial + Note</td>
                                        <td className="px-6 py-5">Transport damage not covered</td>
                                        <td className="px-6 py-5">Customer bears cost</td>
                                    </tr>
                                    <tr className="border-b border-border/20 hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5 text-foreground">GPR</td>
                                        <td className="px-6 py-5">Direct/Service Instructions</td>
                                        <td className="px-6 py-5">Proof of purchase + Description</td>
                                        <td className="px-6 py-5">3rd party mounts void warranty</td>
                                        <td className="px-6 py-5">Customer pays return costs</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5 text-foreground">Scotts</td>
                                        <td className="px-6 py-5">Service intake form</td>
                                        <td className="px-6 py-5">Serial + Intake details</td>
                                        <td className="px-6 py-5">3rd party mount warnings</td>
                                        <td className="px-6 py-5">Not standardized on form</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <SectionHeading>Experience Ratings</SectionHeading>
                        <p className="mb-6 font-body text-sm text-muted-foreground italic">
                            Based on published clarity and channel simplicity. ★★★★★ = easiest to understand and execute.
                        </p>

                        <div className="mb-12 overflow-hidden rounded-xl border border-border/30 shadow-md">
                            <table className="w-full font-body text-sm">
                                <thead>
                                    <tr className="border-b border-border/30 bg-secondary/30">
                                        <th className="px-6 py-4 text-left font-heading text-xs tracking-widest text-foreground uppercase">Brand</th>
                                        <th className="px-6 py-4 text-center font-heading text-xs tracking-widest text-foreground uppercase">Clarity</th>
                                        <th className="px-6 py-4 text-center font-heading text-xs tracking-widest text-foreground uppercase">Simplicity</th>
                                        <th className="px-6 py-4 text-center font-heading text-xs tracking-widest text-foreground uppercase">Transparency</th>
                                        <th className="px-6 py-4 text-center font-heading text-xs tracking-widest text-foreground uppercase">Intl-Friendly</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    {[
                                        { brand: "MaxRacing", clarity: "★★★★★", simplicity: "★★★★★", transparency: "★★★★☆", intl: "★★★★★" },
                                        { brand: "Öhlins", clarity: "★★★★☆", simplicity: "★★★☆☆", transparency: "★★☆☆☆", intl: "★★★☆☆" },
                                        { brand: "Hyperpro", clarity: "★★★★☆", simplicity: "★★☆☆☆", transparency: "★★★★☆", intl: "★★★★☆" },
                                        { brand: "GPR", clarity: "★★★★☆", simplicity: "★★★☆☆", transparency: "★★★★☆", intl: "★★★☆☆" },
                                        { brand: "Scotts", clarity: "★★★☆☆", simplicity: "★★★☆☆", transparency: "★★☆☆☆", intl: "★★★☆☆" },
                                    ].map((row, i) => (
                                        <tr key={row.brand} className={`border-b border-border/20 last:border-b-0 ${i === 0 ? "bg-primary/5" : ""}`}>
                                            <td className="px-6 py-4 text-foreground font-medium">{row.brand}</td>
                                            <td className="px-6 py-4 text-center text-primary">{row.clarity}</td>
                                            <td className="px-6 py-4 text-center text-primary">{row.simplicity}</td>
                                            <td className="px-6 py-4 text-center text-primary">{row.transparency}</td>
                                            <td className="px-6 py-4 text-center text-primary">{row.intl}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Bottom line */}
                        <SectionHeading>Bottom Line</SectionHeading>
                        <p className="mb-12 font-body text-lg leading-relaxed text-muted-foreground">
                            If you want the simplest entry point, MaxRacing via Hauer Imports is positioned well because the warranty FAQ and contact channel are centralized. If you prefer a dealer-network brand (Öhlins/Hyperpro), keep your proof of purchase and follow the dealer pathway exactly. If you run a rotary-style brand that warns against third-party mounts (GPR/Scotts), keep mounts compliant to avoid warranty headaches.
                        </p>

                        {/* CTA */}
                        <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-transparent p-10 text-center shadow-accent">
                            <h2 className="mb-4 font-heading text-3xl text-foreground">Experience Premium Support</h2>
                            <p className="mx-auto mb-8 max-w-xl font-body text-base text-muted-foreground leading-relaxed">
                                A steering damper is a safety investment. Choose a brand that backs its performance with clear, accessible support paths.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to="/warranty"
                                    className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary border border-border/50 px-8 py-4 font-heading text-sm tracking-wider text-foreground transition-all hover:bg-secondary/70"
                                >
                                    MAXRACING WARRANTY
                                </Link>
                                <Link
                                    to="/shop"
                                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                                >
                                    EXPLORE OUR RANGE <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogWarrantyComparison;
