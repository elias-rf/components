import { describe, expect, it } from "vitest";
import { knexAggregate } from "./knex-aggregate";

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

describe("knexAggregate", () => {
  it("deve renomear select para field", () => {
    expect(knexAggregate({ agenda_telefone_id: "ttl" }, entity)).toEqual({
      ttl: "id",
    });
  });
  it("deve disparar erro", () => {
    expect(() => knexAggregate({ field: "ttl" }, entity)).toThrow(
      "field não é id válido use: agenda_telefone_id,email,nome,setor"
    );
  });
});