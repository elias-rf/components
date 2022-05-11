import { test, it, describe, expect } from "vitest";
import knexOrder from "./knex-order";

it("Deve ordernar", () => {
  expect(knexOrder([["id", "desc"]])).toEqual([
    { column: "id", order: "desc" },
  ]);
  expect(
    knexOrder([
      ["id", "desc"],
      ["fld", "asc"],
    ])
  ).toEqual([
    { column: "id", order: "desc" },
    { column: "fld", order: "asc" },
  ]);
});
