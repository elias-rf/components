import { describe, expect, it } from "vitest";
import { tables } from "../../model/tables";
import { recordClear } from "./record-clear";

describe("record-clear", () => {
  it("deve percorrer todos os schemas sem erros", () => {
    for (const table in tables) {
      expect(recordClear(tables[table].fields)).toEqual(expect.anything());
    }
  });
  it("deve percorrer todos os schemas sem erros", () => {
    expect(recordClear(tables.agenda_telefone.fields)).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });
});
