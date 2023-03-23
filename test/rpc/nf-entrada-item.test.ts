import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";

describe("nfEntradaItem", () => {
  it("nfEntradaItemList", async () => {
    const rsp = await fetchTrpc.nfEntradaItem.list.query({
      where: [
        ["filial_id", "=", 2],
        ["nota_id", "=", 1],
      ],
      select: ["filial_id", "fornecedor_id"],
    });

    expect(rsp).toEqual([{ filial_id: 2, fornecedor_id: 1 }]);
  });

  it("nfEntradaItemRead", async () => {
    const rsp = await fetchTrpc.nfEntradaItem.read.query({
      id: { filial_id: 2, nota_id: 1, serie_id: 1, modelo_id: 1 },
      select: ["filial_id", "fornecedor_id"],
    });

    expect(rsp).toEqual({ filial_id: 2, fornecedor_id: 1 });
  });
});
