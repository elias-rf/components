import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  test,
} from "vitest";
import { knexMockHistory } from "../../../utils/knex-mock-history";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { ProdutoItemModel } from "./produto-item.model";

describe("rpc de cliente", () => {
  const knexDb = Knex({ client: MockClient });
  const produtoItem = new ProdutoItemModel({
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

  it("lista com argumentos", async () => {
    const rsp = await produtoItem.list({
      where: [["produto_item_id", "=", 1]],
    });
    expect(rsp).toEqual([
      { produto_id: 1, produto_item_id: 1, produto_plano_id: " 1 " },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [1, 50],
          sql: 'select "kProdutoItem", "NomeProdutoItem", "fkProduto", "IdVisiontech", "ForaDeLinha", "GrupoCredito" from "tbl_Produto_Item" where ("kProdutoItem" = ?) limit ?',
        },
      ],
    });
  });

  it("read", async () => {
    const rsp = await produtoItem.read({ id: { produto_item_id: "10" } });
    expect(rsp).toEqual({
      produto_id: 1,
      produto_item_id: 1,
      produto_plano_id: " 1 ",
    });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10"],
          sql: 'select "kProdutoItem", "NomeProdutoItem", "fkProduto", "IdVisiontech", "ForaDeLinha", "GrupoCredito" from "tbl_Produto_Item" where "kProdutoItem" = ?',
        },
      ],
    });
  });

  test("del", async () => {
    const rsp = await produtoItem.del({ id: { produto_item_id: "10" } });
    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10"],
          sql: 'delete from "tbl_Produto_Item" where "kProdutoItem" = ?',
        },
      ],
    });
  });

  it("create", async () => {
    const rsp = await produtoItem.create({ data: { produto_item_id: 10 } });
    expect(rsp).toEqual({ produto_item_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [10],
          sql: 'insert into "tbl_Produto_Item" ("kProdutoItem") values (?)',
        },
      ],
    });
  });

  test("update", async () => {
    const rsp = await produtoItem.update({
      id: { produto_item_id: 10 },
      data: { produto_item_id: 11 },
    });
    expect(rsp).toEqual({ produto_item_id: 2 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
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
