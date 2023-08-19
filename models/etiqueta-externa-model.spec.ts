import { getTracker } from "@/mocks/database.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { etiquetaExternaModel } from "@/models/etiqueta-externa-model";
import { expect, it, describe, beforeEach } from "vitest";

describe("ordemProducaoModel", () => {
  const tracker = getTracker();

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on.select("tEtiqueta").response([{ controle: "1" }]);
    const rsp = await etiquetaExternaModel.list({
      filter: { controle: "1" },
      sort: { controle: "asc" },
    });

    expect(rsp).toEqual([{ controle: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) * from [tEtiqueta] where ([controle] = @p1) order by [controle] asc",
      },
    ]);
  });

  it("read", async () => {
    tracker.on.select("tEtiqueta").response([{ controle: "1" }]);
    const rsp = await etiquetaExternaModel.read({
      id: { controle: 1 },
    });

    expect(rsp).toEqual({ controle: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [tEtiqueta].* from [tEtiqueta] where [tEtiqueta].[controle] = @p0",
      },
    ]);
  });
});
