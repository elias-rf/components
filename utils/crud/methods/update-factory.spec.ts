import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { TTableDef } from "@/types/model";
import { createTracker } from "knex-mock-client";
import { updateFactory } from "./update-factory";

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

describe("crudUpdate", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  tracker.reset();
  tracker.on.update("phonebook").response([{ id: 10 }]);
  const update = updateFactory(connectionsMock.oftalmo, schema);

  beforeEach(() => {
    tracker.resetHistory();
  });

  it("update sem parametros", async () => {
    await expect(() =>
      update({ ids: [{ id: "table", value: "agenda_telefone" }], data: {} })
    ).rejects.toThrow(
      "table não é id válido use: agenda_telefone_id,email,nome,setor"
    );
  });
  it("update", async () => {
    const rsp = await update({
      ids: [{ id: "agenda_telefone_id", value: "10" }],
      data: { agenda_telefone_id: 10 },
      select: ["agenda_telefone_id"],
    });
    expect(rsp).toEqual({ agenda_telefone_id: 10 });
    expect(knexMockHistory(tracker)).toEqual({
      update: [
        {
          bindings: [10, "10"],
          sql: "update [phonebook] set [id] = @p0 output inserted.[id] where ([id] = @p1)",
        },
      ],
    });
  });
});
