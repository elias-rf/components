import { describe, expect, test } from "vitest";
import { validOrderBy } from "./valid-order-by.mjs";

const schema = {
  table: "phonebook",
  primary: ["idphonebook"],
  fields: ["idphonebook", "name", "department", "mail"],
};

export const mapFields = {
  id: "idphonebook",
  email: "mail",
  nome: "name",
  setor: "department",
};

describe("validOrder", () => {
  test("válido", () => {
    expect(validOrderBy([["idphonebook", "asc"]], schema, mapFields)).toEqual({
      orderBy: [["idphonebook", "asc"]],
    });
  });
  test("campo inválido", () => {
    expect(() => validOrderBy([["ids", "asc"]], schema, mapFields)).toThrow(
      "[ids] não é um campo válido para where em phonebook use: id,nome,setor,email"
    );
  });
  test("tipo inválido", () => {
    // @ts-ignore
    expect(() => validOrderBy([["id", "1"]], schema, mapFields)).toThrow(
      'id deve ser "asc" | "desc"'
    );
  });
});
