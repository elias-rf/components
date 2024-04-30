import { describe, expect, test } from "vitest";
import { validReturning } from "./valid-returning.mjs";

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

describe("validSelect", () => {
  test("válido vazio", () => {
    expect(validReturning([], schema, mapFields)).toEqual({});
  });

  test("válido", () => {
    expect(validReturning(["idphonebook"], schema, mapFields)).toEqual({
      returning: ["idphonebook"],
    });
  });

  test("campo inválido", () => {
    expect(() => validReturning(["ids"], schema, mapFields)).toThrow(
      "[ids] não é um campo válido para returning em phonebook use: id,nome,setor,email"
    );
  });
});
