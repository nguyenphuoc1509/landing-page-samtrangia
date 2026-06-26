"use client";
 
import {
  HeroSection,
  StatsBar,
  StorySection,
  IngredientsSection,
  DarkFeatureSection,
  ComparisonSection,
  TestimonialsSection,
  ComboSection,
  CtaBanner,
  ProductSection,
} from "@/components/landing";
import SocialProofToast from "@/components/layout/SocialProofToast";
import PromoPopup from "@/components/landing/PromoPopup";
 
export default function Page() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <PromoPopup />
      <SocialProofToast />
      <HeroSection />
      <StatsBar />
      <StorySection />
      <IngredientsSection />
      <DarkFeatureSection />
      <ComparisonSection />
      <ProductSection />
      <TestimonialsSection />
      <ComboSection />
      <CtaBanner />
    </main>
  );
}