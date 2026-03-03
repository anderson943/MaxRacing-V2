import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Globe,
  Truck,
  Clock,
  Palette,
  Headphones,
  PackageCheck,
  Video,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Globe, title: "Competitive Wholesale Pricing", desc: "Aggressive margins built for volume growth and long-term partnerships." },
  { icon: Truck, title: "Global Shipping Support", desc: "We ship worldwide with reliable logistics and customs documentation." },
  { icon: Clock, title: "Fast Production Lead Times", desc: "Short turnaround from order to delivery — keep your stock moving." },
  { icon: Palette, title: "Marketing Assets Included", desc: "High-res images, technical specs, and branded collateral ready to deploy." },
  { icon: Headphones, title: "Dedicated Dealer Support", desc: "Direct line to our team for orders, fitment questions, and strategy." },
  { icon: PackageCheck, title: "Drop Shipping Available", desc: "Sell without holding inventory — we ship directly to your customers." },
  { icon: Video, title: "Social Media Video Content", desc: "Professional video content provided at no cost for your first year." },
  { icon: ShieldCheck, title: "Strict MAP Policy", desc: "We protect our sellers and maintain brand value — no price erosion." },
];

const salesChannels = ["Retail Store", "Online Store", "Marketplace", "Workshop", "Other"];

