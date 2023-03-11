import { agendaTelefoneServiceFactory } from "./agenda-telefone.service";
import { agendaTelefoneStore } from "./agenda-telefone.store";

const agendaTelefoneService = agendaTelefoneServiceFactory();
const agendaTelefoneStore = agendaTelefoneStore;

describe("agendaTelefoneStore", () => {
  it("getSchema", async () => {
    await agendaTelefoneStore.getState().getSchema();

    expect(agendaTelefoneStore.getState().dataSchema.length).toEqual(4);
  });
});
