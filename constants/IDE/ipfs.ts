import { CodeFormats } from ".";

const ts: CodeFormats = {
  client:
`await client.invoke<Uint8Array>({
  uri: "wrap://ens/ipfs.eth:wrapper@1.2.3",
  method: "cat",
  args: {
    cid: "Qm..."
  }
});`,
  codegen:
`await ipfs.cat({
  cid: "Qm..."
});`
};

const py: CodeFormats = {
  client:
`await client.invoke(
  uri=Uri("wrap://ens/ipfs.eth:wrapper@1.2.3"),
  method="cat",
  args={
    "cid": "Qm..."
  }
)`,
  codegen:
`await ipfs.cat(
  cid="Qm..."
)`
};

const rust: CodeFormats = {
  client:
`client.invoke::<Vec<u8>>(
    &Uri::from("wrap://ens/ipfs.eth:wrapper@1.2.3"),
    "cat",
    wrap::args!({
        "cid": "Qm..."
    })
).await.unwrap();`,
  codegen:
`ipfs.cat(
    "Qm..."
).await.unwrap();`
};

export default { ts, py, rust }
