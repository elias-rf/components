import Knex from "knex";
import { expect, it } from "vitest";
import { knexWhere } from "./knex-where";

const schema = [
  { field: "F1", name: "f1" },
  { field: "F2", name: "f2" },
];

describe("knexWhere", () => {
  it("Deve receber arrays", () => {
    const knex = Knex({ client: "mssql" });
    const expectedOut = knex
      .from("table")
      .where(
        knexWhere(
          {
            f1: "1",
            f2: ">= 2",
            f3: "?1?",
            f4: "1<>2",
            f5: "-",
          },
          schema
        )
      )
      .toString();
    expect(expectedOut).toBe(
      "select * from [table] where ([F1] = '1' and [F2] >= '2' and [f3] like '%1%' and [f4] between '1' and '2' and [f5] is null)"
    );
  });

  it("Deve receber arrays com schema", () => {
    const schema = [
      { field: "F1", name: "f1" },
      { field: "F2", name: "f2" },
    ];
    const knex = Knex({ client: "mssql" });
    const expectedOut = knex
      .from("table")
      .where(
        knexWhere(
          {
            f1: "1",
            f2: ">= 2",
            f3: "?1?",
            f4: "1<>2",
            f5: "-",
          },
          schema
        )
      )
      .toString();
    expect(expectedOut).toBe(
      "select * from [table] where ([F1] = '1' and [F2] >= '2' and [f3] like '%1%' and [f4] between '1' and '2' and [f5] is null)"
    );
  });
});
