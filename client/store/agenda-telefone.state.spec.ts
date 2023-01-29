import { agendaTelefoneStore } from "./agenda-telefone.state";

describe("agendaTelefoneStore", () => {
  it("getSchema", async () => {
    await agendaTelefoneStore.getState().getSchema();

    expect(agendaTelefoneStore.getState().dataSchema.length).toEqual(4);
  });
});
