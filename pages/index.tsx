import React from "react";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import BenefitsSection from "../components/BenefitsSection";
import CommunitySection from "../components/CommunitySection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <CommunitySection />
      <CTASection />
    </main>
  );
}
