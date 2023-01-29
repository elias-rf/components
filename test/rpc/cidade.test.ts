import { describe, expect, it } from "vitest";
import { connections } from "../../server/dal/connections";
import { delCreateAux } from "../../test/aux/aux";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";

const tableName = "cidadesERF";

describe("cidade", () => {
  it("cidadeSchema", async () => {
    const rsp = await fetcherRpc.query("cidadeSchema");

    expect(rsp.length).toEqual(5);
  });

  it("cidadeClear", async () => {
    const rsp = await fetcherRpc.query("cidadeClear");

    expect(rsp).toEqual({
      nome_cidade: null,
      uf_old: null,
      cidade_id: null,
      uf_id: 0,
      uf: null,
    });
  });

  it("cidadeList", async () => {
    const rsp = await fetcherRpc.query("cidadeList", {
      where: [
        ["nome_cidade", "=", "cid1"],
        ["uf_old", "=", "SP"],
      ],
      select: ["cidade_id"],
    });

    expect(rsp).toEqual([{ cidade_id: "1    " }]);
  });

  it("cidadeRead", async () => {
    const rsp = await fetcherRpc.query("cidadeRead", {
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
    const rsp = await fetcherRpc.mutation("cidadeCreate", {
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
    const rsp = await fetcherRpc.mutation("cidadeUpdate", {
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
    const rsp = await fetcherRpc.mutation("cidadeDel", {
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
