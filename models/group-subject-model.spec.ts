import { getTracker } from "@/mocks/database.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { groupSubjectModel } from "./group-subject-model";
import { expect, it, describe } from "vitest";

describe("group-subject-model", () => {
  const tracker = getTracker();

  it("deve validar permissao", async () => {
    tracker.reset();
    tracker.on.select("tbl_Seguranca_Usuario").response([{ idGroup: "1" }]);
    tracker.on.select("groupSubject").response([{ idSubject: "prm1" }]);

    const rsp = await groupSubjectModel.can({
      kUsuario: 1,
      idSubject: "prm1",
    });

    expect(rsp).toEqual(true);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [idGroup] from [tbl_Seguranca_Usuario] where [tbl_Seguranca_Usuario].[kUsuario] = @p0",
      },
      {
        bindings: ["1", "prm1"],
        sql: "select [idSubject] from [groupSubject] where [idGroup] in (@p0) and [idSubject] = @p1",
      },
    ]);
  });

  it("deve listar permissoes", async () => {
    tracker.reset();
    tracker.on.select("groupSubject").response([{ idSubject: "prm1" }]);

    const rsp = await groupSubjectModel.listPermissions({
      idGroup: "28",
      idSubjectList: ["prm1", "prm2"],
    });

    expect(rsp).toEqual([{ idSubject: "prm1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["28", "prm1", "prm2"],
        sql: "select [idSubject] from [groupSubject] where [idGroup] = @p0 and [idSubject] in (@p1, @p2)",
      },
    ]);
  });
});
