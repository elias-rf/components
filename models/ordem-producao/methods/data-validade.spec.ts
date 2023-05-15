import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { dataValidadeFactory } from "./data-validade";

describe("dataValidade", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const models = modelsMock;
  const dataValidade = dataValidadeFactory({ models });

  beforeEach(() => {
    tracker.reset();
  });

  it("dataValidade", async () => {
    tracker.on
      .any("tOperacaoOrdemProducao")
      .response([{ DataHoraInicio: "2020-01-01" }]);

    const rsp = await dataValidade({
      ids: [{ id: "ordem_producao_id", value: 1 }],
    });

    expect(rsp).toEqual("2025-01-01");
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [50, "3059", "1"],
          sql: "select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where ([fkOperacao] = @p1 and [fkOp] = @p2) order by [DataHoraInicio] desc",
        },
      ],
    });
  });
});
