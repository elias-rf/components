import { connectionsMock, knexMock } from "@mono/mocks/connections.mock";
import { knexMockHistory } from "@mono/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { group_subject } from "../group-subject.table";
import { canFactory } from "./can";

describe("canFactory", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

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