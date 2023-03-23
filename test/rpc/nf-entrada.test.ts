import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";
import { delCreateAux } from "../../test/aux/aux";

describe("nfEntrada", () => {
  it("nfEntradaList", async () => {
    await delCreateAux("nf_entrada", {
      del: [{ nota_id: 1 }],
      create: [{ nota_id: 1, filial_id: 2 }],
    });

    const rsp = await fetchTrpc.nfEntrada.list.query({
      where: [
        ["filial_id", "=", 2],
        ["nota_id", "=", 1],
      ],
      select: ["filial_id"],
    });

    expect(rsp).toEqual([{ filial_id: 2 }]);
  });

  it("nfEntradaRead", async () => {
    await delCreateAux("nf_entrada", {
      del: [{ nota_id: 1 }],
      create: [{ filial_id: 2, nota_id: 1, serie_id: 1, modelo_id: 1 }],
    });

    const rsp = await fetchTrpc.nfEntrada.read.query({
      id: { filial_id: 2, nota_id: 1, serie_id: 1, modelo_id: 1 },
      select: ["filial_id"],
    });

    expect(rsp).toEqual({ filial_id: 2 });
  });

  it("nfEntradaTransferenciaCreate", async () => {
    await delCreateAux("nf_entrada_controle", {
      del: [{ nota_id: "00000100" }],
    });
    await delCreateAux("nf_entrada", {
      del: [{ nota_id: "00000100" }],
    });
    await delCreateAux("produto_controle", {
      del: [{ produto_plano_id: 1 }],
    });
    await delCreateAux("nf_entrada_item", {
      del: [{ nota_id: "00000100" }],
    });

    const rsp = await fetchTrpc.nfEntrada.transferenciaCreate.mutate({
      controles: ["000001000017"],
    });

    expect(rsp).toEqual(true);
  });
});
