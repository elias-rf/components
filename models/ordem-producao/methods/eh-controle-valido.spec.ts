import { connectionsMock } from "@/mocks/connections.mock";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { ehControleValidoFactory } from "./eh-controle-valido";

describe("produtoPlano", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const ehControleValido = ehControleValidoFactory({
    models: modelsMock,
  });

  beforeEach(() => {
    tracker.reset();
  });

  it("isControleValid true", async () => {
    const rsp = await ehControleValido({
      controle: "000001000017",
    });

    expect(rsp).toEqual(true);
  });

  it("isControleValid false", async () => {
    const rsp = await ehControleValido({
      controle: "000101000017",
    });

    expect(rsp).toEqual(false);
  });
});
