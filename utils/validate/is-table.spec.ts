import { TDb } from "@/types";
import { expect, it } from "vitest";
import { isTable } from "./is-table";

const entity: TDb = {
  agenda_telefone: {
    database: "oftalmo",
    table: "phonebook",
    fields: [],
  },
};

it("deve invalidar Id errado", () => {
  expect(() => isTable(undefined, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );
  expect(() => isTable(null, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );

  // @ts-expect-error: not assignable to parameter of type 'string'
  expect(() => isTable({}, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );

  // @ts-expect-error: not assignable to parameter of type 'string'
  expect(() => isTable([], entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );
  expect(() => isTable("field", entity)).toThrow(
    "field não é uma entidade cadastrada no schema. Talvez seja: agenda_telefone"
  );

  expect(() =>
    // @ts-expect-error: not assignable to parameter of type 'string'
    isTable({ agenda_telefone_id: 1, nome: "fulano" }, entity)
  ).toThrow("Um nome de tabela deve ser informado");

  // @ts-expect-error: not assignable to parameter of type 'string'
  expect(() => isTable({ fld: 1 }, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );

  // @ts-expect-error: not assignable to parameter of type 'string'
  expect(() => isTable({ agenda_telefone_id: 1 }, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );
});

it("deve validar Id", () => {
  expect(isTable("agenda_telefone", entity)).toEqual("agenda_telefone");
});
