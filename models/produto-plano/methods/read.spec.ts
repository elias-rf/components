import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { readFactory } from "./read";

describe("read", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const read = readFactory({ connections: connectionsMock });

  beforeEach(() => {
    tracker.reset();
  });

  it("read", async () => {
    tracker.on.select("CadPro").response([{ CdProduto: "1" }]);
    const rsp = await read({
      id: { produto_plano_id: 1 },
      select: ["produto_plano_id"],
    });

    expect(rsp).toEqual({ produto_plano_id: "1" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [CdProduto] from [CadPro] where ([CdProduto] = @p0)",
      },
    ]);
  });
});
