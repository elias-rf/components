import { esterilizacaoExternaStore } from "../../model/esterilizacao-externa/esterilizacao-externa.store";
import { esterilizacao_externa } from "../../model/esterilizacao-externa/esterilizacao-externa.table";

describe("esterilizacaoExternaStore", () => {
  it("getList", async () => {
    await esterilizacaoExternaStore.getState().getList({
      where: [["esterilizacao_externa_id", "=", "1"]],
      select: ["esterilizacao_externa_id"],
    });
    expect(esterilizacaoExternaStore.getState().dataList).toEqual([
      {
        esterilizacao_externa_id: 1,
      },
    ]);
  });
  it("refreshList", async () => {
    await esterilizacaoExternaStore.getState().refreshList();
    expect(esterilizacaoExternaStore.getState().dataList).toEqual([
      {
        esterilizacao_externa_id: 1,
      },
    ]);
  });
  it("getRead", async () => {
    await esterilizacaoExternaStore.getState().getRead({
      id: { esterilizacao_externa_id: "1" },
      select: ["esterilizacao_externa_id"],
    });
    expect(esterilizacaoExternaStore.getState().dataRead).toEqual({
      esterilizacao_externa_id: 1,
    });
  });
  it("getSchema", async () => {
    await esterilizacaoExternaStore.getState().getSchema();
    expect(esterilizacaoExternaStore.getState().dataSchema).toEqual(
      esterilizacao_externa.fields
    );
  });
  it("getClear", async () => {
    await esterilizacaoExternaStore.getState().getClear();
    expect(esterilizacaoExternaStore.getState().dataClear).toEqual({
      data_envio: "",
      data_retorno: "",
      eh_fechado: 0,
      esterilizacao_externa_id: null,
      lote: null,
      observacao: null,
      quantidade: null,
      quantidade_caixa: null,
      resultado: null,
      usuario_id: null,
    });
  });
  it("setCreate, setUpdate, setDelete", async () => {
    const crt = await esterilizacaoExternaStore.getState().setCreate({
      data: {
        esterilizacao_externa_id: 22,
        data_envio: "",
        data_retorno: "",
        eh_fechado: 0,
      },
      select: ["esterilizacao_externa_id"],
    });
    expect(crt).toEqual({
      esterilizacao_externa_id: 22,
    });
    const upd = await esterilizacaoExternaStore.getState().setUpdate({
      id: { esterilizacao_externa_id: 22 },
      data: { quantidade: 1 },
      select: ["esterilizacao_externa_id"],
    });
    expect(upd).toEqual({
      esterilizacao_externa_id: 22,
    });
    const dlt = await esterilizacaoExternaStore
      .getState()
      .setDel({ id: { esterilizacao_externa_id: 22 } });
    expect(dlt).toEqual(1);
  });

  it("schemaDiario", async () => {
    await esterilizacaoExternaStore.getState().getSchemaDiario();
    expect(esterilizacaoExternaStore.getState().dataSchemaDiario).toEqual([
      {
        label: "Dia",
        name: "dia",
        primaryKey: true,
        typeField: "string",
      },
      {
        label: "Dia Semana",
        name: "dia_semana",
        typeField: "string",
      },
      {
        label: "Quantidade",
        name: "quantidade",
        typeField: "int",
      },
    ]);
  });
  it("schemaMensal", async () => {
    await esterilizacaoExternaStore.getState().getSchemaMensal();
    expect(
      esterilizacaoExternaStore.getState().dataSchemaMensal.length
    ).toEqual(2);
  });
  it("schemaProduto", async () => {
    await esterilizacaoExternaStore.getState().getSchemaProduto();
    expect(
      esterilizacaoExternaStore.getState().dataSchemaProduto.length
    ).toEqual(2);
  });
  it("schemaModelo", async () => {
    await esterilizacaoExternaStore.getState().getSchemaModelo();
    expect(
      esterilizacaoExternaStore.getState().dataSchemaModelo.length
    ).toEqual(2);
  });

  it("getDiario", async () => {
    await esterilizacaoExternaStore.getState().getDiario({
      inicio: "2020-01-01",
      fim: "2020-01-01",
    });
    expect(esterilizacaoExternaStore.getState().dataDiario).toEqual([
      {
        dia: "2020-01-01",
        dia_semana: "ter",
        quantidade: 10,
      },
    ]);
  });

  it("getMensal", async () => {
    await esterilizacaoExternaStore.getState().getMensal({
      mes: "2020-01",
    });
    expect(esterilizacaoExternaStore.getState().dataMensal).toEqual([
      {
        mes: "2020-01",
        quantidade: 10,
      },
    ]);
  });

  it("getModelo", async () => {
    await esterilizacaoExternaStore.getState().getModelo({
      data: "2020-01-01",
      produto: "cat1",
    });
    expect(esterilizacaoExternaStore.getState().dataModelo).toEqual([
      {
        modelo: "proditem1",
        quantidade: 10,
      },
    ]);
  });

  it("getProduto", async () => {
    await esterilizacaoExternaStore.getState().getProduto({
      data: "2020-01-01",
    });
    expect(esterilizacaoExternaStore.getState().dataProduto).toEqual([
      {
        produto: "cat1",
        quantidade: 10,
      },
    ]);
  });
});
