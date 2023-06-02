import { expect, it } from "vitest";
import { knexOrder } from "./knex-order";

describe("knexOrder", () => {
  it("Deve retornar order com schema", () => {
    expect(
      knexOrder(
        { id: "desc", fld: "asc" },

        [
          { field: "ID", name: "id" },
          { field: "FLD", name: "fld" },
        ]
      )
    ).toEqual([
      { column: "ID", order: "desc" },
      { column: "FLD", order: "asc" },
    ]);
  });

  it("Deve retornar order com schema incompleto", () => {
    expect(
      knexOrder({ id: "desc", fld: "asc" }, [{ field: "ID", name: "id" }])
    ).toEqual([
      { column: "ID", order: "desc" },
      { column: "fld", order: "asc" },
    ]);
  });
});
