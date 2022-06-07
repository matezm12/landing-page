import {
  queryContentful,
  Wrapper,
  WebContent,
  LaunchPartner,
  NewListOfFeaturedQueries
} from "./";
import { PolywrapFeature } from "./types";

const createSendable = <T>(query: string) => {
  return {
    send: () => queryContentful<T>(query),
    toString: () => query
  };
}

export const queries = {
  featuredWrapperCollection: createSendable<{
    featuredWrapperCollection: {
      items: Wrapper[]
    }
  }>(
    `query { 
      featuredWrapperCollection(where: {featured: true}) { 
        items {
          wrapperName
          description
          featured
          thirdParty
          queriesCollection {
            items {
              filename
              featured
              appTs
              appRs
              appPy
              source
            }
          }  
          docsLink
        }
      }
    }`
  ),
  webContent: (id: string) => createSendable<{
    webContent: WebContent
  }>(
    `query { 
      webContent(id:"${id}") { 
        title 
        subtitle
        description
        callToAction
      }
    }`
  ),
  webContentWithImage: (id: string) => createSendable<{
    webContent: PolywrapFeature
  }>(
    `query { 
      webContent(id:"${id}") { 
        title
        subtitle
        supportImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        description
      }
    }`
  ),
  launchPartners: createSendable<{
    gelato: LaunchPartner,
    gnosis: LaunchPartner,
    pocket: LaunchPartner
  }>(
    `query { 
      gelato: launchPartners(id:"4NuUSkl1u6JPVA7QNiM4iS") { 
        name 
        link
        testimonial
        blackPngLogo {
          url
        }
        persona
        futurePromise
      },
      gnosis:  launchPartners(id: "4wW7f4q1VU7Y0VoHIYKJDK") {
        name 
        link
        testimonial
        blackPngLogo {
          url
        }
        persona
        futurePromise
      }, 
      pocket:  launchPartners(id: "2a9WNhIMlaMmbgUBO5fRiR") {
        name 
        link
        testimonial
        blackPngLogo {
          url
        }
        persona
        futurePromise
      }
    }`
  ),
};

export async function fetchWrappers() {
  // This function queries the CMS, transforms the data to have a list
  // of indexed queries and all of the relevant metadata to be displayed
  // by the Wrappers.tsx component
  let listOfFeaturedQueries: NewListOfFeaturedQueries[] = [];

  const response = await queries.featuredWrapperCollection.send()
  const wrappersList = response.data.featuredWrapperCollection.items

  // here we iterate over the WRAPPERS returned response and begin the data wrangling
  wrappersList.forEach((wrapper: Wrapper) => {

      // we immediately iterate on the QUERIES that the wrappers have
      wrapper.queriesCollection.items.forEach((item) => {
          // Check if this is a featured QUERY or not
          if (item.featured){
              // If it is, add the relevant data to the array `newWrappersList`
              listOfFeaturedQueries.push({
                wrapperName: wrapper.wrapperName,
                description: wrapper.description,
                featuredWrapper: wrapper.featured,
                thirdParty: wrapper.thirdParty,
                docsLink: wrapper.docsLink,
                queries: {
                    queryName: item.filename,
                    featuredQuery: item.featured,
                    source: item.source,
                    snippets: [
                        { filename: item.filename + '.js', language: 'javascript', snippet: item.appJs || '' },
                        { filename: item.filename + '.ts', language: 'typescript', snippet: item.appTs || '' },
                        { filename: item.filename + '.py', language: 'python', snippet: item.appPy || '' },
                        { filename: item.filename + '.rs', language: 'rust', snippet: item.appRs || '' },
                    ]
                }
            });
          }
      });
  });

  // This would return an array with the organized QUERIES
  return listOfFeaturedQueries
}
