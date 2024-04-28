import { beforeEach, describe, expect, test } from "vitest";
import { knexMockMsql } from "../../mocks/connections.mock.mjs";
import { getTracker } from "../../mocks/database.mock.mjs";
import { adapterKnex } from "../adapter-knex.mjs";
import { ormTableDataSource } from "./index.mjs";

const phonebook = {
  table: "phonebook",
  primary: ["id"],
  fields: ["id", "name", "department", "email"],
  dto: { id: "id", nome: "name", setor: "department", email: "email" },
};

describe("list", () => {
  const tracker = getTracker();
  const db = adapterKnex(knexMockMsql);
  const tb = ormTableDataSource(db, phonebook);
  db.startLog();

  beforeEach(() => {
    tracker.reset();
    db.startLog();
  });

  test("list", async () => {
    tracker.on.select("from [phonebook]").response([{ id: 1 }]);
    const rsp = await tb.rpc.list({
      where: [
        ["id", 1],
        ["name", ">", "a"],
      ],
      orderBy: [
        ["id", "asc"],
        ["name", "desc"],
      ],
      limit: 50,
      select: ["id", "name"],
    });

    expect(rsp).toEqual([{ id: 1 }]);
    expect(db.log()).toEqual([
      "select top (50) [id], [name] from [phonebook] where [id] = 1 and [name] > 'a' order by [id] asc, [name] desc",
    ]);
  });
});
