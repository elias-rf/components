import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { Entity } from "./entity";
import { setTracker } from "./set_tracker";

describe("entityModel", () => {
  const knexDb = Knex({ client: MockClient });
  const connections = { oftalmo: knexDb, plano: knexDb, fullvision: knexDb };
  const entityModel = new Entity(connections, "agenda_telefone");
  let tracker: ReturnType<typeof getTracker>;

  beforeAll(() => {
    tracker = getTracker();
    setTracker(tracker);
  });

  afterEach(() => {
    tracker.resetHistory();
  });

  afterAll(() => {
    tracker.reset();
  });

  it("deve retornar Schema", async () => {
    const schema = await entityModel.schema();
    expect(schema).toEqual([
      {
        field: "id",
        name: "agenda_telefone_id",
        label: "Ramal",
        type: "int",
        allowNull: false,
        primaryKey: true,
      },
      {
        field: "name",
        name: "nome",
        label: "Nome",
        type: "string",
        allowNull: false,
      },
      { field: "department", name: "setor", label: "Setor", type: "string" },
      { field: "email", name: "email", label: "Email", type: "string" },
    ]);
  });

  it("deve criar registro limpo", async () => {
    const response = await entityModel.clear();
    expect(response).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });

  it("deve listar default", async () => {
    const rsp = await entityModel.list();

    expect(tracker.history.any[0].sql).toEqual(
      'select "id", "name", "department", "email" from "phonebook" limit ?'
    );
    expect(rsp).toEqual([
      {
        agenda_telefone_id: 171,
      },
    ]);
  });

  it("deve listar com filtro", async () => {
    await entityModel.list({
      where: [
        ["nome", "=", "ana"],
        ["agenda_telefone_id", "<", "200"],
      ],
    });

    expect(tracker.history.any[0].sql).toEqual(
      'select "id", "name", "department", "email" from "phonebook" where ("name" = ? and "id" < ?) limit ?'
    );
  });

  it("deve listar com select", async () => {
    await entityModel.list({
      limit: 10,
      select: ["agenda_telefone_id", "nome"],
    });

    expect(tracker.history.any[0].sql).toEqual(
      'select "id", "name" from "phonebook" limit ?'
    );
  });

  it("deve listar com order", async () => {
    await entityModel.list({
      order: [
        ["agenda_telefone_id", "desc"],
        ["nome", "asc"],
      ],
    });

    expect(tracker.history.any[0].sql).toEqual(
      'select "id", "name", "department", "email" from "phonebook" order by "id" desc, "name" asc limit ?'
    );
  });

  it("deve ler default", async () => {
    await entityModel.read({ id: { agenda_telefone_id: "100" } });

    expect(tracker.history.any[0].sql).toEqual(
      'select "id", "name", "department", "email" from "phonebook" where "id" = ?'
    );
  });

  it("deve evitar list.where errado", async () => {
    await expect(
      entityModel.list({ where: [["id", "=", "1"]] })
    ).rejects.toThrow(
      "id não é um campo válido para [where][phonebook]: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve evitar create.data errado", async () => {
    await expect(entityModel.create({ data: { id: "1" } })).rejects.toThrow(
      "id não é um campo válido para [data][phonebook]: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve evitar list.order errado", async () => {
    await expect(entityModel.list({ order: [["id", "asc"]] })).rejects.toThrow(
      "id não é um campo válido para [order][phonebook]: agenda_telefone_id,nome,setor,email"
    );
  });

  it("deve evitar read.id errado", async () => {
    await expect(entityModel.read({ id: { id: "100" } })).rejects.toThrow(
      "[agenda_telefone_id] não foi informado para [id]: agenda_telefone_id"
    );
  });

  it("deve evitar read.select errado", async () => {
    await expect(
      entityModel.read({ id: { agenda_telefone_id: "100", select: ["id"] } })
    ).rejects.toThrow(
      "select não é uma das chaves válidas para [id]: agenda_telefone_id"
    );
  });

  it("deve ler com select", async () => {
    await entityModel.read({
      id: { agenda_telefone_id: "100" },
      select: ["agenda_telefone_id", "nome"],
    });

    expect(tracker.history.any[0].sql).toEqual(
      'select "id", "name" from "phonebook" where "id" = ?'
    );
  });

  it("deve apagar default", async () => {
    await entityModel.del({ id: { agenda_telefone_id: "100" } });

    expect(tracker.history.any[0].sql).toEqual(
      'delete from "phonebook" where "id" = ?'
    );
  });

  it("deve criar default", async () => {
    await entityModel.create({
      data: { agenda_telefone_id: 99, nome: "Fulano" },
    });

    expect(tracker.history.any[0].sql).toEqual(
      'insert into "phonebook" ("id", "name") values (?, ?)'
    );
  });

  it("deve alterar default", async () => {
    await entityModel.update({
      id: { agenda_telefone_id: "100" },
      data: {
        agenda_telefone_id: 99,
      },
    });

    expect(tracker.history.any[0].sql).toEqual(
      'update "phonebook" set "id" = ? where "id" = ?'
    );
  });
});
