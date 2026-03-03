import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Accent glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 font-heading text-4xl text-foreground md:text-5xl">
            Find Your Fit
          </h2>
          <p className="mb-8 font-body text-lg text-muted-foreground">
            Select your bike. Get the right damper. No guessing.
          </p>
          <Button asChild size="lg" className="font-heading text-base tracking-wider uppercase shadow-accent">
            <Link to="/fitment-guide" className="flex items-center gap-2">
              Browse by Fitment <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
