import Knex from "knex";
import { expect, it } from "vitest";

const knex = Knex({
  client: "sqlite3",
});

it("deve executar query", async () => {
  expect(await knex("phonebook").toString()).toBe("select * from `phonebook`");
  expect(await knex("diamante").toString()).toBe("select * from `diamante`");
  // expect(await knex("phonebook").where("id", 100)).toEqual([
  //   {
  //     id: 100,
  //     name: "Manoella",
  //     department: "Comercial",
  //     email: "manoella.oliveira@visiontech.com.br",
  //   },
  // ]);
});

it("deve executar query com cache", async () => {
  // const knexCache = KnexCache();
  // const knexCache2 = KnexCache();
  // expect(knexCache(knex("phonebook")).toString()).toBe(
  //   "select * from `phonebook`"
  // );
  // expect(await knexCache(knex("diamante")).toString()).toBe(
  //   "select * from `diamante`"
  // );
  // expect(
  //   await knexCache(knex("phonebook").where("id", 100)).toString()
  // ).toEqual([
  //   {
  //     id: 100,
  //     name: "Manoella",
  //     department: "Comercial",
  //     email: "manoella.oliveira@visiontech.com.br",
  //   },
  // ]);
  // expect(await knexCache("phonebook").where("id", 102)).toEqual([
  //   {
  //     id: 102,
  //     name: "Ana Ferreira",
  //     department: "Comercial",
  //     email: "ana.ferreira@visiontech.com.br",
  //   },
  // ]);
  // expect(await knexCache("phonebook").where("id", 100)).toEqual([
  //   {
  //     id: 100,
  //     name: "Manoella",
  //     department: "Comercial",
  //     email: "manoella.oliveira@visiontech.com.br",
  //   },
  // ]);
  // expect(await knexCache2("phonebook").where("id", 100)).toEqual([
  //   {
  //     id: 100,
  //     name: "Manoella",
  //     department: "Comercial",
  //     email: "manoella.oliveira@visiontech.com.br",
  //   },
  // ]);
});
