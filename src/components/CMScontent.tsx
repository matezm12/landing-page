import {useState, useEffect} from 'react';
import {wrapper,  newListOfFeaturedQueries, ContentfulFetcher } from './ContentfulFetcher';

export function queryFeaturedWrappers() {
    // GraphQL query to get data from Contentful CMS API
    const cmsQuery = `query { 
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

    return ContentfulFetcher(cmsQuery)


}

export async function fetchWrappers() {
    // This function queries the CMS, transforms the data to have a list
    // of indexed queries and all of the relevant metadata to be displayed
    // by the Wrappers.tsx component
    let listOfFeaturedQueries: newListOfFeaturedQueries[] = [];

    const response = await queryFeaturedWrappers()
    const wrappersList = response.data.featuredWrapperCollection.items

    // here we iterate over the WRAPPERS returned response and begin the data wrangling
    wrappersList.forEach((wrapper: wrapper) => {

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
