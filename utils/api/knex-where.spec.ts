import Knex from "knex";
import { expect, it } from "vitest";
import { knexWhere } from "./knex-where";

describe("knexWhere", () => {
  it("Deve receber arrays", () => {
    const knex = Knex({ client: "mssql" });
    const expectedOut = knex
      .from("table")
      .where(
        knexWhere([
          { id: "f1", value: "1" },
          { id: "f2", value: ">= 2" },
          { id: "f3", value: "?1?" },
          { id: "f4", value: "1<>2" },
          { id: "f5", value: "-" },
        ])
      )
      .toString();
    expect(expectedOut).toBe(
      "select * from [table] where ([f1] = '1' and [f2] >= '2' and [f3] like '%1%' and [f4] between '1' and '2' and [f5] is null)"
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
          [
            { id: "f1", value: "1" },
            { id: "f2", value: ">= 2" },
            { id: "f3", value: "?1?" },
            { id: "f4", value: "1<>2" },
            { id: "f5", value: "-" },
          ],
          schema
        )
      )
      .toString();
    expect(expectedOut).toBe(
      "select * from [table] where ([F1] = '1' and [F2] >= '2' and [f3] like '%1%' and [f4] between '1' and '2' and [f5] is null)"
    );
  });
});
