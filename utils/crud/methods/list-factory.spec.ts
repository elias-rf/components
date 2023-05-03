import { connectionsMock } from "@/mocks/connections.mock";
import { TTableDef } from "@/types/model";
import { knexMockHistory } from "@/utils/data/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { listFactory } from "./list-factory";

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

describe("crudList", () => {
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
        order: [
          ["a", "desc"],
          ["b", "desc"],
        ],
      })
    ).rejects.toThrow(
      "a não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });

  it("lista com where errada", async () => {
    await expect(
      list({
        order: [["agenda_telefone_id", "desc"]],
        where: [
          ["1", "=", 1],
          ["2", "=", 2],
        ],
      })
    ).rejects.toThrow(
      "1,2 não são campos válidos para where use: agenda_telefone_id,email,nome,setor"
    );
  });

  it("lista sem argumentos", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      where: [["agenda_telefone_id", "=", 10]],
    });
    expect(rsp).toEqual([]);

    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, 10],
          sql: "select top (@p0) [id], [name], [department], [email] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });

  it("lista com argumentos", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      where: [["agenda_telefone_id", "=", 10]],
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, 10],
          sql: "select top (@p0) [id], [name], [department], [email] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });

  it("lista com aggregate sum", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      select: ["agenda_telefone_id"],
      where: [["agenda_telefone_id", "=", 10]],
      sum: { ttl: "agenda_telefone_id" },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, 10],
          sql: "select top (@p0) [id], sum([agenda_telefone_id]) as [ttl] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });

  it("lista com aggregate sum e group", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      select: ["agenda_telefone_id"],
      where: [["agenda_telefone_id", "=", 10]],
      sum: { ttl: "agenda_telefone_id" },
      group: ["setor"],
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, 10],
          sql: "select top (@p0) [id], sum([agenda_telefone_id]) as [ttl] from [phonebook] where ([id] = @p1) group by [department]",
        },
      ],
    });
  });

  it("lista com aggregate min", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      select: ["agenda_telefone_id"],
      where: [["agenda_telefone_id", "=", 10]],
      min: { ttl: "agenda_telefone_id" },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, 10],
          sql: "select top (@p0) [id], min([agenda_telefone_id]) as [ttl] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });

  it("lista com aggregate max", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await list({
      select: ["agenda_telefone_id"],
      where: [["agenda_telefone_id", "=", 10]],
      max: { ttl: "agenda_telefone_id" },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, 10],
          sql: "select top (@p0) [id], max([agenda_telefone_id]) as [ttl] from [phonebook] where ([id] = @p1)",
        },
      ],
    });
  });
});
