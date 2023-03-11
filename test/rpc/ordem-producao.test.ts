import { describe, expect, it } from "vitest";
import { delCreateAux } from "../../test/aux/aux";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";

describe("ordemProducao", () => {
  it("ordemProducaoSchema", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoSchema");

    expect(rsp.length).toEqual(48);
  });

  it("ordemProducaoClear", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoClear");

    expect(rsp).toEqual(expect.any(Object));
  });

  it("ordemProducaoList", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoList", {
      where: [["ordem_producao_id", "=", "1"]],
      select: ["ordem_producao_id"],
    });

    expect(rsp).toEqual([{ ordem_producao_id: 1 }]);
  });

  it("ordemProducaoRead", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoRead", {
      id: { ordem_producao_id: 1 },
      select: ["ordem_producao_id"],
    });

    expect(rsp).toEqual({ ordem_producao_id: 1 });
  });

  it("ordemProducaoProdutoItem", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoProdutoItem", {
      id: { ordem_producao_id: 1 },
      select: ["produto_item_id"],
    });

    expect(rsp).toEqual({ produto_item_id: 1 });
  });

  it("ordemProducaoProdutoPlano", async () => {
    const rnd = Math.round(Math.random() * 10000).toString();
    await delCreateAux("ordem_producao", {
      del: [{ ordem_producao_id: rnd }],
      create: [{ ordem_producao_id: rnd, produto_item_id: rnd }],
    });
    await delCreateAux("produto_item", {
      del: [{ produto_item_id: rnd }],
      create: [
        {
          produto_item_id: rnd,
          nome_produto_item: "proditem1",
          produto_plano_id: rnd,
        },
      ],
    });
    await delCreateAux("produto_plano", {
      del: [{ produto_plano_id: rnd }],
      create: [
        {
          produto_plano_id: rnd,
          produto: "prodPlano1",
        },
      ],
    });
    // ---
    const rsp = await fetcherRpc.query("ordemProducaoProdutoPlano", {
      id: { ordem_producao_id: rnd },
      select: ["produto_plano_id", "produto"],
    });

    expect(rsp).toEqual({ produto: "prodPlano1", produto_plano_id: rnd });
  });

  it("ordemProducaoDataFabricacao 3059", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoDataFabricacao", {
      id: { ordem_producao_id: "1" },
    });

    expect(rsp).toEqual("2020-01-01");
  });

  // it("ordemProducaoDataFabricacao inexistente", async () => {
  //   const rsp = await fetcherRpc.query("ordemProducaoDataFabricacao", {
  //     id: { ordem_producao_id: "9999999" },
  //   });

  //   expect(rsp).toEqual(
  //     "Ordem de produção não possui 3059, 3060, 4020 ou 3160"
  //   );
  // });

  it("ordemProducaoDataValidade", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoDataValidade", {
      id: { ordem_producao_id: "1" },
    });

    expect(rsp).toEqual("2025-01-01");
  });

  it("ordemProducaoControle", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoControle", {
      id: { ordem_producao_id: "100" },
      serie: "1",
    });

    expect(rsp).toEqual("000001000017");
  });

  it("ordemProducaoFromControle", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoFromControle", {
      controle: "000001000017",
    });

    expect(rsp).toEqual("00000100");
  });

  it("ordemProducaoEhControleValido", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoEhControleValido", {
      controle: "000001000017",
    });

    expect(rsp).toEqual(true);
  });

  it("ordemProducaoEtiquetaExterna", async () => {
    const rsp = await fetcherRpc.query("ordemProducaoEtiquetaExterna", {
      id: { ordem_producao_id: "00000100" },
    });

    expect(rsp).toEqual([
      {
        etiqueta_externa_id: "000001000017",
        quantidade: 1,
        data_fabricacao: null,
      },
    ]);
  });
});
