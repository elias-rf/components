import { estoqueStore } from "../../model/estoque/estoque.store";

describe("estoqueStore", () => {
  it("setIncrement", async () => {
    const qtd = await estoqueStore.getState().getRead({
      id: { filial_id: 1, produto_plano_id: 1 },
      select: ["estoque"],
    });
    const rsp = await estoqueStore.getState().setIncrement({
      id: { filial_id: 1, produto_plano_id: 1 },
      quantidade: 1,
    });
    expect(rsp).toEqual({
      estoque_atual: qtd.estoque + 1,
    });
  });
});
