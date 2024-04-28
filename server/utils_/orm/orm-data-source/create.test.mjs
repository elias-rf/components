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

describe("create", () => {
  const tracker = getTracker();
  const db = adapterKnex(knexMockMsql);
  const tb = ormTableDataSource(db, phonebook);
  db.startLog();

  beforeEach(() => {
    tracker.reset();
    db.startLog();
  });

  it("create with select", async () => {
    tracker.on.insert("phonebook").response({ id: 10 });
    const rsp = await tb.rpc.create({
      data: { id: 10 },
      returning: ["id"],
    });
    expect(rsp).toEqual({ id: 10 });
    expect(db.log()).toEqual([
      "insert into [phonebook] ([id]) output inserted.[id] values (10)",
    ]);
  });

  it("create without select", async () => {
    tracker.on.insert("phonebook").response(1);
    const rsp = await tb.rpc.create({
      data: { id: 1 },
    });
    expect(rsp).toEqual(1);
    expect(db.log()).toEqual(["insert into [phonebook] ([id]) values (1)"]);
  });
});
