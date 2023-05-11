import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { TTableDef } from "@/types/model";
import { createTracker } from "knex-mock-client";
import { listFactory } from "./list-factory";

const schema: TTableDef = {
  database: "oftalmo",
  table: "phonebook",
  fields: [
    {
      allowNull: false,
      field: "id",
      name: "agenda_telefone_id",
      primaryKey: true,
    },
    {
      allowNull: false,
      field: "name",
      name: "nome",
    },
    {
      field: "department",
      name: "setor",
    },
    {
      field: "email",
      name: "email",
    },
  ],
};

describe("listFactory", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const list = listFactory(connectionsMock.oftalmo, schema);

  beforeEach(() => {
    tracker.reset();
  });

  it("deve retornar list default", async () => {
    tracker.on.select("phonebook").response([]);
    expect(await list({})).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50],
          sql: "select top (@p0) [id], [name], [department], [email] from [phonebook]",
        },
      ],
    });
  });

  it("lista com order errada", async () => {
    await expect(
      list({
        sorts: [
          { id: "a", desc: true },
          { id: "b", desc: true },
        ],
      })
    ).rejects.toThrow(
      "a,b não são válidos para order use: agenda_telefone_id,email,nome,setor"
    );
  });

  it("lista com where errada", async () => {
    await expect(
      list({
        sorts: [{ id: "agenda_telefone_id", desc: true }],
        filters: [
          { id: "1", value: "= 1" },
          { id: "2", value: "= 2" },
        ],
      })
    ).rejects.toThrow(
      "1,2 não são campos válidos para where use: agenda_telefone_id,email,nome,setor"
    );
  });

  it("lista sem argumentos", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      filters: [{ id: "agenda_telefone_id", value: "=10" }],
    });
    expect(rsp).toEqual([]);

    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "10"],
          sql: "select top (@p0) [id], [name], [department], [email] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });

  it("lista com argumentos", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      filters: [{ id: "agenda_telefone_id", value: "=10" }],
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "10"],
          sql: "select top (@p0) [id], [name], [department], [email] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });

  it("lista com aggregate sum", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      select: ["agenda_telefone_id"],
      filters: [{ id: "agenda_telefone_id", value: "=10" }],
      sum: { label: "ttl", id: "agenda_telefone_id" },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "10"],
          sql: "select top (@p0) [id], sum([id]) as [ttl] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });

  it("lista com aggregate sum e group", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      select: ["agenda_telefone_id"],
      filters: [{ id: "agenda_telefone_id", value: "=10" }],
      sum: { label: "ttl", id: "agenda_telefone_id" },
      group: ["setor"],
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "10"],
          sql: "select top (@p0) [id], sum([id]) as [ttl] from [phonebook] where ([id] = @p1) group by [department]",
        },
      ],
    });
  });

  it("lista com aggregate min", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      select: ["agenda_telefone_id"],
      filters: [{ id: "agenda_telefone_id", value: "=10" }],
      min: { label: "ttl", id: "agenda_telefone_id" },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "10"],
          sql: "select top (@p0) [id], sum([id]) as [ttl] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });

  it("lista com aggregate max", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      select: ["agenda_telefone_id"],
      filters: [{ id: "agenda_telefone_id", value: "=10" }],
      max: { label: "ttl", id: "agenda_telefone_id" },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "10"],
          sql: "select top (@p0) [id], max([id]) as [ttl] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });
});
