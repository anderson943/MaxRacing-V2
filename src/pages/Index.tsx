import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ValuePillars from "@/components/home/ValuePillars";
import DamperExplainer from "@/components/home/DamperExplainer";
import { Helmet } from "react-helmet-async";

import ComparisonTable from "@/components/home/ComparisonTable";
import YouTubeCarousel from "@/components/home/YouTubeCarousel";
import CtaBanner from "@/components/home/CtaBanner";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>MaxRacing | Performance Steering Dampers & Accessories</title>
        <meta name="description" content="Race-grade hydraulic steering dampers for motorcycles. Precision-engineered CNC stabilizers to eliminate speed wobble and improve control." />
        <link rel="canonical" href="https://www.maxracing.us/" />
      </Helmet>
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
