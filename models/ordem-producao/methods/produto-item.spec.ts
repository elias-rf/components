import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { produtoItemFactory } from "./produto-item";

describe("produtoItem", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const produtoItem = produtoItemFactory({
    models: modelsMock,
  });

  beforeEach(() => {
    tracker.reset();
  });

  it("produtoItem", async () => {
    tracker.on.select("tOrdemProducao").response([{ fkProdutoItem: 1 }]);
    tracker.on.select("tbl_Produto_Item").response([{}]);
    const rsp = await produtoItem({
      ids: [{ id: "ordem_producao_id", value: 1 }],
      select: ["produto_item_id"],
    });

    expect(rsp).toEqual({});
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [1],
          sql: "select [fkProdutoItem] from [tOrdemProducao] where ([kOp] = @p0)",
        },
        {
          bindings: [1],
          sql: "select [kProdutoItem] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
        },
      ],
    });
  });
});
