import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { knexMockHistory } from "../../../utils/data/knex-mock-history";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { ordemProducaoModel } from "./ordem-producao.model";

describe("ordemProducaoModel", () => {
  const knexDb = Knex({ client: MockClient });
  const ordemProducao = ordemProducaoModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: ReturnType<typeof getTracker>;

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

  it("produtoItem", async () => {
    const rsp = await ordemProducao.produtoItem({
      id: { ordem_producao_id: 1 },
      select: ["produto_item_id"],
    });
    expect(rsp).toEqual({
      produto_id: 1,
      produto_item_id: 1,
      produto_plano_id: " 1 ",
    });

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [1],
          sql: 'select "fkProdutoItem" from "tOrdemProducao" where "kOp" = ?',
        },
        {
          bindings: [1],
          sql: 'select "kProdutoItem" from "tbl_Produto_Item" where "kProdutoItem" = ?',
        },
      ],
    });
  });

  it("produto", async () => {
    const rsp = await ordemProducao.produto({
      id: { ordem_producao_id: 1 },
      select: ["produto_id"],
    });
    expect(rsp).toEqual({ produto_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [1],
          sql: 'select "fkProdutoItem" from "tOrdemProducao" where "kOp" = ?',
        },
        {
          bindings: [1],
          sql: 'select "fkProduto" from "tbl_Produto_Item" where "kProdutoItem" = ?',
        },
        {
          bindings: [1],
          sql: 'select "kProduto" from "tbl_Produto" where "kProduto" = ?',
        },
      ],
    });
  });

  it("dataFabricacao", async () => {
    const rsp = await ordemProducao.dataFabricacao({
      id: { ordem_producao_id: 1 },
    });

    expect(rsp).toEqual("2020-02-01");
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["3059", 1, 50],
          sql: 'select "DataHoraInicio" from "tOperacaoOrdemProducao" where ("fkOperacao" = ? and "fkOp" = ?) order by "DataHoraInicio" desc limit ?',
        },
      ],
    });
  });

  it("dataValidade", async () => {
    const rsp = await ordemProducao.dataValidade({
      id: { ordem_producao_id: 1 },
    });

    expect(rsp).toEqual("2025-02-01");
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["3059", 1, 50],
          sql: 'select "DataHoraInicio" from "tOperacaoOrdemProducao" where ("fkOperacao" = ? and "fkOp" = ?) order by "DataHoraInicio" desc limit ?',
        },
      ],
    });
  });

  it("versao", async () => {
    const rsp = await ordemProducao.versao({
      id: { ordem_producao_id: 100 },
    });

    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [100],
          sql: 'select "versao" from "tOrdemProducao" where "kOp" = ?',
        },
      ],
    });
  });

  it("produtoPlano", async () => {
    const rsp = await ordemProducao.produtoPlano({
      id: { ordem_producao_id: 1 },
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual({ produto_plano_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [1],
          sql: 'select "fkProdutoItem" from "tOrdemProducao" where "kOp" = ?',
        },
        {
          bindings: [1],
          sql: 'select "IdVisiontech" from "tbl_Produto_Item" where "kProdutoItem" = ?',
        },
        {
          bindings: ["1"],
          sql: 'select "CdProduto" from "CadPro" where "CdProduto" = ?',
        },
      ],
    });
  });

  it("controle", async () => {
    const rsp = await ordemProducao.controle({
      id: { ordem_producao_id: 100 },
      serie: "1",
    });

    expect(rsp).toEqual("000001000017");
  });

  it("isControleValid true", async () => {
    const rsp = await ordemProducao.isControleValid({
      controle: "000001000017",
    });

    expect(rsp).toEqual(true);
  });

  it("isControleValid false", async () => {
    const rsp = await ordemProducao.isControleValid({
      controle: "000101000017",
    });

    expect(rsp).toEqual(false);
  });
});
