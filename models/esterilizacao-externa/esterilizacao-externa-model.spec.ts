import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { describe, expect, test } from "vitest";

describe("esterilizacaoInterna", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const models = modelsMock;

  beforeEach(() => {
    tracker.reset();
  });

  test("diario", async () => {
    tracker.on
      .select("tEsterilizacaoExterna")
      .response([{ dia: new Date("2020-01-01T00:00:00"), quantidade: 2 }]);

    const rsp = await models.esterilizacaoExterna.diario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });

    expect(rsp).toEqual([
      { dia: "2020-01-01", dia_semana: "qua", quantidade: 2 },
    ]);

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["2020-01-01", "2020-01-31"],
        sql: "select tEsterilizacaoExterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where tEsterilizacaoExterna.Data between @p0 and @p1 group by [tEsterilizacaoExterna].[Data] order by [tEsterilizacaoExterna].[Data] desc",
      },
    ]);
  });

  test("mensal", async () => {
    tracker.on.select("tEsterilizacaoExterna").response([]);
    const rsp = await models.esterilizacaoExterna.mensal({
      mes: "2020-01",
    });

    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["2020-01"],
        sql: "select CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)>=@p0 group by CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) order by CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) desc",
      },
    ]);
  });

  test("modelo", async () => {
    tracker.on.select("tEsterilizacaoExterna").response([]);
    const rsp = await models.esterilizacaoExterna.modelo({
      data: "2020-01-01",
      produto: "1",
    });

    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["2020-01-01", "1"],
        sql: "select isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where [tEsterilizacaoExterna].[Data] = @p0 and IsNull([fkCategoria],'Metil')=@p1 group by [NomeProdutoItem] order by [NomeProdutoItem] desc",
      },
    ]);
  });

  test("produto", async () => {
    tracker.on.select("tEsterilizacaoExterna").response([]);
    const rsp = await models.esterilizacaoExterna.produto({
      data: "2020-01-01",
    });

    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["2020-01-01"],
        sql: "select IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where tEsterilizacaoExterna.Data=@p0 group by [fkCategoria] order by [fkCategoria] desc",
      },
    ]);
  });
});
