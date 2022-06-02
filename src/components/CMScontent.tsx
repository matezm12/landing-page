import {useState, useEffect} from 'react';
import {  webContent, wrapper,  newListOfFeaturedQueries, listOfFeaturedQueries, ContentfulFetcher } from './QueryModule';

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


    /* Sample of what the returned data would look like!
      {
      "featuredWrapperCollection": {
          "items": [
              {
                  "wrapperName": "Uniswap V3",
                  "description": "The newest Uniswap wrapper is written in AssemblyScript, and like the official Uniswap V3 SDK, it has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The Uniswap wrapper business logic will be deployed on a decentralized endpoint, like IPFS.",
                  "featured": true,
                  "thirdParty": false,
                  "queriesCollection": {
                      "items": [
                          {
                              "filename": "executeSwap",
                              "featured": true,
                              "appTs": "//import envs and other configs for the client\nimport * into GetTransactions\n\n// Execute Token Swaps w/ Uniswap V3\nclient.invoke({\n  uri: \"wrap://ens/v3.uniswap.polywrap.eth\",\n  module: \"mutation\",\n  method: \"swap\",\n  input: {\n    inToken,\n    outToken,\n    amount,\n    ...\n  }\n});",
                              "appRs": "// Execute Token Swaps w/ Uniswap V3\nclient.invoke({\n  uri: \"wrap://ens/v3.uniswap.polywrap.eth\",\n  module: \"mutation\",\n  method: \"swap\",\n  input: uni::mutation::swap::Input {\n    inToken: inToken,\n    outToken: outToken,\n    amount: amount,\n    ...\n  }.to_json()\n});",
                              "appPy": "#Execute Token Swaps w/ Uniswap V3\n\nclient.invoke(\n  uri=\"wrap://ens/v3.uniswap.polywrap.eth\",\n  module=\"mutation\",\n  method=\"swap\",\n  input={\n    \"inToken\": inToken,\n    \"outToken\": outToken,\n    \"amount\": amount,\n    ...\n  }\n);",
                              "source": "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/mutation/schema.graphql#L46-L61"
                          },
                          {
                              "filename": "calcTradeOutput",
                              "featured": true,
                              "appTs": "//import envs and other configs for the client\nimport * into GetTransactions\n\n// mocked query for component dev\nquery (\n\n  swap.tokens(\"1000 USDC\", out=ETH\")\n)\n",
                              "appRs": "// mocked query for component dev\nquery (\n\n)\n",
                              "appPy": "// mocked query for component dev\nquery (\n\n)\n",
                              "source": "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/query/schema.graphql#L470-L479"
                          }
                      ]
                  },
                  "docsLink": "https://docs.polywrap.io/demos/uniswapv3/intro"
              },
              {
                  "wrapperName": "Defiwrapper",
                  "description": "Defiwrapper is a collection of various DeFi  wrappers like defi-sdk, coingecko, and more. With Defiwrapper, you can enable a wide range of  DeFi usecases for a suite of cross-chain and multi-platform innovations.",
                  "featured": true,
                  "thirdParty": false,
                  "queriesCollection": {
                      "items": [
                          {
                              "filename": "getTransactions",
                              "featured": true,
                              "appTs": "//import envs and other configs for the client\nimport * into GetTransactions\n\n// Gets all transactions from an accoutn\nquery GetTransactions($account: String!, $currency: String!) {\n  getTransactions(accountAddress: $account,\n  vsCurrency: $currency,\n  options: null)\n}",
                              "appRs": "// mocked query for demo purposes\nquery (\n   accountBalance: $ethereum_address\n)",
                              "appPy": "// mocked query for demo purposes\nquery (\n   accountBalance: $ethereum_address\n)",
                              "source": "https://github.com/defiwrapper/documentation"
                          }
                      ]
                  },
                  "docsLink": "https://defiwrapper.com"
              },
              {
                  "wrapperName": "Tezos Polywrapper",
                  "description": "tezos ecosystem",
                  "featured": true,
                  "thirdParty": true,
                  "queriesCollection": {
                      "items": []
                  },
                  "docsLink": "https://blockwatch.gitbook.io/polywrap-tezos/"
              },
              {
                  "wrapperName": "Gelato Polywrap Resolver ",
                  "description": null,
                  "featured": true,
                  "thirdParty": true,
                  "queriesCollection": {
                      "items": []
                  },
                  "docsLink": "https://docs.gelato.network/guides/writing-a-resolver/polywrap-resolver"
              }
          ]
      }
  }

    */
}

export async function fetchWrappers() {
    // This function queries the CMS, transforms the data to have a list
    // of indexed queries and all of the relevant metadata to be displayed
    // by the Wrappers.tsx component

    // idea: rename the const below to "listOfFeaturedQueries"
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
                // idea:  modify this data stucture below to fit all the needs Wrappers.tsx
                // listOfFeaturedQueries.push({
                //     wrapperName: wrapper.wrapperName,
                //     description: wrapper.description,
                //     featured: wrapper.featured,
                //     thirdParty: wrapper.thirdParty,
                //     docsLink: wrapper.docsLink,
                //     query: {
                        
                //         featured: item.featured,
                //         source: item.source,
                //         snippets: [
                //             { filename: item.filename + '.js', language: 'javascript', snippet: item.appJs || '' },
                //             { filename: item.filename + '.ts', language: 'typescript', snippet: item.appTs || '' },
                //             { filename: item.filename + '.py', language: 'python', snippet: item.appPy || '' },
                //             { filename: item.filename + '.rs', language: 'rust', snippet: item.appRs || '' },
                //         ]
                //     }
                // });

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

// export function queryFeaturedQueries() {
//   // GraphQL query to get data from Contentful CMS API
//   const cmsQuery = `
//   query { 
//     featuredWrapperCollection(where: {featured: true}) { 
//       items {
//         wrapperName
//         featured
//         queriesCollection {
//           items {
//             filename
//             featured
//           }
//         }  
//       }
//     }
//   }`

//   return ContentfulFetcher(cmsQuery)
// }
