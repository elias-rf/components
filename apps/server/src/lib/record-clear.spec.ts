import { describe, expect, it } from "vitest";
import { entitySchema } from "../api/entity-schema";
import { recordClear } from "./record-clear";

describe("record-clear", () => {
  it("deve percorrer todos os schemas sem erros", () => {
    for (const entity in entitySchema) {
      expect(recordClear(entitySchema[entity])).toEqual(expect.anything());
    }
  });
});
