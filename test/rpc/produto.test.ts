import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";
import { connections } from "../../server/dal/connections";
import { delCreateAux } from "../../test/aux/aux";

describe("produto", () => {
  it("produtoList", async () => {
    const rsp = await fetchTrpc.produto.list.query({
      where: [["produto_id", "=", "1"]],
      select: ["produto_id"],
    });

    expect(rsp).toEqual([
      {
        produto_id: 1,
      },
    ]);
  });

  it("produtoRead", async () => {
    const rsp = await fetchTrpc.produto.read.query({
      id: { produto_id: 1 },
      select: ["produto_id"],
    });

    expect(rsp).toEqual({
      produto_id: 1,
    });
  });

  it("produtoCreate", async () => {
    await delCreateAux("produto", {
      del: [{ produto_id: 4 }],
    });
    const rsp = await fetchTrpc.produto.create.mutate({
      data: { produto_id: 4, nome_comercial: "prod4", categoria_id: 1 },
      select: ["produto_id"],
    });

    expect(rsp).toEqual({
      produto_id: 4,
    });
    expect(
      await connections
        .oftalmo("tbl_Produto")
        .select(["kProduto"])
        .where({ kProduto: "4" })
    ).toEqual([
      {
        kProduto: 4,
      },
    ]);
  });

  it("produtoUpdate", async () => {
    const rnd = Math.round(Math.random() * 10000).toString();

    const rsp = await fetchTrpc.produto.update.mutate({
      id: { produto_id: 1 },
      data: { nome_comercial: rnd },
      select: ["produto_id", "nome_comercial"],
    });

    expect(rsp).toEqual({
      produto_id: 1,
      nome_comercial: rnd,
    });
    expect(
      await connections
        .oftalmo("tbl_Produto")
        .select(["NomeComercial"])
        .where({ kProduto: "1" })
    ).toEqual([
      {
        NomeComercial: rnd,
      },
    ]);
  });

  it("produtoDel", async () => {
    await delCreateAux("produto", {
      create: [{ produto_id: 2 }],
    });
    const rsp = await fetchTrpc.produto.del.mutate({
      id: { produto_id: 2 },
    });

    expect(rsp).toEqual(1);
    expect(
      await connections.oftalmo("tbl_Produto").where({ kProduto: "2" })
    ).toEqual([]);
  });
});
