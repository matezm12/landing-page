import React from "react";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import InterfaceSection from "../components/InterfaceSection";
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
        <InterfaceSection />
        <ProblemSection />
        <BenefitsSection />
        <CommunitySection />
        <CTASection />
      </main>
    </>
  );
}
