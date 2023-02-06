const ts: string =
`let uri = Uri::from("wrap://ens/uniswap:pool@1.2.3");

client.invoke::<TxReceipt>(
  uri,
  "add_liquidity",
  wrap::args!({
    "pool_address": "0x...",
    "wei": "12...",
    ...
  })
);
`
const py: string =
`let uri = Uri::from("wrap://ens/uniswap:pool@1.2.3");

client.invoke::<TxReceipt>(
  uri,
  "add_liquidity",
  wrap::args!({
    "pool_address": "0x...",
    "wei": "12...",
    ...
  })
);
`
const rust: string =
`let uri = Uri::from("wrap://ens/uniswap:pool@1.2.3");

client.invoke::<TxReceipt>(
  uri,
  "add_liquidity",
  wrap::args!({
    "pool_address": "0x...",
    "wei": "12...",
    ...
  })
);
`

export default { ts, py, rust }
