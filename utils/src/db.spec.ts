import { describe, expect, it } from "vitest";
import { db } from "./db";

const data = {
  tbl: [
    { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    { id: 2, name: "beltrano", age: 30, uf: "mg", email: "beltrano@mail.com" },
    { id: 3, name: "ciclano", age: 20, uf: "sp", email: "ciclano@mail.com" },
  ],
};

describe("db", () => {
  it("usar where", () => {
    expect(db(data).from("tbl").where().get()).toEqual(data.tbl);
    // expect(db(data).from("tbl").where(["id", 1]).get()).toEqual([
    //   { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    // ]);
    // expect(db(data).from("tbl").where(["age", 20]).get()).toEqual([
    //   { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    //   { id: 3, name: "ciclano", age: 20, uf: "sp", email: "ciclano@mail.com" },
    // ]);
    // expect(
    //   db(data).from("tbl").where(["age", 20]).where(["uf", "mg"]).get()
    // ).toEqual([
    //   { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    // ]);
  });
  it("usar order", () => {
    expect(db(data).from("tbl").order().get()).toEqual(data.tbl);
    expect(db(data).from("tbl").order({ name: "asc" }).get()).toEqual([
      {
        id: 2,
        name: "beltrano",
        age: 30,
        uf: "mg",
        email: "beltrano@mail.com",
      },
      { id: 3, name: "ciclano", age: 20, uf: "sp", email: "ciclano@mail.com" },
      { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    ]);
  });
});
