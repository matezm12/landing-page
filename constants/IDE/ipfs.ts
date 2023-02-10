import { CodeFormats } from ".";

const ts: CodeFormats = {
  client:
`const result = await client.invoke<Uint8Array>({
  uri: "wrap://ens/ipfs.eth:wrapper@1.2.3",
  method: "cat",
  args: {
    cid: "Qm..."
  }
});`,
  codegen:
`const result = await ipfs.cat({
  cid: "Qm..."
});`
};

const py: CodeFormats = {
  client:
`options = InvokerOptions(
  uri=Uri("wrap://ens/ipfs.eth:wrapper@1.2.3"),
  method="cat",
  args={
    "cid": "Qm..."
  }
)

result = await client.invoke(options)`,
  codegen:
`result = await ipfs.cat(
  cid="Qm..."
)`
};

const rust: CodeFormats = {
  client:
`let result = client.invoke::<Vec<u8>>(
    &Uri::from("wrap://ens/ipfs.eth:wrapper@1.2.3"),
    "cat",
    wrap::args!({
        "cid": "Qm..."
    })
).await.unwrap();`,
  codegen:
`let result = ipfs.cat(
  "Qm..."
).await.unwrap();`
};

export default { ts, py, rust }
