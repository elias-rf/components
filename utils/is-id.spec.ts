import { expect, it } from "vitest";
import { TEntity } from "../types";
import { isId } from "./is-id";

const entity: TEntity = {
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
      primaryKey: true,
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

it("deve validar Id", () => {
  expect(isId(undefined, entity)).toBe("Id deve ser informado");
  expect(isId(null, entity)).toBe("Id deve ser informado");
  expect(isId({}, entity)).toBe("Id deve ser informado");
  expect(isId([], entity)).toBe("Id deve ser informado");
  expect(isId("field", entity)).toBe("Id deve ser informado");
  expect(isId({ agenda_telefone_id: 1, nome: "fulano" }, entity)).toEqual(null);
  expect(isId({ fld: 1 }, entity)).toEqual(
    "[agenda_telefone_id,nome] não foi informado para [id][phonebook]: agenda_telefone_id,nome"
  );
  expect(isId({ agenda_telefone_id: 1 }, entity)).toEqual(
    "[nome] não foi informado para [id][phonebook]: agenda_telefone_id,nome"
  );
});
