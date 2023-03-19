import { describe, expect, it } from "vitest";
import { connections } from "../../server/dal/connections";
import { delCreateAux, readAux } from "../../test/aux/aux";

import { fetcherRpc } from "../../utils/api/fetcher-rpc";

describe("agendaTelefone.store", () => {
  it("agendaTelefoneSchema", async () => {
    const rsp = await fetcherRpc.query("agendaTelefoneSchema");
    expect(rsp.length).toEqual(4);
  });

  it("agendaTelefoneClear", async () => {
    const rsp = await fetcherRpc.query("agendaTelefoneClear");

    expect(rsp).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });

  it("agendaTelefoneList", async () => {
    const rnd = "1";
    // await delCreateAux("agenda_telefone", {
    //   del: [{ agenda_telefone_id: rnd }],
    //   create: [{ agenda_telefone_id: rnd }],
    // });
    //---
    const rsp = await fetcherRpc.query("agendaTelefoneList", {
      where: [["agenda_telefone_id", "=", rnd]],
      select: ["agenda_telefone_id"],
    });

    expect(rsp).toEqual([
      {
        agenda_telefone_id: parseInt(rnd),
      },
    ]);
  });

  it("agendaTelefoneRead", async () => {
    const rsp = await fetcherRpc.query("agendaTelefoneRead", {
      id: { agenda_telefone_id: 1 },
      select: ["agenda_telefone_id"],
    });
    expect(rsp).toEqual({
      agenda_telefone_id: 1,
    });
  });

  it("agendaTelefoneCreate", async () => {
    await delCreateAux("agenda_telefone", {
      del: [{ agenda_telefone_id: 4 }],
    });
    const rsp = await fetcherRpc.mutation("agendaTelefoneCreate", {
      data: { agenda_telefone_id: 4, nome: "tel" },
    });

    expect(rsp).toEqual({
      agenda_telefone_id: 4,
      email: null,
      nome: "tel",
      setor: null,
    });
    expect(await connections.oftalmo("phonebook").where({ id: 4 })).toEqual([
      {
        id: 4,
        email: null,
        name: "tel",
        department: null,
      },
    ]);
  });

  it("agendaTelefoneUpdate", async () => {
    const rnd = Math.round(Math.random() * 10000).toString();
    //---
    const rsp = await fetcherRpc.mutation("agendaTelefoneUpdate", {
      id: { agenda_telefone_id: 1 },
      data: { nome: rnd },
    });
    expect(rsp).toEqual({
      agenda_telefone_id: 1,
      email: null,
      nome: rnd,
      setor: null,
    });
    expect(await connections.oftalmo("phonebook").where({ id: 1 })).toEqual([
      {
        id: 1,
        email: null,
        name: rnd,
        department: null,
      },
    ]);
  });

  it("agendaTelefoneDel", async () => {
    const id = 33;
    await delCreateAux("agenda_telefone", {
      create: [{ agenda_telefone_id: id }],
    });
    const rsp = await fetcherRpc.mutation("agendaTelefoneDel", {
      id: { agenda_telefone_id: id },
    });
    expect(rsp).toEqual(1);
    expect(await readAux("agenda_telefone", { id })).toEqual([]);
  });
});