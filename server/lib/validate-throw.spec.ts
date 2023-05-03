import { TEntity } from "@/types";
import { isId } from "@/utils/validate/is-id";
import { expect, it } from "vitest";
import { validateThrow } from "./validate-throw";

const entity: TEntity = {
  database: "oftalmo",
  table: "phonebook",
  schema: [
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

it("validate-throw", () => {
  expect(() => validateThrow(isId({ fldx: 1 }, entity))).toThrow();
});
