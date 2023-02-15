import Uniswap from "./uniswap"
import Safe from "./safe";
import Near from "./near";
import Ipfs from "./ipfs";
import TypescriptIcon from "../../public/images/lang-icons/typescript.png";
import RustIcon from "../../public/images/lang-icons/rust.png";
import PythonIcon from "../../public/images/lang-icons/python.png";
import UniswapSvg from "../../public/images/community/Uniswap.svg";
import SafeSvg from "../../public/images/community/Safe.svg";
import NearSvg from "../../public/images/community/Near.svg";
import IpfsSvg from "../../public/images/community/IPFS.svg";

import { StaticImageData } from "next/image";
import { Language } from "prism-react-renderer";

interface LanguageProps {
  icon: StaticImageData;
  type: Language;
  name: string;
  abbreviation: string;
}

export interface Languages {
  ts: Readonly<LanguageProps>;
  rs: Readonly<LanguageProps>;
  py: Readonly<LanguageProps>;
}

export const languages: Languages = {
  ts: {
    icon: TypescriptIcon,
    type: "typescript",
    name: "TypeScript",
    abbreviation: "ts",
  },
  rs: {
    icon: RustIcon,
    type: "typescript",
    name: "Rust",
    abbreviation: "rust",
  },
  py: {
    icon: PythonIcon,
    type: "python",
    name: "Python",
    abbreviation: "py",
  },
}

export interface CodeFormats {
  client: string;
  codegen: string;
}

export interface LangProps {
  abbreviation: "ts" | "py" | "rs";
  code: CodeFormats;
}

export interface FrameProps {
  slug: string;
  icon: StaticImageData;
  title(language: string): string;
  langs: LangProps[]
}

export const frames: FrameProps[] = [
  {
    slug: "uniswap-pool",
    icon: UniswapSvg,
    title: (language: string = "typescript") => `Add liquidity to Uniswap in ${language}.`,
    langs: [
      {
        abbreviation: "ts",
        code: Uniswap.ts,
      },
      {
        abbreviation: "py",
        code: Uniswap.py,
      },
      {
        abbreviation: "rs",
        code: Uniswap.rust,
      },
    ]
  },
  {
    slug: "safe-tx-signers",
    icon: SafeSvg,
    title: (language: string = "typescript") => `See who signed a Safe transaction in ${language}.`,
    langs: [
      {
        abbreviation: "ts",
        code: Safe.ts,
      },
      {
        abbreviation: "py",
        code: Safe.py,
      },
      {
        abbreviation: "rs",
        code: Safe.rust,
      },
    ]
  },
  {
    slug: "near-deploy-contract",
    icon: NearSvg,
    title: (language: string = "typescript") => `Deploy a NEAR contract in ${language}.`,
    langs: [
      {
        abbreviation: "ts",
        code: Near.ts,
      },
      {
        abbreviation: "py",
        code: Near.py,
      },
      {
        abbreviation: "rs",
        code: Near.rust,
      },
    ]
  },
  {
    slug: "ipfs-cat-file",
    icon: IpfsSvg,
    title: (language: string = "typescript") => `Read an IPFS file in ${language}.`,
    langs: [
      {
        abbreviation: "ts",
        code: Ipfs.ts,
      },
      {
        abbreviation: "py",
        code: Ipfs.py,
      },
      {
        abbreviation: "rs",
        code: Ipfs.rust,
      },
    ]
  }
]