const BecomeADealer = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    companyName: "",
    website: "",
    country: "",
    cityState: "",
    fullName: "",
    email: "",
    phone: "",
    businessType: "",
    yearsInBusiness: "",
    salesChannels: [] as string[],
    currentBrands: "",
    monthlyVolume: "",
    countriesServed: "",
    intents: [] as string[],
    message: "",
    confirm: false,
  });

  const update = (key: string, value: unknown) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const toggleChannel = (ch: string) => {
    setForm((f) => ({
      ...f,
      salesChannels: f.salesChannels.includes(ch)
        ? f.salesChannels.filter((c) => c !== ch)
        : [...f.salesChannels, ch],
    }));
  };

  const toggleIntent = (i: string) => {
    setForm((f) => ({
      ...f,
      intents: f.intents.includes(i)
        ? f.intents.filter((x) => x !== i)
        : [...f.intents, i],
    }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.companyName.trim()) e.companyName = "Required";
    if (!form.country.trim()) e.country = "Required";
    if (!form.cityState.trim()) e.cityState = "Required";
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.businessType) e.businessType = "Required";
    if (!form.countriesServed.trim()) e.countriesServed = "Required";
    if (!form.message.trim()) e.message = "Required";
    if (!form.confirm) e.confirm = "You must confirm this";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const { error } = await supabase.from("dealer_applications").insert([
        {
          company_name: form.companyName,
          website: form.website,
          country: form.country,
          city_state: form.cityState,
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          business_type: form.businessType,
          years_in_business: form.yearsInBusiness,
          sales_channels: form.salesChannels,
          current_brands: form.currentBrands,
          monthly_volume: form.monthlyVolume,
          countries_served: form.countriesServed,
          intents: form.intents,
          message: form.message,
        },
      ]);

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Application submitted",
        description: "Your dealer application has been received. We'll be in touch soon!"
      });
    } catch (error: any) {
      console.error("Error submitting dealer application:", error);
      toast({
        title: "Submission failed",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });

      // Fallback to mailto if database fails (optional but good for UX)
      const subject = encodeURIComponent(`Dealer Application (Backup) — ${form.companyName}`);
      const body = encodeURIComponent(
        `Company: ${form.companyName}\nCountry: ${form.country}\nCity/State: ${form.cityState}\nWebsite: ${form.website || "N/A"}\n\nContact: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nBusiness Type: ${form.businessType}\nYears in Business: ${form.yearsInBusiness || "N/A"}\nSales Channels: ${form.salesChannels.join(", ") || "N/A"}\nCurrent Brands: ${form.currentBrands || "N/A"}\nMonthly Volume: ${form.monthlyVolume || "N/A"}\nCountries Served: ${form.countriesServed}\nInterests: ${form.intents.join(", ") || "N/A"}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:info@maxracing.us?subject=${subject}&body=${body}`;
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("dealer-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const fieldError = (key: string) =>
    errors[key] ? <p className="mt-1 text-xs text-destructive">{errors[key]}</p> : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-heading text-sm tracking-[0.3em] text-primary"
          >
            GLOBAL DEALER PROGRAM
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-heading text-5xl md:text-6xl text-foreground"
          >
            Become a Max<span className="text-primary">Racing</span> Dealer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl font-body text-lg text-muted-foreground"
          >
            We're expanding globally. Apply to distribute MaxRacing steering dampers in your country.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            <Button size="lg" onClick={scrollToForm} className="font-heading tracking-wider uppercase gap-2">
              Apply Now <ChevronDown className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-carbon">
        <div className="container">
          <p className="mb-3 text-center font-heading text-sm tracking-[0.3em] text-primary">WHY PARTNER WITH US</p>
          <h2 className="mb-12 text-center font-heading text-4xl text-foreground">Built for Serious Partners</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-lg border border-border/30 bg-gradient-card p-6 transition-colors hover:border-primary/30"
              >
                <b.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-heading text-base text-foreground">{b.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" onClick={scrollToForm} className="font-heading tracking-wider uppercase gap-2">
              Apply Now <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="dealer-form" className="scroll-mt-24 py-20">
        <div className="container max-w-3xl">
          <p className="mb-3 text-center font-heading text-sm tracking-[0.3em] text-primary">DEALER APPLICATION</p>
          <h2 className="mb-10 text-center font-heading text-4xl text-foreground">Apply to Partner</h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-lg border border-primary/30 bg-gradient-card p-12 text-center"
            >
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 font-heading text-2xl text-foreground">Application Submitted</h3>
              <p className="font-body text-muted-foreground">
                Thanks — we'll review your application and reply within 1–3 business days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 rounded-lg border border-border/30 bg-gradient-card p-8">
              {/* Company Info */}
              <div>
                <h3 className="mb-4 font-heading text-lg tracking-wider text-metallic uppercase border-b border-border/30 pb-2">Company Information</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label className="text-muted-foreground">Company Name *</Label>
                    <Input value={form.companyName} onChange={(e) => update("companyName", e.target.value)} className="mt-1 border-border/40 bg-background/50" />
                    {fieldError("companyName")}
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Website / Online Store URL</Label>
                    <Input value={form.website} onChange={(e) => update("website", e.target.value)} className="mt-1 border-border/40 bg-background/50" placeholder="https://" />
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Country *</Label>
                    <Input value={form.country} onChange={(e) => update("country", e.target.value)} className="mt-1 border-border/40 bg-background/50" />
                    {fieldError("country")}
                  </div>
                  <div>
                    <Label className="text-muted-foreground">City / State *</Label>
                    <Input value={form.cityState} onChange={(e) => update("cityState", e.target.value)} className="mt-1 border-border/40 bg-background/50" />
                    {fieldError("cityState")}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-4 font-heading text-lg tracking-wider text-metallic uppercase border-b border-border/30 pb-2">Contact</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label className="text-muted-foreground">Full Name *</Label>
                    <Input value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className="mt-1 border-border/40 bg-background/50" />
                    {fieldError("fullName")}
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Email *</Label>
                    <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1 border-border/40 bg-background/50" />
                    {fieldError("email")}
                  </div>
                  <div>
                    <Label className="text-muted-foreground">WhatsApp / Phone *</Label>
                    <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1 border-border/40 bg-background/50" placeholder="+1 555 000 0000" />
                    {fieldError("phone")}
                  </div>
                </div>
              </div>

              {/* Business Profile */}
              <div>
                <h3 className="mb-4 font-heading text-lg tracking-wider text-metallic uppercase border-b border-border/30 pb-2">Business Profile</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label className="text-muted-foreground">Business Type *</Label>
                    <Select value={form.businessType} onValueChange={(v) => update("businessType", v)}>
                      <SelectTrigger className="mt-1 border-border/40 bg-background/50">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {["Dealer", "Distributor", "Workshop", "E-commerce", "Other"].map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldError("businessType")}
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Years in Business</Label>
                    <Input value={form.yearsInBusiness} onChange={(e) => update("yearsInBusiness", e.target.value)} className="mt-1 border-border/40 bg-background/50" placeholder="e.g. 5" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label className="text-muted-foreground mb-2 block">Primary Sales Channels</Label>
                    <div className="flex flex-wrap gap-4">
                      {salesChannels.map((ch) => (
                        <label key={ch} className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={form.salesChannels.includes(ch)}
                            onCheckedChange={() => toggleChannel(ch)}
                          />
                          <span className="text-sm text-muted-foreground">{ch}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Current Motorcycle Brands Served</Label>
                    <Input value={form.currentBrands} onChange={(e) => update("currentBrands", e.target.value)} className="mt-1 border-border/40 bg-background/50" />
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Estimated Monthly Sales Volume</Label>
                    <Select value={form.monthlyVolume} onValueChange={(v) => update("monthlyVolume", v)}>
                      <SelectTrigger className="mt-1 border-border/40 bg-background/50">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        {["1–20", "21–50", "51–200", "200+"].map((v) => (
                          <SelectItem key={v} value={v}>{v}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label className="text-muted-foreground">Countries You Can Serve *</Label>
                    <Textarea value={form.countriesServed} onChange={(e) => update("countriesServed", e.target.value)} className="mt-1 border-border/40 bg-background/50" rows={2} />
                    {fieldError("countriesServed")}
                  </div>
                </div>
              </div>

              {/* Intent */}
              <div>
                <h3 className="mb-4 font-heading text-lg tracking-wider text-metallic uppercase border-b border-border/30 pb-2">Intent</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  {["Dealer pricing", "Distribution rights", "Bulk orders", "Marketing partnership"].map((i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox checked={form.intents.includes(i)} onCheckedChange={() => toggleIntent(i)} />
                      <span className="text-sm text-muted-foreground">{i}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <Label className="text-muted-foreground">Tell us about your business and what you're looking for *</Label>
                  <Textarea value={form.message} onChange={(e) => update("message", e.target.value)} className="mt-1 border-border/40 bg-background/50" rows={4} />
                  {fieldError("message")}
                </div>
              </div>

              {/* Compliance */}
              <div className="border-t border-border/30 pt-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    checked={form.confirm}
                    onCheckedChange={(v) => update("confirm", !!v)}
                    className="mt-0.5"
                  />
                  <span className="text-sm text-muted-foreground">
                    I confirm I'm applying as a business and the information provided is accurate. *
                  </span>
                </label>
                {fieldError("confirm")}
              </div>

              <Button type="submit" size="lg" disabled={loading} className="w-full font-heading tracking-wider uppercase">
                {loading ? "Submitting…" : "Submit Application"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BecomeADealer;
