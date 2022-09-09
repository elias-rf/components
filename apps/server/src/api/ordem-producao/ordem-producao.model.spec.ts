import { knexMockHistory } from "@er/utils/src/knex-mock-history";
import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";

import { afterEach, beforeEach, describe, expect, it, test } from "vitest";
import { TConnections } from "../../dal/connections";
import { OrdemProducaoModel } from "./ordem-producao.model";

describe("ordemProducaoModel", () => {
  const knexDb = Knex({ client: MockClient });
  const ordemProducao = new OrdemProducaoModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: ReturnType<typeof getTracker>;

  beforeEach(() => {
    tracker = getTracker();
    tracker.on.delete("tOrdemProducao").response(1);
    tracker.on.update("tOrdemProducao").response([{ kOp: 1 }]);
    tracker.on.insert("tOrdemProducao").response([{ kOp: 1 }]);
    tracker.on
      .select("tOrdemProducao")
      .response([{ kOp: 10, fkProdutoItem: 10 }]);
    tracker.on
      .select("tbl_Produto_Item")
      .response([{ kProdutoItem: 1, IdVisiontech: " 2 " }]);
    tracker.on.select("CadPro").response([{ CdProduto: 1 }]);
  });

  afterEach(() => {
    tracker.reset();
  });

  it("lista com argumentos", async () => {
    const rsp = await ordemProducao.list({
      where: [["ordem_producao_id", "=", "1"]],
      select: ["ordem_producao_id"],
    });
    expect(rsp).toEqual([
      {
        ordem_producao_id: 10,
        produto_item_id: 10,
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["1", 50],
          sql: `select "kOp" from "tOrdemProducao" where ("kOp" = ?) limit ?`,
        },
      ],
    });
  });

  it("read", async () => {
    const rsp = await ordemProducao.read({
      id: { ordem_producao_id: "10" },
      select: ["ordem_producao_id"],
    });
    expect(rsp).toEqual({ ordem_producao_id: 10, produto_item_id: 10 });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["10"],
          sql: 'select "kOp" from "tOrdemProducao" where "kOp" = ?',
        },
      ],
    });
  });

  it("del", async () => {
    const rsp = await ordemProducao.del({ id: { ordem_producao_id: 10 } });
    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual({
      delete: [
        {
          bindings: [10],
          sql: 'delete from "tOrdemProducao" where "kOp" = ?',
        },
      ],
    });
  });

  test("create", async () => {
    const rsp = await ordemProducao.create({ data: { ordem_producao_id: 10 } });
    expect(rsp).toEqual({ ordem_producao_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      insert: [
        {
          bindings: [10],
          sql: 'insert into "tOrdemProducao" ("kOp") values (?)',
        },
      ],
    });
  });

  test("update", async () => {
    const rsp = await ordemProducao.update({
      id: { ordem_producao_id: 10 },
      data: { ordem_producao_id: 10 },
    });
    expect(rsp).toEqual({ ordem_producao_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      update: [
        {
          bindings: [10, 10],
          sql: 'update "tOrdemProducao" set "kOp" = ? where "kOp" = ?',
        },
      ],
    });
  });

  test("produtoItem", async () => {
    const rsp = await ordemProducao.produtoItem({
      id: { ordem_producao_id: 10 },
    });
    expect(rsp).toEqual({ produto_plano_id: " 2 ", produto_item_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [10],
          sql: 'select "fkProdutoItem" from "tOrdemProducao" where "kOp" = ?',
        },
        {
          bindings: [10],
          sql: 'select "kProdutoItem", "NomeProdutoItem", "fkProduto", "IdVisiontech", "ForaDeLinha", "GrupoCredito" from "tbl_Produto_Item" where "kProdutoItem" = ?',
        },
      ],
    });
  });

  test("produtoPlano", async () => {
    const rsp = await ordemProducao.produtoPlano({
      id: { ordem_producao_id: 10 },
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual({ produto_plano_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [10],
          sql: 'select "fkProdutoItem" from "tOrdemProducao" where "kOp" = ?',
        },
        {
          bindings: [10],
          sql: 'select "IdVisiontech" from "tbl_Produto_Item" where "kProdutoItem" = ?',
        },
        {
          bindings: ["2"],
          sql: 'select "CdProduto" from "CadPro" where "CdProduto" = ?',
        },
      ],
    });
  });
});
