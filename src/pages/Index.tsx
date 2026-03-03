import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ValuePillars from "@/components/home/ValuePillars";
import DamperExplainer from "@/components/home/DamperExplainer";

import ComparisonTable from "@/components/home/ComparisonTable";
import YouTubeCarousel from "@/components/home/YouTubeCarousel";
import CtaBanner from "@/components/home/CtaBanner";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValuePillars />
      <DamperExplainer />

      <ComparisonTable />
      <YouTubeCarousel />
      <CtaBanner />
    </Layout>
  );
};

export default Index;
