import { CodeFormats } from ".";

const ts: CodeFormats = {
  client:
`const result = await client.invoke<TxReceipt>({
  uri: "wrap://ens/uniswap.eth:pool@1.2.3",
  method: "add_liquidity",
  args: {
    pool_address: "0x...",
    wei: "12...",
    ...
  }
});`,
  codegen:
`const result = await Uniswap.add_liquidity({
  pool_address: "0x...",
  wei: "12...",
  ...
});`
};

const py: CodeFormats = {
  client:
`options = InvokerOptions(
  uri=Uri("wrap://ens/uniswap.eth:pool@1.2.3"),
  method="add_liquidity",
  args={
    "pool_address": "0x...",
    "wei": "12...",
    ...
  }
)

result = await client.invoke(options)`
};

const rust: CodeFormats = {
  client:
`let result = client.invoke::<TxReceipt>(
    &Uri::from("wrap://ens/uniswap.eth:pool@1.2.3"),
    "add_liquidity",
    wrap::args!({
        "pool_address": "0x...",
        "wei": "12...",
        ...
    })
).await.unwrap();`
};

export default { ts, py, rust }
