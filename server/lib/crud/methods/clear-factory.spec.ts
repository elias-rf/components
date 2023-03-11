import { TTable } from "../../../../types";
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
