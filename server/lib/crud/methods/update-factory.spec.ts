import { getTracker } from "knex-mock-client";
import { connectionsMock } from "../../../../mocks/connections.mock";
import { TTable } from "../../../../types";
import { knexMockHistory } from "../../../../utils/data/knex-mock-history";
import { updateFactory } from "./update-factory";

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

describe("crudUpdate", () => {
  const tracker = getTracker();
  tracker.reset();
  tracker.on.update("phonebook").response([{ id: 10 }]);
  const update = updateFactory(connectionsMock.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("update sem parametros", async () => {
    // @ts-expect-error teste para ausencia de parametros
    await expect(() => update({ table: "agenda_telefone" })).rejects.toThrow(
      "Id deve ser informado: agenda_telefone_id"
    );
  });
  it("update", async () => {
    const rsp = await update({
      id: { agenda_telefone_id: "10" },
      data: { agenda_telefone_id: 10 },
      select: ["agenda_telefone_id"],
    });
    expect(rsp).toEqual({ agenda_telefone_id: 10 });
    expect(knexMockHistory(tracker)).toEqual({
      update: [
        {
          bindings: [10, "10"],
          sql: "update [phonebook] set [id] = @p0 output inserted.[id] where [id] = @p1",
        },
      ],
    });
  });
});
