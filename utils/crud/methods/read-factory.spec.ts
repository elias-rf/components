import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { TTableDef } from "@/types";
import { createTracker } from "knex-mock-client";
import { readFactory } from "./read-factory";

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

describe("crudRead", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  tracker.reset();
  tracker.on.select("phonebook").response([]);
  const read = readFactory(connectionsMock.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("read", async () => {
    const rsp = await read({
      ids: [{ id: "agenda_telefone_id", value: 10 }],
    });
    expect(rsp).toEqual({});
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [10],
          sql: "select [id], [name], [department], [email] from [phonebook] where ([id] = @p0)",
        },
      ],
    });
  });
});
