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
  name: Language;
  slug: string;
}

export interface Languages {
  ts: Readonly<LanguageProps>;
  rust: Readonly<LanguageProps>;
  py: Readonly<LanguageProps>;
}

export const languages: Languages = {
  ts: {
    icon: TypescriptIcon,
    name: "typescript",
    slug: "ts",
  },
  rust: {
    icon: RustIcon,
    name: "typescript",
    slug: "rust",
  },
  py: {
    icon: PythonIcon,
    name: "python",
    slug: "py",
  },
}

export interface LangProps {
  slug: "ts" | "py" | "rust";
  code: string;
}

export interface FrameProps {
  slug: string;
  title: string;
  langs: LangProps[]
}

export const frames: FrameProps[] = [
  {
    slug: "uniswap-pool",
    title: "Add liquidity to a uniswap pool from a Rust app.",
    langs: [
      {
        slug: "ts",
        code: Uniswap.ts,
      },
      {
        slug: "py",
        code: Uniswap.py,
      },
      {
        slug: "rust",
        code: Uniswap.rust,
      },
    ]
  },
  {
    slug: "near-pool",
    title: "Add liquidity to a near pool from a Rust app.",
    langs: [
      {
        slug: "py",
        code: Near.py,
      },
      {
        slug: "rust",
        code: Near.rust
      },
    ]
  },
  {
    slug: "tezos-pool",
    title: "Add liquidity to a tezos pool from a Rust app.",
    langs: [
      {
        slug: "py",
        code: Tezos.py,
      },
      {
        slug: "rust",
        code: Tezos.rust
      },
    ]
  },
]
