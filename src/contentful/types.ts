export interface WebContent {
  title: string;
  subtitle: string | null;
  callToAction: string | null;
  description?: string | null;
  supportImage?: any | null;
}

export interface WrapperQuery {
  filename: string;
  featured: boolean;
  query?: string;
  comment: string;
  source: string;
  appJs?: string;
  appTs?: string;
  appPy?: string;
  appRs?: any;
}

export interface Wrapper {
  wrapperName: string;
  featured: boolean;
  thirdParty: boolean;
  description: string;
  queriesCollection: {
    items: WrapperQuery[];
  }
  docsLink: string;
}

export interface NewListOfFeaturedQueries {
  wrapperName: string;
  description: string;
  featuredWrapper: boolean;
  thirdParty: boolean;
  docsLink: string;
  queries: {
    queryName: string;
    featuredQuery: boolean;
    source: string;
    snippets: {
      filename: string;
      language: string;
      snippet: string;
    }[];
  };
}

export interface ListOfFeaturedQueries {
  wrapperName: string;
  description: string;
  featured: boolean;
  thirdParty: boolean;
  docsLink: string;
  query: {
    featured: true;
    source: string;
    snippets: {
      filename: string;
      language: string;
      snippet: string;
    }[];
  };
}

export interface PolywrapFeature extends WebContent{
  slug: string; 
}

export interface LaunchPartner {
  name: string;
  link: string | null;
  testimonial: string | null;
  persona: string;
  futurePromise: string;
  blackPngLogo: {
    url: string;
  }
}

export interface Testimonial {
  name: string;
  testimonial: string | null;
  persona: string;
  link: string | null | undefined;
  logo: string;
}

export interface Asset {
  name: string;
}
