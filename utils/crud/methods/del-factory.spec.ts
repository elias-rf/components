import {
  connectionsMock as connections,
  connectionsMock,
} from "@mono/mocks/connections.mock";
import { TTableDef } from "@mono/types/model";
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

import { knexMockHistory } from "@mono/utils/data/knex-mock-history";
import { createTracker } from "knex-mock-client";

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
    expect(knexMockHistory(tracker)).toEqual({
      delete: [
        {
          bindings: [10],
          sql: "delete from [phonebook] where [id] = @p0;select @@rowcount",
        },
      ],
    });
  });
});
