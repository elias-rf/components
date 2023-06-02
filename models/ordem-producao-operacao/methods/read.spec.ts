import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { readFactory } from "./read";

describe("read", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const read = readFactory({ connections: connectionsMock });

  beforeEach(() => {
    tracker.reset();
  });

  it("read", async () => {
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ kOperacaoOP: "1" }]);
    const rsp = await read({
      id: { ordem_producao_operacao_id: 1 },
      select: ["ordem_producao_operacao_id"],
    });

    expect(rsp).toEqual({ ordem_producao_operacao_id: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [kOperacaoOP] from [tOperacaoOrdemProducao] where ([kOperacaoOP] = @p0)",
      },
    ]);
  });
});
