import { connectionsMock } from "@/mocks/connections.mock";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { etiquetaExternaFactory } from "./etiqueta-externa";

describe("etiquetaExterna", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const etiquetaExterna = etiquetaExternaFactory({
    models: modelsMock,
  });

  beforeEach(() => {
    tracker.reset();
  });

  it("etiquetaExterna", async () => {
    tracker.on.select("tEtiqueta").response([
      {
        controle: "000001000017",
        qtdImpressao: 1,
        dataFabricacao: "2020-01-01",
      },
    ]);

    expect(
      await etiquetaExterna([{ id: "ordem_producao_id", value: "00000100" }])
    ).toEqual([
      {
        data_fabricacao: "2020-01-01",
        etiqueta_externa_id: "000001000017",
        quantidade: 1,
      },
    ]);
  });
});
