import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Search, Bike, ChevronRight, X, SlidersHorizontal, Loader2, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface Motorcycle {
  brand: string;
  model: string;
  slug: string;
  segment: string;
  hasImage?: boolean;
}

const DEFAULT_BRANDS = ["Kawasaki", "Honda", "Yamaha", "Suzuki", "KTM"];

import { bikes } from "@/data/bikes"; // Importing the parsed JSON data directly
const DEFAULT_MOTORCYCLES: Motorcycle[] = bikes as Motorcycle[];

const FitmentGuide = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedSegment, setSelectedSegment] = useState<string>("");
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>(DEFAULT_MOTORCYCLES);
  const [allBrands, setAllBrands] = useState<string[]>(DEFAULT_BRANDS);
  const [allSegments, setAllSegments] = useState<string[]>(Array.from(new Set(DEFAULT_MOTORCYCLES.map(b => b.segment))).sort());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Re-derive brands directly from the static dataset instead of hitting Supabase
    setAllBrands(Array.from(new Set(DEFAULT_MOTORCYCLES.map(b => b.brand))).sort());
    setLoading(false);
  }, []);

  const activeBrand = selectedBrand === "__all__" ? "" : selectedBrand;
  const activeSegment = selectedSegment === "__all__" ? "" : selectedSegment;

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.hash]);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    return motorcycles.filter((m) => {
      const matchesQuery =
        !q ||
        m.brand.toLowerCase().includes(q) ||
        m.model.toLowerCase().includes(q) ||
        `${m.brand} ${m.model}`.toLowerCase().includes(q);
      const matchesBrand = !activeBrand || m.brand === activeBrand;
      const matchesSegment = !activeSegment || m.segment === activeSegment;
      return matchesQuery && matchesBrand && matchesSegment;
    });
  }, [query, activeBrand, activeSegment, motorcycles]);

  const groupedResults = useMemo(() => {
    const map = new Map<string, typeof results>();
    results.forEach((m) => {
      if (!map.has(m.brand)) map.set(m.brand, []);
      map.get(m.brand)!.push(m);
    });
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [results]);

  const hasFilters = query || activeBrand || activeSegment;

  const clearFilters = () => {
    setQuery("");
    setSelectedBrand("");
    setSelectedSegment("");
  };

  return (
    <Layout>
      <Helmet>
        <title>Motorcycle Steering Damper Fitment Guide | MaxRacing</title>
        <meta name="description" content="Find the exact steering stabilizer fitment for your motorcycle. Search our comprehensive catalog of Kawasaki, Honda, Yamaha, Suzuki, and KTM applications." />
        <link rel="canonical" href="https://www.maxracing.us/fitment-guide" />
      </Helmet>
      <section id="fitment-guide" className="py-24">
        <div className="container">
          {/* Header */}
          <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">
            PRODUCT CATALOG
          </p>
          <h1 className="mb-4 font-heading text-5xl text-foreground">
            Find Your Fit
          </h1>
          <p className="mb-10 max-w-xl font-body text-muted-foreground">
            Select your motorcycle brand, model, and segment to find your exact fitment. All compatibility data is sourced directly — no guessing, no assumptions.
          </p>

          {/* Filters */}
          <div className="mb-8 rounded-lg border border-border/40 bg-gradient-card p-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-heading tracking-wider text-muted-foreground uppercase">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
              Filter Applications
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search brand or model…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border-border/40 bg-background/50 pl-10 font-body placeholder:text-muted-foreground/60"
                />
              </div>

              {/* Brand */}
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="border-border/40 bg-background/50 font-body">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">All Brands</SelectItem>
                  {allBrands.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Segment */}
              <Select value={selectedSegment} onValueChange={setSelectedSegment}>
                <SelectTrigger className="border-border/40 bg-background/50 font-body">
                  <SelectValue placeholder="All Segments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">All Segments</SelectItem>
                  {allSegments.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {hasFilters && (
              <div className="mt-4 flex items-center gap-3">
                <span className="font-heading text-sm text-primary">
                  {results.length} application{results.length !== 1 ? "s" : ""} found
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="h-7 gap-1 px-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" /> Clear
                </Button>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-lg border border-border/20 bg-gradient-card p-12 text-center"
                >
                  <Loader2 className="mx-auto mb-4 h-10 w-10 animate-spin text-primary" />
                  <p className="font-heading text-lg text-muted-foreground">
                    Fetching latest applications...
                  </p>
                </motion.div>
              ) : groupedResults.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-lg border border-border/20 bg-gradient-card p-12 text-center"
                >
                  <Bike className="mx-auto mb-4 h-10 w-10 text-muted-foreground/40" />
                  <p className="font-heading text-lg text-muted-foreground">
                    No applications match your search.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground/60">
                    Try a different brand or keyword.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {groupedResults.map(([brand, models]) => (
                    <div
                      key={brand}
                      className="overflow-hidden rounded-lg border border-border/30 bg-gradient-card"
                    >
                      {/* Brand header */}
                      <div className="flex items-center gap-3 border-b border-border/20 px-6 py-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10">
                          <Bike className="h-4 w-4 text-primary" />
                        </div>
                        <h3 className="font-heading text-lg tracking-wide text-foreground">
                          {brand}
                        </h3>
                        <span className="ml-auto font-body text-xs text-muted-foreground">
                          {models.length} model{models.length !== 1 ? "s" : ""}
                        </span>
                      </div>

                      {/* Models grid */}
                      <div className="grid gap-px bg-border/10 sm:grid-cols-2 lg:grid-cols-3">
                        {models.map((m) => (
                          <div
                            key={m.slug}
                            className="group flex items-center justify-between bg-card px-6 py-3 transition-colors hover:bg-secondary/50"
                          >
                            <div className="flex w-full items-center justify-between">
                              <div>
                                <p className="font-heading text-sm text-foreground">
                                  {m.model}
                                </p>
                                <p className="text-xs text-muted-foreground/70">
                                  {m.segment}
                                </p>
                              </div>
                              
                              {m.hasImage && (
                                <button
                                  onClick={() => setSelectedImage(`/installed_photos/${m.slug}.jpg`)}
                                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                                  title="View Installed Photo"
                                >
                                  <Camera className="h-4 w-4" />
                                </button>
                              )}
                            </div>

                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footnote */}
          <p className="mt-8 text-center font-body text-xs text-muted-foreground/50">
            Application data reflects confirmed MaxRacing fitments. Availability may vary by model year and variant.
          </p>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-border/40 bg-card p-0 overflow-hidden outline-none">
          {/* Hidden title for screen reader accessibility */}
          <DialogTitle className="sr-only">Installed Motorcycle Photo</DialogTitle>
          <div className="relative flex items-center justify-center bg-black/90 p-2 min-h-[50vh]">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Installed Photo" 
                className="w-full h-auto max-h-[85vh] object-contain rounded-md"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default FitmentGuide;
