import { beforeEach, describe, expect, it, test } from "vitest";
import { sysDb } from "../../data/sys/sys.db.mjs";
import { knexMockMsql } from "../../../utils/mocks/connections.mock.mjs";
import { getTracker } from "../../../utils/mocks/database.mock.mjs";
import { knexMockHistory } from "../../../utils/mocks/knex-mock-history.mjs";
import { usuarioController } from "./usuario_controller.mjs";

describe("usuarioController", () => {
  const tracker = getTracker();
  sysDb.setDriver(knexMockMsql);

  beforeEach(() => {
    tracker.reset();
  });

  it("me", async () => {
    const rsp = await usuarioController.usuario_me(undefined, {
      user: { id: 1 },
      req: {},
      res: {},
    });
    expect(rsp).toEqual({
      id: 1,
    });
  });

  test("login", async () => {
    tracker.on.select("usuario").response([
      {
        id: 1,
        email: "nome@mail.com",
        password:
          "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
      },
    ]);

    const rsp = await usuarioController.usuario_login({
      email: "user1@mail.com",
      password: "123",
    });

    expect(rsp).toEqual({
      email: "nome@mail.com",
      token: expect.anything(),
      id: 1,
    });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [500, "user1@mail.com"],
        sql: "select top (@p0) * from [usuario] where [email] = @p1",
      },
    ]);
  });
});
