import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { renameNameToField } from "@/utils/schema/rename-fields";
import { createTracker } from "knex-mock-client";
import { beforeEach, describe, expect, test } from "vitest";
import { produto_item } from "../produto-item.table";

describe("produtoPlano", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  const models = modelsMock;

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

    const rsp = await models.produtoItem.query.produtoPlano({
      ids: [{ id: "produto_item_id", value: "10" }],
      select: ["produto_plano_id"],
    });
    expect(rsp).toEqual({ produto_plano_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["10"],
          sql: "select [IdVisiontech] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
        },
        {
          bindings: ["1"],
          sql: "select [CdProduto] from [CadPro] where ([CdProduto] = @p0)",
        },
      ],
    });
  });
});
