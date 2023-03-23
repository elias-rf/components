import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";

describe("nfSaida", () => {
  it("nfSaidaItemList", async () => {
    const rsp = await fetchTrpc.nfSaidaItem.list.query({
      select: ["filial_id", "nota_id", "serie_id", "modelo_id"],
    });

    expect(rsp).toEqual([
      { filial_id: 1, nota_id: 1, modelo_id: "1  ", serie_id: "1  " },
      { filial_id: 2, nota_id: 1, modelo_id: "1  ", serie_id: "1  " },
    ]);
  });

  it("nfSaidaItemRead", async () => {
    const rsp = await fetchTrpc.nfSaidaItem.read.query({
      id: { filial_id: 1, nota_id: 1, modelo_id: "1  ", serie_id: "1  " },
      select: ["filial_id", "nota_id", "serie_id", "modelo_id"],
    });

    expect(rsp).toEqual({
      filial_id: 1,
      nota_id: 1,
      modelo_id: "1  ",
      serie_id: "1  ",
    });
  });
});
