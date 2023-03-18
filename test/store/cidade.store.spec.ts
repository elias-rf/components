import { cidadeStore } from "../../model/cidade/cidade.store";

describe("cidadeStore", () => {
  it("getList", async () => {
    await cidadeStore.getState().getList({
      where: [["cidade_id", "=", "1"]],
      select: ["cidade_id"],
    });
    expect(cidadeStore.getState().dataList).toEqual([
      {
        cidade_id: "1    ",
      },
    ]);
  });
  it("refreshList", async () => {
    await cidadeStore.getState().refreshList();
    expect(cidadeStore.getState().dataList).toEqual([
      {
        cidade_id: "1    ",
      },
    ]);
  });
  it("getRead", async () => {
    await cidadeStore.getState().getRead({
      id: { nome_cidade: "cid1", uf_old: "SP" },
      select: ["cidade_id"],
    });
    expect(cidadeStore.getState().dataRead).toEqual({
      cidade_id: "1    ",
    });
  });
  it("getSchema", async () => {
    await cidadeStore.getState().getSchema();
    expect(cidadeStore.getState().dataSchema.length).toEqual(5);
  });
  it("getClear", async () => {
    await cidadeStore.getState().getClear();
    expect(cidadeStore.getState().dataClear).toEqual({
      cidade_id: null,
      nome_cidade: null,
      uf: null,
      uf_id: 0,
      uf_old: null,
    });
  });
  it("setCreate, setUpdate, setDelete", async () => {
    const crt = await cidadeStore.getState().setCreate({
      data: { nome_cidade: "cid11", uf_old: "ES", cidade_id: "11", uf_id: 11 },
    });
    expect(crt).toEqual({
      cidade_id: "11   ",
      nome_cidade: "cid11",
      uf: null,
      uf_id: 11,
      uf_old: "ES",
    });
    const upd = await cidadeStore.getState().setUpdate({
      id: { nome_cidade: "cid11", uf_old: "ES" },
      data: { cidade_id: "Nome" },
    });
    expect(upd).toEqual({
      cidade_id: "Nome ",
      nome_cidade: "cid11",
      uf: null,
      uf_id: 11,
      uf_old: "ES",
    });
    const dlt = await cidadeStore
      .getState()
      .setDel({ id: { nome_cidade: "cid11", uf_old: "ES" } });
    expect(dlt).toEqual(1);
  });
});
