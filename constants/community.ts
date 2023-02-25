import AscensiveAssets from "../public/images/community/Ascensive-Assets.svg"
import Atka from "../public/images/community/Atka.svg"
import Blockwatch from "../public/images/community/Blockwatch.svg"
import CIDT from "../public/images/community/CIDT.svg"
import Chainsafe from "../public/images/community/Chainsafe.svg"
import Coinfund from "../public/images/community/Coinfund.svg"
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
import { StaticImageData } from "next/image";
import TRGC from "../public/images/community/TRGC.svg"
import Tezos from "../public/images/community/Tezos.svg"
import TrueVentures from "../public/images/community/True-Ventures.png"
import Uniswap from "../public/images/community/Uniswap.svg"
import Zeeprime from "../public/images/community/Zeeprime.png"
import dOrg from "../public/images/community/dOrg.svg"

export interface CommunityProps {
  icon: StaticImageData;
  link?: string;
  title: string;
  type?: "builder" | "backer" | "protocol";
  color?: string;
  width?: number; // percentage
  position?: ProtocolGraphicProps;
}

export interface ProtocolGraphicProps {
  r: number | string | (string | number | null)[];
  x: number | string;
  y: number | string;
  rot: number;
}

export const community: CommunityProps[] = [
  {
    icon: Placeholder,
    link: "/",
    title: "Coinfund",
    type: "backer"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Placeholder",
    width: 100,
    type: "backer",
  },
  {
    icon: Placeholder,
    link: "/",
    title: "True Ventures",
    width: 100,
    type: "backer",
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Portal",
    width: 100,
    type: "backer"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Zeeprime",
    type: "backer"
  },

  {
    icon: Placeholder,
    link: "/",
    title: "Atka",
    type: "backer"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "TRGC",
    type: "backer"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Ascensive Assets",
    type: "backer"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Rarestone",
    width: 95,
    type: "backer"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Gnosis",
    type: "backer"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "IOSG",
    type: "backer"
  },

  {
    icon: Placeholder,
    link: "/",
    title: "Blockwatch",
    width: 90,
    type: "builder"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Chainsafe",
    type: "builder"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "CIDT",
    width: 70,
    type: "builder"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "dOrg",
    type: "builder"
  },
  {
    icon: Placeholder,
    link: "/",
    title: "ENS",
    type: "protocol",
    color: "radial-gradient(circle at 0% 40%, #52e5ff 10%, #5157ff 70%, #0e183d 90%)",
    position: {
      x: 81,
      y: 45,
      r: ["calc(var(--vmin, 1vmin) * 8)", "calc(var(--vmin, 1vmin) * 8)", "calc(var(--vmin, 1vmin) * 8)", "calc(var(--vmin, 1vmin) * 14)"],
      rot: -28,
    }
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Ethereum",
    type: "protocol",
    color: "radial-gradient(circle at 20% 100%, #a4fcf5, #82a9f9 30%, #3025af 80%)",
    position: {
      x: 60,
      y: 18,
      r: ["calc(var(--vmin, 1vmin) * 11)", "calc(var(--vmin, 1vmin) * 11)", "calc(var(--vmin, 1vmin) * 11)", "calc(var(--vmin, 1vmin) * 17)"],
      rot: -12,
    }
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Gelato",
    type: "protocol",
    color: "radial-gradient(circle at 0% 80%, #f5c3a6 20%, #b45f63, #191919 95%)",
    position: {
      x: 73,
      y: 32,
      r: ["calc(var(--vmin, 1vmin) * 7)", "calc(var(--vmin, 1vmin) * 7)", "calc(var(--vmin, 1vmin) * 7)", "calc(var(--vmin, 1vmin) * 11)"],
      rot: 7,
    }
  },
  {
    icon: Placeholder,
    link: "/",
    title: "IPFS",
    type: "protocol",
    color: "radial-gradient(circle at 82% 100%, #64c3ca 15%, #266a6f 40%, #041828 90%)",
    position: {
      x: 39,
      y: 27,
      r: ["calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 13)"],
      rot: 4,
    }
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Near",
    type: "protocol",
    color: "radial-gradient(circle at 100% 30%, #dca656 20%, #dc5656, #02042f 90%)",
    position: {
      x: 25,
      y: 75,
      r: ["calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 13)"],
      rot: 8,
    }
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Pocket",
    type: "protocol",
    color: "radial-gradient(circle at 62% 0%, #c5ec4b 2%, #1c8aed 40%, #0e346c 70%, #111f2e 90%)",
    position: {
      x: 40,
      y: 78,
      r: ["calc(var(--vmin, 1vmin) * 6)", "calc(var(--vmin, 1vmin) * 6)", "calc(var(--vmin, 1vmin) * 6)", "calc(var(--vmin, 1vmin) * 10)"],
      rot: 18,
    }
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Polkadot",
    type: "protocol",
    color: "radial-gradient(circle at 40% 0%, #e5047a 5%, #af258b 50%, #1e1e1e 90%)",
    position: {
      x: 66,
      y: 56,
      r: ["calc(var(--vmin, 1vmin) * 6)", "calc(var(--vmin, 1vmin) * 6)", "calc(var(--vmin, 1vmin) * 6)", "calc(var(--vmin, 1vmin) * 11)"],
      rot: -30,
    }
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Safe",
    type: "protocol",
    color: "radial-gradient(circle at 30% 0%, #12ff80 20%, #1c1c1c 90%)",
    position: {
      x: 70,
      y: 73,
      r: ["calc(var(--vmin, 1vmin) * 12)", "calc(var(--vmin, 1vmin) * 12)", "calc(var(--vmin, 1vmin) * 12)", "calc(var(--vmin, 1vmin) * 17)"],
      rot: -16,
    }
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Tezos",
    type: "protocol",
    color: "radial-gradient(circle at 100% 60%, #76b4f2, #5a7afc, #112776 80%)",
    position: {
      x: 20,
      y: 32,
      r: ["calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 13)"],
      rot: -31,
    }
  },
  {
    icon: Placeholder,
    link: "/",
    title: "Uniswap",
    type: "protocol",
    color: "radial-gradient(circle at 90% 50%, #ff007a, #991a6d 70%, #243183 95%)",
    position: {
      x: 26,
      y: 54,
      r: ["calc(var(--vmin, 1vmin) * 10)", "calc(var(--vmin, 1vmin) * 10)", "calc(var(--vmin, 1vmin) * 10)", "calc(var(--vmin, 1vmin) * 16)"],
      rot: -4,
    }
  },
];


export const builders = community.filter((org) => org.type === "builder")
export const backers = community.filter((org) => org.type === "backer")
export const protocols = community.filter((org) => org.type === "protocol")
