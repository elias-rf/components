import { getTracker } from "knex-mock-client";
import { describe, expect, it } from "vitest";
import { connectionsMock } from "../../../mocks/connections.mock";
import { knexMockHistory } from "../../../utils/data/knex-mock-history";
import { mensal } from "./mensal";

describe("ordemProducaoOperacaoMethods", () => {
  const tracker = getTracker();

  beforeEach(() => {
    tracker.reset();
  });

  it("mensal", async () => {
    tracker.on.select("tOperacaoOrdemProducao").response([{ quantidade: 1 }]);
    const rsp = await mensal(connectionsMock.oftalmo)({
      mes: "2020-01",
      operacao: "3020",
    });
    expect(rsp).toEqual([{ quantidade: 1 }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["3020", "2020-01"],
          sql: `select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from [tOperacaoOrdemProducao] where [fkOperacao] = @p0 group by CONVERT(CHAR(7),[DataInicio],120) having CONVERT(CHAR(7),[DataInicio],120)>=@p1 order by CONVERT(CHAR(7),[DataInicio],120) desc`,
        },
      ],
    });
  });
});
