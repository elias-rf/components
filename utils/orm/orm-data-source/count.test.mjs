import { beforeEach, describe, expect, it } from "vitest";
import { usuarioSchema } from "../../../data/sys/usuario/usuario.schema.mjs";
import { knexMockMsql } from "../../mocks/connections.mock.mjs";
import { getTracker } from "../../mocks/database.mock.mjs";
import { adapterKnex } from "../adapter-knex.mjs";
import { ormTableDataSource } from "./index.mjs";

describe("count", () => {
  const tracker = getTracker();
  const db = adapterKnex(knexMockMsql);
  const tb = ormTableDataSource(db, usuarioSchema);
  db.startLog();

  beforeEach(() => {
    tracker.reset();
    db.startLog();
  });

  it("count", async () => {
    tracker.on.select("usuario").response([]);
    const rsp = await tb.rpc.count({
      where: [["id", 10]],
      select: ["id", "email"],
      count: ["* as ttl"],
    });
    expect(rsp).toEqual([]);
    expect(db.log()).toEqual([
      "select [id], [email], count(*) as [ttl] from [usuario] where [id] = 10",
    ]);
  });
});
