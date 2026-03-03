import { motion } from "framer-motion";
import { AlertTriangle, Shield, Gauge } from "lucide-react";
import max20Video from "@/assets/max20-site.mp4";

const DamperExplainer = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">THE PROBLEM & THE SOLUTION</p>
          <h2 className="mb-6 font-heading text-4xl text-foreground md:text-5xl">
            What Does a Steering Damper Actually Do?
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Problem side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="rounded-xl border border-destructive/20 bg-gradient-card p-8 h-full w-full">
              <div className="mb-6 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="font-heading text-xl text-foreground">The Problem</h3>
              </div>
              <ul className="space-y-4 font-body text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                  <span><strong className="text-foreground">Tank slappers:</strong> Violent, <strong className="text-foreground">uncontrolled handlebar oscillations</strong> triggered by bumps, acceleration, or road gaps.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                  <span><strong className="text-foreground">High-speed instability:</strong> The front end becomes <strong className="text-foreground">dangerously light</strong> under power, losing feedback and directional control.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                  <span><strong className="text-foreground">Sudden impacts:</strong> Potholes and expansion joints can <strong className="text-foreground">kick-start dangerous steering wobble</strong> without warning.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Solution side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="rounded-xl border border-primary/20 bg-gradient-card p-8 h-full w-full">
              <div className="mb-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-xl text-foreground">The Solution</h3>
              </div>
              <ul className="space-y-4 font-body text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-foreground">Hydraulic Precision:</strong> Our dampers use oil valving to <strong className="text-foreground">instantly resist sudden forces</strong> while maintaining natural steering feel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-foreground">Progressive Damping:</strong> Stays light for cornering agility, but becomes <strong className="text-foreground">exponentially stronger</strong> as speed or instability builds.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-foreground">Total Control:</strong> You continue to <strong className="text-foreground">feel the road</strong> and bike feedback, while the damper silently <strong className="text-foreground">controls the danger</strong>.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-lg"
        >
          <video
            src={max20Video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DamperExplainer;
