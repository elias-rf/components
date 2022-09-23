import { knexMockHistory } from "@er/utils/src/knex-mock-history";
import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { OrdemProducaoOperacaoModel } from "./ordem-producao-operacao.model";

describe("ordemProducaoModel", () => {
  const knexDb = Knex({ client: MockClient });
  const ordemProducaoOperacao = new OrdemProducaoOperacaoModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: ReturnType<typeof getTracker>;

  beforeAll(() => {
    tracker = getTracker();
    setTracker(tracker);
  });

  afterEach(() => {
    tracker.resetHistory();
  });

  afterAll(() => {
    tracker.reset();
  });

  it("lista com argumentos", async () => {
    const rsp = await ordemProducaoOperacao.list({
      where: [["ordem_producao_operacao_id", "=", "10"]],
      select: ["ordem_producao_operacao_id"],
    });
    expect(rsp).toEqual([
      {
        ordem_producao_operacao_id: 1,
        operacao_id: "3060",
        ordem_producao_id: 1,
        data_hora_inicio: "2020-02-01",
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10", 50],
          sql: `select "kOperacaoOP" from "tOperacaoOrdemProducao" where ("kOperacaoOP" = ?) limit ?`,
        },
      ],
    });
  });

  it("read", async () => {
    const rsp = await ordemProducaoOperacao.read({
      id: { ordem_producao_operacao_id: "10" },
      select: ["ordem_producao_operacao_id"],
    });
    expect(rsp).toEqual({
      ordem_producao_id: 1,
      operacao_id: "3060",
      ordem_producao_operacao_id: 1,
      data_hora_inicio: "2020-02-01",
    });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10"],
          sql: 'select "kOperacaoOP" from "tOperacaoOrdemProducao" where "kOperacaoOP" = ?',
        },
      ],
    });
  });

  it("del", async () => {
    const rsp = await ordemProducaoOperacao.del({
      id: { ordem_producao_operacao_id: 10 },
    });
    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [10],
          sql: 'delete from "tOperacaoOrdemProducao" where "kOperacaoOP" = ?',
        },
      ],
    });
  });

  it("create", async () => {
    const rsp = await ordemProducaoOperacao.create({
      data: { ordem_producao_operacao_id: 10 },
    });
    expect(rsp).toEqual({ ordem_producao_operacao_id: 1 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [10],
          sql: 'insert into "tOperacaoOrdemProducao" ("kOperacaoOP") values (?)',
        },
      ],
    });
  });

  it("update", async () => {
    const rsp = await ordemProducaoOperacao.update({
      id: { ordem_producao_operacao_id: 10 },
      data: { ordem_producao_operacao_id: 11 },
    });
    expect(rsp).toEqual({ ordem_producao_operacao_id: 2 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [11, 10],
          sql: 'update "tOperacaoOrdemProducao" set "kOperacaoOP" = ? where "kOperacaoOP" = ?',
        },
      ],
    });
  });
});
