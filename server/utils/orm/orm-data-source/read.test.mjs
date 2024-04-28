import { beforeEach, describe, expect, it } from "vitest";
import { usuarioSchema } from "../../../data/sys/usuario/usuario.schema.mjs";
import { knexMockMsql } from "../../mocks/connections.mock.mjs";
import { getTracker } from "../../mocks/database.mock.mjs";
import { adapterKnex } from "../adapter-knex.mjs";
import { ormTableDataSource } from "./index.mjs";

describe("read", () => {
  const tracker = getTracker();
  const db = adapterKnex(knexMockMsql);
  const tb = ormTableDataSource(db, usuarioSchema);
  db.startLog();

  beforeEach(() => {
    tracker.reset();
    db.startLog();
  });

  it("read", async () => {
    tracker.on.select("usuario").response({ id: "1" });
    const rsp = await tb.rpc.read({
      where: [["id", 10]],
      select: ["id", "email"],
    });
    expect(rsp).toEqual({ id: "1" });
    expect(db.log()).toEqual([
      "select top (1) [id], [email] from [usuario] where [id] = 10",
    ]);
  });
});
