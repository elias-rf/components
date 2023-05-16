import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { TTableDef } from "@/types";
import { createTracker } from "knex-mock-client";
import { countFactory } from "./count-factory";

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

describe("crudCount", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  tracker.reset();
  tracker.on.select("phonebook").response([]);
  const count = countFactory(connectionsMock.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("count", async () => {
    const rsp = await count({
      filters: [{ id: "agenda_telefone_id", value: "=10" }],
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["10"],
          sql: "select count(*) as [ttl] from [phonebook] where ([id] = @p0)",
        },
      ],
    });
  });
});
