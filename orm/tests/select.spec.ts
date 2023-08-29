import { knexMockMsql } from "../../mocks/connections.mock";
import { OrmDatabase } from "../orm-database";
import { getTracker } from "../../mocks/database.mock";
import { knexMockHistory } from "../../mocks/knex-mock-history";
import { describe, beforeEach, test, expect } from "vitest";

describe("select", () => {
  const orm = new OrmDatabase(knexMockMsql);
  orm.startLog();
  const tracker = getTracker();

  beforeEach(() => {
    tracker.reset();
    tracker.on.select("select").response([]);
    orm.resetLog();
  });

  test("from", async () => {
    await orm.run({ from: "users" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select * from [users]",
      },
    ]);
  });

  test("select from", async () => {
    await orm.run({ select: ["id"], from: "users" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select [id] from [users]",
      },
    ]);
  });



  test("select associations single keys", async () => {
    tracker.reset();
    tracker.on.select("from [users]").response([{ id: 1 }, { id: 2 }]);
    tracker.on.select("from [address]").response([
      { id: 10, id_user: 1 },
      { id: 20, id_user: 2 },
    ]);
    tracker.on.select("from [cities]").response([
      { id: 100, id_address: 10 },
      { id: 200, id_address: 20 },
    ]);

    const response = await orm.run({
      select: [
        "id",
        {
          address: {
            select: [
              "id",
              "id_user",
              {
                city: {
                  select: ["id", "id_address"],
                  from: "cities",
                  source: "id",
                  target: "id_address",
                  type: "hasOne",
                },
              },
            ],
            from: "address",
            source: "id",
            target: "id_user",
            type: "hasMany",
          },
        },
      ],
      from: "users",
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select [id] from [users]",
      },
      {
        bindings: [1, 2],
        sql: "select [id], [id_user] from [address] where [id_user] in (@p0, @p1)",
      },
      {
        bindings: [10, 20],
        sql: "select [id], [id_address] from [cities] where [id_address] in (@p0, @p1)",
      },
    ]);

    expect(response).toEqual([
      {
        id: 1,
        address: [{ id: 10, id_user: 1, city: { id: 100, id_address: 10 } }],
      },
      {
        id: 2,
        address: [{ id: 20, id_user: 2, city: { id: 200, id_address: 20 } }],
      },
    ]);
    expect(orm.sql()).toEqual([
      "select [id] from [users]",
      "select [id], [id_user] from [address] where [id_user] in (1, 2)",
      "select [id], [id_address] from [cities] where [id_address] in (10, 20)",
    ]);
  });

  test("select associations composite keys", async () => {
    tracker.reset();
    tracker.on.select("from [users]").response([
      { id: 1, emp: 1 },
      { id: 2, emp: 1 },
    ]);
    tracker.on.select("from [address]").response((query) => {
      return [
        {
          id: query.bindings[1] * 10,
          emp: query.bindings[0],
          id_user: query.bindings[1],
        },
      ];
    });
    tracker.on.select("from [cities]").response((query) => {
      return [
        {
          id: query.bindings[1] * 10,
          emp: query.bindings[0],
          id_address: query.bindings[1],
        },
      ];
    });

    const response = await orm.run({
      select: [
        "id",
        {
          address: {
            select: [
              "emp",
              "id",
              "id_user",
              {
                city: {
                  select: ["id", "id_address"],
                  from: "cities",
                  source: ["emp", "id"],
                  target: ["emp", "id_address"],
                  type: "hasOne",
                },
              },
            ],
            from: "address",
            source: ["emp", "id"],
            target: ["emp", "id_user"],
            type: "hasMany",
          },
        },
      ],
      from: "users",
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select [id] from [users]",
      },
      {
        bindings: [1, 1],
        sql: "select [emp], [id], [id_user] from [address] where [emp] = @p0 and [id_user] = @p1",
      },
      {
        bindings: [1, 10],
        sql: "select [id], [id_address] from [cities] where [emp] = @p0 and [id_address] = @p1",
      },

      {
        bindings: [1, 2],
        sql: "select [emp], [id], [id_user] from [address] where [emp] = @p0 and [id_user] = @p1",
      },

      {
        bindings: [1, 20],
        sql: "select [id], [id_address] from [cities] where [emp] = @p0 and [id_address] = @p1",
      },
    ]);

    expect(response).toEqual([
      {
        id: 1,
        emp: 1,
        address: [
          {
            id: 10,
            id_user: 1,
            emp: 1,
            city: { id: 100, id_address: 10, emp: 1 },
          },
        ],
      },
      {
        id: 2,
        emp: 1,
        address: [
          {
            id: 20,
            id_user: 2,
            emp: 1,
            city: { id: 200, id_address: 20, emp: 1 },
          },
        ],
      },
    ]);
    expect(orm.sql()).toEqual([
      "select [id] from [users]",
      "select [emp], [id], [id_user] from [address] where [emp] = 1 and [id_user] = 1",
      "select [id], [id_address] from [cities] where [emp] = 1 and [id_address] = 10",
      "select [emp], [id], [id_user] from [address] where [emp] = 1 and [id_user] = 2",
      "select [id], [id_address] from [cities] where [emp] = 1 and [id_address] = 20",
    ]);
  });

  test("first from", async () => {
    await orm.run({ first: ["id"], from: "users" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select top (@p0) [id] from [users]",
      },
    ]);
    expect(orm.sql()).toEqual(["select top (1) [id] from [users]"]);
  });

  test("fromRaw", async () => {
    await orm.run({
      from: { raw: ['(select * from "users" where "age" > ?)', 18] },
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [18],
        sql: 'select * from (select * from "users" where "age" > @p0)',
      },
    ]);
    expect(orm.sql()).toEqual([
      'select * from (select * from "users" where "age" > 18)',
    ]);
  });

  test("select fromRaw", async () => {
    await orm.run({
      select: ["id"],
      from: { raw: ['(select * from "users" where "age" > 18)'] },
    });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: 'select [id] from (select * from "users" where "age" > 18)',
      },
    ]);
  });

  test("select múltiplo", async () => {
    await orm.run({ select: ["id", "name"], from: "users" });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select [id], [name] from [users]",
      },
    ]);
  });

  test("select as", async () => {
    await orm.run({ select: ["id as key"], from: "users" });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select [id] as [key] from [users]",
      },
    ]);
  });

  test("where", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [
        ["id", "=", 1],
        ["name", "like", "%test%"],
      ],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, "%test%"],
        sql: "select [id] from [users] where [id] = @p0 and [name] like @p1",
      },
    ]);
  });

  test("whereNot", async () => {
    await orm.run({ select: ["id"], from: "users", whereNot: [["id", 1]] });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [id] from [users] where not [id] = @p0",
      },
    ]);
  });

  test("in", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [["id", "in", [1, 2, 3]]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 2, 3],
        sql: "select [id] from [users] where [id] in (@p0, @p1, @p2)",
      },
    ]);
  });

  test("not in", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [["id", "not in", [1, 2, 3]]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 2, 3],
        sql: "select [id] from [users] where [id] not in (@p0, @p1, @p2)",
      },
    ]);
  });

  test("between", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [["id", "between", [1, 3]]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 3],
        sql: "select [id] from [users] where [id] between @p0 and @p1",
      },
    ]);
  });

  test("not between", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [["id", "not between", [1, 3]]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 3],
        sql: "select [id] from [users] where [id] not between @p0 and @p1",
      },
    ]);
  });

  test("null", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [["id", null]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select [id] from [users] where [id] is null",
      },
    ]);
  });

  test("not null", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [["id", "is not", null]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select [id] from [users] where [id] is not null",
      },
    ]);
  });

  test("like", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [["id", "like", "a%"]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["a%"],
        sql: "select [id] from [users] where [id] like @p0",
      },
    ]);
  });

  test("not like", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [["id", "not like", "a%"]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["a%"],
        sql: "select [id] from [users] where [id] not like @p0",
      },
    ]);
  });

  test("whereRaw", async () => {
    await orm.run({
      select: ["id"],
      from: "users",
      where: [{ raw: ["id >= 123"] }],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select [id] from [users] where id >= 123",
      },
    ]);
  });

  test("offset, limit", async () => {
    await orm.run({
      from: "users",
      limit: 10,
      offset: 5,
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [5, 10],
        sql: "select * from [users] offset @p0 rows fetch next @p1 rows only",
      },
    ]);
  });

  test("count, min, max, avg, sum", async () => {
    await orm.run({
      from: "users",
      count: "id as count",
      min: "id as min",
      max: "id as max",
      avg: "id as avg",
      sum: "id as sum",
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select count([id]) as [count], min([id]) as [min], max([id]) as [max], sum([id]) as [sum], avg([id]) as [avg] from [users]",
      },
    ]);
  });

  test("join", async () => {
    await orm.run({
      from: "users",
      join: [["posts", "user_id", "=", "id"]],
      select: ["users.id", "contacts.phone"],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select [users].[id], [contacts].[phone] from [users] inner join [posts] on [user_id] = [id]",
      },
    ]);
  });
  test("raw argumento", async () => {
    await orm.run({
      from: "users",
      select: { raw: ["users.id, contacts.phone"] },
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select users.id, contacts.phone from [users]",
      },
    ]);
  });

  test("raw with string parameter", async () => {
    await orm.run({
      raw: ["select * from ?", "users"],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["users"],
        sql: "select * from @p0",
      },
    ]);
  });

  test("raw with array parameter", async () => {
    await orm.run({
      raw: ["select * from ?", ["users"]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["users"],
        sql: "select * from @p0",
      },
    ]);
  });

  test("raw with object parameter", async () => {
    await orm.run({
      raw: ["select * from :table", { table: "users" }],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["users"],
        sql: "select * from @p0",
      },
    ]);
  });

  test("having", async () => {
    await orm.run({
      from: "users",
      having: [["age", ">", 18]],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [18],
        sql: "select * from [users] having [age] > @p0",
      },
    ]);
  });

  test("groupBy", async () => {
    await orm.run({
      from: "users",
      groupBy: ["id", "name"],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: "select * from [users] group by [id], [name]",
      },
    ]);
  });

  test("having raw", async () => {
    await orm.run({
      from: "users",
      having: [{ raw: ["age > ?", 18] }],
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [18],
        sql: "select * from [users] having age > @p0",
      },
    ]);
  });
});
