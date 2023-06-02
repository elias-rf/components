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
      filter: { ordem_producao_operacao_id: "1" },
      sort: { ordem_producao_operacao_id: "asc" },
      select: ["ordem_producao_operacao_id"],
    });

    expect(rsp).toEqual([{ ordem_producao_operacao_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [kOperacaoOP] from [tOperacaoOrdemProducao] where ([kOperacaoOP] = @p1) order by [kOperacaoOP] asc",
      },
    ]);
  });
});
