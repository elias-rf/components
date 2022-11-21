import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { knexMockHistory } from "../../../utils/data/knex_mock_history";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set_tracker";
import { esterilizacaoInternaModel } from "./esterilizacao_interna.model";

describe("esterilizacaoInterna", () => {
  const knexDb = Knex({ client: MockClient });
  const estInterna = esterilizacaoInternaModel({
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

  test("diario", async () => {
    const rsp = await estInterna.diario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });

    expect(rsp).toEqual([{ quantidade: 1 }]);

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["2020-01-01", "2020-01-31"],
          sql: 'select DataInicio as dia, Sum(QtdConforme) AS quantidade from "tOperacaoOrdemProducao" where "DataInicio" between ? and ? and fkOperacao in (3058, 3158) group by "DataInicio" order by "DataInicio" desc',
        },
      ],
    });
  });

  test("mensal", async () => {
    const rsp = await estInterna.mensal({ mes: "2020-01" });

    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["2020-01"],
          sql: 'select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from "tOperacaoOrdemProducao" where CONVERT(CHAR(7),[DataInicio],120)>=? and fkOperacao in (3058, 3158) group by CONVERT(CHAR(7),[DataInicio],120) order by CONVERT(CHAR(7),[DataInicio],120) desc',
        },
      ],
    });
  });

  test("modelo", async () => {
    const rsp = await estInterna.modelo({
      data: "2020-01-01",
      produto: "Metil",
    });

    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["2020-01-01", "Metil"],
          sql: 'select tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where "DataInicio" = ? and "fkCategoria" = ? and fkOperacao in (3058, 3158) group by tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria',
        },
      ],
    });
  });

  test("produto", async () => {
    const rsp = await estInterna.produto({
      data: "2020-01-01",
    });

    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["2020-01-01"],
          sql: 'select tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where "DataInicio" = ? and fkOperacao in (3058, 3158) group by "tbl_Produto"."fkCategoria", "tOperacaoOrdemProducao"."DataInicio" order by "tbl_Produto"."fkCategoria" asc',
        },
      ],
    });
  });
});
