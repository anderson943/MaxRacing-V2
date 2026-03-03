export interface Motorcycle {
  brand: string;
  model: string;
  slug: string;
  segment: string;
}

export interface BrandGroup {
  brand: string;
  slug: string;
  models: Motorcycle[];
}

function categorize(model: string): string {
  const m = model.toLowerCase();
  if (/adventure|ténéré|tenere|super ténéré|africa twin|multistrada|versys|v-strom|tiger|transalp|varadero|falcon|xre|xtz|gs\b/.test(m)) return "Adventure / Touring";
  if (/enduro|exc|ec\s?\d|fe\s?\d|crf(?!\s*1[01]).*(?:230|250|450)|wr\b|drz/.test(m)) return "Enduro / Off-Road";
  if (/sx|fc\s?\d|smr/.test(m)) return "Motocross / Supermoto";
  if (/panigale|rr|zx-|r1\b|r6\b|r3\b|daytona|f[34]\b|hayabusa|rf900|gsxr|gsx-r|cbr\s?\d{3,}r|1125r|bb3/.test(m)) return "Sport / Supersport";
  if (/naked|mt-|z\d{3,}|duke|street triple|speed triple|brutale|rivale|hornet|er6|s1000r\b|gsr|sv\d|b-king|trident|thruxton|bonneville|scrambler/.test(m)) return "Naked / Street";
  if (/touring|boulevard|dyna|v-max/.test(m)) return "Cruiser / Touring";
  if (/gsx-s|gsx-8s|gsxs|smt\b|tracer|tdm|fazer/.test(m)) return "Sport Touring";
  return "Street";
}

function toSlug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const raw: Record<string, string[]> = {
  "AJP": ["PR4", "PR5"],
  "BMW": ["F650 GS", "F700 GS", "F800 GS", "G 310 GS", "R1200 GS", "S1000R", "S1000RR", "S1000XR"],
  "Bimota": ["BB3"],
  "Buell": ["1125R", "XB9", "XB12", "XB12X Ulysses"],
  "Ducati": ["848", "959", "1098", "1199 Panigale", "1299 Panigale", "Hypermotard", "Hyperstrada", "Monster", "Multistrada", "Panigale V4"],
  "GasGas": ["EC 200", "EC 250", "EC 300"],
  "Harley Davidson": ["Dyna"],
  "Honda": [
    "CB 1000R", "CB 300R", "CB 500", "CB 600F Hornet", "CB 650F", "CB 650R", "CB 1300",
    "CBX 200", "CBX 250 Twister", "CG 125", "CG 150", "CG 160",
    "CBR 250R", "CBR 500R", "CBR 600F", "CBR 600RR", "CBR 650F", "CBR 650R",
    "CBR 900RR", "CBR 929RR", "CBR 954RR", "CBR 1000RR",
    "CRF 230F", "CRF 250", "CRF 450", "CRF 1000L Africa Twin", "CRF 1100L Africa Twin",
    "NC 700", "NC 750", "NX 400 Falcon", "Transalp 700", "Varadero 1000",
    "XRE 190", "XRE 300"
  ],
  "Husaberg": ["FE 350", "FE 450"],
  "Husqvarna": ["FC 450"],
  "KTM": [
    "Duke 200", "Duke 390", "690 Enduro", "950 Adventure", "990 Adventure",
    "990 SMR", "990 SMT", "1050 Adventure", "1090 Adventure", "1190 Adventure",
    "1290 Adventure", "300 SX", "EXC", "350 EXC-F", "350 SX-F"
  ],
  "Kawasaki": [
    "ER6N", "Ninja 250", "Ninja 300", "Ninja 400", "Ninja 650", "Ninja 1000",
    "Versys 300", "Versys 650", "Versys 1000",
    "Z300", "Z400", "Z650", "Z750", "Z800", "Z900", "Z1000",
    "ZX-6R", "ZX-7R", "ZX-9R", "ZX-10R", "ZX-11R", "ZX-12R", "ZX-14R"
  ],
  "MV Agusta": ["Brutale", "F3", "F4", "Rivale"],
  "Suzuki": [
    "B-King", "Bandit", "Boulevard", "DL650 V-Strom", "DL1000 V-Strom",
    "DRZ 400", "GS 500", "GSR 600", "GSR 750",
    "GSX-8R", "GSX-8S", "GSX-R 600", "GSX-R 1000",
    "GSX-S 750", "GSX-S 1000", "GSX-S 1000GX", "GSX 1250", "GSX 650F",
    "Hayabusa", "SV650", "RF900"
  ],
  "SYM": ["T2 250i"],
  "Triumph": [
    "Bonneville", "Daytona", "Scrambler 1200", "Speed Triple",
    "Street Triple", "Tiger", "Trident 660", "Thruxton"
  ],
  "Yamaha": [
    "Fazer", "MT-03", "MT-07", "MT-09", "R3", "RD 135", "RD 350",
    "Super Ténéré", "TDM", "Tracer 900", "Ténéré", "V-Max",
    "WR", "XJ6", "XTZ", "YZF R1", "YZF R3", "YZF R6"
  ],
};

function buildDatabase(): BrandGroup[] {
  return Object.entries(raw)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([brand, models]) => ({
      brand,
      slug: toSlug(brand),
      models: models
        .sort((a, b) => a.localeCompare(b))
        .map((model) => {
          const fullName = `${brand} ${model}`;
          return {
            brand,
            model,
            slug: toSlug(fullName),
            segment: categorize(fullName),
          };
        }),
    }));
}

export const motorcycleDatabase: BrandGroup[] = buildDatabase();

export const allBrands = motorcycleDatabase.map((g) => g.brand);

export const allSegments = [
  ...new Set(motorcycleDatabase.flatMap((g) => g.models.map((m) => m.segment))),
].sort();

export function searchMotorcycles(query: string, segment?: string): Motorcycle[] {
  const q = query.toLowerCase().trim();
  return motorcycleDatabase.flatMap((g) =>
    g.models.filter((m) => {
      const matchesQuery =
        !q ||
        m.brand.toLowerCase().includes(q) ||
        m.model.toLowerCase().includes(q) ||
        `${m.brand} ${m.model}`.toLowerCase().includes(q);
      const matchesSegment = !segment || m.segment === segment;
      return matchesQuery && matchesSegment;
    })
  );
}
