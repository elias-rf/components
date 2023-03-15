import { TTable } from "../../../../types/model";
import { clearFactory } from "./clear-factory";

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

describe("crudClear", () => {
  it("deve retornar record default", async () => {
    const clear = clearFactory(schema);
    expect(await clear()).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });
});
