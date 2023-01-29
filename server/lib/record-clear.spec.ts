import { describe, expect, it } from "vitest";
import { db } from "../../schema";
import { recordClear } from "./record-clear";

describe("record-clear", () => {
  it("deve percorrer todos os schemas sem erros", () => {
    for (const table in db) {
      expect(recordClear(db[table].fields)).toEqual(expect.anything());
    }
  });
  it("deve percorrer todos os schemas sem erros", () => {
    expect(recordClear(db.agenda_telefone.fields)).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });
});
