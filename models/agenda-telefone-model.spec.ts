import { AgendaTelefone } from "@/database";
import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { agendaTelefoneModel } from "@/models/agenda-telefone-model";
import { createTracker } from "knex-mock-client";
import { expect, it, describe } from "vitest";

describe("AgendaTelefoneModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  AgendaTelefone.knex(connectionsMock.oftalmo);

  it("list", async () => {
    tracker.reset();
    tracker.on.select("phonebook").response([{ id: "1" }]);

    const rsp = await agendaTelefoneModel.list({
      filter: { id: "1" },
      sort: { id: "asc" },
    });

    expect(rsp).toEqual([{ id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) * from [phonebook] where ([id] = @p1) order by [id] asc",
      },
    ]);
  });

  it("read", async () => {
    tracker.reset();
    tracker.on.select("phonebook").response([{ id: "1" }]);

    const rsp = await agendaTelefoneModel.read({
      id: { id: 1 },
    });

    expect(rsp).toEqual({ id: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [phonebook].* from [phonebook] where [phonebook].[id] = @p0",
      },
    ]);
  });

  it("delete", async () => {
    tracker.reset();
    tracker.on.delete("phonebook").response([1]);

    const rsp = await agendaTelefoneModel.del({
      id: { id: 1 },
    });

    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "delete from [phonebook] where [phonebook].[id] = @p0;select @@rowcount",
      },
    ]);
  });

  it("update", async () => {
    tracker.reset();
    tracker.on.update("phonebook").response([{ id: 10 }]);
    tracker.on.select("phonebook").response([{ id: 10 }]);

    const rsp = await agendaTelefoneModel.update({
      id: { id: 10 },
      data: { id: 10 },
      select: ["id"],
    });

    expect(rsp).toEqual({ id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10, 10],
        sql: "update [phonebook] set [id] = @p0 where [phonebook].[id] = @p1;select @@rowcount",
      },
      {
        bindings: [10],
        sql: "select [phonebook].* from [phonebook] where [phonebook].[id] = @p0",
      },
    ]);
  });

  it("create", async () => {
    tracker.reset();
    tracker.on.insert("phonebook").response([{ id: 10 }]);
    tracker.on.select("phonebook").response([{ id: 10 }]);

    const rsp = await agendaTelefoneModel.create({
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
});
