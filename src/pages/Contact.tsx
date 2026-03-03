import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    bike: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("contact_messages").insert([form]);
      if (error) throw error;

      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon!"
      });
      setForm({ name: "", email: "", subject: "", bike: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 max-w-2xl"
          >
            <p className="mb-3 font-heading text-sm tracking-[0.3em] text-primary">GET IN TOUCH</p>
            <h1 className="mb-6 font-heading text-5xl text-foreground md:text-6xl">Contact Us</h1>
            <p className="font-body text-lg text-muted-foreground">
              Questions about fitment, compatibility, or our products? We're here to help.
            </p>
          </motion.div>

          <div className="grid gap-16 md:grid-cols-2">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-heading text-xs tracking-widest text-muted-foreground">NAME</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="bg-secondary/50 border-border/30"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-heading text-xs tracking-widest text-muted-foreground">EMAIL</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="bg-secondary/50 border-border/30"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-heading text-xs tracking-widest text-muted-foreground">SUBJECT</label>
                <Input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Fitment inquiry, product question, etc."
                  className="bg-secondary/50 border-border/30"
                />
              </div>
              <div>
                <label className="mb-2 block font-heading text-xs tracking-widest text-muted-foreground">BIKE (OPTIONAL)</label>
                <Input
                  value={form.bike}
                  onChange={(e) => setForm({ ...form, bike: e.target.value })}
                  placeholder="Brand / Model / Year"
                  className="bg-secondary/50 border-border/30"
                />
              </div>
              <div>
                <label className="mb-2 block font-heading text-xs tracking-widest text-muted-foreground">MESSAGE</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  placeholder="Tell us what you need..."
                  rows={5}
                  className="bg-secondary/50 border-border/30"
                />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="font-heading tracking-wider uppercase shadow-accent">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="rounded-lg border border-border/30 bg-gradient-card p-8">
                <h3 className="mb-4 font-heading text-xl text-foreground">Direct Contact</h3>
                <div className="space-y-2 font-body text-sm text-muted-foreground">
                  <p><a href="mailto:info@maxracing.us" className="text-primary hover:underline">info@maxracing.us</a></p>
                  <p><a href="tel:+17273779546" className="text-primary hover:underline">+1 (727) 377-9546</a></p>
                </div>
              </div>

              <div className="rounded-lg border border-border/30 bg-gradient-card p-8">
                <h3 className="mb-4 font-heading text-xl text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/maxracing.us" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><Instagram size={22} /></a>
                  <a href="tel:+17273779546" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Phone"><Phone size={22} /></a>
                  <a href="mailto:info@maxracing.us" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email"><Mail size={22} /></a>
                </div>
              </div>

              <div className="rounded-lg border border-border/30 bg-gradient-card p-8">
                <h3 className="mb-4 font-heading text-xl text-foreground">Fitment Help</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Not sure if we have a damper for your bike? Include your Brand, Model, and Year in the message and we'll check compatibility for you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
