import { describe, expect, it } from "vitest";
import { agendaTelefoneService } from "../../client/service/agenda-telefone.service";
import { delCreateAux, readAux } from "../../test/aux/aux";

describe("agendaTelefoneService", () => {
  it("agendaTelefoneSchema", async () => {
    expect(await (await agendaTelefoneService.query.schema()).length).toEqual(
      4
    );
  });
  it("agendaTelefoneClear", async () => {
    expect(await agendaTelefoneService.query.clear()).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });
  it("agendaTelefoneList", async () => {
    expect(
      await agendaTelefoneService.query.list({
        where: [["agenda_telefone_id", "=", 1]],
        select: ["agenda_telefone_id"],
      })
    ).toEqual([{ agenda_telefone_id: 1 }]);
  });

  it("agendaTelefoneRead", async () => {
    expect(
      await agendaTelefoneService.query.read({
        id: { agenda_telefone_id: 1 },
        select: ["agenda_telefone_id"],
      })
    ).toEqual({
      agenda_telefone_id: 1,
    });
  });

  it("agendaTelefoneCreate", async () => {
    await delCreateAux("agenda_telefone", {
      del: [{ agenda_telefone_id: 2 }],
    });
    const rsp = await agendaTelefoneService.mutation.create({
      data: { agenda_telefone_id: 2, nome: "tel" },
    });

    expect(rsp).toEqual({
      agenda_telefone_id: 2,
      email: null,
      nome: "tel",
      setor: null,
    });
  });

  it("agendaTelefoneUpdate", async () => {
    const rnd = Math.round(Math.random() * 10000).toString();
    //---
    const rsp = await agendaTelefoneService.mutation.update({
      id: { agenda_telefone_id: 1 },
      data: { nome: rnd },
    });
    expect(rsp).toEqual({
      agenda_telefone_id: 1,
      email: null,
      nome: rnd,
      setor: null,
    });
  });

  it("agendaTelefoneDel", async () => {
    await delCreateAux("agenda_telefone", {
      create: [{ agenda_telefone_id: 3 }],
    });
    const rsp = await agendaTelefoneService.mutation.del({
      id: { agenda_telefone_id: 3 },
    });
    expect(rsp).toEqual(1);
    expect(await readAux("agenda_telefone", { id: 3 })).toEqual([]);
  });
});
