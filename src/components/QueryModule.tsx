require('dotenv').config();

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

export interface newWrappersList {
  wrapperName: string;
  description: string;
  featured: boolean;
  thirdParty: boolean;
  docsLink: string;
  query: {
    featured: boolean;
    source: string;
    snippets: {
      filename: string;
      language: string;
      snippet: string;
    }[];
  };
}

export interface polywrapFeature extends webContent{
  slug: string; 
}

export interface launchPartner {
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
  //futurePromise: string;
  persona: string;
  link: string | null | undefined;
  logo: string;
}

export interface Asset {
  name: string;
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
