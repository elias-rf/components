import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";

describe("ordemProducaoModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  it("dataFabricacao", async () => {
    tracker.reset();
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ DataHoraInicio: "2020-01-01" }]);

    const rsp = await modelsMock.ordemProducao.dataFabricacao({
      id: { ordem_producao_id: "1" },
    });

    expect(rsp).toEqual("2020-01-01");
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "3059", "1"],
        sql: "select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where ([fkOperacao] = @p1 and [fkOp] = @p2) order by [DataHoraInicio] desc",
      },
    ]);
  });
  it("controle", async () => {
    const rsp = await modelsMock.ordemProducao.controle({
      id: { ordem_producao_id: "00000100" },
      serie: "1",
    });

    expect(rsp).toEqual("000001000017");
  });

  it("dataValidade", async () => {
    tracker.reset();
    tracker.on
      .any("tOperacaoOrdemProducao")
      .response([{ DataHoraInicio: "2020-01-01" }]);

    const rsp = await modelsMock.ordemProducao.dataValidade({
      id: { ordem_producao_id: 1 },
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
    const rsp = await modelsMock.ordemProducao.ehControleValido({
      controle: "000001000017",
    });

    expect(rsp).toEqual(true);
  });

  it("isControleValid false", async () => {
    const rsp = await modelsMock.ordemProducao.ehControleValido({
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
    const response = await modelsMock.ordemProducao.etiquetaExterna({
      ordem_producao_id: "00000100",
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "000001%"],
        sql: "select top (@p0) [controle], [qtdImpressao], [dataFabricacao] from [tEtiqueta] where ([controle] like @p1) order by [controle] asc",
      },
    ]);

    expect(response).toEqual([
      {
        data_fabricacao: "2020-01-01",
        etiqueta_externa_id: "000001000017",
        quantidade: 1,
      },
    ]);
  });

  it("produtoItem", async () => {
    tracker.reset();
    tracker.on.select("tOrdemProducao").response([{ fkProdutoItem: 1 }]);
    tracker.on.select("tbl_Produto_Item").response([{}]);
    const rsp = await modelsMock.ordemProducao.produtoItem({
      id: { ordem_producao_id: 1 },
      select: ["produto_item_id"],
    });

    expect(rsp).toEqual({});
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [fkProdutoItem] from [tOrdemProducao] where ([kOp] = @p0)",
      },
      {
        bindings: [1],
        sql: "select [kProdutoItem] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
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

    const rsp = await modelsMock.ordemProducao.produtoPlano({
      id: { ordem_producao_id: 1 },
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual({ produto_plano_id: 1 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [fkProdutoItem] from [tOrdemProducao] where ([kOp] = @p0)",
      },
      {
        bindings: [1],
        sql: "select [kProdutoItem] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
      },
      {
        bindings: [1],
        sql: "select [IdVisiontech] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
      },
      {
        bindings: ["1"],
        sql: "select [CdProduto] from [CadPro] where ([CdProduto] = @p0)",
      },
    ]);
  });
});
