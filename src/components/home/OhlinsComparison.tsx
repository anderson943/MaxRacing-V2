import { motion } from "framer-motion";

interface ComparisonRow {
  category: string;
  description: string;
  reference?: { url: string; label: string };
}

const rows: ComparisonRow[] = [
  {
    category: "Hydraulic Principle",
    description: "Both operate on the precision linear hydraulic damping principle: a piston moving through high-viscosity oil with indexed flow resistance.",
    reference: { url: "https://ohlins.pl/sites/default/files/om_07261-01.pdf", label: "Öhlins Road & Track Manual" },
  },
  {
    category: "Internal Architecture",
    description: "Both fall within the same category of sealed hydraulic piston assemblies with adjustable flow control.",
    reference: { url: "https://www.ohlins.com/products/motorcycle/steering-dampers", label: "Öhlins Steering Dampers" },
  },
  {
    category: "Adjustability",
    description: "Both provide precision indexed damping adjustment. MaxRacing features a standard 20-click system; Öhlins typically ranges from 16-20 clicks depending on the model.",
    reference: { url: "https://ohlins.pl/sites/default/files/om_07261-01.pdf", label: "Öhlins Adjustment Specs" },
  },
  {
    category: "Materials",
    description: "MaxRacing uses Aerospace-grade 7075-T6 Aluminum for superior yield strength. Öhlins utilizes high-quality CNC-machined aluminum, though the specific alloy grade is not publicly disclosed in official SD20 technical specifications.",
    reference: { url: "https://www.ohlins.com/about-us/news/steering-damper-sd20", label: "Öhlins SD20 Technical Info" },
  },
  {
    category: "Serviceability",
    description: "Both are rebuildable hydraulic units. Öhlins has a broader global authorized service network.",
    reference: { url: "https://www.ohlins.com/service-centers", label: "Öhlins Service Centers" },
  },
  {
    category: "Years & Market Presence",
    description: "Öhlins founded in 1976. MaxRacing established in 2010.",
    reference: { url: "https://www.ohlins.com/company/history", label: "Öhlins History" },
  },
  {
    category: "Use Cases",
    description: "Both are designed for street, touring, and track applications. Öhlins also offers electronic-control variants in certain models.",
    reference: { url: "https://www.ohlins.com/products/electronic-control-suspension", label: "Öhlins Electronic Control" },
  },
  {
    category: "Warranty",
    description: "MaxRacing provides a 3-year limited warranty with a simple 1-5 day approval process and rapid replacement. Öhlins provides a 2-5 year limited warranty (subject to distributor policy).",
    reference: { url: "https://www.ohlinsusa.com/support/warranty", label: "Öhlins Warranty" },
  },
];

const OhlinsComparison = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">
            SIDE BY SIDE
          </p>
          <h2 className="mb-4 font-heading text-4xl text-foreground md:text-5xl">
            Öhlins vs. MaxRacing
          </h2>
          <p className="font-body text-muted-foreground">
            Two hydraulic steering dampers built on the same core principles — here's how they line up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {rows.map((row) => (
            <div
              key={row.category}
              className="rounded-lg border border-border/30 bg-gradient-card p-5 md:p-6"
            >
              <h3 className="mb-2 font-heading text-sm tracking-widest text-primary">
                {row.category}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {row.description}
              </p>
              {row.reference && (
                <a
                  href={row.reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-body text-xs text-primary/70 underline underline-offset-2 transition-colors hover:text-primary"
                >
                  {row.reference.label}
                </a>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OhlinsComparison;
