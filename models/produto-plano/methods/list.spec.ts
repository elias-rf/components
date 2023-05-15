import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { listFactory } from "./list";

describe("list", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const list = listFactory({ connections: connectionsMock });

  beforeEach(() => {
    tracker.reset();
  });

  it("list", async () => {
    tracker.on.select("CadPro").response([{ CdProduto: "1" }]);
    const rsp = await list({
      filters: [{ id: "produto_plano_id", value: "1" }],
      sorts: [{ id: "produto_plano_id", desc: false }],
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual([{ produto_plano_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "1"],
          sql: "select top (@p0) [CdProduto] from [CadPro] where ([CdProduto] = @p1) order by [CdProduto] asc",
        },
      ],
    });
  });
});
