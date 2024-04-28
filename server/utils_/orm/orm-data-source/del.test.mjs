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

describe("del", () => {
  const tracker = getTracker();
  const db = adapterKnex(knexMockMsql);
  const tb = ormTableDataSource(db, phonebook);
  db.startLog();

  beforeEach(() => {
    tracker.reset();
    db.startLog();
  });

  it("del", async () => {
    tracker.on.delete("phonebook").response(1);
    const rsp = await tb.rpc.del({
      where: [["id", 10]],
    });
    expect(rsp).toEqual(1);
    expect(db.log()).toEqual([
      "delete from [phonebook] where [id] = 10;select @@rowcount",
    ]);
  });
});
