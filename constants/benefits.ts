export interface BenefitCardProps {
  slug: string;
  color: "magenta" | "cyan" | "green" | "arcade";
  title: string;
  description: string;
}
//todo add price
export const benefits: BenefitCardProps[] = [
  {
    slug: "arcade",
    color: "arcade",
    title: "Arcade   $100",
    description:
      "Special Tier, donate or buy x amount to level up and increase on tier.",
  },

  {
    slug: "multi-platform",
    color: "magenta",
    title: "Bronce   $250",
    description:
      "First tier, donate or buy x amount to level up and increase on tier.",
  },
  {
    slug: "user-friendly",
    color: "cyan",
    title: "Silver   $500",
    description:
      "Second Tier, donate or buy x amount to level up and increase on tier.",
  },
  {
    slug: "secure",
    color: "green",
    title: "Gold   $1000",
    description:
      "Third Tier, donate or buy x amount to level up and increase on tier.",
  },

];
