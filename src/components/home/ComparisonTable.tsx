import { motion } from "framer-motion";
import { Check, X, Minus, Info, HelpCircle, ExternalLink, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

type CellValue = "yes" | "no" | "partial" | string;

interface FeatureRow {
  feature: string;
  tooltip?: string;
  maxracing: CellValue;
  ohlins: CellValue;
  hyperpro: CellValue;
  gpr: CellValue;
  scotts: CellValue;
  generic: CellValue;
}

const brands = ["maxracing", "ohlins", "hyperpro", "gpr", "scotts", "generic"] as const;
const brandLabels: Record<(typeof brands)[number], string> = {
  maxracing: "MaxRacing",
  ohlins: "Öhlins",
  hyperpro: "Hyperpro",
  gpr: "GPR",
  scotts: "Scotts",
  generic: "Generic",
};
const brandRefs: Partial<Record<(typeof brands)[number], string>> = {
  maxracing: "https://hauerimports.com/pages/maxracing-faqs",
  ohlins: "https://www.ohlins.com/about-us/news/steering-damper-sd20",
  hyperpro: "https://hyperpro.com/steering-dampers/",
  gpr: "https://www.gprstabilizer.com/products/gpr-v5s-street-bike-stabilizer-kits/",
  scotts: "https://www.scottsonline.com/Stabilizer_Purchase2.php?BI_ID=952888&Bike_ID=7311",
};

const DEFAULT_FEATURES: FeatureRow[] = [
  {
    feature: "Price Position",
    maxracing: "Competitive",
    ohlins: "Premium",
    hyperpro: "Mid-Premium",
    gpr: "Mid-Premium",
    scotts: "Premium",
    generic: "Budget",
  },
  {
    feature: "Warranty",
    maxracing: "3 Years|Article:/blog/warranty-comparison|Hauer:https://hauerimports.com/pages/maxracing-faqs",
    ohlins: "2-5 Years|Öhlins:https://www.ohlinsusa.com/support/warranty",
    hyperpro: "2 Years|Hyperpro:https://hyperpro.com/steering-dampers/",
    gpr: "90 Days|GPR:https://www.gprstabilizer.com/support/faqs/",
    scotts: "Limited|Scotts:https://www.scottsonline.com/scotts.php",
    generic: "30–90 Days",
  },
  {
    feature: "Bike-Specific Mounts",
    maxracing: "yes",
    ohlins: "yes",
    hyperpro: "yes",
    gpr: "yes",
    scotts: "yes",
    generic: "partial",
  },
  {
    feature: "Installation",
    tooltip: "Plug-and-Play: Bolt-on kit, no permanent mods, basic tools.\nProfessional: Bolt-on but alignment/torque critical—recommended shop install.\nTechnical: May require modification/custom fitment—technician install required.",
    maxracing: "Plug-and-Play",
    ohlins: "Professional",
    hyperpro: "Professional",
    gpr: "Technical",
    scotts: "Professional",
    generic: "Technical",
  },
  {
    feature: "Rebuildable / Serviceable",
    tooltip: "Serviceable = has a defined service path (support/service center, service form, or documented servicing like oil/seal work).\n\nRebuildable = intended to be opened/restored with internal wear parts replaced (seals/O-rings/etc.), ideally with spare parts/rebuild support.",
    maxracing: "Serviceable / Rebuildable|Hauer:https://hauerimports.com/pages/maxracing-faqs",
    ohlins: "Serviceable / Rebuildable ❓|Service:https://www.ohlins.com/service-centers",
    hyperpro: "Serviceable / Rebuildable|Service:https://hyperpro.com/steering-dampers/",
    gpr: "Serviceable / Rebuildable ❓|Support:https://www.gprstabilizer.com/support/",
    scotts: "Serviceable / Rebuildable|Service:https://www.scottsonline.com/litrack/259.pdf",
    generic: "Serviceable (often) / Rebuildable ⚠️ (varies)",
  },
  {
    feature: "Use Case Classification",
    maxracing: "Street / Touring / Track",
    ohlins: "Street / Touring / Track / Motorsport",
    hyperpro: "Street / Touring / Track",
    gpr: "Street / Track",
    scotts: "Street / Off-road / Track",
    generic: "Street",
  },
  {
    feature: "Construction Material",
    tooltip: "The specific aluminum alloy grade used for the damper body and mounting hardware.",
    maxracing: "Aerospace Grade Aluminium - High Yield Strength (Alloy 7075-T6)|Article:/blog/why-7075-aluminum|Hauer:https://hauerimports.com/pages/maxracing-faqs",
    ohlins: "Not publicly specified",
    hyperpro: "Not publicly specified",
    gpr: "Structural Grade - General Purpose (Alloy 6061-T6)|GPR:https://www.gprstabilizer.com/products/gpr-v5s-street-bike-stabilizer-kits/",
    scotts: "Structural Grade - General Purpose (Alloy 6061-T6)|Scotts:https://www.scottsonline.com/Stabilizer_Purchase2.php?BI_ID=952888&Bike_ID=7311",
    generic: "Cast / Mixed materials",
  },
  {
    feature: "Colors",
    maxracing: "7 (49 Combos)|Hauer:https://hauerimports.com/pages/maxracing-faqs",
    ohlins: "Limited",
    hyperpro: "Limited",
    gpr: "Limited",
    scotts: "Limited",
    generic: "1–2",
  },
  {
    feature: "Architecture / Form Factor",
    maxracing: "Handlebar-mounted rotary stabilizer with bike-specific brackets; under-/over-bar mounting affects clearance/fitment|Hauer:https://hauerimports.com/pages/maxracing-faqs",
    ohlins: "Linear hydraulic damper (shaft + piston in cylinder), mounted across the front end|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf",
    hyperpro: "Linear hydraulic damper range (CSC); RSC operates like a linear damper in normal riding|Hyperpro:https://hyperpro.com/steering-dampers/",
    gpr: "Rotary steering stabilizer (V-series kits), typically stem/handlebar-area mounted with model-specific hardware|GPR:https://www.gprstabilizer.com/products/",
    scotts: "Compact rotary stabilizer system; stem/handlebar-area mounted; extensive service documentation published|Scotts:https://www.scottsonline.com/scotts.php",
    generic: "Linear = “mini shock” rod damper; Rotary = stem/handlebar-area stabilizer|Info:https://engineerfix.com/what-does-a-steering-stabilizer-do-on-a-motorcycle/",
  },
  {
    feature: "Damping Principle",
    maxracing: "Hydraulic damping adds steering resistance to reduce wobble/shimmy and improve stability|Hauer:https://hauerimports.com/pages/maxracing-faqs",
    ohlins: "Piston-driven hydraulic damping; oil is forced through passages with an adjustable valve; pressurized reservoir handles volume changes|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf",
    hyperpro: "Linear hydraulic damping (CSC); RSC adds progressive damping response for rapid, high-speed steering events|Hyperpro:https://hyperpro.com/steering-dampers/",
    gpr: "Patented rotary hydraulic damping with fluid control, designed specifically to resist rotary steering motion|GPR:https://www.gprstabilizer.com/products/",
    scotts: "Hydraulic rotary stabilizer using valving circuits, including a dedicated high-speed damping system|Scotts:https://www.scottsonline.com/scotts.php",
    generic: "Most steering stabilizers are hydraulic and come in two layouts: linear (rod-style) or rotary (stem/handlebar mount)|Info:https://engineerfix.com/what-does-a-steering-stabilizer-do-on-a-motorcycle/",
  },
  {
    feature: "Maintenance Guidance",
    maxracing: "Routine maintenance is generally not required; contact support if leaking oil or loss of pressure|Hauer:https://hauerimports.com/pages/maxracing-faqs",
    ohlins: "Manual provides service intervals (road km / track hours) and warns of leakage/irregular function|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf",
    hyperpro: "Rebuildable with spare parts availability is listed as a feature|Hyperpro:https://hyperpro.com/steering-dampers/",
    gpr: "Recommends annual oil changes; warns oil expires and old oil can cause internal wear/damage|GPR:https://www.gprstabilizer.com/support/",
    scotts: "Scotts publishes oil/seal service instructions; recommends proper service procedure|Scotts:https://www.scottsonline.com/litrack/259.pdf",
    generic: "General guidance: hydraulic dampers can leak and may need service; friction types behave differently|Source:https://tfxsuspension.com/blog/adventure-motor-bike/what-is-a-steering-damper-for-adventure-motors/",
  },
  {
    feature: "Common Issues / Failures",
    tooltip: "Warranty exclusions or issues explicitly acknowledged by the brand.",
    maxracing: "Warranty excludes accidents, improper installation, or unauthorized modifications|Hauer:https://hauerimports.com/pages/maxracing-faqs",
    ohlins: "Manual warns leakage/irregular function requires service and notes the damper affects stability|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf",
    hyperpro: "Mentions sealing + nitrogen pressurized reservoir to prevent foaming (mitigating performance loss)|Hyperpro:https://hyperpro.com/steering-dampers/",
    gpr: "Warns old oil/o-rings lead to wear; service is critical; also has strict warranty rules related to mounts|GPR:https://www.gprstabilizer.com/support/",
    scotts: "Service documents discuss service/bleeding details; Scotts also warns about third-party mounting kits|Scotts:https://www.scottsonline.com/litrack/259.pdf",
    generic: "Typical issues: leaks, worn seals, friction stiction vs hydraulic response|Source:https://vintagebmw.org/forum/viewtopic.php?t=17644/",
  },
  {
    feature: "Adjuster Clicks",
    maxracing: "20|Hauer:https://hauerimports.com/pages/maxracing-faqs",
    ohlins: "16–20|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf",
    hyperpro: "22|Hyperpro:https://hyperpro.com/steering-dampers/",
    gpr: "20|GPR:https://www.gprstabilizer.com/products/",
    scotts: "25|Scotts:https://www.scottsonline.com/scotts.php",
    generic: "no",
  },
  {
    feature: "Founded / Market Presence",
    maxracing: "Established 2010",
    ohlins: "Founded 1976",
    hyperpro: "Founded 1997",
    gpr: "Founded 1997",
    scotts: "Founded 1978",
    generic: "Varies",
  },

];

const StatusIcon = ({ value }: { value: CellValue }) => {
  if (value === "yes") return <Check className="h-4 w-4 text-primary" />;
  if (value === "partial") return <Minus className="h-4 w-4 text-metallic" />;
  if (value === "no") return <X className="h-4 w-4 text-muted-foreground/40" />;

  // Handle strings with optional source links in format "Text|Label:URL|Label:URL"
  if (typeof value === "string" && value.includes("|")) {
    const parts = value.split("|");
    const text = parts[0];
    const links = parts.slice(1).map(p => {
      // Determine if a label is prepended (e.g. "Label:/url" or "Label:https://url")
      // Check for colon that is NOT part of a protocol (http:// or https://)
      const protocolMatch = p.match(/^(https?:\/\/|\/)/);
      if (p.includes(":") && !protocolMatch) {
        const firstColonIndex = p.indexOf(":");
        const label = p.substring(0, firstColonIndex);
        const url = p.substring(firstColonIndex + 1);
        return { label, url };
      }
      // Default labels if not explicitly provided
      let label = "Link";
      if (p.toLowerCase().includes(".pdf") || p.toLowerCase().includes("manual")) label = "Manual";
      if (p.startsWith("/")) label = "Article";

      return { label, url: p };
    });

    // Clean up terminology: "Fully rebuildable" -> "Rebuildable"
    const cleanedText = text.replace(/Fully rebuildable/gi, "Rebuildable");

    return (
      <div className="flex flex-col items-center gap-1">
        <span className="font-body text-xs text-center text-foreground">{cleanedText}</span>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
              className="inline-flex items-center gap-0.5 text-[10px] text-primary hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {link.label} {link.url.startsWith("http") && <ExternalLink className="h-2 w-2" />}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return <span className="font-body text-xs text-foreground text-center">{value}</span>;
};

const FeatureLabel = ({ row }: { row: FeatureRow }) => {
  const labelContent = (
    <span className={`inline-flex items-center gap-1.5 ${row.feature === "Construction Material" || row.feature === "Warranty" || row.feature === "Price Position" ? "text-primary hover:text-primary/80 transition-colors" : ""}`}>
      {row.feature}
      {row.tooltip && (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60 cursor-help" />
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-xs text-xs whitespace-pre-line">
              {row.tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </span>
  );

  if (row.feature === "Construction Material") {
    return (
      <a href="/blog/why-7075-aluminum" className="hover:underline">
        {labelContent}
      </a>
    );
  }

  if (row.feature === "Warranty") {
    return (
      <a href="/blog/warranty-comparison" className="hover:underline">
        {labelContent}
      </a>
    );
  }

  if (row.feature === "Price Position") {
    return (
      <a href="https://hauerimports.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
        {labelContent}
      </a>
    );
  }

  return labelContent;
};

/* ── Desktop Table ── */
const DesktopTable = ({ features, brands, brandLabels, brandRefs }: any) => (
  <div className="overflow-hidden rounded-lg border border-border/30 bg-gradient-card">
    <Table>
      <TableHeader>
        <TableRow className="border-border/30 hover:bg-transparent">
          <TableHead className="font-heading text-xs tracking-widest text-muted-foreground">
            Feature
          </TableHead>
          {brands.map((b: any) => (
            <TableHead
              key={b}
              className={`font-heading text-xs tracking-widest text-center ${b === "maxracing" ? "text-primary" : "text-muted-foreground"
                }`}
            >
              <span className="inline-flex items-center gap-1">
                {brandLabels[b]}
                {brandRefs[b] && (
                  <a href={brandRefs[b]} target="_blank" rel="noopener noreferrer" title={brandLabels[b]} className="text-muted-foreground/40 hover:text-primary transition-colors">
                    <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                  </a>
                )}
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((row: any) => (
          <TableRow key={row.feature} className="border-border/20 hover:bg-secondary/30">
            <TableCell className="font-body text-sm font-medium text-foreground">
              <FeatureLabel row={row} />
            </TableCell>
            {brands.map((b: any) => (
              <TableCell
                key={b}
                className={`text-center ${b === "maxracing" ? "bg-primary/[0.04]" : ""
                  }`}
              >
                <div className="flex justify-center">
                  <StatusIcon value={row[b]} />
                </div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

/* ── Mobile Accordion ── */
const MobileAccordion = ({ features, brands, brandLabels, brandRefs }: any) => (
  <Accordion type="single" collapsible className="space-y-2">
    {brands.map((b: any) => (
      <AccordionItem
        key={b}
        value={b}
        className={`rounded-lg border bg-gradient-card overflow-hidden ${b === "maxracing" ? "border-primary/30" : "border-border/30"
          }`}
      >
        <AccordionTrigger
          className={`px-4 py-3 font-heading text-sm tracking-widest hover:no-underline ${b === "maxracing" ? "text-primary" : "text-foreground"
            }`}
        >
          <span className="inline-flex items-center gap-1">
            {brandLabels[b]}
            {brandRefs[b] && (
              <a href={brandRefs[b]} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground/40 hover:text-primary transition-colors">
                <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
              </a>
            )}
          </span>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-3">
            {features.map((row: any) => (
              <div
                key={row.feature}
                className="flex items-start justify-between gap-3"
              >
                <span className="font-body text-xs text-muted-foreground leading-tight">
                  <FeatureLabel row={row} />
                </span>
                <div className="shrink-0">
                  <StatusIcon value={row[b]} />
                </div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const ComparisonTable = () => {
  const isMobile = useIsMobile();
  const [features, setFeatures] = useState<FeatureRow[]>(DEFAULT_FEATURES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const { data } = await supabase
          .from("comparison_features" as any)
          .select("*")
          .order("display_order");
        if (data && data.length > 0) {
          // Merge database data with verified local technical data
          const merged = (data as any[]).map(dbRow => {
            const localRow = DEFAULT_FEATURES.find(f => f.feature === dbRow.feature);
            return localRow ? { ...dbRow, ...localRow } : dbRow;
          });
          setFeatures(merged as any[]);
        }
      } catch (error) {
        console.error("Error fetching comparison features:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatures();
  }, []);

  return (
    <section className="border-t border-border/30 bg-carbon py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">
            HEAD TO HEAD
          </p>
          <h2 className="mb-4 font-heading text-4xl text-foreground md:text-5xl">
            How MaxRacing Compares
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {loading ? (
            <div className="flex h-64 items-center justify-center rounded-lg border border-border/30 bg-gradient-card">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : isMobile ? (
            <MobileAccordion features={features} brands={brands} brandLabels={brandLabels} brandRefs={brandRefs} />
          ) : (
            <DesktopTable features={features} brands={brands} brandLabels={brandLabels} brandRefs={brandRefs} />
          )}
        </motion.div>

        <p className="mt-6 font-body text-xs text-muted-foreground/60">
          Specifications may vary by model. Comparison reflects confirmed
          specifications and typical product positioning.
        </p>
      </div>
    </section>
  );
};

export default ComparisonTable;
