import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const DEFAULT_VIDEOS = ["YdDzio_Lde0", "cNOr45ivW3I", "u1pP11Cwjgs", "-qmeGXJ0Ak8", "KoKGl7BEQEU", "SABnlbEycx8", "KZT7DcLYkOY"];

const YouTubeCarousel = () => {
  const [videos, setVideos] = useState<string[]>(DEFAULT_VIDEOS);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await supabase
          .from("youtube_videos" as any)
          .select("video_id")
          .order("display_order");
        if (data && data.length > 0) {
          setVideos((data as any[]).map(v => v.video_id));
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, [videos]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="border-t border-border/30 bg-carbon py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">
            SEE IT IN ACTION
          </p>
          <h2 className="font-heading text-3xl text-foreground md:text-4xl">
            MaxRacing Videos
          </h2>
        </motion.div>

        <div className="relative">
          {/* Scroll buttons */}
          {canScrollLeft && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/30 bg-background/80 backdrop-blur-sm hover:bg-primary/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          {canScrollRight && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/30 bg-background/80 backdrop-blur-sm hover:bg-primary/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {loading ? (
              <div className="flex h-[320px] w-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              videos.map((id, i) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-shrink-0"
                >
                  <div className="overflow-hidden rounded-lg border border-border/30">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?rel=0`}
                      title={`MaxRacing Video ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="h-[320px] w-[180px] sm:h-[400px] sm:w-[225px]"
                    />
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCarousel;
