import { describe, expect, it } from "vitest";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";

describe("produtoPlano", () => {
  it("produtoPlanoSchema", async () => {
    const rsp = await fetcherRpc.query("produtoPlanoSchema");

    expect(rsp.length).toEqual(172);
  });

  it("produtoPlanoList", async () => {
    const rsp = await fetcherRpc.query("produtoPlanoList", {
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
    const rsp = await fetcherRpc.query("produtoPlanoRead", {
      id: { produto_plano_id: 1 },
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual({
      produto_plano_id: "1",
    });
  });
});
