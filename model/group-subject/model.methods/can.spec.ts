import { getTracker } from "knex-mock-client";
import { knexMock } from "../../../mocks/connections.mock";
import { knexMockHistory } from "../../../mocks/knex-mock-history";
import { group_subject } from "../group-subject.table";
import { canFactory } from "./can";

describe("canFactory", () => {
  const tracker = getTracker();

  beforeEach(() => {
    tracker.reset();
  });

  it("deve validar", async () => {
    tracker.on.select("groupSubject").response([{ idSubject: "/" }]);
    const can = canFactory({ connection: knexMock, table: group_subject });
    const rsp = await can({
      id: { group_id: "dev", subject_id: "/" },
    });
    expect(rsp).toEqual(true);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["dev"],
          sql: "select * from [groupSubject] where [idGroup] = @p0",
        },
      ],
    });
  });
});
