import { describe, expect, it } from "vitest";
import { delCreateAux } from "../../test/aux/aux";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";

describe("nfEntrada", () => {
  // beforeAll(async () => {
  //   await initProdutoPlano();
  //   await initNfEntrada();
  //   await initNfEntradaControle();
  //   await initProdutoItem();
  //   await initProdutoControle();
  //   await initProdutoEstatistica();
  //   await initOrdemProducao();
  //   await initOrdemProducaoOperacao();
  //   await initEstoque();
  // });

  it("nfEntradaSchema", async () => {
    const rsp = await fetcherRpc.query("nfEntradaSchema");

    expect(rsp.length).toEqual(80);
  });

  it("nfEntradaClear", async () => {
    const rsp = await fetcherRpc.query("nfEntradaClear");

    expect(rsp).toEqual(expect.any(Object));
  });

  it("nfEntradaList", async () => {
    await delCreateAux("nf_entrada", {
      del: [{ nota_id: 1 }],
      create: [{ nota_id: 1, filial_id: 2 }],
    });
    //--
    const rsp = await fetcherRpc.query("nfEntradaList", {
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
    //--
    const rsp = await fetcherRpc.query("nfEntradaRead", {
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
    //--
    const rsp = await fetcherRpc.mutation("nfEntradaTransferenciaCreate", {
      controles: ["000001000017"],
    });

    expect(rsp).toEqual(true);
  });
});
