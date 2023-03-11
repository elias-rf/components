import { connectionsMock as connections } from "../../../../mocks/connections.mock";
import { TTable } from "../../../../types";
import { createFactory } from "./create-factory";

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

import { getTracker } from "knex-mock-client";
import { knexMockHistory } from "../../../../utils/data/knex-mock-history";

describe("crudCreate", () => {
  const tracker = getTracker();
  tracker.reset();
  tracker.on.insert("phonebook").response([{ id: 10 }]);
  const create = createFactory(connections.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("create", async () => {
    const rsp = await create({
      table: "agenda_telefone",
      data: { agenda_telefone_id: 10 },
      select: ["agenda_telefone_id"],
    });
    expect(rsp).toEqual({ agenda_telefone_id: 10 });
    expect(knexMockHistory(tracker)).toEqual({
      insert: [
        {
          bindings: [10],
          sql: "insert into [phonebook] ([id]) output inserted.[id] values (@p0)",
        },
      ],
    });
  });
});
