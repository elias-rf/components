import { knexData } from "@/utils/api/knex-data";
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

describe("knexData", () => {
  it("deve renomear data para field", () => {
    expect(
      knexData(
        { agenda_telefone_id: 1, nome: "nome", setor: "setor", email: "email" },
        entity
      )
    ).toEqual({
      id: 1,
      name: "nome",
      department: "setor",
      email: "email",
    });
  });
  it("deve disparar erro", () => {
    expect(() => knexData(["nomes", "setor"], entity)).toThrow(
      "Data deve ser um objeto"
    );
  });
});
