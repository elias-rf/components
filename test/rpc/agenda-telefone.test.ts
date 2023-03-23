import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";
import { connections } from "../../server/dal/connections";
import { delCreateAux, readAux } from "../../test/aux/aux";

describe("agendaTelefone.store", () => {
  it("agendaTelefoneList", async () => {
    const rnd = "1";
    // await delCreateAux("agenda_telefone", {
    //   del: [{ agenda_telefone_id: rnd }],
    //   create: [{ agenda_telefone_id: rnd }],
    // });
    //---
    const rsp = await fetchTrpc.agendaTelefone.list.query({
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
    const rsp = await fetchTrpc.agendaTelefone.read.query({
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
    const rsp = await fetchTrpc.agendaTelefone.create.mutate({
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
    const rsp = await fetchTrpc.agendaTelefone.update.mutate({
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
    const rsp = await fetchTrpc.agendaTelefone.del.mutate({
      id: { agenda_telefone_id: id },
    });
    expect(rsp).toEqual(1);
    expect(await readAux("agenda_telefone", { id })).toEqual([]);
  });
});
