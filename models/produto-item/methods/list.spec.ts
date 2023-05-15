import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { listFactory } from "./list";

describe("ordemProducaoModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const list = listFactory({ connections: connectionsMock });

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on.select("tbl_Produto_Item").response([{ kProdutoItem: "1" }]);
    const rsp = await list({
      filters: [{ id: "produto_item_id", value: "1" }],
      sorts: [{ id: "produto_item_id", desc: false }],
    });

    expect(rsp).toEqual([{ produto_item_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "1"],
          sql: "select top (@p0) [kProdutoItem], [NomeProdutoItem], [fkProduto], [IdVisiontech], [ForaDeLinha], [GrupoCredito] from [tbl_Produto_Item] where ([kProdutoItem] = @p1) order by [kProdutoItem] asc",
        },
      ],
    });
  });
});
