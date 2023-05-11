import { knexSelect } from "@/utils/api/knex-select";
import { describe, expect, it } from "vitest";

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

describe("knexSelect", () => {
  it("deve renomear select para field", () => {
    expect(knexSelect(["nome", "setor"], entity)).toEqual([
      "name",
      "department",
    ]);
  });
  it("deve disparar erro", () => {
    expect(() => knexSelect(["nomes", "setor"], entity)).toThrow(
      "nomes não é um campo válido use: agenda_telefone_id,email,nome"
    );
  });

  it("deve retornar fields quando receber *", () => {
    expect(knexSelect(["*"], entity)).toEqual([
      "id",
      "name",
      "department",
      "email",
    ]);
  });
});
