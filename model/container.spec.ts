import { container } from "./container";

describe("container", () => {
  it("list", () => {
    expect(
      Object.keys(container.registrations).filter((name) =>
        name.endsWith("Model")
      ).length
    ).toEqual(37);
  });
  it("resolve model", async () => {
    const agendaTelefoneModel = container.resolve("agendaTelefoneModel");
    const schema = await agendaTelefoneModel.query.schema();
    expect(schema.length).toEqual(4);
  });

  it("resolve rpc", async () => {
    const agendaTelefoneRpc = container.resolve("agendaTelefoneRpc");
    const schema = await agendaTelefoneRpc.query.schema();
    expect(schema.length).toEqual(4);
  });
});
