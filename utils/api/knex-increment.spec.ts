import { describe, expect, it } from "vitest";
import { knexIncrement } from "./knex-increment";

const entity = [
  {
    field: "id",
    name: "agenda_telefone_id",
  },
  {
    field: "name",
    name: "nome",
  },
  {
    field: "department",
    name: "setor",
  },
  {
    field: "email",
    name: "email",
  },
];

describe("knexIncremnt", () => {
  it("deve renomear select para field", () => {
    expect(knexIncrement({ agenda_telefone_id: 1 }, entity)).toEqual(["id", 1]);
  });
  it("deve disparar erro", () => {
    expect(() => knexIncrement({ field: 1 }, entity)).toThrow(
      "field não é campo válido use: agenda_telefone_id,email,nome,setor"
    );
  });
});
