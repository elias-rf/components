import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { dataFabricacaoFactory } from "./data-fabricacao";

describe("dataFabricacao", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  const models = modelsMock;
  const dataFabricacao = dataFabricacaoFactory({ models });

  beforeEach(() => {
    tracker.reset();
  });

  it("dataFabricacao", async () => {
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ DataHoraInicio: "2020-01-01" }]);

    const rsp = await dataFabricacao({
      ids: [{ id: "ordem_producao_id", value: "1" }],
    });

    expect(rsp).toEqual("2020-01-01");
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "3059", "1"],
          sql: "select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where ([fkOperacao] = @p1 and [fkOp] = @p2) order by [DataHoraInicio] desc",
        },
      ],
    });
  });
});
