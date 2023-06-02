import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";

describe("AgendaTelefoneModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  it("list", async () => {
    tracker.reset();
    tracker.on.select("phonebook").response([{ id: "1" }]);

    const rsp = await modelsMock.agendaTelefone.list({
      filter: { agenda_telefone_id: "1" },
      sort: { agenda_telefone_id: "asc" },
    });

    expect(rsp).toEqual([{ agenda_telefone_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [id], [name], [department], [email] from [phonebook] where ([id] = @p1) order by [id] asc",
      },
    ]);
  });

  it("read", async () => {
    tracker.reset();
    tracker.on.select("phonebook").response([{ id: "1" }]);

    const rsp = await modelsMock.agendaTelefone.read({
      id: { agenda_telefone_id: 1 },
    });

    expect(rsp).toEqual({ agenda_telefone_id: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [id], [name], [department], [email] from [phonebook] where ([id] = @p0)",
      },
    ]);
  });

  it("delete", async () => {
    tracker.reset();
    tracker.on.delete("phonebook").response([1]);

    const rsp = await modelsMock.agendaTelefone.del({
      id: { agenda_telefone_id: 1 },
    });

    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "delete from [phonebook] where ([id] = @p0);select @@rowcount",
      },
    ]);
  });

  it("update", async () => {
    tracker.reset();
    tracker.on.update("phonebook").response([{ id: 10 }]);

    const rsp = await modelsMock.agendaTelefone.update({
      id: { agenda_telefone_id: "10" },
      data: { agenda_telefone_id: 10 },
      select: ["agenda_telefone_id"],
    });

    expect(rsp).toEqual({ agenda_telefone_id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10, "10"],
        sql: "update [phonebook] set [id] = @p0 output inserted.[id] where ([id] = @p1)",
      },
    ]);
  });

  it("create", async () => {
    tracker.reset();
    tracker.on.insert("phonebook").response([{ id: 10 }]);

    const rsp = await modelsMock.agendaTelefone.create({
      data: { agenda_telefone_id: 10 },
    });

    expect(rsp).toEqual({ agenda_telefone_id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "insert into [phonebook] ([id]) output inserted.[id], inserted.[name], inserted.[department], inserted.[email] values (@p0)",
      },
    ]);
  });
});
