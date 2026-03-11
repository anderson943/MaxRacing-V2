import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Globe, MapPin, Mail, MessageCircle, ExternalLink, ShieldCheck, ShoppingCart, Crosshair, Wrench, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import dealerData from "@/data/shop.json";
import { COUNTRIES, COUNTRY_REGIONS } from "@/data/countries";

// Use the comprehensive list of countries provided
const availableCountries = COUNTRIES;

// Predefined fallback regions
const REGIONS = [
    "Africa",
    "North America",
    "Europe",
    "Asia",
    "Middle East",
    "South America",
    "Oceania",
];

const Shop = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

    const filteredDealers = React.useMemo(() => {
        if (!selectedCountry) return [];

        // Hauer Imports is always the first choice for every country EXCEPT Brazil
        const hauer = selectedCountry === "Brazil" ? null : dealerData.find(d => d.id === "hauer-imports");

        // Find other dealers for this country
        const others = dealerData.filter(d =>
            d.country === selectedCountry && d.id !== "hauer-imports"
        );

        return hauer ? [hauer, ...others] : others;
    }, [selectedCountry]);

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(e.target.value);
        setExpandedRegion(null); // Reset region expansion if country selected
    };

    const handleRegionClick = (region: string) => {
        setExpandedRegion(expandedRegion === region ? null : region);
        setSelectedCountry(""); // Optionally clear country filter when exploring by region
    };

    return (
        <Layout>
            <Helmet>
                <title>Where to Buy MaxRacing | Authorized Dealers & Online Shop</title>
                <meta name="description" content="Find authorized MaxRacing dealers worldwide or shop online via our fitment guide. Genuine motorcycle steering stabilizers and parts." />
                <link rel="canonical" href="https://www.maxracing.us/shop" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-secondary/20 z-0"></div>
                <div className="container relative z-10 px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl pt-8">
                        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight uppercase">
                            Where to Buy <span className="text-primary">MaxRacing</span>
                        </h1>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
                            Buy MaxRacing products through our authorized dealers and international sellers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="font-heading tracking-wider uppercase text-primary-foreground min-w-[200px]">
                                <Link to="/become-a-dealer">BECOME A DEALER</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="font-heading tracking-wider uppercase min-w-[200px] border-primary/50 text-foreground hover:bg-primary/10">
                                <Link to="/fitment-guide">FITMENT GUIDE</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="border-b border-border bg-gradient-to-r from-background via-secondary/30 to-background border-t">
                <div className="container px-4 md:px-6 py-4 mx-auto flex items-start sm:items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5 sm:mt-0" />
                    <p className="font-body text-sm sm:text-base text-muted-foreground">
                        <strong className="text-foreground">Important Notice:</strong> To ensure genuine products and warranty coverage, purchase only from authorized sellers.
                    </p>
                </div>
            </section>

            {/* Dealer Finder Section */}
            <section className="py-20 bg-background relative">
                <div className="container px-4 md:px-6 mx-auto">

                    <div className="max-w-xl mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 uppercase">Find an Authorized Dealer</h2>

                        {/* Country Selector */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <select
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                className="w-full pl-12 pr-4 py-4 rounded-md border border-input bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                            >
                                <option value="">Select your country...</option>
                                {availableCountries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>

                        <p className="mt-4 font-body text-sm text-muted-foreground">
                            Can't find your country? <a href="#help-contact" className="text-primary hover:underline">Contact us</a>.
                        </p>
                    </div>

                    {/* Filtered Results View */}
                    {selectedCountry && (
                        <div className="mb-16">
                            <h3 className="font-heading text-xl text-primary mb-6 flex items-center gap-2">
                                <MapPin className="h-5 w-5" /> Dealers in {selectedCountry}
                            </h3>

                            {filteredDealers.length > 0 ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {filteredDealers.map(dealer => (
                                        <DealerCard key={dealer.id} dealer={dealer} />
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 border border-border rounded-lg bg-card text-center">
                                    <p className="text-muted-foreground font-body">No dealers currently listed for this country.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Region Fallbacks */}
                    {!selectedCountry && (
                        <div className="mt-8 border-t border-border pt-12">
                            <h3 className="font-heading text-xl text-foreground mb-8">OR BROWSE BY REGION</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {REGIONS.map(region => {
                                    // Filter countries that belong to this region
                                    const countriesInRegion = COUNTRIES.filter(country => COUNTRY_REGIONS[country] === region);

                                    // If we click a region, we show a list of countries in that region that Hauer delivers to
                                    const isExpanded = expandedRegion === region;

                                    return (
                                        <div key={region} className="border border-border rounded-md overflow-hidden bg-card transition-all">
                                            <button
                                                onClick={() => handleRegionClick(region)}
                                                className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
                                            >
                                                <span className="font-heading font-bold">{region}</span>
                                                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{countriesInRegion.length} Countries</span>
                                            </button>

                                            {isExpanded && (
                                                <div className="p-4 border-t border-border bg-background/50 flex flex-col gap-2 max-h-80 overflow-y-auto custom-scrollbar">
                                                    {countriesInRegion.length > 0 ? (
                                                        countriesInRegion.map(country => (
                                                            <button
                                                                key={country}
                                                                onClick={() => {
                                                                    setSelectedCountry(country);
                                                                    setExpandedRegion(null);
                                                                    window.scrollTo({ top: 300, behavior: 'smooth' });
                                                                }}
                                                                className="text-left py-2 px-3 rounded hover:bg-primary/10 text-sm font-body transition-colors flex items-center justify-between group"
                                                            >
                                                                <span>{country}</span>
                                                                <span className="text-[10px] text-primary opacity-0 group-hover:opacity-100 uppercase tracking-tighter transition-opacity">Select</span>
                                                            </button>
                                                        ))
                                                    ) : (
                                                        <p className="text-sm text-muted-foreground italic">No countries listed in this region yet.</p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* Online Stores Section */}
            <section className="py-16 bg-secondary/20 border-y border-border">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 uppercase text-center sm:text-left">
                        Official Online Stores
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border border-primary/20 bg-background p-6 rounded-xl shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Globe className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="font-heading font-bold text-xl">Hauer Imports</h3>
                            </div>
                            <p className="font-body text-muted-foreground text-sm mb-6">
                                Ships within the USA and internationally. The primary authorized seller for worldwide online orders.
                            </p>
                            <Link
                                to="/fitment-guide"
                                className="inline-flex items-center justify-center w-full gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                            >
                                <ShoppingCart className="h-4 w-4" /> Shop via Fitment Guide
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* Why Buy Authorized */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-heading text-3xl font-bold uppercase mb-4">Why Buy Authorized?</h2>
                        <p className="font-body text-muted-foreground">Purchasing from our approved network ensures you receive the quality and support you expect from MaxRacing.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: ShieldCheck, title: "Genuine Products", text: "Guaranteed authentic CNC components." },
                            { icon: FileText, title: "Warranty Support", text: "Full eligibility for protection & replacement." },
                            { icon: Wrench, title: "Technical Help", text: "Direct access to engineering advice." },
                            { icon: Crosshair, title: "Correct Fitment", text: "Get the right brackets for your exact bike." }
                        ].map((feature, i) => (
                            <div key={i} className="bg-card border border-border/50 p-6 rounded-lg text-center">
                                <div className="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="font-heading font-bold mb-2">{feature.title}</h4>
                                <p className="text-sm font-body text-muted-foreground">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Dealer Hero CTA */}
            <section className="py-24 relative bg-background border-t border-border overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
                <div className="container px-4 md:px-6 mx-auto relative z-10 text-center max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6">Become a MaxRacing Dealer</h2>
                    <p className="font-body text-lg md:text-xl text-muted-foreground mb-10">
                        Join our global dealer network. Get dealer pricing, engineering support, and marketing materials.
                    </p>
                    <Button asChild size="lg" className="font-heading tracking-wider uppercase min-w-[240px] shadow-lg shadow-primary/20 hover:scale-105 transition-transform h-14 text-base">
                        <Link to="/become-a-dealer">APPLY NOW</Link>
                    </Button>
                </div>
            </section>

            {/* Help / Contact Form Section */}
            <section id="help-contact" className="py-20 bg-secondary/30 border-t border-border">
                <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-heading text-3xl font-bold uppercase mb-4">Need Help Buying?</h2>
                            <p className="font-body text-muted-foreground mb-8">
                                If you can't find a dealer in your country or need specific ordering assistance, contact us directly and we'll connect you with the right seller.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-background border border-border rounded-full flex items-center justify-center">
                                        <Mail className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-body text-foreground">info@maxracing.us</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-background border border-border rounded-lg p-6 lg:p-8">
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-body font-medium">Name</label>
                                        <input type="text" className="w-full bg-card border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-body font-medium">Email</label>
                                        <input type="email" className="w-full bg-card border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-body font-medium">Country</label>
                                    <input type="text" className="w-full bg-card border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Where are you located?" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-body font-medium">Message</label>
                                    <textarea rows={4} className="w-full bg-card border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50 resize-y" placeholder="What parts are you looking for?"></textarea>
                                </div>
                                <Button className="w-full font-heading tracking-wider uppercase">Submit Request</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

// Sub-component for rendering dealer cards
const DealerCard = ({ dealer, compact = false }: { dealer: any, compact?: boolean }) => {
    return (
        <div className={`border rounded-lg overflow-hidden bg-background flex flex-col h-full transition-all hover:border-primary/50 ${compact ? 'border-border/50 p-4' : 'border-border p-6 shadow-sm'}`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className={`font-heading font-bold ${compact ? 'text-lg' : 'text-xl md:text-2xl'}`}>{dealer.name}</h4>
                    {dealer.cityState && (
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {dealer.cityState}, {dealer.country}
                        </p>
                    )}
                </div>
            </div>

            {!compact && dealer.description && (
                <p className="font-body text-sm text-muted-foreground mb-4 flex-grow">{dealer.description}</p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6 mt-2">
                {dealer.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border ${tag.includes('Primary') ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-secondary border-border text-foreground/80'
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action Button */}
            <div className="mt-auto">
                {dealer.whatsapp ? (
                    <a href={dealer.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                        Contact by WhatsApp <MessageCircle className="h-4 w-4" />
                    </a>
                ) : dealer.website ? (
                    <a href={dealer.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                        Visit Website <ExternalLink className="h-3 w-3" />
                    </a>
                ) : (
                    <div className="flex items-center justify-center gap-2 bg-secondary text-muted-foreground py-2 px-4 rounded-md text-sm font-medium border border-border cursor-not-allowed">
                        Website Pending
                    </div>
                )}
            </div>
        </div>
    );
};

// Mock lucide icon (not imported initially to save space, but used in the array)
const FileText = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
);

export default Shop;
