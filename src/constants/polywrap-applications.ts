import { WrittenCopy, CallToAction } from "./types";

export interface PolywrapApplication {
  writtenCopy: WrittenCopy;
  callToAction: CallToAction;
  uiScreenshot: {
    url: string;
  };
}

export const POLYWRAP_APPLICATIONS: PolywrapApplication[] = [
  {
    writtenCopy: {
      title: "Uniswap v2",
      subtitle: "Decentralised AMM",
      description: "The Leading Ethereum-based DeFi exchange enables low slippage token trades through automated market makers and liquidity pools. The Uni V2 wrapper was developed to cover all existing functionality of the official Javascript SDK, and should be compatible to all uniswap forks also with a few tweaks."
    },
    callToAction: {
      cta: "Live Demo",
      url: "https://demo.uniswapv2.polywrap.io/#/swap"
    },
    uiScreenshot: {
      url: process.env.PUBLIC_URL + "/imgs/uniswap-app.png",
    }
  },
  {
    writtenCopy: {
      title: "Polyfolio",
      subtitle: "Defi Portfolio Tracker",
      description: "Polyfolio is a portfolio tracker for DeFi assets. It allows you to track your assets across multiple wallets and networks."
    },
    callToAction: {
      cta: "Live Demo",
      url: "https://polyfolio.vercel.app/"
    },
    uiScreenshot: {
      url: process.env.PUBLIC_URL + "/imgs/polyfolio-app.png"
    }
  }
];
