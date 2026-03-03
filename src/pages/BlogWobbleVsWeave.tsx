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
      name: "Is wobble always a tire problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often—but not always. Combine tires/pressures with a steering head and alignment check.",
      },
    },
    {
      "@type": "Question",
      name: "Will a damper mask a mechanical issue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It controls symptoms; you should still correct underlying faults for best results.",
      },
    },
    {
      "@type": "Question",
      name: "Does temperature change feel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MaxRacing dampers maintain consistent feel thanks to stable oil, pressure compensation, and an aerospace-grade aluminum body that sheds heat quickly.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Handlebar Wobble vs. Weave: What's the Difference and How to Diagnose",
  image: "/images/blog/wobble-vs-weave-hero.png",
  author: { "@type": "Organization", name: "MaxRacing" },
  publisher: { "@type": "Organization", name: "MaxRacing" },
  datePublished: "2025-07-15",
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-4 mt-12 font-heading text-2xl text-foreground md:text-3xl">{children}</h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-3 mt-8 font-heading text-lg text-foreground md:text-xl">{children}</h3>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
    {children}
  </li>
);

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
    {children}
  </li>
);

const BlogWobbleVsWeave = () => {
  return (
    <Layout>
      <Helmet>
        <title>Handlebar Wobble vs. Weave: Difference & Diagnosis | MaxRacing</title>
        <meta
          name="description"
          content="Learn the difference between handlebar wobble, weave, and tank slapper—plus a step-by-step diagnosis and how a MaxRacing steering damper calms instability."
        />
        <meta
          name="keywords"
          content="handlebar wobble, motorcycle weave, tank slapper, headshake, front-end instability, diagnose wobble, steering damper, MaxRacing"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/blog/wobble-vs-weave-hero.png"
          alt="Handlebar Wobble vs Weave: What's the Difference and How to Diagnose"
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
              Handlebar Wobble vs.&nbsp;Weave: What's the Difference and How&nbsp;to&nbsp;Diagnose
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>

            {/* Quick definitions */}
            <SectionHeading>Quick Definitions</SectionHeading>
            <div className="mb-8 space-y-4">
              <div className="rounded-lg border border-primary/20 bg-gradient-card p-5">
                <h3 className="mb-2 font-heading text-base text-foreground">Wobble / Headshake</h3>
                <p className="font-body text-sm text-muted-foreground">Rapid handlebar oscillation, typically felt through the bars at low–medium speeds or after a bump.</p>
              </div>
              <div className="rounded-lg border border-border/30 bg-gradient-card p-5">
                <h3 className="mb-2 font-heading text-base text-foreground">Weave</h3>
                <p className="font-body text-sm text-muted-foreground">Slower whole-bike side-to-side motion, often at higher speeds and influenced by load/aero.</p>
              </div>
              <div className="rounded-lg border border-border/30 bg-gradient-card p-5">
                <h3 className="mb-2 font-heading text-base text-foreground">Tank Slapper</h3>
                <p className="font-body text-sm text-muted-foreground">An extreme wobble that quickly escalates to violent bar swings—rare but dangerous.</p>
              </div>
            </div>

            {/* Why it happens */}
            <SectionHeading>Why It Happens (Root Causes)</SectionHeading>

            <SubHeading>Tires &amp; Wheels</SubHeading>
            <ul className="mb-6 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <Bullet>Incorrect pressures (cold/hot), cupping, flat spots</Bullet>
              <Bullet>Unbalanced or bent wheels, worn wheel bearings</Bullet>
            </ul>

            <SubHeading>Chassis &amp; Steering</SubHeading>
            <ul className="mb-6 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <Bullet>Loose or notchy steering head bearings</Bullet>
              <Bullet>Misaligned forks/triples after a curb hit or wheel swap</Bullet>
              <Bullet>Slop in bar mounts, axle pinch bolts, or rear alignment</Bullet>
            </ul>

            <SubHeading>Suspension &amp; Geometry</SubHeading>
            <ul className="mb-6 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <Bullet>Fork rebound too fast, rear preload too high/low</Bullet>
              <Bullet>Ride-height changes altering rake/trail</Bullet>
              <Bullet>Worn shocks or stiction in fork legs</Bullet>
            </ul>

            <SubHeading>Load &amp; Aerodynamics</SubHeading>
            <ul className="mb-6 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <Bullet>Top box or luggage mounted high/rearward</Bullet>
              <Bullet>Crosswinds, dirty air from trucks, tall screens, soft luggage flapping</Bullet>
            </ul>

            {/* 7-step checklist */}
            <SectionHeading>Fast Diagnosis: 7-Step Checklist</SectionHeading>
            <p className="mb-4 font-body text-sm italic text-muted-foreground">Garage first—before any road testing.</p>
            <ol className="mb-6 list-decimal space-y-2 pl-6 font-body text-sm text-muted-foreground">
              <li><strong className="text-foreground">Pressures:</strong> set to your bike's spec; recheck hot after a 20-min ride.</li>
              <li><strong className="text-foreground">Tire condition:</strong> look for cupping, flat centers, uneven wear—replace if suspect.</li>
              <li><strong className="text-foreground">Wheel balance/true:</strong> verify weights are present; check run-out if vibration persists.</li>
              <li><strong className="text-foreground">Steering head bearings:</strong> front raised—feel for play or "center notch;" torque or replace.</li>
              <li><strong className="text-foreground">Front-end torque &amp; alignment:</strong> axle, pinch bolts, caliper mounts; loosen/settle/retorque to spec.</li>
              <li><strong className="text-foreground">Suspension baseline:</strong> set rider sag; add fork rebound if the front "pogo sticks" after a bump.</li>
              <li><strong className="text-foreground">Luggage &amp; load:</strong> move heavy items low/forward; test without top box if weave occurs.</li>
            </ol>

            {/* Road test protocol */}
            <SectionHeading>Road Test Protocol</SectionHeading>
            <p className="mb-4 font-body text-sm italic text-muted-foreground">Safe &amp; controlled.</p>
            <ol className="mb-8 list-decimal space-y-2 pl-6 font-body text-sm text-muted-foreground">
              <li>Test on a straight, smooth road. Hands on bars, light grip.</li>
              <li>Evaluate at three speeds: urban (30–40 mph), mid (50–70), highway (75+ where legal).</li>
              <li>Hit a small, known bump once; note if wobble starts then decays (good) or grows (fix needed).</li>
              <li>If weave appears only with luggage or windscreen, re-test after removing or repositioning.</li>
            </ol>

            {/* When and how a damper helps */}
            <SectionHeading>When and How a Steering Damper Helps</SectionHeading>
            <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
              A steering damper resists sudden bar deflections (from bumps, landing wheelies, headshake onset) while remaining neutral during normal steering. It:
            </p>
            <ul className="mb-6 space-y-2 pl-5 font-body text-sm text-muted-foreground">
              <Arrow>Raises the speed at which wobble begins</Arrow>
              <Arrow>Reduces amplitude if wobble starts</Arrow>
              <Arrow>Improves line-holding over choppy surfaces</Arrow>
              <Arrow>Cuts fatigue from constant micro-corrections</Arrow>
            </ul>

            {/* The MaxRacing approach */}
            <SectionHeading>The MaxRacing Approach</SectionHeading>
            <div className="mb-8 space-y-6">
              <div className="rounded-lg border border-primary/20 bg-gradient-card p-6">
                <h3 className="mb-3 font-heading text-lg text-foreground">Smooth, Continuous Adjustment</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li><strong className="text-foreground">No clicks:</strong> easy fine-tuning via knob.</li>
                  <li><strong className="text-foreground">Max10 / Max20 reference scales:</strong> choose 1–10 or 1–20 reference marks for your preferred granularity.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border/30 bg-gradient-card p-6">
                <h3 className="mb-3 font-heading text-lg text-foreground">Thermal Stability &amp; Heat Management</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Synthetic oil + pressure compensation</strong> for consistent feel from cold starts to hot sessions.</li>
                  <li><strong className="text-foreground">CNC aerospace-grade (spatial-alloy) aluminum body</strong> dissipates heat efficiently—an approach used by premium brands.</li>
                </ul>
              </div>
            </div>

            {/* Setup table */}
            <SectionHeading>Baseline Starting Points</SectionHeading>
            <p className="mb-4 font-body text-sm text-muted-foreground">
              Clockwise = more damping. Adjust when stopped; test, then fine-tune in small turns.
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
                    <td className="px-4 py-3 text-foreground">Twisty Roads</td>
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
                <strong className="text-foreground">Can I adjust while riding?</strong> Yes—on most top-mounts, make very small turns only when upright on a straight.
              </p>
            </div>

            {/* Fix hierarchy */}
            <SectionHeading>Fix Hierarchy (Do This in Order)</SectionHeading>
            <ol className="mb-8 list-decimal space-y-2 pl-6 font-body text-sm text-muted-foreground">
              <li>Pressures → Tires → Balance/true</li>
              <li>Steering head bearings → Front-end torque/alignment</li>
              <li>Sag &amp; damping baselines → Load placement</li>
              <li>Add/adjust MaxRacing steering damper to increase stability margin</li>
            </ol>

            {/* FAQ */}
            <SectionHeading>FAQ</SectionHeading>
            <div className="mb-8 space-y-4">
              {[
                { q: "Is wobble always a tire problem?", a: "Often—but not always. Combine tires/pressures with a steering head and alignment check." },
                { q: "Will a damper mask a mechanical issue?", a: "It controls symptoms; you should still correct underlying faults for best results." },
                { q: "Does temperature change feel?", a: "MaxRacing dampers maintain consistent feel thanks to stable oil, pressure compensation, and an aerospace-grade aluminum body that sheds heat quickly." },
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
                Wobble and weave are diagnosable and fixable. Sort the basics, then add a MaxRacing steering damper to increase your stability margin without dulling steering precision.
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

export default BlogWobbleVsWeave;
