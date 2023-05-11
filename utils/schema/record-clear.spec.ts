import { tables } from "@/models/tables";
import { describe, expect, it } from "vitest";
import { recordClear } from "./record-clear";

describe("record-clear", () => {
  it("deve percorrer todos os schemas sem erros", () => {
    for (const table in tables) {
      expect(recordClear(tables[table].fields)).toEqual(expect.anything());
    }
  });

  it("deve percorrer o schema agenda_telefone sem erros", () => {
    expect(recordClear(tables.agenda_telefone.fields)).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });

  it("deve percorrer o schema definido sem erros", () => {
    const schema = [
      {
        allowNull: false,
        label: "Ramal",
        name: "agenda_telefone_id",
        primaryKey: true,
        typeField: "int",
      },
      {
        allowNull: false,
        label: "Nome",
        name: "nome",
        typeField: "string",
      },
      {
        label: "Setor",
        name: "setor",
        typeField: "string",
      },
      {
        label: "Email",
        name: "email",
        typeField: "string",
      },
    ];

    expect(recordClear(schema)).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });
});
