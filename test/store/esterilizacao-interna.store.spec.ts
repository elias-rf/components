import { esterilizacaoInternaStore } from "../../model/esterilizacao-interna/esterilizacao-interna.store";

describe("esterilizacaoInternaStore", () => {
  it("getList", async () => {
    await esterilizacaoInternaStore.getState().getList({
      where: [["esterilizacao_interna_id", "=", "1"]],
      select: ["esterilizacao_interna_id"],
    });
    expect(esterilizacaoInternaStore.getState().dataList).toEqual([
      {
        esterilizacao_interna_id: 1,
      },
    ]);
  });
  it("refreshList", async () => {
    await esterilizacaoInternaStore.getState().refreshList();
    expect(esterilizacaoInternaStore.getState().dataList).toEqual([
      {
        esterilizacao_interna_id: 1,
      },
    ]);
  });
  it("getRead", async () => {
    await esterilizacaoInternaStore.getState().getRead({
      id: { esterilizacao_interna_id: "1" },
      select: ["esterilizacao_interna_id"],
    });
    expect(esterilizacaoInternaStore.getState().dataRead).toEqual({
      esterilizacao_interna_id: 1,
    });
  });
  it("getSchema", async () => {
    await esterilizacaoInternaStore.getState().getSchema();
    expect(esterilizacaoInternaStore.getState().dataSchema.length).toEqual(9);
  });
  it("getClear", async () => {
    await esterilizacaoInternaStore.getState().getClear();
    expect(esterilizacaoInternaStore.getState().dataClear).toEqual({
      data_autoclave: null,
      data_envio: null,
      data_fechamento: null,
      eh_fechado: null,
      esterilizacao_interna_id: null,
      observacao: null,
      resultado: null,
      usuario_id_fechamento: null,
      usuario_id_resultado: null,
    });
  });
  it("setCreate, setUpdate, setDelete", async () => {
    const crt = await esterilizacaoInternaStore.getState().setCreate({
      data: {
        esterilizacao_interna_id: 22,
        data_envio: "",
        eh_fechado: 0,
      },
      select: ["esterilizacao_interna_id"],
    });
    expect(crt).toEqual({
      esterilizacao_interna_id: 22,
    });
    const upd = await esterilizacaoInternaStore.getState().setUpdate({
      id: { esterilizacao_interna_id: 22 },
      data: { observacao: "1 " },
      select: ["esterilizacao_interna_id"],
    });
    expect(upd).toEqual({
      esterilizacao_interna_id: 22,
    });
    const dlt = await esterilizacaoInternaStore
      .getState()
      .setDel({ id: { esterilizacao_interna_id: 22 } });
    expect(dlt).toEqual(1);
  });

  it("schemaDiario", async () => {
    await esterilizacaoInternaStore.getState().getSchemaDiario();
    expect(
      esterilizacaoInternaStore.getState().dataSchemaDiario.length
    ).toEqual(3);
  });
  it("schemaMensal", async () => {
    await esterilizacaoInternaStore.getState().getSchemaMensal();
    expect(
      esterilizacaoInternaStore.getState().dataSchemaMensal.length
    ).toEqual(2);
  });
  it("schemaProduto", async () => {
    await esterilizacaoInternaStore.getState().getSchemaProduto();
    expect(
      esterilizacaoInternaStore.getState().dataSchemaProduto.length
    ).toEqual(2);
  });
  it("schemaModelo", async () => {
    await esterilizacaoInternaStore.getState().getSchemaModelo();
    expect(
      esterilizacaoInternaStore.getState().dataSchemaModelo.length
    ).toEqual(2);
  });

  it("getDiario", async () => {
    await esterilizacaoInternaStore.getState().getDiario({
      inicio: "2020-01-01",
      fim: "2020-01-01",
    });
    expect(esterilizacaoInternaStore.getState().dataDiario).toEqual([
      {
        dia: "2020-01-01",
        diaSemana: "qua",
        quantidade: 10,
      },
    ]);
  });

  it("getMensal", async () => {
    await esterilizacaoInternaStore.getState().getMensal({
      mes: "2020-01",
    });
    expect(esterilizacaoInternaStore.getState().dataMensal).toEqual([
      {
        mes: "2020-01",
        quantidade: 10,
      },
    ]);
  });

  it("getModelo", async () => {
    await esterilizacaoInternaStore.getState().getModelo({
      data: "2020-01-01",
      produto: "cat1",
    });
    expect(esterilizacaoInternaStore.getState().dataModelo).toEqual([
      {
        modelo: "proditem1",
        quantidade: 10,
      },
    ]);
  });

  it("getProduto", async () => {
    await esterilizacaoInternaStore.getState().getProduto({
      data: "2020-01-01",
    });
    expect(esterilizacaoInternaStore.getState().dataProduto).toEqual([
      {
        produto: "cat1",
        quantidade: 10,
      },
    ]);
  });
});
