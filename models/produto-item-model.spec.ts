import { ProdutoItem, ProdutoPlano } from "@/database";
import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { produtoItemModel } from "./produto-item-model";
import { expect, it, describe, beforeEach } from "vitest";

describe("ProdutoItemModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  ProdutoItem.knex(connectionsMock.oftalmo);
  ProdutoPlano.knex(connectionsMock.oftalmo);

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on.select("tbl_Produto_Item").response([{ kProdutoItem: "1" }]);
    const rsp = await produtoItemModel.list({
      filter: { kProdutoItem: "1" },
      sort: { kProdutoItem: "asc" },
    });

    expect(rsp).toEqual([{ kProdutoItem: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) * from [tbl_Produto_Item] where ([kProdutoItem] = @p1) order by [kProdutoItem] asc",
      },
    ]);
  });

  test("produtoPlano", async () => {
    tracker.on
      .select("tbl_Produto_Item")
      .response([{ kProdutoItem: 10, IdVisiontech: "1" }]);
    tracker.on.select("CadPro").response([{ CdProduto: "1" }]);

    const rsp = await produtoItemModel.produtoPlano({
      id: { kProdutoItem: "10" },
      select: ["CdProduto"],
    });
    expect(rsp).toEqual({ CdProduto: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["10"],
        sql: "select [IdVisiontech] from [tbl_Produto_Item] where [tbl_Produto_Item].[kProdutoItem] = @p0",
      },
      {
        bindings: ["1"],
        sql: "select [CdProduto] from [CadPro] where [CadPro].[CdProduto] = @p0",
      },
    ]);
  });

  it("read", async () => {
    tracker.on.select("tbl_Produto_Item").response([{ kProdutoItem: "1" }]);
    const rsp = await produtoItemModel.read({
      id: { kProdutoItem: 1 },
    });

    expect(rsp).toEqual({ kProdutoItem: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [tbl_Produto_Item].* from [tbl_Produto_Item] where [tbl_Produto_Item].[kProdutoItem] = @p0",
      },
    ]);
  });
});
