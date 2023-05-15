import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { listFactory } from "./list";

describe("list", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const list = listFactory({ connections: connectionsMock });

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ kOperacaoOP: "1" }]);
    const rsp = await list({
      filters: [{ id: "ordem_producao_operacao_id", value: "1" }],
      sorts: [{ id: "ordem_producao_operacao_id", desc: false }],
      select: ["ordem_producao_operacao_id"],
    });

    expect(rsp).toEqual([{ ordem_producao_operacao_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "1"],
          sql: "select top (@p0) [kOperacaoOP] from [tOperacaoOrdemProducao] where ([kOperacaoOP] = @p1) order by [kOperacaoOP] asc",
        },
      ],
    });
  });
});
