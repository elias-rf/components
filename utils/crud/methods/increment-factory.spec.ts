import {
  connectionsMock as connections,
  connectionsMock,
} from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { TTableDef } from "@/types/model";
import { createTracker } from "knex-mock-client";
import { incrementFactory } from "./increment-factory";

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

describe("crudIncrement", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  tracker.reset();
  tracker.on.update("phonebook").response([]);
  const increment = incrementFactory(connections.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("increment", async () => {
    const rsp = await increment({
      filters: [{ id: "agenda_telefone_id", value: "10" }],
      increment: { id: "agenda_telefone_id", value: 2 },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      update: [
        {
          bindings: [2, "10"],
          sql: "update [phonebook] set [id] = [id] + @p0 output  where ([id] = @p1)",
        },
      ],
    });
  });
});
