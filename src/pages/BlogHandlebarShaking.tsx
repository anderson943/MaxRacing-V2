import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What causes handlebar shake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually a mix of tire issues, chassis alignment, suspension settings, and aerodynamic inputs. A steering damper filters sudden bar movements that trigger wobble.",
      },
    },
    {
      "@type": "Question",
      name: "Does temperature affect damping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MaxRacing uses stable hydraulic oil, pressure compensation, and an aerospace-grade aluminum body for heat dissipation, keeping feel consistent across temperatures.",
      },
    },
    {
      "@type": "Question",
      name: "Max10 vs. Max20—what's the difference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Same smooth, no-click adjustment. Max10 uses a 1–10 reference scale; Max20 uses 1–20 for finer reference marks. Pick the scale you prefer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I adjust the damper while riding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes—on most top-mounts you can reach the knob. Make very small changes only when upright on a straight.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Causes Handlebar Shaking—and How to Fix It with a MaxRacing Steering Damper",
  image: "/images/blog/handlebar-shaking-hero.webp",
  author: { "@type": "Organization", name: "MaxRacing" },
  publisher: { "@type": "Organization", name: "MaxRacing" },
  datePublished: "2025-07-01",
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-4 mt-12 font-heading text-2xl text-foreground md:text-3xl">{children}</h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-3 mt-8 font-heading text-lg text-foreground md:text-xl">{children}</h3>
);

