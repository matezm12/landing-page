export interface Testimonial {
  logo: string;
  description: string;
  persona: string;
  url: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    logo: process.env.PUBLIC_URL + "/logos/gnosis.png",
    persona: "Team Gnosis",
    description: `Polywrap will make it easy for everyone to build on top of Gnosis
    technologies and interact with our contracts and interfaces. This will
    help us achieve our vision of building open platforms and removing
    gatekeepers.`,
    url: "https://gnosis.io/",
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/pocket.png",
    persona: "Michael O'Rourke, Founder",
    description: `By creating one single standard for web3 developers,
    Polywrap massively improves the experience of interacting with different protocols.`,
    url: "https://www.pokt.network",
  },
  // {
  //   logo: process.env.PUBLIC_URL + "/logos/fleek.png",
  //   persona: "Harrison Hines, CEO",
  //   description: `Our leading product (the open source Space Daemon for building dweb apps) 
  //   currently only works on desktop, and the most elegant way we can get it to work in the 
  //   browser and mobile (without centralizing some aspects of the Daemon) is with Polywrap. 
  //   Also the experience for developers building dweb apps on top of the Space Daemon will 
  //   be much better once we convert it into Polywrap modules.`,
  //   url: "https://fleek.co/",
  // },
  {
    logo: process.env.PUBLIC_URL + "/logos/gelato.png",
    persona: "Hilmar X, Legendary Member",
    description: `With the help of Polywrap, Gelato will enable every 
    developer to easily 
    automate the execution of transactions on networks like Ethereum, giving them the ability to 
    provide arbitrary instructions to a decentralized network of bots with a single Wrapper call.`,
    url: "https://gelato.network/",
  },
  // {
  //   logo: process.env.PUBLIC_URL + "/logos/abridged.png",
  //   persona: "James Duncan, Co-Founder",
  //   description: `Polywrap aligns with Abridged's vision of lowering the barrier for smart contract 
  //   "remixing". More importantly the team behind the project is smart, passionate and know how to ship. 
  //   We can not wait to integrate polywrap in to our no-code platform and fulfil 
  //   the vision of making money legos accessible to everyone.`,
  //   url: "https://abridged.io/",
  // },
  /*{
    logo: process.env.PUBLIC_URL + "/logos/squad.png",
    persona: "Jesse B. Miller, Co-Founder",
    description: `We’re building a platform that needs to run anywhere, 
    integrate with other projects, and provide a welcoming developer experience. 
    Polywrap shows more promise than any other tool we’ve seen to do that 
    elegantly and efficiently.`,
    url: "https://squad.games/",
  },*/
  /*{
    logo: process.env.PUBLIC_URL + "/logos/rockside.png",
    persona: "Vincent Le Gallic, CTO & Co-Founder",
    description: `Rockside is simplifying the usage of blockchain thanks to its 
    relayer and  meta-transactions. We want to push further the simplification of 
    the integration of blockchain solutions client-side. The Polywrap project 
    is inline with our goal to facilitate the usage of Ethereum for all developers, 
    and it looks very promising.`,
    url: "https://rockside.io/",
  },*/
  // {
  //   logo: process.env.PUBLIC_URL + "/logos/mantradao.png",
  //   persona: "John Patrick Mullin, Co-Founder",
  //   description: `With cross-chain DeFi products at the core of what MANTRA DAO is building, 
  //   this inherently involves building a tech stack that is blockchain and programming language 
  //   agnostic. We believe that what Polywrap is building is truly novel, and are looking forward 
  //   to being a launch partner and strong participant within the Polywrap DAO.
  //   `,
  //   url: "https://mantradao.com/",
  // },
];

export const launchPartners = [
  {
    logo: process.env.PUBLIC_URL + "/logos/walletconnect.png",
    url: "https://walletconnect.org/",
    alt: "Wallet Connect"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/fleek.png",
    url: "https://fleek.co/",
    alt: "Fleek"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/razor.png",
    url: "https://razor.network/",
    alt: "Razor Network"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/3box.png",
    url: "https://3boxlabs.com/",
    alt: "3Box Labs"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/abridged.png",
    url: "https://abridged.io/",
    alt: "Abridged"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/mantradao.png",
    url: "https://mantradao.com/",
    alt: "Mantra DAO"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/rockside.png",
    url: "https://rockside.io/",
    alt: "Rockside"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/torus.png",
    url: "https://tor.us/",
    alt: "Torus"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/aleph.png",
    url: "https://aleph.im",
    alt: "Aleph"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/pocket.png",
    url: "https://www.pokt.network/",
    alt: "Pocket"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/gnosis.png",
    url: "https://gnosis.io/",
    alt: "Gnosis"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/dxdao.png",
    url: "https://dxdao.eth.link/#/",
    alt: "DXDAO"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/composable.png",
    url: "https://www.composable.finance/",
    alt: "Composable Finance"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/squad.png",
    url: "https://squad.games/",
    alt: "Squad Games"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/gelato.png",
    url: "https://gelato.network/",
    alt: "Gelato Network"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/zero.png",
    url: "https://www.0.exchange/",
    alt: "Zero Exchange"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/jarvis.png",
    url: "https://jarvis.network",
    alt: "Jarvis"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/dehive.png",
    url: "https://dehive.finance",
    alt: "DeHive"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/boba.png",
    url: "https://boba.network",
    alt: "Boba Network"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/enya.png",
    url: "https://enya.ai",
    alt: "Enya"
  },
  {
    logo: process.env.PUBLIC_URL + "/logos/chainstack.png",
    url: "https://chainstack.com/",
    alt: "Chainstack"
  },
];
