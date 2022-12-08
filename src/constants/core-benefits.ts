export interface CoreBenefit {
  slug: string;
  title: string;
  description: string;
}

export const CORE_BENEFITS: CoreBenefit[] = [
  {
    slug: 'multi_platform',
    title: 'Multi-Platform',
    description: 'Wrappers are universal, use them in any app, written in any language.',
  },
  {
    slug: 'user_friendly',
    title: 'User-Friendly',
    description: 'Integrating complex SDKs is finally as easy as interacting with web APIs.',
  },
  {
    slug: 'secure',
    title: 'Secure',
    description: 'Sandboxing keeps users safe by isolating wrappers from application memory.',
  },
  {
    slug: 'scalable',
    title: 'Scalable',
    description: 'Keep apps lightweight and efficient, download wrappers on-demand as needed.',
  },
  {
    slug: 'composable',
    title: 'Composable',
    description: 'Endlessly compose and extend wrappers with imports and standard interfaces.',
  },
  {
    slug: 'upgradable',
    title: 'Upgradable',
    description: 'Ditch the rebuilds with configurable run-time updates.',
  },
];
