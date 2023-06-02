import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { TTableDef } from "@/types";
import { clearFactory } from "@/utils/crud/methods/clear-factory";
import { createTracker } from "knex-mock-client";
import { CrudModel } from "./crud-model";

const schema: TTableDef = {
  database: "oftalmo",
  table: "phonebook",
  fields: [
    {
      allowNull: false,
      field: "id",
      label: "Ramal",
      name: "agenda_telefone_id",
      primaryKey: true,
      typeField: "int",
    },
    {
      allowNull: false,
      field: "name",
      label: "Nome",
      name: "nome",
      typeField: "string",
    },
    {
      field: "department",
      label: "Setor",
      name: "setor",
      typeField: "string",
    },
    {
      field: "email",
      label: "Email",
      name: "email",
      typeField: "string",
    },
  ],
};

describe("CrudModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  const crudModel = new CrudModel(connectionsMock.oftalmo, schema);

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on.select("phonebook").response([{ id: "1" }]);
    const rsp = await crudModel.list({
      filter: { agenda_telefone_id: "1" },
      sort: { agenda_telefone_id: "asc" },
    });

    expect(rsp).toEqual([{ agenda_telefone_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [id], [name], [department], [email] from [phonebook] where ([id] = @p1) order by [id] asc",
      },
    ]);
  });

  it("del", async () => {
    tracker.on.delete("phonebook").response([]);
    const rsp = await crudModel.del({
      id: { agenda_telefone_id: 10 },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "delete from [phonebook] where ([id] = @p0);select @@rowcount",
      },
    ]);
  });

  it("read", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await crudModel.read({
      id: { agenda_telefone_id: 10 },
    });
    expect(rsp).toEqual({});
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "select [id], [name], [department], [email] from [phonebook] where ([id] = @p0)",
      },
    ]);
  });

  it("update", async () => {
    tracker.on.update("phonebook").response([{ id: 10 }]);
    const rsp = await crudModel.update({
      id: { agenda_telefone_id: "10" },
      data: { agenda_telefone_id: 10 },
      select: ["agenda_telefone_id"],
    });
    expect(rsp).toEqual({ agenda_telefone_id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10, "10"],
        sql: "update [phonebook] set [id] = @p0 output inserted.[id] where ([id] = @p1)",
      },
    ]);
  });

  it("create", async () => {
    tracker.on.insert("phonebook").response([{ id: 10 }]);
    const rsp = await crudModel.create({
      data: { agenda_telefone_id: 10 },
    });
    expect(rsp).toEqual({ agenda_telefone_id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "insert into [phonebook] ([id]) output inserted.[id], inserted.[name], inserted.[department], inserted.[email] values (@p0)",
      },
    ]);
  });

  it("increment", async () => {
    tracker.on.update("phonebook").response([]);
    const rsp = await crudModel.increment({
      filter: { agenda_telefone_id: "10" },
      increment: { agenda_telefone_id: 2 },
      select: ["agenda_telefone_id"],
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [2, "10"],
        sql: "update [phonebook] set [id] = [id] + @p0 output inserted.[id] where ([id] = @p1)",
      },
    ]);
  });

  it("count", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await crudModel.count({
      filter: { agenda_telefone_id: "=10" },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["10"],
        sql: "select count(*) as [ttl] from [phonebook] where ([id] = @p0)",
      },
    ]);
  });

  it("deve retornar record default", async () => {
    const clear = clearFactory(schema);
    expect(await clear()).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });
});
