import { ordemProducaoStore } from "../../model/ordem-producao/ordem-producao.store";

const ordemProducaoStore = ordemProducaoStore;

describe("ordemProducaoStore", () => {
  it("getProdutoItem", async () => {
    await ordemProducaoStore.getState().getProdutoItem({
      id: { ordem_producao_id: 1 },
      select: ["nome_produto_item"],
    });
    expect(ordemProducaoStore.getState().dataProdutoItem).toEqual({
      nome_produto_item: "proditem1",
    });
  });

  it("getProdutoPlano", async () => {
    await ordemProducaoStore.getState().getProdutoPlano({
      id: { ordem_producao_id: 1 },
      select: ["produto"],
    });
    expect(ordemProducaoStore.getState().dataProdutoPlano).toEqual({
      produto: "prodPlano1",
    });
  });

  it("getDataFabricacao", async () => {
    await ordemProducaoStore.getState().getDataFabricacao({
      id: { ordem_producao_id: 1 },
    });
    expect(ordemProducaoStore.getState().dataDataFabricacao).toEqual(
      "2020-01-01"
    );
  });

  it("getDataValidade", async () => {
    await ordemProducaoStore.getState().getDataValidade({
      id: { ordem_producao_id: 1 },
    });
    expect(ordemProducaoStore.getState().dataDataValidade).toEqual(
      "2025-01-01"
    );
  });

  it("getControle", async () => {
    await ordemProducaoStore.getState().getControle({
      id: { ordem_producao_id: 100 },
      serie: "1",
    });
    expect(ordemProducaoStore.getState().dataControle).toEqual("000001000017");
  });

  it("getFromControle", async () => {
    await ordemProducaoStore.getState().getFromControle({
      controle: "000001000017",
    });
    expect(ordemProducaoStore.getState().dataFromControle).toEqual("00000100");
  });
});
