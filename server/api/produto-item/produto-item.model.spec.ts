import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { TConnections } from "../../../types";
import { knexMockHistory } from "../../../utils/data/knex-mock-history";
import { setTracker } from "../../lib/set_tracker";
import { produtoItemModel } from "./produto-item.model";

describe("rpc de cliente", () => {
  const knexDb = Knex({ client: MockClient });
  const produtoItem = produtoItemModel({
    plano: knexDb,
    oftalmo: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: Tracker;

  beforeAll(() => {
    tracker = getTracker();
    setTracker(tracker);
  });

  afterEach(() => {
    tracker.resetHistory();
  });

  afterAll(() => {
    tracker.reset();
  });

  test("produto-plano", async () => {
    const rsp = await produtoItem.query.produtoItemPlano({
      id: { produto_item_id: "10" },
      select: ["produto_plano_id"],
    });
    expect(rsp).toEqual({ produto_plano_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10"],
          sql: 'select "IdVisiontech" from "tbl_Produto_Item" where "kProdutoItem" = ?',
        },
        {
          bindings: ["1"],
          sql: 'select "CdProduto" from "CadPro" where "CdProduto" = ?',
        },
      ],
    });
  });
});
