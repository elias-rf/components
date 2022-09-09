import { knexMockHistory } from "@er/utils/src/knex-mock-history";
import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { TConnections } from "../../dal/connections";
import { EsterilizacaoExternaModel } from "./esterilizacao-externa.model";

describe("esterilizacaoEsterna", () => {
  const knexDb = Knex({ client: MockClient });
  const estExterna = new EsterilizacaoExternaModel({
    oftalmo: knexDb,
  } as TConnections);
  let tracker: Tracker;

  beforeEach(() => {
    tracker = getTracker();
    tracker.on.select("tEsterilizacaoexterna").response(["ok"]);
  });

  afterEach(() => {
    tracker.reset();
  });

  test("diario", async () => {
    const rsp = await estExterna.diario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });

    expect(rsp).toEqual(["ok"]);

    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01-01", "2020-01-31"],
          sql: 'select tEsterilizacaoexterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoexterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where tEsterilizacaoexterna.Data between ? and ? group by "tEsterilizacaoexterna"."Data" order by "tEsterilizacaoexterna"."Data" desc',
        },
      ],
    });
  });

  test("mensal", async () => {
    const rsp = await estExterna.mensal({ mes: "2020-01" });

    expect(rsp).toEqual(["ok"]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01"],
          sql: "select CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoexterna LEFT JOIN (SELECT\ttOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)>=? group by CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) order by CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) desc",
        },
      ],
    });
  });

  test("modelo", async () => {
    const rsp = await estExterna.modelo({
      data: "2020-01-01",
      produto: "Metil",
    });

    expect(rsp).toEqual(["ok"]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01-01", "Metil"],
          sql: `select isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where "tEsterilizacaoexterna"."Data" = ? and IsNull([fkCategoria],'Metil')=? group by "NomeProdutoItem" order by "NomeProdutoItem" desc`,
        },
      ],
    });
  });
});
