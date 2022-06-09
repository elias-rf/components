import { it, expect, describe } from "vitest";

import Knex from "knex";
import knexJson from "./knex-json";

const knex = Knex({
  client: "mssql",
  connection: {
    filename: ":memory:",
  },
  useNullAsDefault: true,
});

const testes = [
  {
    title: "Deve fazer um select default",
    query: {
      from: "users",
    },
    sql: "select * from [users]",
  },
  {
    title: "Deve fazer um select com campos",
    query: {
      from: "users",
      select: ["id", "name", { idade: "nascimento" }],
    },
    sql: "select [id], [name], [nascimento] as [idade] from [users]",
  },
  {
    title: "Deve fazer um select com campos, where",
    query: {
      from: "users",
      orWhere: [["id", "<=", 0]],
      where: [["id", ">=", 10]],
      whereIn: [["id", [1, 2, 3]]],
    },
    sql: "select * from [users] where [id] <= 0 and [id] >= 10 and [id] in (1, 2, 3)",
  },
];

for (const teste of testes) {
  it(teste.title, () => {
    const result = knexJson(knex, teste.query);
    expect(result.toString()).toEqual(teste.sql);
  });
}

it("Deve fazer um select com campos, where, order", () => {
  const query = {
    from: "users",
    select: ["id", "name"],
    where: [["id", ">=", 1]],
    orderBy: [["id", "desc"]],
  };

  const result = knexJson(knex, query);
  expect(result.toString()).toEqual(
    "select [id], [name] from [users] where [id] >= 1 order by [id] desc"
  );
});

it("Deve fazer um select com campos, where, order, join", () => {
  const query = {
    from: "users",
    select: ["id", "name"],
    where: [["id", ">=", 1]],
    orderBy: [["id", "desc"]],
    join: [["contacts", "users.id", "=", "contacts.user_id"]],
  };

  const result = knexJson(knex, query);
  expect(result.toString()).toEqual(
    "select [id], [name] from [users] inner join [contacts] on [users].[id] = [contacts].[user_id] where [id] >= 1 order by [id] desc"
  );
});

it("Deve fazer um update", () => {
  const query = {
    from: "users",
    update: { nome: 234 },
    increment: [["id", 1]],
    decrement: [["idade", 3]],
  };

  const result = knexJson(knex, query);
  expect(result.toString()).toEqual(
    "update [users] set [nome] = 234, [id] = [id] + 1, [idade] = [idade] - 3;select @@rowcount"
  );
});
