import {
  connectionsMock as connections,
  connectionsMock,
} from "../../../../mocks/connections.mock";
import { TTable } from "../../../../types/model";
import { decrementFactory } from "./decrement-factory";

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

import { createTracker } from "knex-mock-client";
import { knexMockHistory } from "../../../../utils/data/knex-mock-history";

describe("crudDecrement", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  tracker.reset();
  tracker.on.update("phonebook").response([]);
  const decrement = decrementFactory(connections.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("decrement", async () => {
    const rsp = await decrement({
      where: [["agenda_telefone_id", "=", 10]],
      decrement: { agenda_telefone_id: 2 },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      update: [
        {
          bindings: [2, 10],
          sql: "update [phonebook] set [id] = [id] - @p0 output  where ([id] = @p1)",
        },
      ],
    });
  });
});