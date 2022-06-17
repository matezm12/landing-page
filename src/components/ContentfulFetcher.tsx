require('dotenv').config();

export interface writtenContent {
  title: string;
  subtitle: string | null;
  description?: string | null;
}

export interface callToAction {
  callToAction: string;
  urlForTheCTA: string;
}
export interface heroContent extends writtenContent, callToAction {
  supportImage?: {
    "url": string;
  }
}

export interface TagLine {
  text: string
  subtext: string
}

export interface Testimonial {
  launchPartner: launchPartner
  persona: string;
  testimonialShortVersion: string | null;
  testimonialLongVersion?: string;
  futurePromise?: string;
}

export interface launchPartner {
  partnerName: string;
  link: string | null;
  categories?: string[];
  blackPngLogo: {
    url: string;
  }
  partnerSince?: string | number;
  
}

export interface coreBenefit {
  title: string;
  subtitle: string | null;
  description: string | null;
  supportImage: {
    url: string;
  }
}



/// Older data models below


export interface webContent {
  title: string;
  subtitle: string | null;
  callToAction: string | null;
  description?: string | null;
  supportImage?: any | null;
  
}

export interface wrapperQuery {
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

export interface wrapper {
  wrapperName: string;
  featured: boolean;
  thirdParty: boolean;
  description: string;
  queriesCollection: {
    items : wrapperQuery[];
  }
  docsLink: string;
}

export interface newListOfFeaturedQueries {
  wrapperName: string;
  //filename: string;
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

export interface polywrapFeature extends webContent{
}





function ContentfulFetcher(query: string): Promise<any> {
  // Simple helper function to query data from the Contentful API
  // Inputs the cmsQuery string and returns JSON with results.

    return window
    .fetch(process.env.REACT_APP_CMS_SITE as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_CMS_TOKEN as string,
      },
      body: JSON.stringify({ "query":query }),
    })
    .then((response) => response.json());

    // Could be useful to add some error handling 
    // if response.json.error != undefined, console.log(response.json.error)
}

export {ContentfulFetcher}

/// Types which are apparently not used

export interface Asset {
  name: string;
}