export interface BenefitCardProps {
  slug: string;
  color: "magenta" | "cyan" | "green";
  title: string;
  description: string;
}

export const benefits: BenefitCardProps[] = [
  {
    slug: "multi-platform",
    color: "magenta",
    title: "Multi-Platform",
    description:
      "Write one SDK that can port your web3 logic to any execution environment.",
  },
  {
    slug: "user-friendly",
    color: "cyan",
    title: "User-Friendly",
    description:
      "Integrating web3 is finally as easy as interacting with web APIs.",
  },
  {
    slug: "secure",
    color: "green",
    title: "Secure",
    description:
      "Sandboxing keeps users safe by isolating wrappers from application memory.",
  },
];
