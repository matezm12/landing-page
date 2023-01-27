import React from "react";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import BenefitsSection from "../components/BenefitsSection";
import CommunitySection from "../components/CommunitySection";
import CTASection from "../components/CTASection";
import Head from "next/head";
import ReactGA from "react-ga";

export default function Home() {
  ReactGA.pageview("home");

  return (
    <>
      <Head>
        <title>Polywrap - Enter the Composable Future</title>
      </Head>
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <CommunitySection />
        <CTASection />
      </main>
    </>
  );
}
