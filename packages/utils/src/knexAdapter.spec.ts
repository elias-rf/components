import { describe, expect, it } from "@jest/globals";
import { db } from "./db-knex";
import { knexAdapter } from "./knexAdapter";

const data = {
  tbl: [
    { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
    { id: 2, name: "beltrano", age: 30, uf: "mg", email: "beltrano@mail.com" },
    { id: 3, name: "ciclano", age: 20, uf: "sp", email: "ciclano@mail.com" },
  ],
};

describe("knexAdapter", () => {
  it("usar where", async () => {
    const adapter = knexAdapter(db(data));
    const rsp = await adapter([{ knex: "tbl" }]);

    expect(rsp).toEqual([
      { id: 1, name: "fulano", age: 20, uf: "mg", email: "fulano@mail.com" },
      {
        id: 2,
        name: "beltrano",
        age: 30,
        uf: "mg",
        email: "beltrano@mail.com",
      },
      { id: 3, name: "ciclano", age: 20, uf: "sp", email: "ciclano@mail.com" },
    ]);
  });
});
