import { getTracker, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { connectionsMock } from "../../mocks/connections.mock";
import { setTracker } from "../../server/lib/set_tracker";
import { knexMockHistory } from "../../utils/data/knex-mock-history";
import { estoqueModelFactory } from "./estoque.model";
describe("estoque", () => {
  const estoque = estoqueModelFactory({ connections: connectionsMock });
  let tracker: Tracker;

  beforeAll(() => {
    tracker = getTracker();
    setTracker(tracker);
  });

  afterEach(() => {
    tracker.resetHistory();
  });

  afterAll(() => {
    tracker.reset();
  });

  test("increment", async () => {
    const rsp = await estoque.mutation.increment({
      id: { produto_plano_id: "1", filial_id: 1 },
      quantidade: 2,
    });

    expect(rsp).toEqual({ estoque_atual: undefined });

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [2, "1", 1],
          sql: `update [Estoque] set [EstAtual] = [EstAtual] + @p0 output inserted.[EstAtual] where [CdProduto] = @p1 and [CdEmpresa] = @p2`,
        },
      ],
    });
  });
});
