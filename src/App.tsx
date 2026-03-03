import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Index from "./pages/Index";
import FitmentGuide from "./pages/FitmentGuide";
import BecomeADealer from "./pages/BecomeADealer";
import Engineering from "./pages/Engineering";
import ExploreDampers from "./pages/ExploreDampers";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogHandlebarShaking from "./pages/BlogHandlebarShaking";
import BlogWobbleVsWeave from "./pages/BlogWobbleVsWeave";
import BlogWarrantyComparison from "./pages/BlogWarrantyComparison";
import BlogProgressiveDamping from "./pages/BlogProgressiveDamping";
import BlogTrackDaySetup from "./pages/BlogTrackDaySetup";
import BlogRotaryVsLinear from "./pages/BlogRotaryVsLinear";
import BlogWhy7075 from "./pages/BlogWhy7075";
import BlogRotaryComparison from "./pages/BlogRotaryComparison";
import Contact from "./pages/Contact";
import InstallationGuide from "./pages/InstallationGuide";
import FAQ from "./pages/FAQ";
import Warranty from "./pages/Warranty";
import NotFound from "./pages/NotFound";
import AIInstallationAssistant from "./pages/AIInstallationAssistant";

const queryClient = new QueryClient();
const ShopRedirect = () => {
  useEffect(() => {
    window.location.href = "https://hauerimports.com/";
  }, []);
  return null;
};
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fitment-guide" element={<FitmentGuide />} />
          <Route path="/shop" element={<ShopRedirect />} />
          <Route path="/become-a-dealer" element={<BecomeADealer />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/explore-dampers" element={<ShopRedirect />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/handlebar-shaking" element={<BlogHandlebarShaking />} />
          <Route path="/blog/wobble-vs-weave" element={<BlogWobbleVsWeave />} />
          <Route path="/blog/warranty-comparison" element={<BlogWarrantyComparison />} />
          <Route path="/blog/progressive-damping" element={<BlogProgressiveDamping />} />
          <Route path="/blog/track-day-setup" element={<BlogTrackDaySetup />} />
          <Route path="/blog/rotary-vs-linear" element={<BlogRotaryVsLinear />} />
          <Route path="/blog/why-7075-aluminum" element={<BlogWhy7075 />} />
          <Route path="/blog/rotary-comparison" element={<BlogRotaryComparison />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/installation-guide" element={<InstallationGuide />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/support/ai-installation-assistant" element={<AIInstallationAssistant />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
