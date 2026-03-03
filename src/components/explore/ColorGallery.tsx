import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Images } from "lucide-react";

export interface ColorCombo {
  id: string;
  bodyColor: string;
  adjusterColor: string;
  label: string;
  image: string | null;
}

// 7 body colors × 7 adjuster colors = 49 combos
const bodyColors = ["Black", "Red", "Blue", "Gold", "Green", "Silver", "Orange"] as const;
const adjusterColors = ["Black", "Red", "Blue", "Gold", "Green", "Silver", "Orange"] as const;

// Images provided so far (will be expanded to 49)
const availableImages: Record<string, string> = {
  // Black adjuster
  "Black-Black": "/images/gallery/Black-Black.png",
  "Red-Black": "/images/gallery/Red-Black.png",
  "Blue-Black": "/images/gallery/Blue-Black.png",
  "Gold-Black": "/images/gallery/Gold-Black.png",
  "Green-Black": "/images/gallery/Green-Black.png",
  "Silver-Black": "/images/gallery/Silver-Black.png",
  "Orange-Black": "/images/gallery/Orange-Black.png",
  // Gold adjuster
  "Black-Gold": "/images/gallery/Black-Gold.png",
  "Red-Gold": "/images/gallery/Red-Gold.png",
  "Blue-Gold": "/images/gallery/Blue-Gold.png",
  "Gold-Gold": "/images/gallery/Gold-Gold.png",
  "Green-Gold": "/images/gallery/Green-Gold.png",
  "Silver-Gold": "/images/gallery/Silver-Gold.png",
  "Orange-Gold": "/images/gallery/Orange-Gold.png",
  // Silver adjuster
  "Black-Silver": "/images/gallery/Black-Silver.png",
  "Red-Silver": "/images/gallery/Red-Silver.png",
  "Blue-Silver": "/images/gallery/Blue-Silver.png",
  "Gold-Silver": "/images/gallery/Gold-Silver.png",
  "Silver-Silver": "/images/gallery/Silver-Silver.png",
  "Green-Silver": "/images/gallery/Green-Silver.png",
  "Orange-Silver": "/images/gallery/Orange-Silver.png",
  // Orange adjuster
  "Black-Orange": "/images/gallery/Black-Orange.png",
  "Red-Orange": "/images/gallery/Red-Orange.png",
  "Blue-Orange": "/images/gallery/Blue-Orange.png",
  "Gold-Orange": "/images/gallery/Gold-Orange.png",
  "Green-Orange": "/images/gallery/Green-Orange.png",
  "Silver-Orange": "/images/gallery/Silver-Orange.png",
  "Orange-Orange": "/images/gallery/Orange-Orange.png",
  // Green adjuster
  "Black-Green": "/images/gallery/Black-Green.png",
  "Red-Green": "/images/gallery/Red-Green.png",
  "Silver-Green": "/images/gallery/Silver-Green.png",
  "Orange-Green": "/images/gallery/Orange-Green.png",
  "Blue-Green": "/images/gallery/Blue-Green.png",
  "Gold-Green": "/images/gallery/Gold-Green.png",
  "Green-Green": "/images/gallery/Green-Green.png",
  // Blue adjuster
  "Black-Blue": "/images/gallery/Black-Blue.png",
  "Red-Blue": "/images/gallery/Red-Blue.png",
  "Blue-Blue": "/images/gallery/Blue-Blue.png",
  "Gold-Blue": "/images/gallery/Gold-Blue.png",
  "Green-Blue": "/images/gallery/Green-Blue.png",
  "Silver-Blue": "/images/gallery/Silver-Blue.png",
  "Orange-Blue": "/images/gallery/Orange-Blue.png",
  // Red adjuster
  "Black-Red": "/images/gallery/Black-Red.png",
  "Silver-Red": "/images/gallery/Silver-Red.png",
  "Red-Red": "/images/gallery/Red-Red.png",
  "Blue-Red": "/images/gallery/Blue-Red.png",
  "Gold-Red": "/images/gallery/Gold-Red.png",
  "Green-Red": "/images/gallery/Green-Red.png",
  "Orange-Red": "/images/gallery/Orange-Red.png",
};

const allCombos: ColorCombo[] = bodyColors.flatMap((body) =>
  adjusterColors.map((adjuster) => ({
    id: `${body}-${adjuster}`,
    bodyColor: body,
    adjusterColor: adjuster,
    label: `${body} Body / ${adjuster} Adjuster`,
    image: availableImages[`${body}-${adjuster}`] || null,
  }))
);

const colorSwatchGradient: Record<string, string> = {
  Black: "radial-gradient(ellipse at 30% 30%, hsl(0 0% 30%), hsl(0 0% 8%) 70%)",
  Red: "radial-gradient(ellipse at 30% 30%, hsl(0 80% 65%), hsl(0 85% 35%) 70%)",
  Blue: "radial-gradient(ellipse at 30% 30%, hsl(220 90% 70%), hsl(220 90% 35%) 70%)",
  Gold: "radial-gradient(ellipse at 30% 30%, hsl(45 95% 75%), hsl(40 85% 40%) 70%)",
  Green: "radial-gradient(ellipse at 30% 30%, hsl(145 60% 55%), hsl(145 70% 25%) 70%)",
  Silver: "radial-gradient(ellipse at 30% 30%, hsl(0 0% 90%), hsl(0 0% 55%) 70%)",
  Orange: "radial-gradient(ellipse at 30% 30%, hsl(30 95% 65%), hsl(20 90% 38%) 70%)",
};

const ColorGallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="lg"
        className="font-heading text-base tracking-wider uppercase shadow-accent"
      >
        <Images className="mr-2 h-5 w-5" />
        Open Gallery
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col border-border/30 bg-background">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-foreground">
              49 Color Combinations
            </DialogTitle>
            <p className="font-body text-sm text-muted-foreground">
              Browse all 49 body and adjuster color options.
            </p>
          </DialogHeader>

          {/* Gallery grid */}
          <div className="flex-1 overflow-y-auto pr-1">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
              {allCombos.map((combo) => (
                <div
                  key={combo.id}
                  className="rounded-lg border border-border/30 overflow-hidden"
                >
                  {combo.image ? (
                    <img
                      src={combo.image}
                      alt={combo.label}
                      className="aspect-square w-full object-contain bg-white p-1"
                    />
                  ) : (
                    <div className="aspect-square w-full flex flex-col items-center justify-center gap-1 p-2">
                      <div
                        className="h-6 w-6 rounded-full border border-border/40 md:h-8 md:w-8"
                        style={{ background: colorSwatchGradient[combo.bodyColor] }}
                      />
                      <span className="text-muted-foreground text-[8px]">+</span>
                      <div
                        className="h-6 w-6 rounded-full border border-border/40 md:h-8 md:w-8"
                        style={{ background: colorSwatchGradient[combo.adjusterColor] }}
                      />
                    </div>
                  )}
                  <div className="p-1 text-center">
                    <p className="font-heading text-[8px] leading-tight tracking-wider text-muted-foreground md:text-[10px]">
                      {combo.bodyColor} / {combo.adjusterColor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ColorGallery;
