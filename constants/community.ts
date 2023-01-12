import { StaticImageData } from "next/image";

import AscensiveAssets from "../public/images/community/Ascensive-Assets.svg"
import Atka from "../public/images/community/Atka.svg"
import Blockwatch from "../public/images/community/Blockwatch.svg"
import Chainsafe from "../public/images/community/Chainsafe.svg"
import CIDT from "../public/images/community/CIDT.svg"
import Coinfund from "../public/images/community/Coinfund.svg"
import dOrg from "../public/images/community/dOrg.svg"
import ENS from "../public/images/community/ENS.svg"
import Ethereum from "../public/images/community/Ethereum.svg"
import Gelato from "../public/images/community/Gelato.svg"
import Gnosis from "../public/images/community/Gnosis.svg"
import IOSG from "../public/images/community/IOSG.svg"
import IPFS from "../public/images/community/IPFS.svg"
import Near from "../public/images/community/Near.svg"
import Placeholder from "../public/images/community/Placeholder.svg"
import Pocket from "../public/images/community/Pocket.png"
import Polkadot from "../public/images/community/Polkadot.svg"
import Portal from "../public/images/community/Portal.svg"
import Rarestone from "../public/images/community/Rarestone.svg"
import Safe from "../public/images/community/Safe.svg"
import Swidge from "../public/images/community/Swidge.png"
import Tezos from "../public/images/community/Tezos.svg"
import TRGC from "../public/images/community/TRGC.svg"
import Zeeprime from "../public/images/community/Zeeprime.svg"

export interface CommunityProps {
  icon: StaticImageData;
  link?: string;
  title: string;
  type?: "builder" | "backer" | "protocol";
  color?: string;
  position?: ProtocolGraphicProps;
}

export interface ProtocolGraphicProps {
  r: number | string | (string|number|null)[];
  x: number | string;
  y: number | string;
  rot: number;
}

export const community: CommunityProps[] = [
  {
    icon: AscensiveAssets,
    link: "https://ascensiveassets.com/",
    title: "Ascensive Assets",
    type: "backer"
  },
  {
    icon: Atka,
    link: "https://atka.io/",
    title: "Atka",
    type: "backer"
  },
  {
    icon: Coinfund,
    link: "https://coinfund.io/",
    title: "Coinfund",
    type: "backer"
  },
  {
    icon: Gnosis,
    link: "https://gnosis.com",
    title: "Gnosis",
    type: "backer"
  },
  {
    icon: IOSG,
    link: "https://iosg.vc/",
    title: "IOSG",
    type: "backer"
  },
  {
    icon: Placeholder,
    link: "https://placeholder.vc/",
    title: "Placeholder",
    type: "backer"
  },
  {
    icon: Portal,
    link: "https://portal.vc/",
    title: "Portal",
    type: "backer"
  },
  {
    icon: Rarestone,
    link: "https://rarestone.capital/",
    title: "Rarestone",
    type: "backer"
  },
  {
    icon: TRGC,
    link: "https://trgc.io/",
    title: "TRGC",
    type: "backer"
  },
  {
    icon: Zeeprime,
    link: "https://zeeprime.capital/",
    title: "Zeeprime",
    type: "backer"
  },
  {
    icon: Blockwatch,
    link: "https://blockwatch.cc/",
    title: "Blockwatch",
    type: "builder"
  },
  {
    icon: Chainsafe,
    link: "https://chainsafe.io/",
    title: "Chainsafe",
    type: "builder"
  },
  {
    icon: CIDT,
    link: "https://consideritdone.tech/",
    title: "CIDT",
    type: "builder"
  },
  {
    icon: dOrg,
    link: "https://dorg.tech",
    title: "dOrg",
    type: "builder"
  },
  {
    icon: Swidge,
    link: "https://swidge.xyz",
    title: "Swidge",
    type: "builder"
  },
  {
    icon: ENS,
    link: "https://ens.domains/",
    title: "ENS",
    type: "protocol",
    color: "radial-gradient(circle at 0% 40%, #52e5ff 10%, #5157ff 70%, #0e183d 90%)",
    position: {
      x: 81,
      y: 45,
      r: ["8vmin","8vmin","8vmin","14vmin"],
      rot: -28,
    }
  },
  {
    icon: Ethereum,
    link: "https://ethereum.org",
    title: "Ethereum",
    type: "protocol",
    color: "radial-gradient(circle at 20% 100%, #a4fcf5, #82a9f9 30%, #3025af 80%)",
    position: {
      x: 61,
      y: 18,
      r: ["12vmin","12vmin","12vmin","18vmin"],
      rot: -12,
    }
  },
  {
    icon: Gelato,
    link: "https://gelato.network/",
    title: "Gelato",
    type: "protocol",
    color: "radial-gradient(circle at 0% 80%, #f5c3a6 20%, #b45f63, #191919 95%)",
    position: {
      x: 71,
      y: 35,
      r: ["7vmin","7vmin","7vmin","11vmin"],
      rot: 7,
    }
  },
  {
    icon: IPFS,
    link: "https://ipfs.tech/",
    title: "IPFS",
    type: "protocol",
    color: "radial-gradient(circle at 82% 100%, #64c3ca 15%, #266a6f 40%, #041828 90%)",
    position: {
      x: 37,
      y: 29,
      r: ["9vmin","9vmin","9vmin","13vmin"],
      rot: 4,
    }
  },
  {
    icon: Near,
    link: "https://near.org",
    title: "Near",
    type: "protocol",
    color: "radial-gradient(circle at 100% 30%, #dca656 20%, #dc5656, #02042f 90%)",
    position: {
      x: 22,
      y: 66,
      r: ["12vmin","12vmin","12vmin","18vmin"],
      rot: 8,
    }
  },
  {
    icon: Pocket,
    link: "https://pokt.network",
    title: "Pocket",
    type: "protocol",
    color: "radial-gradient(circle at 62% 0%, #c5ec4b 2%, #1c8aed 40%, #0e346c 70%, #111f2e 90%)",
    position: {
      x: 40,
      y: 78,
      r: ["6vmin","6vmin","6vmin","10vmin"],
      rot: 18,
    }
  },
  {
    icon: Polkadot,
    link: "https://polkadot.network",
    title: "Polkadot",
    type: "protocol",
    color: "radial-gradient(circle at 40% 0%, #e5047a 5%, #af258b 50%, #1e1e1e 90%)",
    position: {
      x: 66,
      y: 57,
      r: ["6vmin","6vmin","6vmin","11vmin"],
      rot: -30,
    }
  },
  {
    icon: Safe,
    link: "https://gnosis-safe.io/",
    title: "Safe",
    type: "protocol",
    color: "radial-gradient(circle at 30% 0%, #12ff80 20%, #1c1c1c 90%)",
    position: {
      x: 70,
      y: 73,
      r: ["12vmin","12vmin","12vmin","17vmin"],
      rot: -16,
    }
  },
  {
    icon: Tezos,
    link: "https://tezos.com",
    title: "Tezos",
    type: "protocol",
    color: "radial-gradient(circle at 100% 60%, #76b4f2, #5a7afc, #112776 80%)",
    position: {
      x: 15,
      y: 43,
      r: ["10vmin","10vmin","10vmin","16vmin"],
      rot: -31,
    }
  },
];


export const builders = community.filter((org) => org.type === "builder")
export const backers = community.filter((org) => org.type === "backer")
export const protocols = community.filter((org) => org.type === "protocol")
