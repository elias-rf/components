import { produtoItemStore } from "../../model/produto-item/produto-item.store";

const produtoItemStore = produtoItemStore;

describe("produtoItemStore", () => {
  it("setIncrement", async () => {
    const rsp = await produtoItemStore.getState().getProdutoPlano({
      id: { produto_item_id: 1 },
      select: ["produto"],
    });

    expect(rsp).toEqual({
      produto: "prodPlano1",
    });
  });
});
