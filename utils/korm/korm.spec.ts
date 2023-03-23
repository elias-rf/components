import { createTracker } from "knex-mock-client";
import { connectionsMock } from "../../mocks/connections.mock";
import { knexMockHistory } from "../../utils/data/knex-mock-history";
import { kormFactory } from "./korm";

const model = {
  connection: connectionsMock.oftalmo,
  table: "phonebook",
  fields: {
    id: "agenda_telefone_id",
    name: "nome",
    department: "setor",
    email: "mail",
  },
};

describe("korm", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  beforeEach(() => {
    tracker.reset();
  });

  it("deve executar list", async () => {
    tracker.on.select("phonebook").response([{ id: 1 }]);
    const k = kormFactory(model);
    const list = k.list({
      select: ["agenda_telefone_id"],
      where: [["agenda_telefone_id", ">", 0]],
      limit: 100,
      order: [["agenda_telefone_id", "desc"]],
      group: ["agenda_telefone_id"],
      sum: { ttl: "agenda_telefone_id" },
    });
    expect(list.sql()).toBe(
      "select top (100) [id], sum([agenda_telefone_id]) as [ttl] from [phonebook] where ([id] > 0) group by [id] order by [id] desc"
    );
    await list.exec();
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [100, 0],
          sql: "select top (@p0) [id], sum([agenda_telefone_id]) as [ttl] from [phonebook] where ([id] > @p1) group by [id] order by [id] desc",
        },
      ],
    });
  });

  it("deve executar create", async () => {
    tracker.on.insert("phonebook").response([{ id: 1 }]);
    const k = kormFactory(model);
    const create = k.create({ data: { agenda_telefone_id: "1" } });
    expect(create.sql()).toBe(
      "insert into [phonebook] ([id]) output inserted.[id], inserted.[name], inserted.[department], inserted.[email] values ('1')"
    );
    await create.exec();
    expect(knexMockHistory(tracker)).toEqual({
      insert: [
        {
          bindings: ["1"],
          sql: "insert into [phonebook] ([id]) output inserted.[id], inserted.[name], inserted.[department], inserted.[email] values (@p0)",
        },
      ],
    });
  });

  it("deve executar read", async () => {
    tracker.on.select("phonebook").response([{ id: 1 }]);
    const k = kormFactory(model);
    const read = k.read({ id: { agenda_telefone_id: 1 } });
    expect(read.sql()).toBe(
      "select top (1) [id], [name], [department], [email] from [phonebook] where [id] = 1"
    );
    const resp = await read.exec();
    expect(resp).toEqual({ agenda_telefone_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [1, 1],
          sql: "select top (@p0) [id], [name], [department], [email] from [phonebook] where [id] = @p1",
        },
      ],
    });
  });

  it("deve executar update", async () => {
    tracker.on.update("phonebook").response([{ id: 1 }]);
    const k = kormFactory(model);
    const update = k.update({
      id: { agenda_telefone_id: 1 },
      data: { agenda_telefone_id: 1 },
    });
    expect(update.sql()).toBe(
      "update [phonebook] set [id] = 1 output inserted.[id], inserted.[name], inserted.[department], inserted.[email] where [id] = 1"
    );
    await update.exec();
    expect(knexMockHistory(tracker)).toEqual({
      update: [
        {
          bindings: [1, 1],
          sql: "update [phonebook] set [id] = @p0 output inserted.[id], inserted.[name], inserted.[department], inserted.[email] where [id] = @p1",
        },
      ],
    });
  });
  it("deve executar del", async () => {
    tracker.on.delete("phonebook").response([1]);
    const k = kormFactory(model);
    const del = k.del({ id: { agenda_telefone_id: 1 } });
    expect(del.sql()).toBe(
      "delete from [phonebook] where [id] = 1;select @@rowcount"
    );
    await del.exec();
    expect(knexMockHistory(tracker)).toEqual({
      delete: [
        {
          bindings: [1],
          sql: "delete from [phonebook] where [id] = @p0;select @@rowcount",
        },
      ],
    });
  });
});
