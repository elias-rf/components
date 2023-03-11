import { getTracker } from "knex-mock-client";
import { describe, expect, test } from "vitest";
import { connectionsMock } from "../../mocks/connections.mock";
import { knexMockHistory } from "../../utils/data/knex-mock-history";
import { renameNameToField } from "../../utils/schema/rename-fields";
import { produtoPlanoModelFactory } from "../produto-plano/produto-plano.model";
import { produtoItemModelFactory } from "./produto-item.model";
import { produto_item } from "./produto-item.table";

describe("produtoItem", () => {
  const tracker = getTracker();

  const produtoItem = produtoItemModelFactory({
    connections: connectionsMock,
    produtoPlanoModel: produtoPlanoModelFactory({
      connections: connectionsMock,
    }),
  });

  beforeEach(() => {
    tracker.reset();
  });

  test("produto-plano", async () => {
    tracker.on
      .select("tbl_Produto_Item")
      .response(
        renameNameToField(
          [{ produto_item_id: 10, produto_plano_id: "1" }],
          produto_item.fields
        )
      );
    tracker.on.select("CadPro").response([{ CdProduto: 1 }]);
    const rsp = await produtoItem.query.produtoPlano({
      id: { produto_item_id: "10" },
      select: ["produto_plano_id"],
    });
    expect(rsp).toEqual({ produto_plano_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["10"],
          sql: "select [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = @p0",
        },
        {
          bindings: ["1"],
          sql: "select [CdProduto] from [CadPro] where [CdProduto] = @p0",
        },
      ],
    });
  });
});
