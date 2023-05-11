import { connectionsMock } from "@/mocks/connections.mock";
import { createTracker } from "knex-mock-client";
import { etiquetaExternaModelFactory } from "../../etiqueta-externa/etiqueta-externa.model";
import { etiquetaExternaFactory } from "./etiqueta-externa";

describe("ordemProducaoMethods", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const etiquetaExternaModel = etiquetaExternaModelFactory({
    connections: connectionsMock,
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
    const method = etiquetaExternaFactory({
      etiquetaExternaModel,
    });
    expect(
      await method({
        ids: { ordem_producao_id: "00000100" },
      })
    ).toEqual([
      {
        data_fabricacao: "2020-01-01",
        etiqueta_externa_id: "000001000017",
        quantidade: 1,
      },
    ]);
  });
});
