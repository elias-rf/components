import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { setTracker } from "@/server/lib/set_tracker";
import { createTracker, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { estoque } from "../estoque.table";
import { incrementFactory } from "./increment";

describe("estoque", () => {
  const increment = incrementFactory({
    connection: connectionsMock.plano,
    table: estoque,
  });
  let tracker: Tracker;

  beforeAll(() => {
    tracker = createTracker(connectionsMock.plano);
    setTracker(tracker);
  });

  afterEach(() => {
    tracker.resetHistory();
  });

  afterAll(() => {
    tracker.reset();
  });

  test("increment", async () => {
    const rsp = await increment({
      id: [
        { id: "produto_plano_id", value: "1" },
        { id: "filial_id", value: 1 },
      ],
      quantidade: 2,
    });

    expect(rsp).toEqual({ estoque_atual: undefined });

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [2, "1", 1],
          sql: `update [Estoque] set [EstAtual] = [EstAtual] + @p0 output inserted.[EstAtual] where ([CdProduto] = @p1 and [CdEmpresa] = @p2)`,
        },
      ],
    });
  });
});
