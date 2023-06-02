import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";

describe("canFactory", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  it("deve validar", async () => {
    tracker.reset();
    tracker.on.select("groupSubject").response([{ idSubject: "/" }]);

    const rsp = await modelsMock.groupSubject.can({
      id: { group_id: "dev", subject_id: "/" },
    });

    expect(rsp).toEqual(true);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10000, "dev"],
        sql: "select top (@p0) [idGroup], [idSubject] from [groupSubject] where ([idGroup] = @p1)",
      },
    ]);
  });
});
