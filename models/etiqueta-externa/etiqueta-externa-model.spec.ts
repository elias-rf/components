import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";

describe("ordemProducaoModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const models = modelsMock;

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on.select("tEtiqueta").response([{ controle: "1" }]);
    const rsp = await models.etiquetaExterna.list({
      filter: { etiqueta_externa_id: "1" },
      sort: { etiqueta_externa_id: "asc" },
    });

    expect(rsp).toEqual([{ etiqueta_externa_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [controle], [qtdImpressao], [dataFabricacao] from [tEtiqueta] where ([controle] = @p1) order by [controle] asc",
      },
    ]);
  });

  it("read", async () => {
    tracker.on.select("tEtiqueta").response([{ controle: "1" }]);
    const rsp = await models.etiquetaExterna.read({
      id: { etiqueta_externa_id: 1 },
    });

    expect(rsp).toEqual({ etiqueta_externa_id: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [controle], [qtdImpressao], [dataFabricacao] from [tEtiqueta] where ([controle] = @p0)",
      },
    ]);
  });
});
