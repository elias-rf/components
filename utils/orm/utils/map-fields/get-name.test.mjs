import { describe, expect, test } from "vitest";
import { getName } from "./get-name.mjs";

export const mapFields = {
  id: "id",
  email: "email",
  nome: "name",
  setor: "department",
};

describe("validWhere", () => {
  test("válido", () => {
    expect(getName("department", mapFields)).toEqual("setor");
  });
});
