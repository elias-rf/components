import { produtoEstatisticaStore } from "../../model/produto-estatistica/produto-estatistica.store";

describe("produtoEstatisticaStore", () => {
  it("setIncrement", async () => {
    const qtd = await produtoEstatisticaStore.getState().getRead({
      id: { filial_id: 1, produto_plano_id: 1, ano: "2023", mes: "01" },
      select: ["entrada"],
    });
    const rsp = await produtoEstatisticaStore.getState().setIncrement({
      id: { filial_id: 1, produto_plano_id: 1, ano: "2023", mes: "01" },
      quantidade: 1,
    });
    expect(rsp).toEqual({
      entrada: qtd.entrada + 1,
    });
  });
});
