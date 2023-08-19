import { getTracker } from "@/mocks/database.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { estoqueModel } from "@/models/estoque-model";
import { describe, expect, test, beforeEach } from "vitest";

describe("EstoqueModel", () => {
  const tracker = getTracker();

  beforeEach(() => {
    tracker.reset();
  });

  test("increment", async () => {
    tracker.on.update("Estoque").response([{ EstAtual: "1" }]);

    const rsp = await estoqueModel.increment({
      filter: { CdProduto: "1", CdEmpresa: "1" },
      increment: { EstAtual: 2 },
      select: ["EstAtual"],
    });

    expect(rsp).toEqual([{ EstAtual: "1" }]);

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [2, "1", "1"],
        sql: `update [Estoque] set [EstAtual] = [EstAtual] + @p0 output inserted.[EstAtual] where ([CdProduto] = @p1 and [CdEmpresa] = @p2)`,
      },
    ]);
  });
});
