import { container } from "@mono/models/container";
import { describe, expect, it } from "vitest";

describe("esterilizacaoExterna model", () => {
  const model = container.resolve("esterilizacaoExternaModel");

  it("produto", async () => {
    const rsp = await model.query.produto({ data: "2020-01-01" });
    expect(rsp).toEqual([
      {
        produto: "cat1",
        quantidade: 10,
      },
    ]);
  });

  it("modelo", async () => {
    const rsp = await model.query.modelo({
      data: "2020-01-01",
      produto: "cat1",
    });
    expect(rsp).toEqual([
      {
        modelo: "proditem1",
        quantidade: 10,
      },
    ]);
  });
});
