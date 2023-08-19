import { getTracker } from "@/mocks/database.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { ordemProducaoModel } from "./ordem-producao-model";
import { expect, it, describe } from "vitest";

describe("ordemProducaoModel", () => {
  const tracker = getTracker();

  it("dataFabricacao em 3059", async () => {
    tracker.reset();
    tracker.on.select("tOperacaoOrdemProducao").response((sql) => {
      if (sql.bindings[1] === "3059") {
        return [{ DataHoraInicio: "2020-01-01" }];
      }
      return [];
    });

    const rsp = await ordemProducaoModel.dataFabricacao({ id: { kOp: "1" } });
    expect(rsp).toEqual("2020-01-01");
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "3059", "1"],
        sql: "select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where ([fkOperacao] = @p1 and [fkOp] = @p2) order by [DataHoraInicio] desc",
      },
    ]);
  });
  it("controle", async () => {
    const rsp = await ordemProducaoModel.controle({
      id: { kOp: "00000100" },
      serie: "1",
    });

    expect(rsp).toEqual("000001000017");
  });

  it("dataValidade", async () => {
    tracker.reset();
    tracker.on
      .any("tOperacaoOrdemProducao")
      .response([{ DataHoraInicio: "2020-01-01" }]);

    const rsp = await ordemProducaoModel.dataValidade({
      id: { kOp: "1" },
    });

    expect(rsp).toEqual("2025-01-01");
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "3059", "1"],
        sql: "select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where ([fkOperacao] = @p1 and [fkOp] = @p2) order by [DataHoraInicio] desc",
      },
    ]);
  });

  it("isControleValid true", async () => {
    tracker.reset();
    const rsp = await ordemProducaoModel.ehControleValido({
      controle: "000001000017",
    });

    expect(rsp).toEqual(true);
  });

  it("isControleValid false", async () => {
    const rsp = await ordemProducaoModel.ehControleValido({
      controle: "000101000017",
    });

    expect(rsp).toEqual(false);
  });

  it("etiquetaExterna", async () => {
    tracker.resetHistory();
    tracker.on.select("tEtiqueta").response([
      {
        controle: "000001000017",
        qtdImpressao: 1,
        dataFabricacao: "2020-01-01",
      },
    ]);
    const response = await ordemProducaoModel.etiquetaExterna({
      id: { kOp: "00000100" },
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1000, "000001%"],
        sql: "select top (@p0) * from [tEtiqueta] where ([controle] like @p1) order by [controle] asc",
      },
    ]);

    expect(response).toEqual([
      {
        dataFabricacao: "2020-01-01",
        controle: "000001000017",
        qtdImpressao: 1,
      },
    ]);
  });

  it("produtoItem", async () => {
    tracker.reset();
    tracker.on.select("tOrdemProducao").response([{ fkProdutoItem: 1 }]);
    tracker.on.select("tbl_Produto_Item").response([{}]);
    const rsp = await ordemProducaoModel.produtoItem({
      id: { kOp: "1" },
      select: ["kProdutoItem"],
    });

    expect(rsp).toEqual({});
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["1"],
        sql: "select [fkProdutoItem] from [tOrdemProducao] where [tOrdemProducao].[kOp] = @p0",
      },
      {
        bindings: [1],
        sql: "select [kProdutoItem] from [tbl_Produto_Item] where [tbl_Produto_Item].[kProdutoItem] = @p0",
      },
    ]);
  });

  it("produtoPlano", async () => {
    tracker.reset();
    tracker.on.select("tOrdemProducao").response([{ fkProdutoItem: 1 }]);
    tracker.on
      .select("tbl_Produto_Item")
      .response([{ kProdutoItem: 1, fkProduto: 1, IdVisiontech: "1" }]);
    tracker.on.select("CadPro").response([{ CdProduto: 1 }]);

    const rsp = await ordemProducaoModel.produtoPlano({
      id: { kOp: "1" },
      select: ["CdProduto"],
    });

    expect(rsp).toEqual({ CdProduto: 1 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["1"],
        sql: "select [fkProdutoItem] from [tOrdemProducao] where [tOrdemProducao].[kOp] = @p0",
      },
      {
        bindings: [1],
        sql: "select [kProdutoItem] from [tbl_Produto_Item] where [tbl_Produto_Item].[kProdutoItem] = @p0",
      },
      {
        bindings: [1],
        sql: "select [IdVisiontech] from [tbl_Produto_Item] where [tbl_Produto_Item].[kProdutoItem] = @p0",
      },
      {
        bindings: ["1"],
        sql: "select [CdProduto] from [CadPro] where [CadPro].[CdProduto] = @p0",
      },
    ]);
  });
});
