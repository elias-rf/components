import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { EntityModel } from "./entity";

const rec1 = {
  id: 1,
  name: "Fulano",
  department: "adm",
  email: "fulano@mail.com",
};

const rec2 = {
  id: 2,
  name: "Cicrano",
  department: "dev",
  email: "cicrano@mail.com",
};

describe("entityModel", () => {
  const knexDb = Knex({ client: MockClient });
  const connections = { oftalmo: knexDb, plano: knexDb, fullvision: knexDb };
  const entityModel = new EntityModel(connections, "agenda_telefone");
  let tracker: ReturnType<typeof getTracker>;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  it("deve retornar Schema", async () => {
    tracker.on.select("Table").response(["ok"]);
    expect(await entityModel.schema()).toEqual({
      id: ["agenda_telefone_id"],
      fields: [
        {
          field: "id",
          name: "agenda_telefone_id",
          label: "Ramal",
          type: "int",
        },
        { field: "name", name: "nome", label: "Nome", type: "string" },
        { field: "department", name: "setor", label: "Setor", type: "string" },
        { field: "email", name: "email", label: "Email", type: "string" },
      ],
    });
  });

  it("deve listar default", async () => {
    tracker.on.select("phonebook").response([rec1, rec2]);
    const rsp = await entityModel.list();

    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "name", "department", "email" from "phonebook" limit ?'
    );
    expect(rsp).toEqual([
      {
        agenda_telefone_id: 1,
        nome: "Fulano",
        setor: "adm",
        email: "fulano@mail.com",
      },
      {
        agenda_telefone_id: 2,
        nome: "Cicrano",
        setor: "dev",
        email: "cicrano@mail.com",
      },
    ]);
  });

  it("deve listar com filtro", async () => {
    tracker.on.select("phonebook").response(["ok"]);
    await entityModel.list([
      ["nome", "=", "ana"],
      ["agenda_telefone_id", "<", "200"],
    ]);

    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "name", "department", "email" from "phonebook" where ("name" = ? and "id" < ?) limit ?'
    );
  });

  it("deve listar com select", async () => {
    tracker.on.select("phonebook").response(["ok"]);
    await entityModel.list([], [], 10, ["agenda_telefone_id", "nome"]);

    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "name" from "phonebook" limit ?'
    );
  });

  it("deve listar com order", async () => {
    tracker.on.select("phonebook").response(["ok"]);
    await entityModel.list(
      [],
      [
        ["agenda_telefone_id", "desc"],
        ["nome", "asc"],
      ]
    );

    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "name", "department", "email" from "phonebook" order by "id" desc, "name" asc limit ?'
    );
  });

  it("deve ler default", async () => {
    tracker.on.select("phonebook").response(["ok"]);
    await entityModel.read({ agenda_telefone_id: "100" });

    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "name", "department", "email" from "phonebook" where "id" = ?'
    );
  });

  it("deve ler com select", async () => {
    tracker.on.select("phonebook").response(["ok"]);
    await entityModel.read({ agenda_telefone_id: "100" }, [
      "agenda_telefone_id",
      "nome",
    ]);

    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "name" from "phonebook" where "id" = ?'
    );
  });

  it("deve apagar default", async () => {
    tracker.on.delete("phonebook").response(["ok"]);
    await entityModel.del({ agenda_telefone_id: "100" });

    expect(tracker.history.delete[0].sql).toEqual(
      'delete from "phonebook" where "id" = ?'
    );
  });

  it("deve criar default", async () => {
    tracker.on.any("phonebook").response(["ok"]);
    await entityModel.create({ agenda_telefone_id: "99", nome: "Fulano" });

    expect(tracker.history.any[0].sql).toEqual(
      'insert into "phonebook" ("id", "name") values (?, ?)'
    );
  });

  it("deve alterar default", async () => {
    tracker.on.any("phonebook").response(["ok"]);
    await entityModel.update(
      { agenda_telefone_id: "100" },
      {
        agenda_telefone_id: "99",
        nome: "Fulano",
      }
    );

    expect(tracker.history.any[0].sql).toEqual(
      'update "phonebook" set "id" = ?, "name" = ? where "id" = ?'
    );
  });
});
