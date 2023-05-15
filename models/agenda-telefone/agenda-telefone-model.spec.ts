import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { AgendaTelefoneModel } from "./agenda-telefone-model";

describe("AgendaTelefoneModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);
  const models = modelsMock;
  const agendaTelefoneModel = new AgendaTelefoneModel({
    connections: connectionsMock,
    models,
  });

  beforeEach(() => {
    tracker.reset();
  });

  it("instanciar", () => {
    expect(agendaTelefoneModel).toBeInstanceOf(AgendaTelefoneModel);
  });

  it("list", async () => {
    tracker.on.select("phonebook").response([{ id: "1" }]);
    const rsp = await models.agendaTelefone.query.list({
      filters: [{ id: "agenda_telefone_id", value: "1" }],
      sorts: [{ id: "agenda_telefone_id", desc: false }],
    });

    expect(rsp).toEqual([{ agenda_telefone_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50, "1"],
          sql: "select top (@p0) [id], [name], [department], [email] from [phonebook] where ([id] = @p1) order by [id] asc",
        },
      ],
    });
  });

  it("read", async () => {
    tracker.on.select("phonebook").response([{ id: "1" }]);
    const rsp = await models.agendaTelefone.query.read({
      ids: [{ id: "agenda_telefone_id", value: 1 }],
    });

    expect(rsp).toEqual({ agenda_telefone_id: "1" });
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [1],
          sql: "select [id], [name], [department], [email] from [phonebook] where ([id] = @p0)",
        },
      ],
    });
  });

  it("update", async () => {
    tracker.on.update("phonebook").response([{ id: 10 }]);
    const rsp = await models.agendaTelefone.mutation.update({
      ids: [{ id: "agenda_telefone_id", value: "10" }],
      data: { agenda_telefone_id: 10 },
      select: ["agenda_telefone_id"],
    });
    expect(rsp).toEqual({ agenda_telefone_id: 10 });
    expect(knexMockHistory(tracker)).toEqual({
      update: [
        {
          bindings: [10, "10"],
          sql: "update [phonebook] set [id] = @p0 output inserted.[id] where ([id] = @p1)",
        },
      ],
    });
  });
});
