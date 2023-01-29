import { describe, expect, it } from "vitest";

import { fetcherRpc } from "../../utils/api/fetcher-rpc";

describe("nfEntradaItem", () => {
  it("nfEntradaItemSchema", async () => {
    const rsp = await fetcherRpc.query("nfEntradaItemSchema");

    expect(rsp.length).toEqual(38);
  });

  it("nfEntradaItemClear", async () => {
    const rsp = await fetcherRpc.query("nfEntradaItemClear");

    expect(rsp).toEqual(expect.any(Object));
  });

  it("nfEntradaItemList", async () => {
    const rsp = await fetcherRpc.query("nfEntradaItemList", {
      where: [
        ["filial_id", "=", 2],
        ["nota_id", "=", 1],
      ],
      select: ["filial_id", "fornecedor_id"],
    });

    expect(rsp).toEqual([{ filial_id: 2, fornecedor_id: 1 }]);
  });

  it("nfEntradaItemRead", async () => {
    const rsp = await fetcherRpc.query("nfEntradaItemRead", {
      id: { filial_id: 2, nota_id: 1, serie_id: 1, modelo_id: 1 },
      select: ["filial_id", "fornecedor_id"],
    });

    expect(rsp).toEqual({ filial_id: 2, fornecedor_id: 1 });
  });
});
