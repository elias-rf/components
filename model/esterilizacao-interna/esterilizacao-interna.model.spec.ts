import { getTracker } from "knex-mock-client";
import { describe, expect, test } from "vitest";
import { connectionsMock } from "../../mocks/connections.mock";
import { knexMockHistory } from "../../utils/data/knex-mock-history";
import { esterilizacaoInternaModelFactory } from "./esterilizacao-interna.model";

describe("esterilizacaoInterna", () => {
  const tracker = getTracker();

  const esterilizacaoInterna = esterilizacaoInternaModelFactory({
    connections: connectionsMock,
  });

  beforeEach(() => {
    tracker.reset();
  });

  test("diario", async () => {
    tracker.on.select("tOperacaoOrdemProducao").response([{ quantidade: 1 }]);
    const rsp = await esterilizacaoInterna.query.diario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });

    expect(rsp).toEqual([{ quantidade: 1 }]);

    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01-01", "2020-01-31"],
          sql: "select DataInicio as dia, Sum(QtdConforme) AS quantidade from [tOperacaoOrdemProducao] where [DataInicio] between @p0 and @p1 and fkOperacao in (3058, 3158) group by [DataInicio] order by [DataInicio] desc",
        },
      ],
    });
  });

  test("mensal", async () => {
    tracker.on.select("tOperacaoOrdemProducao").response([]);
    const rsp = await esterilizacaoInterna.query.mensal({
      mes: "2020-01",
    });

    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01"],
          sql: "select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from [tOperacaoOrdemProducao] where CONVERT(CHAR(7),[DataInicio],120)>=@p0 and fkOperacao in (3058, 3158) group by CONVERT(CHAR(7),[DataInicio],120) order by CONVERT(CHAR(7),[DataInicio],120) desc",
        },
      ],
    });
  });

  test("modelo", async () => {
    tracker.on.select("tOperacaoOrdemProducao").response([]);
    const rsp = await esterilizacaoInterna.query.produto({
      data: "2020-01-01",
    });

    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01-01"],
          sql: "select tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [DataInicio] = @p0 and fkOperacao in (3058, 3158) group by [tbl_Produto].[fkCategoria], [tOperacaoOrdemProducao].[DataInicio] order by [tbl_Produto].[fkCategoria] asc",
        },
      ],
    });
  });

  test("produto", async () => {
    tracker.on.select("tOperacaoOrdemProducao").response([]);
    const rsp = await esterilizacaoInterna.query.produto({
      data: "2020-01-01",
    });

    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01-01"],
          sql: "select tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [DataInicio] = @p0 and fkOperacao in (3058, 3158) group by [tbl_Produto].[fkCategoria], [tOperacaoOrdemProducao].[DataInicio] order by [tbl_Produto].[fkCategoria] asc",
        },
      ],
    });
  });
});
