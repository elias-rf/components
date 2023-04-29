import { connectionsMock } from "@mono/mocks/connections.mock";
import { TTableDef } from "@mono/types/model";
import { countFactory } from "./count-factory";

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

import { knexMockHistory } from "@mono/utils/data/knex-mock-history";
import { createTracker } from "knex-mock-client";

describe("crudCount", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
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
