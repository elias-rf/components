import { knexMockHistory } from "@er/utils/src/knex-mock-history";
import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, it, test } from "vitest";
import { TConnections } from "../../dal/connections";
import { ProdutoItemModel } from "./produto-item.model";

describe("rpc de cliente", () => {
  const knexDb = Knex({ client: MockClient });
  const produtoItem = new ProdutoItemModel({
    plano: knexDb,
    oftalmo: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: Tracker;

  beforeEach(() => {
    tracker = getTracker();
    tracker.on.delete("tbl_Produto_Item").response(1);
    tracker.on
      .select("tbl_Produto_Item")
      .response([{ kProdutoItem: 1, IdVisiontech: " 2 " }]);
    tracker.on.update("tbl_Produto_Item").response([{ kProdutoItem: 1 }]);
    tracker.on.insert("tbl_Produto_Item").response([{ kProdutoItem: 1 }]);
    tracker.on.select("CadPro").response([{ CdProduto: 2 }]);
  });

  afterEach(() => {
    tracker.reset();
  });

  it("lista com argumentos", async () => {
    const rsp = await produtoItem.list({
      where: [["produto_item_id", "=", 1]],
    });
    expect(rsp).toEqual([{ produto_item_id: 1, produto_plano_id: " 2 " }]);
    expect(tracker.history.select[0].bindings).toEqual([1, 50]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "kProdutoItem", "NomeProdutoItem", "fkProduto", "IdVisiontech", "ForaDeLinha", "GrupoCredito" from "tbl_Produto_Item" where ("kProdutoItem" = ?) limit ?'
    );
  });

  it("read", async () => {
    const rsp = await produtoItem.read({ id: { produto_item_id: "10" } });
    expect(rsp).toEqual({ produto_item_id: 1, produto_plano_id: " 2 " });
    expect(tracker.history.select[0].bindings).toEqual(["10"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "kProdutoItem", "NomeProdutoItem", "fkProduto", "IdVisiontech", "ForaDeLinha", "GrupoCredito" from "tbl_Produto_Item" where "kProdutoItem" = ?'
    );
  });

  test("del", async () => {
    const rsp = await produtoItem.del({ id: { produto_item_id: "10" } });
    expect(rsp).toEqual(1);
    expect(tracker.history).toEqual({
      delete: [
        {
          __knexQueryUid: expect.anything(),
          bindings: ["10"],
          sql: 'delete from "tbl_Produto_Item" where "kProdutoItem" = ?',
          cancelOnTimeout: false,
          method: "delete",
          options: {},
          queryContext: undefined,
          timeout: false,
        },
      ],
      insert: [],
      update: [],
      select: [],
      any: [],
    });
  });

  test("create", async () => {
    const rsp = await produtoItem.create({ data: { produto_item_id: 10 } });
    expect(rsp).toEqual({ produto_item_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      insert: [
        {
          __knexQueryUid: expect.anything(),
          bindings: [10],
          sql: 'insert into "tbl_Produto_Item" ("kProdutoItem") values (?)',
          cancelOnTimeout: false,
          method: "insert",
          options: {},
          queryContext: undefined,
          timeout: false,
        },
      ],
      delete: [],
      update: [],
      select: [],
      any: [],
    });
  });

  test.only("update", async () => {
    const rsp = await produtoItem.update({
      id: { produto_item_id: 10 },
      data: { produto_item_id: 11 },
    });
    expect(rsp).toEqual({ produto_item_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      update: [
        {
          bindings: [11, 10],
          sql: 'update "tbl_Produto_Item" set "kProdutoItem" = ? where "kProdutoItem" = ?',
        },
      ],
    });
  });

  test("produto_plano", async () => {
    const rsp = await produtoItem.produtoPlano({
      id: { produto_item_id: "10" },
      select: ["produto_plano_id"],
    });
    expect(rsp).toEqual({ produto_plano_id: 2 });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          __knexQueryUid: expect.anything(),
          bindings: ["10"],
          sql: 'select "IdVisiontech" from "tbl_Produto_Item" where "kProdutoItem" = ?',
          cancelOnTimeout: false,
          method: "select",
          options: {},
          queryContext: undefined,
          timeout: false,
        },
        {
          __knexQueryUid: expect.anything(),
          bindings: ["2"],
          sql: 'select "CdProduto" from "CadPro" where "CdProduto" = ?',
          cancelOnTimeout: false,
          method: "select",
          options: {},
          queryContext: undefined,
          timeout: false,
        },
      ],
      delete: [],
      insert: [],
      update: [],
      any: [],
    });
  });
});
