import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";

describe("produtoPlano", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const models = modelsMock;

  beforeEach(() => {
    tracker.reset();
  });

  it("produtoPlano", async () => {
    tracker.on.any("tOrdemProducao").response([{ fkProdutoItem: 1 }]);
    tracker.on
      .any("tbl_Produto_Item")
      .response([{ kProdutoItem: 1, fkProduto: 1, IdVisiontech: "1" }]);
    tracker.on.any("CadPro").response([{ CdProduto: 1 }]);

    const rsp = await models.ordemProducao.query.produtoPlano({
      ids: [{ id: "ordem_producao_id", value: 1 }],
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual({ produto_plano_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [1],
          sql: "select [fkProdutoItem] from [tOrdemProducao] where ([kOp] = @p0)",
        },
        {
          bindings: [1],
          sql: "select [kProdutoItem], [NomeProdutoItem], [fkProduto], [IdVisiontech], [ForaDeLinha], [GrupoCredito] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
        },
        {
          bindings: [1],
          sql: "select [IdVisiontech] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
        },
        {
          bindings: ["1"],
          sql: "select [CdProduto] from [CadPro] where ([CdProduto] = @p0)",
        },
      ],
    });
  });
});
