import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { describe, expect, it } from "vitest";
import { produto } from "./produto";

describe("ordemProducaoOperacaoMethods", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  beforeEach(() => {
    tracker.reset();
  });

  it("produto", async () => {
    tracker.on.select("tOperacaoOrdemProducao").response([{ quantidade: 1 }]);
    const rsp = await produto(connectionsMock.oftalmo)({
      data: "2020-01-01",
      operacao: "3020",
    });
    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["3020", "2020-01-01"],
          sql: `select tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [fkOperacao] = @p0 and [DataInicio] = @p1 group by [tbl_Produto].[fkCategoria], [tOperacaoOrdemProducao].[DataInicio] order by [tbl_Produto].[fkCategoria] asc`,
        },
      ],
    });
  });
});
