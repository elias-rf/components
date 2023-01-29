import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { TConnections } from "../../../types";
import { knexMockHistory } from "../../../utils/data/knex-mock-history";
import { setTracker } from "../../lib/set_tracker";
import { estoqueModel } from "./estoque.model";

describe("estoque", () => {
  const knexDb = Knex({ client: MockClient });
  const estoque = estoqueModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as TConnections);
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
    const rsp = await estoque.mutation.estoqueIncrement({
      id: { produto_plano_id: "metil", filial_id: 1 },
      quantidade: 2,
    });

    expect(rsp).toEqual([{ id: "B" }]);

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [2, "metil", 1],
          sql: `update "Estoque" set "EstAtual" = "EstAtual" + ? where "CdProduto" = ? and "CdEmpresa" = ?`,
        },
      ],
    });
  });
});
