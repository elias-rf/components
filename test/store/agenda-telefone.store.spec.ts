import { agendaTelefoneStore } from "../../model/agenda-telefone/agenda-telefone.store";

describe("agendaTelefoneStore", () => {
  it("getList", async () => {
    await agendaTelefoneStore.getState().getList({
      where: [["agenda_telefone_id", "=", "1"]],
      select: ["agenda_telefone_id"],
    });
    expect(agendaTelefoneStore.getState().dataList).toEqual([
      {
        agenda_telefone_id: 1,
      },
    ]);
  });
  it("refreshList", async () => {
    await agendaTelefoneStore.getState().refreshList();
    expect(agendaTelefoneStore.getState().dataList).toEqual([
      {
        agenda_telefone_id: 1,
      },
    ]);
  });
  it("getRead", async () => {
    await agendaTelefoneStore.getState().getRead({
      id: { agenda_telefone_id: "1" },
      select: ["agenda_telefone_id"],
    });
    expect(agendaTelefoneStore.getState().dataRead).toEqual({
      agenda_telefone_id: 1,
    });
  });
  it("getSchema", async () => {
    await agendaTelefoneStore.getState().getSchema();
    expect(agendaTelefoneStore.getState().dataSchema.length).toEqual(4);
  });
  it("getClear", async () => {
    await agendaTelefoneStore.getState().getClear();
    expect(agendaTelefoneStore.getState().dataClear).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });
  it("setCreate, setUpdate, setDelete", async () => {
    const crt = await agendaTelefoneStore
      .getState()
      .setCreate({ data: { agenda_telefone_id: 22, nome: "Fulano" } });
    expect(crt).toEqual({
      agenda_telefone_id: 22,
      email: null,
      nome: "Fulano",
      setor: null,
    });
    const upd = await agendaTelefoneStore
      .getState()
      .setUpdate({ id: { agenda_telefone_id: 22 }, data: { nome: "Nome" } });
    expect(upd).toEqual({
      agenda_telefone_id: 22,
      email: null,
      nome: "Nome",
      setor: null,
    });
    const dlt = await agendaTelefoneStore
      .getState()
      .setDel({ id: { agenda_telefone_id: 22 } });
    expect(dlt).toEqual(1);
  });
});
