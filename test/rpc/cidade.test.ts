import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";
import { connections } from "../../server/dal/connections";
import { delCreateAux } from "../../test/aux/aux";

const tableName = "cidadesERF";

describe("cidade", () => {
  it("cidadeList", async () => {
    const rsp = await fetchTrpc.cidade.list.query({
      where: [
        ["nome_cidade", "=", "cid1"],
        ["uf_old", "=", "SP"],
      ],
      select: ["cidade_id"],
    });

    expect(rsp).toEqual([{ cidade_id: "1    " }]);
  });

  it("cidadeRead", async () => {
    const rsp = await fetchTrpc.cidade.read.query({
      id: { nome_cidade: "cid1", uf_old: "SP" },
      select: ["cidade_id"],
    });

    expect(rsp).toEqual({
      cidade_id: "1    ",
    });
  });

  it("cidadeCreate", async () => {
    await delCreateAux("cidade", {
      del: [{ uf_id: 2 }],
    });
    const rsp = await fetchTrpc.cidade.create.mutate({
      data: { cidade_id: 2, nome_cidade: "cid", uf_id: 2, uf_old: "RJ" },
    });

    expect(rsp).toEqual({
      nome_cidade: "cid",
      uf_old: "RJ",
      cidade_id: "2    ",
      uf_id: 2,
      uf: null,
    });
    expect(
      await connections
        .plano(tableName)
        .where({ NmCidadeIBGE: "cid", ufOld: "RJ" })
    ).toEqual([
      {
        NmCidadeIBGE: "cid",
        ufOld: "RJ",
        CdCidadeIBGE: "2    ",
        CdUFIBGE: 2,
        uf: null,
      },
    ]);
  });

  it("cidadeUpdate", async () => {
    const rnd = Math.round(Math.random() * 10000).toString();
    //---
    const rsp = await fetchTrpc.cidade.update.mutate({
      id: { nome_cidade: "cid1", uf_old: "SP" },
      data: { uf_id: rnd },
      select: ["uf_id"],
    });

    expect(rsp).toEqual({
      uf_id: parseInt(rnd),
    });
    expect(
      await connections
        .plano(tableName)
        .where({ NmCidadeIBGE: "cid1", ufOld: "SP" })
    ).toEqual([
      {
        NmCidadeIBGE: "cid1",
        ufOld: "SP",
        CdCidadeIBGE: "1    ",
        CdUFIBGE: parseInt(rnd),
        uf: "SP ",
      },
    ]);
  });

  it("cidadeDel", async () => {
    await delCreateAux("cidade", {
      create: [{ cidade_id: 2, uf: "SP", uf_old: "SP", nome_cidade: "cid2" }],
    });
    const rsp = await fetchTrpc.cidade.del.mutate({
      id: { nome_cidade: "cid2", uf_old: "SP" },
    });

    expect(rsp).toEqual(1);
    expect(
      await connections
        .plano(tableName)
        .where({ NmCidadeIBGE: "cid2", ufOld: "SP" })
    ).toEqual([]);
  });
});
