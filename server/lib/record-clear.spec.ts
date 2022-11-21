import { describe, expect, it } from "vitest";
import { db } from "../api/db";
import { recordClear } from "./record-clear";

describe("record-clear", () => {
  it("deve percorrer todos os schemas sem erros", () => {
    for (const table in db) {
      expect(recordClear(db[table])).toEqual(expect.anything());
    }
  });
});
