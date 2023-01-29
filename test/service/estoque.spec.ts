import { describe, expect, it } from "vitest";
import { estoqueService } from "../../client/service/estoque.service";

describe("estoqueService", () => {
  it("estoqueIncrement", async () => {
    const rsp = await estoqueService.mutation.increment({
      id: { filial_id: 1, produto_plano_id: 1 },
      quantidade: 1,
    });
    expect(rsp.estoque_atual).toBeGreaterThanOrEqual(1);
  });
});
