import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";

describe("produtoPlano", () => {
  it("produtoPlanoList", async () => {
    const rsp = await fetchTrpc.produtoPlano.list.query({
      where: [["produto_plano_id", "=", "1"]],
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual([
      {
        produto_plano_id: "1",
      },
    ]);
  });

  it("produtoPlanoRead", async () => {
    const rsp = await fetchTrpc.produtoPlano.read.query({
      id: { produto_plano_id: 1 },
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual({
      produto_plano_id: "1",
    });
  });
});
