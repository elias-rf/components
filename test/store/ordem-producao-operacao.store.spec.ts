import { ordemProducaoOperacaoStore } from "../../model/ordem-producao-operacao/ordem-producao-operacao.store";

const ordemProducaoOperacaoStore = ordemProducaoOperacaoStore;

describe("ordemProducaoOperacaoStore", () => {
  it("getDiarioSchema", async () => {
    await ordemProducaoOperacaoStore.getState().getDiarioSchema();
    expect(ordemProducaoOperacaoStore.getState().dataDiarioSchema).toEqual([
      { label: "Dia", name: "dia", primaryKey: true, type: "string" },
      {
        label: "Dia Semana",
        name: "diaSemana",
        type: "string",
      },
      {
        label: "Quantidade",
        name: "quantidade",
        type: "string",
      },
    ]);
  });

  it("getDiario", async () => {
    await ordemProducaoOperacaoStore.getState().getDiario({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      operacao: "3058",
    });
    expect(ordemProducaoOperacaoStore.getState().dataDiario).toEqual([
      {
        dia: "2020-01-01",
        diaSemana: "qua",
        quantidade: 10,
      },
    ]);
  });

  it("getMensalSchema", async () => {
    await ordemProducaoOperacaoStore.getState().getMensalSchema();
    expect(ordemProducaoOperacaoStore.getState().dataMensalSchema).toEqual([
      { label: "Mês", name: "mes", primaryKey: true, type: "string" },
      {
        label: "Quantidade",
        name: "quantidade",
        type: "int",
      },
    ]);
  });

  it("getMensal", async () => {
    await ordemProducaoOperacaoStore.getState().getMensal({
      mes: "2020-01",
      operacao: "3059",
    });
    expect(ordemProducaoOperacaoStore.getState().dataMensal).toEqual([
      {
        mes: "2020-01",
        quantidade: 20,
      },
    ]);
  });

  it("getProdutoSchema", async () => {
    await ordemProducaoOperacaoStore.getState().getProdutoSchema();
    expect(ordemProducaoOperacaoStore.getState().dataProdutoSchema).toEqual([
      { label: "Produto", name: "produto", primaryKey: true, type: "string" },
      {
        label: "Quantidade",
        name: "quantidade",
        type: "int",
      },
    ]);
  });

  it("getProduto", async () => {
    await ordemProducaoOperacaoStore.getState().getProduto({
      data: "2020-01-01",
      operacao: "3059",
    });
    expect(ordemProducaoOperacaoStore.getState().dataProduto).toEqual([
      {
        produto: "cat1",
        quantidade: 20,
      },
    ]);
  });

  it("getModeloSchema", async () => {
    await ordemProducaoOperacaoStore.getState().getModeloSchema();
    expect(ordemProducaoOperacaoStore.getState().dataModeloSchema).toEqual([
      { label: "Modelo", name: "modelo", primaryKey: true, type: "string" },
      {
        label: "Quantidade",
        name: "quantidade",
        type: "int",
      },
    ]);
  });

  it("getModelo", async () => {
    await ordemProducaoOperacaoStore.getState().getModelo({
      data: "2020-01-01",
      operacao: "3059",
      produto: "cat1",
    });
    expect(ordemProducaoOperacaoStore.getState().dataModelo).toEqual([
      {
        modelo: "proditem1",
        quantidade: 20,
      },
    ]);
  });

  it("getTurnoSchema", async () => {
    await ordemProducaoOperacaoStore.getState().getTurnoSchema();
    expect(ordemProducaoOperacaoStore.getState().dataTurnoSchema).toEqual([
      { label: "Turno", name: "turno", primaryKey: true, type: "string" },
      {
        label: "Quantidade",
        name: "quantidade",
        type: "int",
      },
    ]);
  });

  it("getTurno", async () => {
    await ordemProducaoOperacaoStore.getState().getTurno({
      data: "2020-01-01",
      operacao: "3059",
    });
    expect(ordemProducaoOperacaoStore.getState().dataTurno).toEqual([
      {
        turno: "T1",
        quantidade: 20,
      },
    ]);
  });
});
