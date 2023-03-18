import { createTracker } from "knex-mock-client";
import { describe, expect, it } from "vitest";
import { connectionsMock } from "../../../mocks/connections.mock";
import { knexMockHistory } from "../../../utils/data/knex-mock-history";
import { turno } from "./turno";

describe("ordemProducaoOperacaoMethods", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  beforeEach(() => {
    tracker.reset();
  });

  it("turno", async () => {
    tracker.on.select("tOperacaoOrdemProducao").response([{ quantidade: 1 }]);
    const rsp = await turno(connectionsMock.oftalmo)({
      data: "2020-01-01",
      operacao: "3020",
    });
    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["3020", "2020-01-01"],
          sql: `select case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [fkOperacao] = @p0 and [DataInicio] = @p1 group by case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end`,
        },
      ],
    });
  });
});
