import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";
import { connections } from "../../server/dal/connections";
import { delCreateAux } from "../../test/aux/aux";

describe("produtoItem", () => {
  it("produtoItemList", async () => {
    const rsp = await fetchTrpc.produtoItem.list.query({
      where: [["produto_item_id", "=", "1"]],
      select: ["produto_item_id"],
    });

    expect(rsp).toEqual([
      {
        produto_item_id: 1,
      },
    ]);
  });

  it("produtoItemRead", async () => {
    const rsp = await fetchTrpc.produtoItem.read.query({
      id: { produto_item_id: 1 },
      select: ["produto_item_id"],
    });

    expect(rsp).toEqual({
      produto_item_id: 1,
    });
  });

  it("produtoItemPlano", async () => {
    const rsp = await fetchTrpc.produtoItem.produtoPlano.query({
      id: { produto_item_id: 1 },
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual({
      produto_plano_id: "1",
    });
  });

  it("produtoItemCreate", async () => {
    await delCreateAux("produto_item", {
      del: [{ produto_item_id: 2 }],
    });
    const rsp = await fetchTrpc.produtoItem.create.mutate({
      data: {
        produto_item_id: 2,
        nome_produto_item: "prod4",
        produto_id: 4,
        fora_linha: 0,
      },
    });

    expect(rsp).toEqual({
      fora_linha: false,
      grupo_credito: null,
      nome_produto_item: "prod4",
      produto_id: 4,
      produto_item_id: 2,
      produto_plano_id: null,
    });
    expect(
      await connections
        .oftalmo("tbl_Produto_Item")
        .select(["kprodutoitem"])
        .where({ kprodutoitem: 2 })
    ).toEqual([
      {
        kprodutoitem: 2,
      },
    ]);
  });

  it("produtoItemUpdate", async () => {
    const rnd = Math.round(Math.random() * 10000).toString();

    const rsp = await fetchTrpc.produtoItem.update.mutate({
      id: { produto_item_id: 1 },
      data: { grupo_credito: rnd },
    });

    expect(rsp).toEqual({
      produto_id: 1,
      produto_item_id: 1,
      produto_plano_id: "1     ",
      nome_produto_item: "proditem1",
      grupo_credito: rnd,
      fora_linha: false,
    });
    expect(
      await connections
        .oftalmo("tbl_produto_item")
        .select(["kprodutoitem", "NomeProdutoItem"])
        .where({ kprodutoitem: "1" })
    ).toEqual([
      {
        kprodutoitem: 1,
        NomeProdutoItem: "proditem1",
      },
    ]);
  });

  it("produtoItemDel", async () => {
    const rsp = await fetchTrpc.produtoItem.del.mutate({
      id: { produto_item_id: 2 },
    });

    expect(rsp).toEqual(1);
    expect(
      await connections.oftalmo("tbl_produto_item").where({ kprodutoitem: "2" })
    ).toEqual([]);
  });
});
