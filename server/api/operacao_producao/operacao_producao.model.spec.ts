import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { knexMockHistory } from "../../../utils/data/knex_mock_history";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set_tracker";
import { OperacaoProducaoModel } from "./operacao_producao.model";

describe("nfSaidaFvModel", () => {
  const knexDb = Knex({ client: MockClient });
  const operacaoProducao = new OperacaoProducaoModel({
    oftalmo: knexDb,
    plano: knexDb,
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

  it("diario", async () => {
    const rsp = await operacaoProducao.diario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      operacao: "3020",
    });
    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["3020", "2020-01-01", "2020-01-31"],
          sql: `select DataInicio as dia, Sum(QtdConforme) AS quantidade from "tOperacaoOrdemProducao" where "fkOperacao" = ? and "DataInicio" between ? and ? group by "DataInicio" order by "DataInicio" desc`,
        },
      ],
    });
  });

  it("mensal", async () => {
    const rsp = await operacaoProducao.mensal({
      mes: "2020-01",
      operacao: "3020",
    });
    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["3020", "2020-01"],
          sql: `select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from "tOperacaoOrdemProducao" where "fkOperacao" = ? group by CONVERT(CHAR(7),[DataInicio],120) having CONVERT(CHAR(7),[DataInicio],120)>=? order by CONVERT(CHAR(7),[DataInicio],120) desc`,
        },
      ],
    });
  });

  it("modelo", async () => {
    const rsp = await operacaoProducao.modelo({
      data: "2020-01-01",
      operacao: "3020",
      produto: "produto",
    });
    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["3020", "2020-01-01", "produto"],
          sql: `select tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where "fkOperacao" = ? and "DataInicio" = ? and "fkCategoria" = ? group by tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria`,
        },
      ],
    });
  });

  it("produto", async () => {
    const rsp = await operacaoProducao.produto({
      data: "2020-01-01",
      operacao: "3020",
    });
    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["3020", "2020-01-01"],
          sql: `select tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where "fkOperacao" = ? and "DataInicio" = ? group by "tbl_Produto"."fkCategoria", "tOperacaoOrdemProducao"."DataInicio" order by "tbl_Produto"."fkCategoria" asc`,
        },
      ],
    });
  });

  it("turno", async () => {
    const rsp = await operacaoProducao.turno({
      data: "2020-01-01",
      operacao: "3020",
    });
    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["3020", "2020-01-01"],
          sql: `select case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where "fkOperacao" = ? and "DataInicio" = ? group by case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end`,
        },
      ],
    });
  });
});
