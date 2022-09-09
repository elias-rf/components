import { knexMockHistory } from "@er/utils/src/knex-mock-history";
import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { TConnections } from "../../dal/connections";
import { EsterilizacaoInternaModel } from "./esterilizacao-interna.model";

describe("esterilizacaoEsterna", () => {
  const knexDb = Knex({ client: MockClient });
  const estInterna = new EsterilizacaoInternaModel({
    oftalmo: knexDb,
  } as TConnections);
  let tracker: Tracker;

  beforeEach(() => {
    tracker = getTracker();
    tracker.on.select("tOperacaoOrdemProducao").response(["ok"]);
  });

  afterEach(() => {
    tracker.reset();
  });

  test("diario", async () => {
    const rsp = await estInterna.diario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });

    expect(rsp).toEqual(["ok"]);

    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01-01", "2020-01-31"],
          sql: 'select DataInicio as dia, Sum(QtdConforme) AS quantidade from "tOperacaoOrdemProducao" where "DataInicio" between ? and ? and fkOperacao in (3058, 3158) group by "DataInicio" order by "DataInicio" desc',
        },
      ],
    });
  });

  test("mensal", async () => {
    const rsp = await estInterna.mensal({ mes: "2020-01" });

    expect(rsp).toEqual(["ok"]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
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

    expect(rsp).toEqual(["ok"]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01-01", "Metil"],
          sql: 'select tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where "DataInicio" = ? and "fkCategoria" = ? and fkOperacao in (3058, 3158) group by tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria',
        },
      ],
    });
  });
});
