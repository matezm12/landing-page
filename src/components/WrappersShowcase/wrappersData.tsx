export const wrappersData = [
  {
    wrapperName: "Defi wrapper",
    description:
      "Defiwrapper is a collection of various DeFi  wrappers like defi-sdk, coingecko, and more. With Defiwrapper, you can enable a wide range of  DeFi usecases for a suite of cross-chain and multi-platform innovations.",
    featuredWrapper: true,
    thirdParty: false,
    docsLink: "https://defiwrapper.com",
    svgLogo: {
      url: "https://images.ctfassets.net/tmv21jqhvpr2/5zBntU87kcj2CNDPwcdzrh/619f185b1072446973e095896c6068c1/wrapper-gnosis.png",
      alt: "defiwrapper",
    },
    queries: {
      queryName: "getTransactions",
      featuredQuery: true,
      source: "https://github.com/defiwrapper/documentation",
      snippets: [
        { filename: "getTransactions.js", language: "javascript", snippet: "" },
        {
          filename: "getTransactions.ts",
          language: "typescript",
          snippet:
            '// Get all transactions from account\n\nclient.invoke({\nººuri: "wrap://ens/defiwrapper.polywrap.eth",\nººmethod: "getTransactions",\nººargs: {\nººººaccountAddress,\nººººoptions,\nºººº...\nºº}\n});',
        },
        {
          filename: "getTransactions.py",
          language: "python",
          snippet:
            '# Get all transactions from account\n\nclient.invoke(\nººuri="wrap://ens/defiwrapper.polywrap.eth",\nººmethod="getTransactions",\nººargs={\nºººº"accountAddress": accountAddress,\nºººº"options": options,\nºººº...\nºº}\n);',
        },
        {
          filename: "getTransactions.rs",
          language: "rust",
          snippet:
            '// Get all transactions from account\n\nclient.invoke({\nººuri: "wrap://ens/defiwrapper.polywrap.eth",\nººmethod: "getTransactions",\nººargs: defiwrapper::method::accountAddress::Input {\nººººaccountAddress: accountAddress,\nººººoptions: options,\nºººº...\nºº}.to_json()\n});',
        },
      ],
    },
  },
  {
    wrapperName: "Uniswap V3",
    description:
      "The newest Uniswap wrapper is written in AssemblyScript, and like the official Uniswap V3 SDK, it has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The Uniswap wrapper business logic will be deployed on a decentralized endpoint, like IPFS.",
    featuredWrapper: true,
    thirdParty: false,
    docsLink: "https://docs.polywrap.io/demos/uniswapv3/intro",
    svgLogo: {
      url: "https://images.ctfassets.net/tmv21jqhvpr2/33NRStoHDXlGuShCUcMAGW/ec6d62b301179e73498b69acc11c7315/uniswap-uni-logo.svg",
      alt: "uniswap",
    },
    queries: {
      queryName: "executeSwap",
      featuredQuery: true,
      source:
        "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/mutation/schema.graphql#L46-L61",
      snippets: [
        { filename: "executeSwap.js", language: "javascript", snippet: "" },
        {
          filename: "executeSwap.ts",
          language: "typescript",
          snippet:
            '// import envs and other configs for the client\nimport * into GetTransactions\n\n// Execute Token Swaps w/ Uniswap V3\nclient.invoke({\nººuri: "wrap://ens/v3.uniswap.polywrap.eth",\nººmethod: "swap",\nººargs: {\nººººinToken,\nººººoutToken,\nººººamount,\nºººº...\nºº}\n});',
        },
        {
          filename: "executeSwap.py",
          language: "python",
          snippet:
            '#Execute Token Swaps w/ Uniswap V3\n\nclient.invoke(\nººuri="wrap://ens/v3.uniswap.polywrap.eth",\nººmethod="swap",\nººargs={\nºººº"inToken": inToken,\nºººº"outToken": outToken,\nºººº"amount": amount,\nºººº...\nºº}\n);',
        },
        {
          filename: "executeSwap.rs",
          language: "rust",
          snippet:
            '// Execute Token Swaps with Uniswap V3\nclient.invoke({\nººuri: "wrap://ens/v3.uniswap.polywrap.eth",\nººmethod: "swap",\nººargs: uni::mutation::swap::Input {\nººººinToken: inToken,\nººººoutToken: outToken,\nººººamount: amount,\nºººº...\nºº}.to_json()\n});',
        },
      ],
    },
  },
];
