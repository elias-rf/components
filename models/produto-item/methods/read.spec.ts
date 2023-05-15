import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { readFactory } from "./read";

describe("read", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const read = readFactory({ connections: connectionsMock });

  beforeEach(() => {
    tracker.reset();
  });

  it("read", async () => {
    tracker.on.select("tbl_Produto_Item").response([{ kProdutoItem: "1" }]);
    const rsp = await read({
      ids: [{ id: "produto_item_id", value: 1 }],
    });

    expect(rsp).toEqual({ produto_item_id: "1" });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [1],
          sql: "select [kProdutoItem], [NomeProdutoItem], [fkProduto], [IdVisiontech], [ForaDeLinha], [GrupoCredito] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
        },
      ],
    });
  });
});
