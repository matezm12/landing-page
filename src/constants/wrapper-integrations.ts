export interface WrapperIntegration {
  wrapperName: string;
  description: string;
  link: string;
  logo: string;
  method: string;
  snippets: CodeSnippet[];
}

export interface CodeSnippet {
  filename: string;
  language: "typescript" | "rust" | "python";
  code: string;
}

export const SPACE_CHARACTER = "º";

export const WRAPPER_INTEGRATIONS: WrapperIntegration[] = [
  {
    wrapperName: "Defi wrapper",
    description: "Defiwrapper is a collection of various DeFi  wrappers like defi-sdk, coingecko, and more. With Defiwrapper, you can enable a wide range of  DeFi usecases for a suite of cross-chain and multi-platform innovations.",
    link: "https://defiwrapper.com",
    logo: process.env.PUBLIC_URL + "/imgs/defiwrapper-logo.png",
    method: "getTransactions",
    snippets: [
      {
        filename: "getTransactions.ts",
        language: "typescript",
        code:
`// Get all transactions from account
client.invoke<Transaction[]>({
ººuri: "wrap://ens/defiwrapper.polywrap.eth",
ººmethod: "getTransactions",
ººargs: {
ººººaccountAddress,
ººººoptions,
ºººº...
ºº}
});`
      },
      {
        filename: "getTransactions.py",
        language: "python",
        code:
`# Get all transactions from account
client.invoke(
ººuri="wrap://ens/defiwrapper.polywrap.eth",
ººmethod="getTransactions",
ººargs={
ºººº"accountAddress": accountAddress,
ºººº"options": options,
ºººº...
ºº}
);`
      },
      {
        filename: "getTransactions.rs",
        language: "rust",
        code:
`// Get all transactions from account
client.invoke::<Vec<Transaction>>(
ºº"wrap://ens/defiwrapper.polywrap.eth",
ºº"getTransactions",
ººSome(encode_args!({
ººººaccountAddress: accountAddress,
ººººoptions: options,
ºººº...
ºº}))
);`
      }
    ]
  },
  {
    wrapperName: "Uniswap V3",
    description: "The newest Uniswap wrapper is written in AssemblyScript, and like the official Uniswap V3 SDK, it has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The Uniswap wrapper business logic will be deployed on a decentralized endpoint, like IPFS.",
    link: "https://docs.polywrap.io/demos/uniswapv3/intro",
    // TODO: load from public dir
    logo: process.env.PUBLIC_URL + "/imgs/uniswap-uni-logo.png",
    method: "executeSwap",
    snippets: [
      {
        filename: "executeSwap.ts",
        language: "typescript",
        code:
`// Execute Token Swaps w/ Uniswap V3
client.invoke<SwapResult>({
ººuri: "wrap://ens/v3.uniswap.polywrap.eth",
ººmethod: "swap",
ººargs: {
ººººinToken,
ººººoutToken,
ººººamount,
ºººº...
ºº}
});`
      },
      {
        filename: "executeSwap.py",
        language: "python",
        code:
`#Execute Token Swaps w/ Uniswap V3
client.invoke(
ººuri="wrap://ens/v3.uniswap.polywrap.eth",
ººmethod="swap",
ººargs={
ºººº"inToken": inToken,
ºººº"outToken": outToken,
ºººº"amount": amount,
ºººº...
ºº}
);`
      },
      {
        filename: "executeSwap.rs",
        language: "rust",
        code:
`// Execute Token Swaps with Uniswap V3
client.invoke::<SwapResult>(
ºº"wrap://ens/v3.uniswap.polywrap.eth",
ºº"swap",
ººSome(encode_args!({
ººººinToken: inToken,
ººººoutToken: outToken,
ººººamount: amount,
ºººº...
ºº})
);`
      }
    ]
  }
];
