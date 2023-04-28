import { createTracker } from "knex-mock-client";
import { describe, expect, it } from "vitest";
import { connectionsMock } from "../../mocks/connections.mock";
import { container } from "../../mocks/container.mock";
import { knexMockHistory } from "../../utils/data/knex-mock-history";

describe("ordemProducaoModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  const ordemProducaoModel = container.resolve("ordemProducaoModel");

  beforeEach(() => {
    tracker.reset();
  });

  it("produtoItem", async () => {
    tracker.on.select("tOrdemProducao").response([{ fkProdutoItem: 1 }]);
    tracker.on.select("tbl_Produto_Item").response([{}]);
    const rsp = await ordemProducaoModel.query.produtoItem({
      id: { ordem_producao_id: 1 },
      select: ["produto_item_id"],
    });
    expect(rsp).toEqual({});

    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [1],
          sql: "select [fkProdutoItem] from [tOrdemProducao] where [kOp] = @p0",
        },
        {
          bindings: [1],
          sql: "select [kProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = @p0",
        },
      ],
    });
  });

  it("dataFabricacao", async () => {
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ DataHoraInicio: "2020-01-01" }]);
    const rsp = await ordemProducaoModel.query.dataFabricacao({
      id: { ordem_producao_id: 1 },
    });

    expect(rsp).toEqual("2020-01-01");
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "3059", 1],
          sql: "select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where ([fkOperacao] = @p1 and [fkOp] = @p2) order by [DataHoraInicio] desc",
        },
      ],
    });
  });

  it("dataValidade", async () => {
    tracker.on
      .any("tOperacaoOrdemProducao")
      .response([{ DataHoraInicio: "2020-01-01" }]);
    const rsp = await ordemProducaoModel.query.dataValidade({
      id: { ordem_producao_id: 1 },
    });

    expect(rsp).toEqual("2025-01-01");
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [50, "3059", 1],
          sql: "select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where ([fkOperacao] = @p1 and [fkOp] = @p2) order by [DataHoraInicio] desc",
        },
      ],
    });
  });

  it("produtoPlano", async () => {
    tracker.on.any("tOrdemProducao").response([{ fkProdutoItem: 1 }]);
    tracker.on
      .any("tbl_Produto_Item")
      .response([{ kProdutoItem: 1, fkProduto: 1, IdVisiontech: "1" }]);
    tracker.on.any("CadPro").response([{ CdProduto: 1 }]);
    const rsp = await ordemProducaoModel.query.produtoPlano({
      id: { ordem_producao_id: 1 },
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual({ produto_plano_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [1],
          sql: "select [fkProdutoItem] from [tOrdemProducao] where [kOp] = @p0",
        },
        {
          bindings: [1],
          sql: "select [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = @p0",
        },
        {
          bindings: ["1"],
          sql: "select [CdProduto] from [CadPro] where [CdProduto] = @p0",
        },
      ],
    });
  });

  it("controle", async () => {
    const rsp = await ordemProducaoModel.query.controle({
      id: { ordem_producao_id: 100 },
      serie: "1",
    });

    expect(rsp).toEqual("000001000017");
  });

  it("isControleValid true", async () => {
    const rsp = await ordemProducaoModel.query.ehControleValido({
      controle: "000001000017",
    });

    expect(rsp).toEqual(true);
  });

  it("isControleValid false", async () => {
    const rsp = await ordemProducaoModel.query.ehControleValido({
      controle: "000101000017",
    });

    expect(rsp).toEqual(false);
  });
});
