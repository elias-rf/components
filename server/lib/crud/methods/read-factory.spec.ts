import { getTracker } from "knex-mock-client";
import { connectionsMock } from "../../../../mocks/connections.mock";
import { TTable } from "../../../../types";
import { knexMockHistory } from "../../../../utils/data/knex-mock-history";
import { readFactory } from "./read-factory";

const schema: TTable = {
  database: "oftalmo",
  table: "phonebook",
  fields: [
    {
      allowNull: false,
      field: "id",
      label: "Ramal",
      name: "agenda_telefone_id",
      primaryKey: true,
      type: "int",
    },
    {
      allowNull: false,
      field: "name",
      label: "Nome",
      name: "nome",
      type: "string",
    },
    {
      field: "department",
      label: "Setor",
      name: "setor",
      type: "string",
    },
    {
      field: "email",
      label: "Email",
      name: "email",
      type: "string",
    },
  ],
};

describe("crudRead", () => {
  const tracker = getTracker();
  tracker.reset();
  tracker.on.select("phonebook").response([]);
  const read = readFactory(connectionsMock.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("read", async () => {
    const rsp = await read({
      id: { agenda_telefone_id: 10 },
    });
    expect(rsp).toEqual({});
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [10],
          sql: "select [id], [name], [department], [email] from [phonebook] where [id] = @p0",
        },
      ],
    });
  });
});
