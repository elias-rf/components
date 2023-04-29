import { connectionsMock } from "@mono/mocks/connections.mock";
import { knexMockHistory } from "@mono/utils/data/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { describe, expect, it } from "vitest";
import { diario } from "./diario";

describe("ordemProducaoOperacaoMethods", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  beforeEach(() => {
    tracker.reset();
  });

  it("diario", async () => {
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ dia: "2020-01-01", quantidade: 1 }]);
    const rsp = await diario(connectionsMock.oftalmo)({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      operacao: "3058",
    });
    expect(rsp).toEqual([
      { dia: "2020-01-01", diaSemana: "qua", quantidade: 1 },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["3058", "2020-01-01", "2020-01-31"],
          sql: `select [DataInicio] as [dia], sum([QtdConforme]) as [quantidade] from [tOperacaoOrdemProducao] where [fkOperacao] = @p0 and [DataInicio] between @p1 and @p2 group by [DataInicio] order by [DataInicio] desc`,
        },
      ],
    });
  });
});
