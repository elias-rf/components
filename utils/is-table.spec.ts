import { expect, it } from "vitest";
import { TEntitySchema } from "../types";
import { isTable } from "./is-table";

const entity: TEntitySchema = {
  agenda_telefone: {
    database: "oftalmo",
    table: "phonebook",
    fields: [],
  },
};

it("deve validar Id", () => {
  expect(isTable(undefined, entity)).toBe(
    "Um nome de tabela deve ser informado"
  );
  expect(isTable(null, entity)).toBe("Um nome de tabela deve ser informado");
  expect(isTable({}, entity)).toBe("Um nome de tabela deve ser informado");
  expect(isTable([], entity)).toBe("Um nome de tabela deve ser informado");
  expect(isTable("field", entity)).toBe(
    "field não é uma entidade cadastrada no schema. Talvez seja: agenda_telefone"
  );
  expect(isTable({ agenda_telefone_id: 1, nome: "fulano" }, entity)).toEqual(
    "[object Object] não é uma entidade cadastrada no schema. Talvez seja: agenda_telefone"
  );
  expect(isTable({ fld: 1 }, entity)).toEqual(
    "[object Object] não é uma entidade cadastrada no schema. Talvez seja: agenda_telefone"
  );
  expect(isTable({ agenda_telefone_id: 1 }, entity)).toEqual(
    "[object Object] não é uma entidade cadastrada no schema. Talvez seja: agenda_telefone"
  );
  expect(isTable("agenda_telefone", entity)).toEqual(null);
});
