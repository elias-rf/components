import { beforeEach, describe, expect, it } from "vitest";
import { knexMockMsql } from "../../mocks/connections.mock.mjs";
import { getTracker } from "../../mocks/database.mock.mjs";
import { adapterKnex } from "../adapter-knex.mjs";
import { ormTableDataSource } from "./index.mjs";

const phonebook = {
  table: "phonebook",
  primary: ["id"],
  fields: ["id", "name", "department", "email"],
};

describe("increment", () => {
  const tracker = getTracker();
  const db = adapterKnex(knexMockMsql);
  const tb = ormTableDataSource(db, phonebook);
  db.startLog();

  beforeEach(() => {
    tracker.reset();
    db.startLog();
  });

  it("increment", async () => {
    tracker.on.update("phonebook").response([]);
    const rsp = await tb.rpc.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ["id"],
    });
    expect(rsp).toEqual([]);
    expect(db.log()).toEqual([
      "update [phonebook] set [id] = [id] + 2 output inserted.[id] where [id] = 10",
    ]);
  });
});
