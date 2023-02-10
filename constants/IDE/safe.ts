import { CodeFormats } from ".";

const ts: CodeFormats = {
  client:
`await client.invoke<string[]>({
  uri: "wrap://ens/safe.eth:wrapper@1.2.3",
  method: "getOwnersWhoApprovedTx",
  args: {
    hash: "0x..."
  }
});`,
  codegen:
`await safe.getOwnersWhoApprovedTx({
    hash: "0x..."
});`
};

const py: CodeFormats = {
  client:
`options = InvokerOptions(
  uri=Uri("wrap://ens/safe.eth:wrapper@1.2.3"),
  method="getOwnersWhoApprovedTx",
  args={
    "hash": "0x..."
  }
)

await client.invoke(options)`,
  codegen:
`await safe.getOwnersWhoApprovedTx(
  hash="0x..."
)`
};

const rust: CodeFormats = {
  client:
`client.invoke::<Vec<String>>(
    &Uri::from("wrap://ens/safe.eth:wrapper@1.2.3"),
    "getOwnersWhoApprovedTx",
    wrap::args!({
        "hash": "0x..."
    })
).await.unwrap();`,
  codegen:
`safe.get_owners_who_approved_tx(
  "0x..."
).await.unwrap();`
};

export default { ts, py, rust }
