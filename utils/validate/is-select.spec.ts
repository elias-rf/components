import { expect, it } from "vitest";
import { TTable } from "../../types";
import { isSelect } from "./is-select";

const entity: TTable = {
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

it("deve validar select", () => {
  // @ts-expect-error: Unreachable code error
  expect(isSelect(undefined, entity)).toBe(
    "Select deve ser um array de campos"
  );
  // @ts-expect-error: Unreachable code error
  expect(isSelect(null, entity)).toBe("Select deve ser um array de campos");
  // @ts-expect-error: Unreachable code error
  expect(isSelect({}, entity)).toBe("Select deve ser um array de campos");
  // @ts-expect-error: Unreachable code error
  expect(isSelect("field", entity)).toBe("Select deve ser um array de campos");
  // @ts-expect-error: Unreachable code error
  expect(isSelect({ field: 1 }, entity)).toBe(
    "Select deve ser um array de campos"
  );
  // @ts-expect-error: Unreachable code error
  expect(isSelect([{ field: 1 }], entity)).toBe(
    "Select deve ser um array de campos"
  );
  expect(isSelect([], entity)).toBe("Select deve ser um array de campos");
  // @ts-expect-error: Unreachable code error
  expect(isSelect([["field", "ascii"]], entity)).toBe(
    "Select deve ser um array de campos"
  );
  // @ts-expect-error: Unreachable code error
  expect(isSelect([["field"]], entity)).toBe(
    "Select deve ser um array de campos"
  );
  expect(isSelect(["field2", "asc"], entity)).toBe(
    "field2 não é um campo válido para [select][phonebook]: agenda_telefone_id,nome,setor,email"
  );
  expect(isSelect(["nome"], entity)).toBe(null);
});
