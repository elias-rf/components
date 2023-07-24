import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";

describe("SysResourceModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  it("list", async () => {
    tracker.reset();
    tracker.on.select("resource").response([{ resource_id: "1" }]);

    const rsp = await modelsMock.sysResource.list({
      filter: { resource_id: "1" },
      sort: { resource_id: "asc" },
    });

    expect(rsp).toEqual([{ resource_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [resource_id], [description] from [resource] where ([resource_id] = @p1) order by [resource_id] asc",
      },
    ]);
  });

  it("read", async () => {
    tracker.reset();
    tracker.on.select("resource").response([{ resource_id: "1" }]);

    const rsp = await modelsMock.sysResource.read({
      id: { resource_id: 1 },
    });

    expect(rsp).toEqual({ resource_id: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [resource_id], [description] from [resource] where ([resource_id] = @p0)",
      },
    ]);
  });

  it("delete", async () => {
    tracker.reset();
    tracker.on.delete("resource").response([1]);

    const rsp = await modelsMock.sysResource.del({
      id: { resource_id: 1 },
    });

    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "delete from [resource] where ([resource_id] = @p0);select @@rowcount",
      },
    ]);
  });

  it("update", async () => {
    tracker.reset();
    tracker.on.update("resource").response([{ resource_id: 10 }]);

    const rsp = await modelsMock.sysResource.update({
      id: { resource_id: "10" },
      data: { resource_id: 10 },
      select: ["resource_id"],
    });

    expect(rsp).toEqual({ resource_id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10, "10"],
        sql: "update [resource] set [resource_id] = @p0 output inserted.[resource_id] where ([resource_id] = @p1)",
      },
    ]);
  });

  it("create", async () => {
    tracker.reset();
    tracker.on.insert("resource").response([{ resource_id: 10 }]);

    const rsp = await modelsMock.sysResource.create({
      data: { resource_id: 10 },
    });

    expect(rsp).toEqual({ resource_id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "insert into [resource] ([resource_id]) output inserted.[resource_id], inserted.[description] values (@p0)",
      },
    ]);
  });
});
