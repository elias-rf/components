import { esterilizacaoExternaStore } from "./esterilizacao-externa.store";

describe("esterilizacaoExternaStore", () => {
  it("getSchema", async () => {
    await esterilizacaoExternaStore.getState().getSchema();

    expect(esterilizacaoExternaStore.getState().dataSchema.length).toEqual(10);
  });
});
