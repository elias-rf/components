import { describe, expect, it } from "vitest";
import { db } from "./db-knex";
import { knexMock } from "./knex";
import { knexAdapter } from "./knexAdapter";

const data = {
  tbl: [
    { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    { id: 2, name: "beltrano", age: 30, uf: "mg", email: "beltrano@mail.com" },
    { id: 3, name: "ciclano", age: 20, uf: "sp", email: "ciclano@mail.com" },
  ],
};

describe("knex", () => {
  it("usar where", async () => {
    const knex = knexMock([["ok"]]);
    const rsp = await knex("table")
      .select("field1")
      .where(["field1", "value1"]);

    expect(knex.mock.stack[0]).toEqual([
      { knex: "table" },
      { select: ["field1"] },
      { where: [["field1", "value1"]] },
    ]);
    expect(rsp).toEqual(["ok"]);
  });

  it("usar todos os métodos", async () => {
    const knex = knexMock([["ok"]]);
    const rsp = await knex("tbl")
      .select("fld")
      .sum("fld")
      .limit(10)
      .distinct("fld")
      .join("tbl2", "fld1", "fld2")
      .returning("fld")
      .raw("raw")
      .groupBy("fld")
      .groupByRaw("raw")
      .orderByRaw("raw")
      .orderBy("fld")
      .from("tbl3")
      .havingRaw("raw")
      .where("whr")
      .whereRaw("raw2")
      .whereNull("fld")
      .whereBetween("fld", [1, 2])
      .whereIn("fld", [1, 2])
      .andWhere("fld", "value")
      .update({ fld: "value" })
      .insert({ fld: "value" })
      .del();

    expect(knex.mock.stack[0]).toEqual([
      { knex: "tbl" },
      { select: ["fld"] },
      { sum: ["fld"] },
      { limit: [10] },
      { distinct: ["fld"] },
      { join: ["tbl2", "fld1", "fld2"] },
      { returning: ["fld"] },
      { raw: ["raw"] },
      { groupBy: ["fld"] },
      { groupByRaw: ["raw"] },
      { orderByRaw: ["raw"] },
      { orderBy: ["fld"] },
      { from: ["tbl3"] },
      { havingRaw: ["raw"] },
      { where: ["whr"] },
      { whereRaw: ["raw2"] },
      { whereNull: ["fld"] },
      { whereBetween: ["fld", [1, 2]] },
      { whereIn: ["fld", [1, 2]] },
      { andWhere: ["fld", "value"] },
      { update: [{ fld: "value" }] },
      { insert: [{ fld: "value" }] },
      { del: [] },
    ]);
    expect(rsp).toEqual(["ok"]);
  });
});

describe("knex com db", () => {
  it("usar where_", async () => {
    const knex = knexMock(knexAdapter(db(data)));
    const rsp = await knex("tbl").select("id").where(["id", 1]);

    expect(knex.mock.stack[0]).toEqual([
      { knex: "tbl" },
      { select: ["id"] },
      { where: [["id", 1]] },
    ]);
    expect(rsp).toEqual([{ id: 1 }]);
  });

  it("usar todos os métodos", async () => {
    const knex = knexMock(knexAdapter(db(data)));
    const rsp = await knex("tbl")
      .select("id")
      .sum("fld")
      .limit(10)
      .distinct("fld")
      .join("tbl2", "fld1", "fld2")
      .returning("fld")
      .raw("raw")
      .groupBy("fld")
      .groupByRaw("raw")
      .orderByRaw("raw")
      .orderBy({ id: "desc" })
      .from("tbl3")
      .havingRaw("raw")
      .where(["age", 20])
      .whereRaw("raw2")
      .whereNull("fld")
      .whereBetween("fld", [1, 2])
      .whereIn("fld", [1, 2])
      .andWhere("fld", "value")
      .update({ fld: "value" })
      .insert({ fld: "value" })
      .del();

    expect(knex.mock.stack[0]).toEqual([
      { knex: "tbl" },
      { select: ["id"] },
      { sum: ["fld"] },
      { limit: [10] },
      { distinct: ["fld"] },
      { join: ["tbl2", "fld1", "fld2"] },
      { returning: ["fld"] },
      { raw: ["raw"] },
      { groupBy: ["fld"] },
      { groupByRaw: ["raw"] },
      { orderByRaw: ["raw"] },
      { orderBy: [{ id: "desc" }] },
      { from: ["tbl3"] },
      { havingRaw: ["raw"] },
      { where: [["age", 20]] },
      { whereRaw: ["raw2"] },
      { whereNull: ["fld"] },
      { whereBetween: ["fld", [1, 2]] },
      { whereIn: ["fld", [1, 2]] },
      { andWhere: ["fld", "value"] },
      { update: [{ fld: "value" }] },
      { insert: [{ fld: "value" }] },
      { del: [] },
    ]);
    expect(rsp).toEqual([{ id: 3 }, { id: 1 }]);
  });
});
