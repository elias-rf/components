import Knex from "knex";
import { expect, it } from "vitest";
import { knexId } from "./knex-id";

const schema = [
  { field: "F1", name: "f1" },
  { field: "F2", name: "f2" },
];

describe("knexWhere", () => {
  it("Deve receber arrays", () => {
    const knex = Knex({ client: "mssql" });
    const expectedOut = knex
      .from("table")
      .where(knexId({ f1: "1", f2: 2 }, schema))
      .toString();
    expect(expectedOut).toBe(
      "select * from [table] where ([F1] = '1' and [F2] = 2)"
    );
  });
});
