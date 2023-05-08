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
    expect(() => knexSelect(["nomes", "setor"], entity)).toThrow(
      "nomes não é um nome válido: agenda_telefone_id,nome,setor,email"
    );
  });
});
