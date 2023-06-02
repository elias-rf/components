import {
  connectionsMock as connections,
  connectionsMock,
} from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { TTableDef } from "@/types/model";
import { createTracker } from "knex-mock-client";
import { delFactory } from "./del-factory";

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

describe("crudDel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  tracker.reset();
  tracker.on.delete("phonebook").response([]);
  const del = delFactory(connections.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("del", async () => {
    const rsp = await del({
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
});
