import { connectionsMock } from "@/mocks/connections.mock";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";

describe("produtoPlano", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const models = modelsMock;

  beforeEach(() => {
    tracker.reset();
  });

  it("isControleValid true", async () => {
    const rsp = await models.ordemProducao.ehControleValido({
      controle: "000001000017",
    });

    expect(rsp).toEqual(true);
  });

  it("isControleValid false", async () => {
    const rsp = await models.ordemProducao.ehControleValido({
      controle: "000101000017",
    });

    expect(rsp).toEqual(false);
  });
});
