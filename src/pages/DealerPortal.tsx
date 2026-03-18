import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle, Search, FileText, Settings, ShieldAlert, Phone, Lock, FileImage, Folder } from "lucide-react";

const DealerPortal = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dealer Support Portal | MaxRacing</title>
        <meta name="description" content="MaxRacing Dealer Support Portal. Access product data, images, videos, and manuals." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-secondary/30 overflow-hidden">
        <div className="container relative z-10 text-center max-w-4xl pt-10">
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6">
            DEALER <span className="text-primary">SUPPORT PORTAL</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Access product data, high-resolution images, manuals, and support tailored exclusively for MaxRacing authorized dealers.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Section 1: Product Data Download */}
          <div className="bg-card border border-border/50 p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading">1. Product Data</h3>
            <p className="text-muted-foreground text-sm">Download comprehensive product data in CSV and Excel formats, ready for eCommerce platforms like Shopify and WooCommerce.</p>
            <div className="mt-auto space-y-2 w-full pt-4">
              <Button asChild variant="outline" className="w-full flex justify-between">
                <a href="#missing-csv">Shopify CSV <Download className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button asChild variant="outline" className="w-full flex justify-between">
                <a href="#missing-excel">Master Excel File <Download className="w-4 h-4 ml-2" /></a>
              </Button>
            </div>
          </div>

          {/* Section 2: Image Library */}
          <div className="bg-card border border-border/50 p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <FileImage className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading">2. Image Library</h3>
            <p className="text-muted-foreground text-sm">Access high-resolution (2000px+) main product images, installed photos, and close-up details organized by SKU.</p>
            <div className="mt-auto space-y-2 w-full pt-4">
              <Button asChild variant="outline" className="w-full flex justify-between bg-card hover:bg-secondary">
                <a href="/downloads/MaxRacing_3D_Images.zip" download>MaxRacing 3D Images <Folder className="w-4 h-4 ml-2 text-primary" /></a>
              </Button>
              <Button asChild variant="outline" className="w-full flex justify-between bg-card hover:bg-secondary">
                <a href="/downloads/Max_Studio_Images.zip" download>Studio Images <Folder className="w-4 h-4 ml-2 text-primary" /></a>
              </Button>
              <Button asChild variant="outline" className="w-full flex justify-between bg-card hover:bg-secondary">
                <a href="/downloads/MaxRacing_Installed.zip" download>Installed Photos (On-Bike) <Folder className="w-4 h-4 ml-2 text-primary" /></a>
              </Button>
              <Button asChild variant="outline" className="w-full flex justify-between bg-card hover:bg-secondary">
                <a href="/downloads/MaxRacing_Logos.zip" download>Logos & Brand <Folder className="w-4 h-4 ml-2 text-primary" /></a>
              </Button>
              <Button asChild variant="outline" className="w-full flex justify-between bg-card hover:bg-secondary">
                <a href="#folder-4">Social Media Kit <Folder className="w-4 h-4 ml-2 text-primary" /></a>
              </Button>
              <Button asChild variant="outline" className="w-full flex justify-between bg-card hover:bg-secondary">
                <a href="/downloads/MaxRacing_3D_Files.zip" download>3D Asset Files <Folder className="w-4 h-4 ml-2 text-primary" /></a>
              </Button>
            </div>
          </div>

          {/* Section 3: Video Library */}
          <div className="bg-card border border-border/50 p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <PlayCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading">3. Video Library</h3>
            <p className="text-muted-foreground text-sm">Download installation videos and product demonstration videos to feature on your product pages.</p>
            <Button variant="secondary" className="mt-auto w-full pt-4">
              Browse Video Library (Coming Soon)
            </Button>
          </div>

          {/* Section 4: Fitment */}
          <div className="bg-card border border-border/50 p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading">4. Fitment Tool</h3>
            <p className="text-muted-foreground text-sm">Verify motorcycle compatibility and parts fitment utilizing our dynamic fitment guide.</p>
            <Button asChild className="mt-auto w-full pt-4">
              <a href="/fitment-guide" target="_blank">Open Fitment Guide</a>
            </Button>
          </div>

          {/* Section 5: Pricing */}
          <div className="bg-card border border-primary/20 p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Lock className="w-24 h-24" />
            </div>
            <div className="p-3 bg-primary/10 rounded-lg text-primary relative z-10">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading relative z-10">5. Pricing & MAP</h3>
            <p className="text-muted-foreground text-sm relative z-10">Restricted access to current wholesale pricing and Minimum Advertised Price (MAP) guidelines.</p>
            <Button variant="outline" className="mt-auto w-full pt-4 relative z-10">
              Login to View Pricing
            </Button>
          </div>

          {/* Section 6: Installation Manuals */}
          <div className="bg-card border border-border/50 p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading">6. Manuals</h3>
            <p className="text-muted-foreground text-sm">Download installation manuals for all products in multiple languages (EN, FR, IT, ES, PT, DE).</p>
            <div className="mt-auto w-full grid grid-cols-2 lg:grid-cols-3 gap-2 pt-4">
              <Button asChild variant="outline" className="w-full">
                <a href="/Universal_Dealer_Manual_EN_v2.pdf" target="_blank">English</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="/Universal_Dealer_Manual_ES_v2.pdf" target="_blank">Español</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="/Universal_Dealer_Manual_PT_v2.pdf" target="_blank">Português</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="/Universal_Dealer_Manual_FR_v2.pdf" target="_blank">Français</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="/Universal_Dealer_Manual_IT_v2.pdf" target="_blank">Italiano</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="/Universal_Dealer_Manual_DE_v2.pdf" target="_blank">Deutsch</a>
              </Button>
            </div>
          </div>

          {/* Section 7: Sales Support */}
          <div className="bg-card border border-border/50 p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading">7. Sales Support</h3>
            <p className="text-muted-foreground text-sm">Basic materials to help you sell: key benefits, product explanations, and ready-to-use copy.</p>
            <Button variant="secondary" className="mt-auto w-full pt-4">
              View Materials (Coming Soon)
            </Button>
          </div>

          {/* Section 8: Warranty */}
          <div className="bg-card border border-border/50 p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading">8. Warranty</h3>
            <p className="text-muted-foreground text-sm">Clear structure of the warranty policy, what's covered, and how to submit a claim.</p>
            <Button asChild className="mt-auto w-full pt-4">
              <a href="/warranty" target="_blank">View Policy & Claims</a>
            </Button>
          </div>

          {/* Section 9: Contact */}
          <div className="bg-card border border-border/50 p-8 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading">9. Dealer Support</h3>
            <p className="text-muted-foreground text-sm">Need direct assistance? Get in touch with our dealer support team.</p>
            <Button asChild className="mt-auto w-full pt-4">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default DealerPortal;
