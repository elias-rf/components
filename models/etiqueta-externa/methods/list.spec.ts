import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { listFactory } from "./list";

describe("ordemProducaoModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const list = listFactory({ connections: connectionsMock });

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on.select("tEtiqueta").response([{ controle: "1" }]);
    const rsp = await list({
      filters: [{ id: "etiqueta_externa_id", value: "1" }],
      sorts: [{ id: "etiqueta_externa_id", desc: false }],
    });

    expect(rsp).toEqual([{ etiqueta_externa_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "1"],
          sql: "select top (@p0) [controle], [qtdImpressao], [dataFabricacao] from [tEtiqueta] where ([controle] = @p1) order by [controle] asc",
        },
      ],
    });
  });
});
