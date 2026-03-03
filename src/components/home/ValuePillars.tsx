import { Droplets, Hexagon, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Droplets,
    title: "Hydraulic Precision",
    description:
      "True hydraulic damping using progressive oil flow — not friction. Smooth, consistent resistance that adapts to the severity of oscillation.",
  },
  {
    icon: Hexagon,
    title: "CNC Billet Aluminum",
    description:
      "Every damper body is CNC-machined from solid billet aluminum. No castings, no compromises. Tolerances measured in thousandths of an inch.",
  },
  {
    icon: SlidersHorizontal,
    title: "Up to 20 levels of adjustability",
    description:
      "Dial in your damping from city cruising to track attack. Smooth, stepless adjustment across a 0–20 scale lets you tune resistance for any riding condition.",
  },
];

const ValuePillars = () => {
  return (
    <section className="border-t border-border/30 bg-carbon py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-lg border border-border/30 bg-gradient-card p-8 transition-all hover:border-primary/30 hover:shadow-accent"
            >
              <pillar.icon className="mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="mb-3 font-heading text-xl text-foreground">{pillar.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
