import BenefitsSection from "../components/BenefitsSection";
import CTASection from "../components/CTASection";
import CommunitySection from "../components/CommunitySection";
import Head from "next/head";
import Hero from "../components/Hero";
import InterfaceSection from "../components/InterfaceSection";
import ProblemSection from "../components/ProblemSection";
import React from "react";
import ReactGA from "react-ga";

export default function Home() {
  ReactGA.pageview("home");

  return (
    <>
      <Head>
        <title>Theometrics Ukraine</title>
      </Head>
      <main>
        <Hero />
        <InterfaceSection />
        <ProblemSection />
        <BenefitsSection />
        <CommunitySection />

      </main>
    </>
  );
}
