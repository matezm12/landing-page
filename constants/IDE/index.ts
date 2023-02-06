import Uniswap from "./uniswap"
import Near from "./near"
import Tezos from "./tezos"
import { StaticImageData } from "next/image";
import TypescriptIcon from "../../public/images/lang-icons/typescript.png";
import RustIcon from "../../public/images/lang-icons/rust.png";
import PythonIcon from "../../public/images/lang-icons/python.png";
import { Language } from "prism-react-renderer";

interface LanguageProps {
  icon: StaticImageData;
  type: Language;
  name: string;
  abbreviation: string;
}

export interface Languages {
  ts: Readonly<LanguageProps>;
  rust: Readonly<LanguageProps>;
  py: Readonly<LanguageProps>;
}

export const languages: Languages = {
  ts: {
    icon: TypescriptIcon,
    type: "typescript",
    name: "typescript",
    abbreviation: "ts",
  },
  rust: {
    icon: RustIcon,
    type: "typescript",
    name: "rust",
    abbreviation: "rust",
  },
  py: {
    icon: PythonIcon,
    type: "python",
    name: "python",
    abbreviation: "py",
  },
}

export interface LangProps {
  abbreviation: "ts" | "py" | "rust";
  code: string;
}

export interface FrameProps {
  slug: string;
  title(language: string): string;
  langs: LangProps[]
}

export const frames: FrameProps[] = [
  {
    slug: "uniswap-pool",
    title: (language: string = "typescript") => `Add liquidity to a uniswap pool from a ${language} app.`,
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
        abbreviation: "rust",
        code: Uniswap.rust,
      },
    ]
  },
  {
    slug: "near-pool",
    title: (language: string = "typescript") => `Add liquidity to a near pool from a ${language} app.`,
    langs: [
      {
        abbreviation: "py",
        code: Near.py,
      },
      {
        abbreviation: "rust",
        code: Near.rust
      },
    ]
  },
  {
    slug: "tezos-pool",
    title: (language: string = "typescript") => `Add liquidity to a tezos pool from a ${language} app.`,
    langs: [
      {
        abbreviation: "py",
        code: Tezos.py,
      },
      {
        abbreviation: "rust",
        code: Tezos.rust
      },
    ]
  },
]
