import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";

describe("group-subject-model", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  it("deve validar permissao", async () => {
    tracker.reset();
    tracker.on.select("tbl_Seguranca_Usuario").response([{ idGroup: "0" }]);
    tracker.on.select("groupSubject").response([{ idSubject: "prm1" }]);

    const rsp = await modelsMock.groupSubject.can({
      user_id: 1,
      subject_id: "prm1",
    });

    expect(rsp).toEqual(true);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [idGroup] from [tbl_Seguranca_Usuario] where ([kUsuario] = @p0)",
      },
    ]);
  });

  it("deve listar permissoes", async () => {
    tracker.reset();
    tracker.on.select("groupSubject").response([{ idSubject: "prm1" }]);

    const rsp = await modelsMock.groupSubject.listPermissions({
      group_id: "28",
      subject_ids: ["prm1", "prm2"],
    });

    expect(rsp).toEqual([{ subject_id: "prm1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["28", "prm1", "prm2"],
        sql: "select [idSubject] from [groupSubject] where [idGroup] = @p0 and [idSubject] in (@p1, @p2)",
      },
    ]);
  });
});
