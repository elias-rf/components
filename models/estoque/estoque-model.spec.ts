import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { describe, expect, test } from "vitest";

describe("EstoqueModel", () => {
  const tracker = createTracker(connectionsMock.plano);
  const models = modelsMock;

  beforeEach(() => {
    tracker.reset();
  });

  test("increment", async () => {
    tracker.on.update("Estoque").response([{ EstAtual: "1" }]);

    const rsp = await models.estoque.increment({
      filter: { produto_plano_id: "1", filial_id: "1" },
      increment: { estoque: 2 },
      select: ["estoque"],
    });

    expect(rsp).toEqual([{ estoque: "1" }]);

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [2, "1", "1"],
        sql: `update [Estoque] set [EstAtual] = [EstAtual] + @p0 output inserted.[EstAtual] where ([CdProduto] = @p1 and [CdEmpresa] = @p2)`,
      },
    ]);
  });
});
