import { objectionOrder } from "./objection-order";
import { expect, it, describe } from "vitest";

describe("objectionOrder", () => {
  it("Deve retornar order com schema", () => {
    expect(objectionOrder({ id: "desc", fld: "asc" })).toEqual([
      { column: "id", order: "desc" },
      { column: "fld", order: "asc" },
    ]);
  });
});
