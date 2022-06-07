# landing-page

## Setup
1. `nvm install && nvm use` - Use the proper version of node.
1. `yarn` - Install all dependencies.

## Develop
`yarn dev` - Build the site, and start the development server. The dev server is hosting the site at http://localhost:3000/. Whenever changes are made, the site should automatically rebuild.

## Theme 

Color and themes should be modified from the `src/theme/index.ts` file, by updating constants.

## CMS 

Part of the content of the site is fed through a Headless CMS system named ([Contentful](https://app.contentful.com/spaces/tmv21jqhvpr2/))

To be able to query the content, you must configure the correct environment variables. 
- Register and get access to the Polywrap space
- Rename `.env.example` to `.env` and add the API keys. Ask an admin for API keys if you dont have them.
- Use the functions in the [`ContentfulFetcher.tsx`](./src/components/ContentfulFetcher.tsx)
- [Learn to use GraphQL](https://devhints.io/graphql)

#### To se a sample of how the CMS is being used to query text and images:

1. Find the contend ID you want to fetch from Contentful's [admin panel](https://www.contentful.com/)
2. Set up your graphql query with the parameters you need to fetch
```
const cmsQuery = `query { 
  webContent(id:"4QLItvU9WU4CFNCC4c0jf1") { 
   title 
   subtitle
   description
   callToAction
 } 
}`;
```
3. Follow a similar pattern to the one used [in this file](https://github.com/polywrap/landing-page/blob/99c1e7977a371e4744ab59c4f513cfe2b0ef0e97/src/components/DemoSection.tsx#L76-L108) to query the data.
4. Use formatted strings to unpack the data in the JSX return that will rendered on the web [like so](https://github.com/polywrap/landing-page/blob/99c1e7977a371e4744ab59c4f513cfe2b0ef0e97/src/components/DemoSection.tsx#L136)