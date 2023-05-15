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
    tracker.on.select("tEtiqueta").response([{ controle: "1" }]);
    const rsp = await read({
      ids: [{ id: "etiqueta_externa_id", value: 1 }],
    });

    expect(rsp).toEqual({ etiqueta_externa_id: "1" });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [1],
          sql: "select [controle], [qtdImpressao], [dataFabricacao] from [tEtiqueta] where ([controle] = @p0)",
        },
      ],
    });
  });
});
