import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { produto_item } from "@/models/produto-item/produto-item.table";
import { renameNameToField } from "@/utils/schema/rename-fields";
import { createTracker } from "knex-mock-client";

describe("ProdutoItemModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const models = modelsMock;

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on.select("tbl_Produto_Item").response([{ kProdutoItem: "1" }]);
    const rsp = await models.produtoItem.list({
      filter: { produto_item_id: "1" },
      sort: { produto_item_id: "asc" },
    });

    expect(rsp).toEqual([{ produto_item_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [kProdutoItem], [NomeProdutoItem], [fkProduto], [IdVisiontech], [ForaDeLinha], [GrupoCredito] from [tbl_Produto_Item] where ([kProdutoItem] = @p1) order by [kProdutoItem] asc",
      },
    ]);
  });

  test("produtoPlano", async () => {
    tracker.on
      .select("tbl_Produto_Item")
      .response(
        renameNameToField(
          [{ produto_item_id: 10, produto_plano_id: "1" }],
          produto_item.fields
        )
      );
    tracker.on.select("CadPro").response([{ CdProduto: 1 }]);

    const rsp = await models.produtoItem.produtoPlano({
      id: { produto_item_id: "10" },
      select: ["produto_plano_id"],
    });
    expect(rsp).toEqual({ produto_plano_id: 1 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["10"],
        sql: "select [IdVisiontech] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
      },
      {
        bindings: ["1"],
        sql: "select [CdProduto] from [CadPro] where ([CdProduto] = @p0)",
      },
    ]);
  });

  it("read", async () => {
    tracker.on.select("tbl_Produto_Item").response([{ kProdutoItem: "1" }]);
    const rsp = await models.produtoItem.read({
      id: { produto_item_id: 1 },
    });

    expect(rsp).toEqual({ produto_item_id: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [kProdutoItem], [NomeProdutoItem], [fkProduto], [IdVisiontech], [ForaDeLinha], [GrupoCredito] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
      },
    ]);
  });
});
