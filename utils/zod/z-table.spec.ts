import { expect, it } from "vitest";
import { TDb } from "../../types";
import { zTable } from "./z-table";

const entity: TDb = {
  agenda_telefone: {
    database: "oftalmo",
    table: "phonebook",
    fields: [],
  },
};

it("deve validar Id", () => {
  expect(() => zTable(undefined, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );
  expect(() => zTable(null, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );
  expect(() => zTable({}, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );
  expect(() => zTable([], entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );
  expect(() => zTable("field", entity)).toThrow(
    "field não é uma entidade cadastrada no schema. Talvez seja: agenda_telefone"
  );
  expect(() =>
    zTable({ agenda_telefone_id: 1, nome: "fulano" }, entity)
  ).toThrow("Um nome de tabela deve ser informado");
  expect(() => zTable({ fld: 1 }, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );
  expect(() => zTable({ agenda_telefone_id: 1 }, entity)).toThrow(
    "Um nome de tabela deve ser informado"
  );
  expect(zTable("agenda_telefone", entity)).toEqual(undefined);
});
