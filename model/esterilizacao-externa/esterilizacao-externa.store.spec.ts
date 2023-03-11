import { esterilizacaoExternaServiceFactory } from "./esterilizacao-externa.service";

const service = esterilizacaoExternaServiceFactory();
const agendaTelefoneStore = esterilizacaoExternaStore;

describe("esterilizacaoExternaStore", () => {
  it("getSchema", async () => {
    await agendaTelefoneStore.getState().getSchema();

    expect(agendaTelefoneStore.getState().dataSchema.length).toEqual(10);
  });
});
