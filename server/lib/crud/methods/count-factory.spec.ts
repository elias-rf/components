import { connectionsMock } from "../../../../mocks/connections.mock";
import { TTable } from "../../../../types";
import { countFactory } from "./count-factory";

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

describe("crudCount", () => {
  const tracker = getTracker();
  tracker.reset();
  tracker.on.select("phonebook").response([]);
  const count = countFactory(connectionsMock.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("decrement", async () => {
    const rsp = await count({
      where: [["agenda_telefone_id", "=", 10]],
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [10],
          sql: "select count(*) as [ttl] from [phonebook] where ([id] = @p0)",
        },
      ],
    });
  });
});
