import { expect, it } from "vitest";
import { TEntity } from "../types";
import { isWhere } from "./is-where";

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

it("deve validar where", () => {
  // @ts-expect-error: Unreachable code error
  expect(isWhere(undefined, entity)).toBe("Where deve ser informado");
  // @ts-expect-error: Unreachable code error
  expect(isWhere(null, entity)).toBe("Where deve ser informado");
  // @ts-expect-error: Unreachable code error
  expect(isWhere({}, entity)).toBe("Where deve ser um array");
  // @ts-expect-error: Unreachable code error
  expect(isWhere("field", entity)).toBe("Where deve ser um array");
  // @ts-expect-error: Unreachable code error
  expect(isWhere({ field: 1 }, entity)).toBe("Where deve ser um array");
  // @ts-expect-error: Unreachable code error
  expect(isWhere([{ field: 1 }], entity)).toBe(
    "Where deve ser um array de tuplas"
  );
  expect(isWhere([], entity)).toBe(null);
  // @ts-expect-error: Unreachable code error
  expect(isWhere([["field", "ascii"]], entity)).toBe(
    "Where deve possuir tuplas com [field, igualdade, valor]"
  );
  // @ts-expect-error: Unreachable code error
  expect(isWhere([["field"]], entity)).toBe(
    "Where deve possuir tuplas com [field, igualdade, valor]"
  );
  expect(isWhere([["field", "=", "asc"]], entity)).toBe(
    "field não é um campo válido para [where][phonebook]: agenda_telefone_id,nome,setor,email"
  );
  expect(isWhere([["nome", "=", "asc"]], entity)).toBe(null);
});
