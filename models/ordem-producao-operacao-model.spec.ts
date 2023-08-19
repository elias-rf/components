import { getTracker } from "@/mocks/database.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { ordemProducaoOperacaoModel } from "./ordem-producao-operacao-model";
import { expect, it, describe } from "vitest";

describe("ordemProducaoModel", () => {
  const tracker = getTracker();

  it("diario", async () => {
    tracker.reset();
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ dia: "2020-01-01", quantidade: 10 }]);

    const rsp = await ordemProducaoOperacaoModel.diario({
      operacao: "1010",
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([
      { dia: "2020-01-01", diaSemana: "qua", quantidade: 10 },
    ]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["1010", "2020-01-01", "2020-01-31"],
        sql: "select [DataInicio] as [dia], sum([QtdConforme]) as [quantidade] from [tOperacaoOrdemProducao] where [fkOperacao] = @p0 and [DataInicio] between @p1 and @p2 group by [DataInicio] order by [DataInicio] desc",
      },
    ]);
  });

  it("mensal", async () => {
    tracker.reset();
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ dia: "2020-01-01", quantidade: 10 }]);

    const rsp = await ordemProducaoOperacaoModel.mensal({
      operacao: "1010",
      mes: "2020-01",
    });
    expect(rsp).toEqual([{ dia: "2020-01-01", quantidade: 10 }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["1010", "2020-01"],
        sql: "select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from [tOperacaoOrdemProducao] where [fkOperacao] = @p0 group by CONVERT(CHAR(7),[DataInicio],120) having CONVERT(CHAR(7),[DataInicio],120)>=@p1 order by CONVERT(CHAR(7),[DataInicio],120) desc",
      },
    ]);
  });

  it("modelo", async () => {
    tracker.reset();
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ dia: "2020-01-01", quantidade: 10 }]);

    const rsp = await ordemProducaoOperacaoModel.modelo({
      operacao: "1010",
      data: "2020-01-01",
      produto: "produto1",
    });
    expect(rsp).toEqual([{ dia: "2020-01-01", quantidade: 10 }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["1010", "2020-01-01", "produto1"],
        sql: "select tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [fkOperacao] = @p0 and [DataInicio] = @p1 and [fkCategoria] = @p2 group by tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria",
      },
    ]);
  });

  it("produto", async () => {
    tracker.reset();
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ dia: "2020-01-01", quantidade: 10 }]);

    const rsp = await ordemProducaoOperacaoModel.produto({
      operacao: "1010",
      data: "2020-01-01",
    });
    expect(rsp).toEqual([{ dia: "2020-01-01", quantidade: 10 }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["1010", "2020-01-01"],
        sql: "select tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [fkOperacao] = @p0 and [DataInicio] = @p1 group by [tbl_Produto].[fkCategoria], [tOperacaoOrdemProducao].[DataInicio] order by [tbl_Produto].[fkCategoria] asc",
      },
    ]);
  });

  it("turno", async () => {
    tracker.reset();
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ dia: "2020-01-01", quantidade: 10 }]);

    const rsp = await ordemProducaoOperacaoModel.turno({
      operacao: "1010",
      data: "2020-01-01",
    });
    expect(rsp).toEqual([{ dia: "2020-01-01", quantidade: 10 }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["1010", "2020-01-01"],
        sql: "select [case when tOperacaoOrdemProducao].[HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao].[HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao].[HoraInicio <='22:30:00' then 'T2' else 'T3' end] as [turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade] as [_sql],  as [_args],  as [_as] from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [fkOperacao] = @p0 and [DataInicio] = @p1 group by case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end",
      },
    ]);
  });
});
