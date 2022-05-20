export interface wrapperSectionData {
  wrapperName: string;
  featured: boolean;
  thirdParty: boolean;
  docsLink: string;
  description: HTMLElement;
  queries: query[];
}

export interface query{
  filename: string;
  language: string;
  featured: boolean;
  query: string;
  source: string;
}

export const wrapperSectionData =
  [
    // Wrapper #1
    {
      wrapperName: 'Execute Token Swaps with Uniswap V3',
      featured: true,
      thirdParty: true,
      docsLink: '#',
      description:
        `
          Web3 relies on SDKs to integrate virtually every type of protocol: DeFi, NFTs, DAOs, P2P Networks <br/><br/>
          Due to traditional SDKs’ short-comings, Web3’s technical debt is growing day by day.<br/><br/>
          Traditional SDKs are:<br/>
          <b>Insecure, Bloated, Incompatible, and Language-Specific</b>
        `,
      queries:
        [
          {
            filename: "app.ts",
            language: "typescript",
            featured: true,
            query:
             `// Execute Token Swaps w/ Uniswap V3 - (TYPESCRIPT DEMO)
client.invoke({
  uri: "wrap://ens/v3.uniswap.polywrap.eth",
  module: "mutation",
  method: "swap",
  input: {
    inToken,
    outToken,
    amount,
    ...
  }
});
             `,
            source: "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/mutation/schema.graphql#L46-L61"
          },
          {
            filename: "app.js",
            language: "javascript",
            featured: true,
            query:
              `// Execute Token Swaps w/ Uniswap V3 - (JAVASCRIPT DEMO)
client.invoke({
  uri: "wrap://ens/v3.uniswap.polywrap.eth",
  module: "mutation",
  method: "swap",
  input: {
    inToken,
    outToken,
    amount,
    ...
  }
});
             `,
            source: "#"
          },
          {
            filename: "app.py",
            language: "python",
            featured: true,
            query:
              `// Execute Token Swaps w/ Uniswap V3 - (PYTHON DEMO)
client.invoke({
  uri: "wrap://ens/v3.uniswap.polywrap.eth",
  module: "mutation",
  method: "swap",
  input: {
    inToken,
    outToken,
    amount,
    ...
  }
});
             `,
            source: "#"
          },
          {
            filename: "app.rs",
            language: "rust",
            featured: true,
            query:
              `// Execute Token Swaps w/ Uniswap V3 - (RUST DEMO)
client.invoke({
  uri: "wrap://ens/v3.uniswap.polywrap.eth",
  module: "mutation",
  method: "swap",
  input: {
    inToken,
    outToken,
    amount,
    ...
  }
});
             `,
            source: "#"
          },
        ]
    },

    // Wrapper #2
    {
      wrapperName: 'Compute Trade Outputs with Uniswap V3',
      featured: true,
      thirdParty: true,
      docsLink: '#',
      description:
        `
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br/><br/>
          industry's standard dummy text ever since the 1500s. when an unknown.<br/><br/>
          Traditional SDKs are:<br/>
          <b>Insecure, Bloated, Incompatible, and Language-Specific</b>
        `,
      queries:
        [
          {
            filename: "app.ts",
            language: "typescript",
            featured: true,
            query:
              `// Compute Trade Outputs w/ Uniswap V3 - (TYPESCRIPT DEMO)
client.invoke({
  uri: "wrap://ens/v3.uniswap.polywrap.eth",
  module: "query",
  method: "bestTradeExactIn",
  input: {
    pools,
    amountIn,
    tokenOut,
    ...
  }
});
             `,
            source: "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/query/schema.graphql#L470-L479"
          },
          {
            filename: "app.js",
            language: "javascript",
            featured: true,
            query:
              `// Compute Trade Outputs w/ Uniswap V3 - (JAVASCRIPT DEMO)
client.invoke({
  uri: "wrap://ens/v3.uniswap.polywrap.eth",
  module: "query",
  method: "bestTradeExactIn",
  input: {
    pools,
    amountIn,
    tokenOut,
    ...
  }
});
             `,
            source: "#"
          },
          {
            filename: "app.py",
            language: "python",
            featured: true,
            query:
              `// Compute Trade Outputs w/ Uniswap V3 - (PYTHON DEMO)
client.invoke({
  uri: "wrap://ens/v3.uniswap.polywrap.eth",
  module: "query",
  method: "bestTradeExactIn",
  input: {
    pools,
    amountIn,
    tokenOut,
    ...
  }
});
             `,
            source: "#"
          },
          {
            filename: "app.rs",
            language: "rust",
            featured: true,
            query:
              `// Compute Trade Outputs w/ Uniswap V3 - (RUST DEMO)
client.invoke({
  uri: "wrap://ens/v3.uniswap.polywrap.eth",
  module: "query",
  method: "bestTradeExactIn",
  input: {
    pools,
    amountIn,
    tokenOut,
    ...
  }
});
             `,
            source: "#"
          },
        ]
    },

    // Wrapper #3
    {
      wrapperName: 'Fetch P2P Data with IPFS',
      featured: true,
      thirdParty: true,
      docsLink: '#',
      description:
        `
          Web3 relies on SDKs to integrate virtually every type of protocol: DeFi, NFTs, DAOs, P2P Networks <br/><br/>
          Due to traditional SDKs’ short-comings, Web3’s technical debt is growing day by day.<br/><br/>
          Traditional SDKs are:<br/>
          <b>Insecure, Bloated, Incompatible, and Language-Specific</b>
        `,
      queries:
        [
          {
            filename: "app.ts",
            language: "typescript",
            featured: true,
            query:
              `// Fetch P2P Data w/ IPFS - (TYPESCRIPT DEMO)
client.invoke({
  uri: "wrap://ens/ipfs.polywrap.eth",
  module: "query",
  method: "catFile",
  input: {
    cid,
    options
  }
});
             `,
            source: "https://github.com/polywrap/monorepo/blob/03ca9d2f0cbe931762cbd15739cd50ac1f21d1bb/packages/js/plugins/ipfs/schema.graphql#L4-L7"
          },
          {
            filename: "app.js",
            language: "javascript",
            featured: true,
            query:
              `// Fetch P2P Data w/ IPFS - (JAVASCRIPT DEMO)
client.invoke({
  uri: "wrap://ens/ipfs.polywrap.eth",
  module: "query",
  method: "catFile",
  input: {
    cid,
    options
  }
});
             `,
            source: "#"
          },
          {
            filename: "app.py",
            language: "python",
            featured: true,
            query:
              `// Fetch P2P Data w/ IPFS - (PYTHON DEMO)
client.invoke({
  uri: "wrap://ens/ipfs.polywrap.eth",
  module: "query",
  method: "catFile",
  input: {
    cid,
    options
  }
});
             `,
            source: "#"
          },
          {
            filename: "app.rs",
            language: "rust",
            featured: true,
            query:
              `// Fetch P2P Data w/ IPFS - (RUST DEMO)
client.invoke({
  uri: "wrap://ens/ipfs.polywrap.eth",
  module: "query",
  method: "catFile",
  input: {
    cid,
    options
  }
});
             `,
            source: "#"
          },
        ]
    },
  ]