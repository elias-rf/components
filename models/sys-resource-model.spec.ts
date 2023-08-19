import { SysResource } from "@/database";
import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { sysResourceModel } from "./sys-resource-model";
import { expect, it, describe } from "vitest";

describe("SysResourceModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  SysResource.knex(connectionsMock.sys);

  it("list", async () => {
    tracker.reset();
    tracker.on.select("resource").response([{ resource_id: "1" }]);

    const rsp = await sysResourceModel.list({
      filter: { resource_id: "1" },
      sort: { resource_id: "asc" },
    });

    expect(rsp).toEqual([{ resource_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) * from [resource] where ([resource_id] = @p1) order by [resource_id] asc",
      },
    ]);
  });

  it("read", async () => {
    tracker.reset();
    tracker.on.select("resource").response([{ resource_id: "1" }]);

    const rsp = await sysResourceModel.read({
      id: { resource_id: 1 },
    });

    expect(rsp).toEqual({ resource_id: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [resource].* from [resource] where [resource].[resource_id] = @p0",
      },
    ]);
  });

  it("delete", async () => {
    tracker.reset();
    tracker.on.delete("resource").response([1]);

    const rsp = await sysResourceModel.del({
      id: { resource_id: 1 },
    });

    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "delete from [resource] where [resource].[resource_id] = @p0;select @@rowcount",
      },
    ]);
  });

  it("update", async () => {
    tracker.reset();
    tracker.on.update("resource").response([{ resource_id: 10 }]);
    tracker.on.select("resource").response([{ resource_id: 10 }]);

    const rsp = await sysResourceModel.update({
      id: { resource_id: "10" },
      data: { resource_id: 10 },
      select: ["resource_id"],
    });

    expect(rsp).toEqual({ resource_id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10, "10"],
        sql: "update [resource] set [resource_id] = @p0 where [resource].[resource_id] = @p1;select @@rowcount",
      },
      {
        bindings: ["10"],
        sql: "select [resource].* from [resource] where [resource].[resource_id] = @p0",
      },
    ]);
  });

  it("create", async () => {
    tracker.reset();
    tracker.on.insert("resource").response(1);
    tracker.on.select("resource").response([{ resource_id: 10 }]);

    const rsp = await sysResourceModel.create({
      data: { resource_id: 10 },
    });

    expect(rsp).toEqual({ resource_id: 10 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: "insert into [resource] ([resource_id]) output inserted.[resource_id] values (@p0)",
      },
    ]);
  });
});
