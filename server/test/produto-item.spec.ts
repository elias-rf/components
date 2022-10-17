import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { app } from "../app";
import { apiRequest, rpcResponse } from "./aux";

describe("produtoItem", () => {
  let tracker: Tracker;
  vi.mock("../dal/connections", () => ({
    connections: {
      plano: knex({ client: MockClient }),
      oftalmo: knex({ client: MockClient }),
      fullvision: knex({ client: MockClient }),
    },
  }));

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

  it(`produtoItemSchema`, async () => {
    const rsp = await apiRequest(app, "crudSchema", { table: "produto_item" });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(expect.any(Array)));
  });

  it(`produtoItemRead`, async () => {
    const rsp = await apiRequest(app, `crudRead`, {
      table: "produto_item",
      id: { produto_item_id: 1 },
      select: ["produto_item_id"],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({ produto_item_id: 1, produto_plano_id: " 2 " })
    );
    expect(tracker.history.select.length).toEqual(1);
    expect(tracker.history.select[0].bindings).toEqual([1]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "kProdutoItem" from "tbl_Produto_Item" where "kProdutoItem" = ?'
    );
  });

  it(`produtoItemList`, async () => {
    const rsp = await apiRequest(app, `crudList`, {
      table: "produto_item",
      where: [["produto_item_id", "=", 1]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse([{ produto_item_id: 1, produto_plano_id: " 2 " }])
    );
  });

  it(`produtoItemDel`, async () => {
    const rsp = await apiRequest(app, `crudDel`, {
      table: "produto_item",
      id: { produto_item_id: 1 },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it(`produtoItemCreate`, async () => {
    const rsp = await apiRequest(app, `crudCreate`, {
      table: "produto_item",
      data: { produto_item_id: 2 },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse({ produto_item_id: 1 }));
  });

  it(`produtoItemUpdate`, async () => {
    const rsp = await apiRequest(app, "crudUpdate", {
      table: "produto_item",
      id: { produto_item_id: 1 },
      data: { produto_plano_id: " 2 " },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse({ produto_item_id: 1 }));
  });
});