const BlogHandlebarShaking = () => {
  return (
    <Layout>
      <Helmet>
        <title>What Causes Handlebar Shaking & How to Fix It | MaxRacing</title>
        <meta
          name="description"
          content="Learn why motorcycle handlebars shake, how to diagnose wobble, and how a MaxRacing steering damper stabilizes your bike without dulling steering feel."
        />
        <meta
          name="keywords"
          content="handlebar shake, motorcycle wobble, tank slapper, motorcycle control, steering damper, MaxRacing damper, high-speed stability"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/blog/handlebar-shaking-hero.webp"
          alt="What Causes Handlebar Shaking and How to Fix It with MaxRacing Steering Damper"
          className="h-[340px] w-full object-cover md:h-[480px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container absolute inset-0 flex flex-col justify-end pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="mb-4 inline-flex items-center gap-1 font-heading text-xs tracking-widest text-primary hover:underline">
              <ArrowLeft className="h-3 w-3" /> BACK TO BLOG
            </Link>
            <p className="mb-2 font-heading text-xs tracking-[0.3em] text-primary">TECH</p>
            <h1 className="max-w-3xl font-heading text-3xl text-foreground md:text-5xl">
              What Causes Handlebar Shaking—and How&nbsp;to&nbsp;Fix&nbsp;It
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <p className="mb-8 font-body text-lg leading-relaxed text-muted-foreground">
              Handlebar shake (a.k.a. wobble, weave, or "tank slapper") is the rapid side-to-side oscillation of the bars and front wheel. It ranges from a mild shimmy to a violent instability that can overwhelm your steering. Below, we explain why it happens, how to diagnose the root cause, and how a MaxRacing steering damper stabilizes your bike without dulling steering feel.
            </p>

            {/* Why handlebars shake */}
            <SectionHeading>Why Handlebars Shake</SectionHeading>

            <SubHeading>1. Speed &amp; Aerodynamics</SubHeading>
            <ul className="mb-6 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Turbulent airflow at speed</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Crosswinds / passing large vehicles</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Aero instability at specific velocities (resonance)</li>
            </ul>

            <SubHeading>2. Tires, Wheels &amp; Chassis</SubHeading>
            <ul className="mb-6 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Incorrect tire pressures or uneven wear (cupping, flat spots)</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Out-of-balance or bent wheels</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Worn head bearings / wheel bearings</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Loose triples, bar mounts, or axle pinch bolts</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Misaligned forks after a hard hit or wheel change</li>
            </ul>

            <SubHeading>3. Suspension &amp; Load</SubHeading>
            <ul className="mb-6 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Too-soft fork rebound or excessive rear preload squat</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Luggage mounted high/rearward; top boxes loaded heavily</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Passenger or cargo shifting weight bias</li>
            </ul>

            {/* How a damper fixes wobble */}
            <SectionHeading>How a Steering Damper Fixes Wobble</SectionHeading>
            <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
              A steering damper is a small hydraulic unit that resists sudden steering inputs but stays neutral during normal steering. By absorbing sharp handlebar deflections (from bumps, ruts, landing wheelies, or headshake onset), it:
            </p>
            <ul className="mb-6 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Raises the speed at which wobble starts</li>
              <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Reduces the amplitude if wobble begins</li>
              <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Improves line-holding through choppy corners</li>
              <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Cuts rider fatigue by calming bar movement</li>
            </ul>

            {/* Why MaxRacing */}
            <SectionHeading>Why Choose MaxRacing</SectionHeading>

            <div className="mb-8 space-y-6">
              <div className="rounded-lg border border-primary/20 bg-gradient-card p-6">
                <h3 className="mb-3 font-heading text-lg text-foreground">Consistent Control, Real-World Durability</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Hydraulic system:</strong> high-stability synthetic oil with pressure compensation for consistent damping from cold mornings to hot track sessions.</li>
                  <li><strong className="text-foreground">Thermal management:</strong> CNC-machined aerospace-grade (spatial-alloy) aluminum body promotes fast heat dissipation—an approach used by premium brands—so feel stays stable as temperatures rise.</li>
                  <li><strong className="text-foreground">Precision build:</strong> tight internal tolerances for low stiction and smooth return to center.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border/30 bg-gradient-card p-6">
                <h3 className="mb-3 font-heading text-lg text-foreground">Adjustability That's Easy to Live With</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Continuously adjustable (no clicks):</strong> a smooth knob lets you fine-tune resistance.</li>
                  <li><strong className="text-foreground">Max10 / Max20 reference scales:</strong> choose the model that matches your tuning range preference; both use clear 1–10 or 1–20 markings as reference positions, not detents.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border/30 bg-gradient-card p-6">
                <h3 className="mb-3 font-heading text-lg text-foreground">Fit &amp; Install</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li>Application-specific mounts for popular models</li>
                  <li>Clear torque specs and hardware included</li>
                  <li>Compatible with top-mount and many side-mount setups</li>
                </ul>
              </div>
            </div>

            {/* Setup guide */}
            <SectionHeading>Setup: Quick Starting Points</SectionHeading>
            <p className="mb-4 font-body text-sm text-muted-foreground">
              Start from full soft, then turn the knob clockwise for more damping. Make adjustments when stopped; test, then fine-tune in small turns.
            </p>

            <div className="mb-8 overflow-hidden rounded-lg border border-border/30">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b border-border/30 bg-secondary/50">
                    <th className="px-4 py-3 text-left font-heading text-xs tracking-widest text-foreground">RIDING STYLE</th>
                    <th className="px-4 py-3 text-left font-heading text-xs tracking-widest text-foreground">DAMPING</th>
                    <th className="px-4 py-3 text-left font-heading text-xs tracking-widest text-foreground">MAX10</th>
                    <th className="px-4 py-3 text-left font-heading text-xs tracking-widest text-foreground">MAX20</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/20">
                    <td className="px-4 py-3 text-foreground">City / Commuting</td>
                    <td className="px-4 py-3">~10–30%</td>
                    <td className="px-4 py-3">~1–3</td>
                    <td className="px-4 py-3">~1–6</td>
                  </tr>
                  <tr className="border-b border-border/20">
                    <td className="px-4 py-3 text-foreground">Sporty Street / Twisties</td>
                    <td className="px-4 py-3">~40–60%</td>
                    <td className="px-4 py-3">~4–6</td>
                    <td className="px-4 py-3">~7–12</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-foreground">Track / High-Speed</td>
                    <td className="px-4 py-3">~70–90%</td>
                    <td className="px-4 py-3">~7–10</td>
                    <td className="px-4 py-3">~13–20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-8 rounded-lg border border-primary/20 bg-gradient-card p-5">
              <p className="font-body text-sm text-muted-foreground">
                <strong className="text-foreground">Can I adjust while riding?</strong> Yes, on most top-mount setups the knob is reachable. Make very small turns only when upright on a straight; never mid-corner or under heavy braking.
              </p>
            </div>

            {/* Troubleshooting */}
            <SectionHeading>Troubleshooting Checklist</SectionHeading>
            <p className="mb-4 font-body text-sm italic text-muted-foreground">Before blaming the damper:</p>
            <ol className="mb-6 list-decimal space-y-2 pl-6 font-body text-sm text-muted-foreground">
              <li>Set tire pressures to your bike's spec (check cold and hot).</li>
              <li>Inspect tires for cupping/flat spots; replace if worn unevenly.</li>
              <li>Balance wheels and verify no bends.</li>
              <li>Torque &amp; align the front end: axle, pinch bolts, triples, bar clamps.</li>
              <li>Head bearings: check for play or notchiness; re-grease/replace as needed.</li>
              <li>Suspension baseline: set sag; verify rebound isn't too fast in the fork.</li>
              <li>Luggage: keep heavy items low and forward; secure loads.</li>
            </ol>
            <p className="mb-8 rounded-lg border border-border/30 bg-gradient-card p-4 font-body text-sm text-muted-foreground">
              A damper controls symptoms and buys you stability margin; correct mechanical issues for the best result.
            </p>

            {/* Real-world gains */}
            <SectionHeading>Real-World Gains Riders Report</SectionHeading>
            <ul className="mb-8 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Higher headshake threshold on bumpy straights</li>
              <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Calmer bars on hard drive out of corners</li>
              <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />More confidence in crosswinds and dirty air</li>
              <li className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Less fatigue over long days</li>
            </ul>

            {/* Maintenance */}
            <SectionHeading>Maintenance</SectionHeading>
            <ul className="mb-8 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Wipe the shaft after dirty rides to protect seals.</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Periodically re-torque mounting hardware.</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Service intervals depend on use intensity; track riders should inspect more often.</li>
            </ul>

            {/* FAQ */}
            <SectionHeading>FAQ</SectionHeading>
            <div className="mb-8 space-y-4">
              {[
                { q: "What causes handlebar shake?", a: "Usually a mix of tire issues, chassis alignment, suspension settings, and aerodynamic inputs. A steering damper filters sudden bar movements that trigger wobble." },
                { q: "Does temperature affect damping?", a: "MaxRacing uses stable hydraulic oil, pressure compensation, and an aerospace-grade aluminum body for heat dissipation, keeping feel consistent across temperatures." },
                { q: "Max10 vs. Max20—what's the difference?", a: "Same smooth, no-click adjustment. Max10 uses a 1–10 reference scale; Max20 uses 1–20 for finer reference marks. Pick the scale you prefer." },
                { q: "Can I adjust the damper while riding?", a: "Yes—on most top-mounts you can reach the knob. Make very small changes only when upright on a straight." },
              ].map((item) => (
                <div key={item.q} className="rounded-lg border border-border/30 bg-gradient-card p-5">
                  <h3 className="mb-2 font-heading text-base text-foreground">{item.q}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-lg border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-8 text-center">
              <h2 className="mb-3 font-heading text-2xl text-foreground">Take Control of Your Front End</h2>
              <p className="mx-auto mb-6 max-w-lg font-body text-sm text-muted-foreground">
                Handlebar wobble is fixable. Sort the basics (tires, alignment, suspension), then add a MaxRacing steering damper to stabilize sudden inputs without dulling steering precision.
              </p>
              <Link
                to="/fitment-guide"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-heading text-sm tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                FIND YOUR DAMPER <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogHandlebarShaking;
