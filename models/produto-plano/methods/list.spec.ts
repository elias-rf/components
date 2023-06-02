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
      filter: { produto_plano_id: "1" },
      sort: { produto_plano_id: "asc" },
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual([{ produto_plano_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [CdProduto] from [CadPro] where ([CdProduto] = @p1) order by [CdProduto] asc",
      },
    ]);
  });
});
