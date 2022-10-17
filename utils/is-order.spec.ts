import { expect, it } from "vitest";
import { TEntity } from "../types";
import { isOrder } from "./is-order";

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

it("deve validar order", () => {
  // @ts-expect-error: Unreachable code error
  expect(isOrder(undefined, entity)).toBe("Order deve ser informado");
  // @ts-expect-error: Unreachable code error
  expect(isOrder(null, entity)).toBe("Order deve ser informado");
  // @ts-expect-error: Unreachable code error
  expect(isOrder({}, entity)).toBe("Order deve ser um array");
  // @ts-expect-error: Unreachable code error
  expect(isOrder("field", entity)).toBe("Order deve ser um array");
  // @ts-expect-error: Unreachable code error
  expect(isOrder({ field: 1 }, entity)).toBe("Order deve ser um array");
  // @ts-expect-error: Unreachable code error
  expect(isOrder([{ field: 1 }], entity)).toBe(
    "Order deve ser um array de tuplas"
  );
  expect(isOrder([], entity)).toBe(null);
  // @ts-expect-error: Unreachable code error
  expect(isOrder([["field", "ascii"]], entity)).toBe(
    "Order dever ser asc ou desc"
  );
  // @ts-expect-error: Unreachable code error
  expect(isOrder([["field"]], entity)).toBe(
    "Order deve possuir tuplas com [field, asc|desc]"
  );
  expect(isOrder([["field2", "asc"]], entity)).toBe(
    "field2 não é um campo válido para [order][phonebook]: agenda_telefone_id,nome,setor,email"
  );
  expect(isOrder([["nome", "asc"]], entity)).toBe(null);
});
