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
import { Search, Bike, ChevronRight, X, SlidersHorizontal, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface Motorcycle {
  brand: string;
  model: string;
  slug: string;
  segment: string;
}

const DEFAULT_BRANDS = ["Kawasaki", "Honda", "Yamaha", "Suzuki", "KTM"];

const DEFAULT_MOTORCYCLES: Motorcycle[] = [
  { brand: "Kawasaki", model: "Z400", slug: "kawasaki-z400", segment: "Naked" },
  { brand: "Kawasaki", model: "Ninja 400", slug: "kawasaki-ninja-400", segment: "Sport" },
  { brand: "Kawasaki", model: "Z650", slug: "kawasaki-z650", segment: "Naked" },
  { brand: "Kawasaki", model: "Ninja 650", slug: "kawasaki-ninja-650", segment: "Sport" },
  { brand: "Kawasaki", model: "Z900", slug: "kawasaki-z900", segment: "Naked" },
  { brand: "Kawasaki", model: "Ninja 1000SX", slug: "kawasaki-ninja-1000sx", segment: "Sport Touring" },
  { brand: "Honda", model: "CB300R", slug: "honda-cb300r", segment: "Naked" },
  { brand: "Honda", model: "CBR500R", slug: "honda-cbr500r", segment: "Sport" },
  { brand: "Honda", model: "CB500F", slug: "honda-cb500f", segment: "Naked" },
  { brand: "Honda", model: "CB650R", slug: "honda-cb650r", segment: "Naked" },
  { brand: "Honda", model: "CBR650R", slug: "honda-cbr650r", segment: "Sport" },
  { brand: "Honda", model: "CB1000R", slug: "honda-cb1000r", segment: "Naked" },
  { brand: "Yamaha", model: "MT-03", slug: "yamaha-mt-03", segment: "Naked" },
  { brand: "Yamaha", model: "R3", slug: "yamaha-r3", segment: "Sport" },
  { brand: "Yamaha", model: "MT-07", slug: "yamaha-mt-07", segment: "Naked" },
  { brand: "Yamaha", model: "R7", slug: "yamaha-r7", segment: "Sport" },
  { brand: "Yamaha", model: "MT-09", slug: "yamaha-mt-09", segment: "Naked" },
  { brand: "Yamaha", model: "MT-10", slug: "yamaha-mt-10", segment: "Naked" },
  { brand: "Suzuki", model: "GSX250R", slug: "suzuki-gsx250r", segment: "Sport" },
  { brand: "Suzuki", model: "SV650", slug: "suzuki-sv650", segment: "Naked" },
  { brand: "Suzuki", model: "GSX-S750", slug: "suzuki-gsx-s750", segment: "Naked" },
  { brand: "Suzuki", model: "GSX-S1000", slug: "suzuki-gsx-s1000", segment: "Naked" },
  { brand: "KTM", model: "390 Duke", slug: "ktm-390-duke", segment: "Naked" },
  { brand: "KTM", model: "RC 390", slug: "ktm-rc-390", segment: "Sport" },
  { brand: "KTM", model: "790 Duke", slug: "ktm-790-duke", segment: "Naked" },
  { brand: "KTM", model: "890 Duke", slug: "ktm-890-duke", segment: "Naked" },
  { brand: "KTM", model: "1290 Super Duke R", slug: "ktm-1290-super-duke-r", segment: "Naked" },
];

const FitmentGuide = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedSegment, setSelectedSegment] = useState<string>("");
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>(DEFAULT_MOTORCYCLES);
  const [allBrands, setAllBrands] = useState<string[]>(DEFAULT_BRANDS);
  const [allSegments, setAllSegments] = useState<string[]>(Array.from(new Set(DEFAULT_MOTORCYCLES.map(b => b.segment))).sort());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch brands
        const { data: brandsData } = await supabase
          .from("brands")
          .select("name")
          .order("name");

        if (brandsData && brandsData.length > 0) {
          setAllBrands(brandsData.map(b => b.name));
        }

        // Fetch motorcycles with brand names
        const { data: bikesData, error: bikesError } = await supabase
          .from("motorcycles")
          .select(`
            model,
            slug,
            segment,
            brands (name)
          `);

        if (bikesError) throw bikesError;

        if (bikesData && bikesData.length > 0) {
          const formattedBikes: Motorcycle[] = bikesData.map((b: any) => ({
            brand: b.brands.name,
            model: b.model,
            slug: b.slug,
            segment: b.segment
          }));
          setMotorcycles(formattedBikes);

          // Derive segments from unique values
          const segments = Array.from(new Set(formattedBikes.map(b => b.segment))).sort();
          setAllSegments(segments);
        }
      } catch (error) {
        console.error("Error fetching fitment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
                            <div>
                              <p className="font-heading text-sm text-foreground">
                                {m.model}
                              </p>
                              <p className="text-xs text-muted-foreground/70">
                                {m.segment}
                              </p>
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
    </Layout>
  );
};

export default FitmentGuide;
