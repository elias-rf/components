import { AgendaTelefone } from "@/database";
import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { CrudObjection } from "./crud-objection";
import { expect, it, describe , beforeEach} from "vitest";

describe("CrudObjection", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  AgendaTelefone.knex(connectionsMock.oftalmo);
  const crudObjection = new CrudObjection(AgendaTelefone);

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on.select("phonebook").response([{ id: "1" }]);
    const rsp = await crudObjection.list({
      filter: { id: "1", name: "> a" },
      sort: { id: "asc", name: "desc" },
      limit: 50,
      select: ["id", "name"],
    });

    expect(rsp).toEqual([{ id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1", "a"],
        sql: "select top (@p0) [id], [name] from [phonebook] where ([id] = @p1 and [name] > @p2) order by [id] asc, [name] desc",
      },
    ]);
  });

  it("del", async () => {
    tracker.on.delete("phonebook").response(1);
    const rsp = await crudObjection.del({
      id: { id: 10 },
    });
    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "delete from [phonebook] where [phonebook].[id] = @p0;select @@rowcount",
      },
    ]);
  });

  it("read", async () => {
    tracker.on.select("phonebook").response([{ id: "1" }]);
    const rsp = await crudObjection.read({
      id: { id: 10 },
      select: ["id", "name"],
    });
    expect(rsp).toEqual({ id: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "select [id], [name] from [phonebook] where [phonebook].[id] = @p0",
      },
    ]);
  });

  it("update", async () => {
    tracker.on.update("phonebook").response([{ id: 10 }]);
    tracker.on.select("phonebook").response([{ id: 10 }]);
    const rsp = await crudObjection.update({
      id: { id: "10" },
      data: { id: 10 },
      select: ["id"],
    });
    expect(rsp).toEqual({ id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10, "10"],
        sql: "update [phonebook] set [id] = @p0 where [phonebook].[id] = @p1;select @@rowcount",
      },
      {
        bindings: ["10"],
        sql: "select [phonebook].* from [phonebook] where [phonebook].[id] = @p0",
      },
    ]);
  });

  it("create with select", async () => {
    tracker.on.insert("phonebook").response(10);
    tracker.on.select("phonebook").response([{ id: 10 }]);
    const rsp = await crudObjection.create({
      data: { id: 10 },
      select: ["id"],
    });
    expect(rsp).toEqual({ id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "insert into [phonebook] ([id]) output inserted.[id] values (@p0)",
      },
      {
        bindings: [10],
        sql: "select [phonebook].* from [phonebook] where [phonebook].[id] in (@p0)",
      },
    ]);
  });

  it("create without select", async () => {
    tracker.on.insert("phonebook").response(10);
    tracker.on.select("phonebook").response([{ id: 10 }]);
    const rsp = await crudObjection.create({
      data: { id: 10 },
    });
    expect(rsp).toEqual({ id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "insert into [phonebook] ([id]) output inserted.[id] values (@p0)",
      },
    ]);
  });

  it("increment", async () => {
    tracker.on.update("phonebook").response([]);
    const rsp = await crudObjection.increment({
      filter: { id: "10" },
      increment: { id: 2 },
      select: ["id"],
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [2, "10"],
        sql: "update [phonebook] set [id] = [id] + @p0 output inserted.[id] where ([id] = @p1)",
      },
    ]);
  });

  it("count", async () => {
    tracker.on.select("phonebook").response([]);
    const rsp = await crudObjection.count({
      filter: { id: "=10" },
      select: ["id", "name"],
      count: { ttl: "*" },
    });
    expect(rsp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["10"],
        sql: "select count(*) as [ttl], [id], [name] from [phonebook] where ([id] = @p0)",
      },
    ]);
  });
});
