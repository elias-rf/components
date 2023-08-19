import Knex from "knex";
import { objectionWhere } from "./objection-where";
import { expect, it, describe } from "vitest";

describe("knexWhere", () => {
  it("Deve receber arrays", () => {
    const knex = Knex({ client: "mssql" });
    const expectedOut = knex
      .from("table")
      .where(
        objectionWhere({
          f1: "1",
          f2: ">= 2",
          f3: "?1?",
          f4: "1<>2",
          f5: "-",
        })
      )
      .toString();
    expect(expectedOut).toBe(
      "select * from [table] where ([f1] = '1' and [f2] >= '2' and [f3] like '%1%' and [f4] between '1' and '2' and [f5] is null)"
    );
  });
});
