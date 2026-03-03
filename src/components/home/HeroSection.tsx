import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-heading text-sm tracking-[0.3em] text-primary"
          >
            HYDRAULIC STEERING DAMPERS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 font-heading text-5xl font-bold leading-[1.1] text-foreground md:text-7xl"
          >
            When the bike wants to shake —{" "}
            <span className="text-gradient-metallic">MaxRacing keeps you in control.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-10 max-w-lg font-body text-lg leading-relaxed text-muted-foreground"
          >
            Race-grade hydraulic damping. CNC-machined precision. 20 levels of adjustability. Engineered for riders who refuse to compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="min-w-[200px] font-heading text-base tracking-wider uppercase shadow-accent">
              <Link to="/fitment-guide">Find Your Bike</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[200px] font-heading text-base tracking-wider uppercase border-metallic-dark text-metallic hover:bg-secondary hover:text-foreground"
            >
              <a href="https://hauerimports.com/" target="_blank" rel="noopener noreferrer">Explore Dampers</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
