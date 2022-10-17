import Knex from "knex";
import { expect, it } from "vitest";
import { Where } from "../../additional";
import { knexWhere } from "./knex-where";

it("Deve receber arrays", () => {
  const knex = Knex({ client: "mssql" });
  const expectedOut = knex
    .from("table")
    .where(
      knexWhere([
        ["f1", "=", "1"],
        ["f2", ">=", "2"],
        ["f3", "<>", "3"],
      ])
    )
    .toString();
  expect(expectedOut).toBe(
    "select * from [table] where ([f1] = '1' and [f2] >= '2' and [f3] <> '3')"
  );
});

it("Deve receber arrays variados", () => {
  const knex = Knex({ client: "mssql" });
  const expectedOut = knex
    .from("table")
    .where(
      knexWhere([
        ["f1", "like", "1"],
        ["f1", "in", [1, 2, 3]],
        ["f1", "between", [1, 2]],
        ["f2", "is", null],
      ])
    )
    .toString();
  expect(expectedOut).toBe(
    "select * from [table] where ([f1] like '1' and [f1] in (1, 2, 3) and [f1] between 1 and 2 and [f2] is null)"
  );
});

it("Deve receber arrays variados com not", () => {
  const knex = Knex({ client: "mssql" });
  const expectedOut = knex
    .from("table")
    .where(
      knexWhere([
        ["f1", "not like", "1"],
        ["f1", "not in", [1, 2, 3]],
        ["f1", "not between", [1, 2]],
        ["f2", "not is", null],
      ])
    )
    .toString();
  expect(expectedOut).toBe(
    "select * from [table] where ([f1] not like '1' and [f1] not in (1, 2, 3) and [f1] not between 1 and 2 and [f2] is not null)"
  );
});

it("Deve receber or", () => {
  const knex = Knex({ client: "mssql" });

  const where: Where[] = [
    ["f1", "=", 1],
    ["f1", "=", 2],
  ];

  const expectedOut = knex.from("table").where(knexWhere(where)).toString();
  expect(expectedOut).toBe(
    "select * from [table] where ([f1] = 1 and [f1] = 2)"
  );
});
