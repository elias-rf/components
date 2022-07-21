import { Connections } from "dal/connections";
import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { Venda } from "./venda";

describe("venda", () => {
  const knexDb = Knex({ client: MockClient });
  const rpc = Venda({
    plano: knexDb,
  } as Connections);
  let tracker: Tracker;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("analitico", async () => {
    tracker.on.select("MestreNota").response(["ok"]);

    const rsp = await rpc.vendaAnalitico({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });

    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual([
      2,
      "S",
      "S",
      "S",
      "N",
      0,
      3158,
      "E",
      "S",
      "2020-01-01",
      "2020-01-31",
    ]);
    console.log(
      `🚀 ~ file: venda.spec.ts ~ line 44 ~ test ~ tracker.history.select[0].sql`,
      tracker.history.select[0].sql
    );
    expect(tracker.history.select[0].sql).toMatchSnapshot();
  });

  test("diario", async () => {
    tracker.on.select("MestreNota").response(["ok"]);

    const rsp = await rpc.vendaDiario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      uf: ["MG"],
    });

    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual([
      "S",
      2,
      "S",
      "S",
      "N",
      0,
      "C",
      3158,
      "2020-01-01",
      "2020-01-31",
      "MG",
    ]);
    expect(tracker.history.select[0].sql).toMatchSnapshot();
  });

  test("mensal", async () => {
    tracker.on.select("MestreNota").response(["ok"]);

    const rsp = await rpc.vendaMensal({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      id: ["10"],
    });

    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual([
      "S",
      2,
      "S",
      "S",
      "N",
      0,
      "C",
      "2020-01-01",
      "2020-01-31",
      "10",
    ]);

    expect(tracker.history.select[0].sql).toEqual(
      `select "CategPro"."NmCategoria", "MestreNota"."CdCliente", CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from MestreNota, ItemNota, CadVen, NatOpe, CadPro, CategPro where "MestreNota"."FgEstatistica" = ? and "MestreNota"."CdFilial" = ? and "CadPro"."FgEstatistica" = ? and "CadVen"."FgControle" = ? and "ItemNota"."ImprimeComponentes" = ? and "ItemNota"."Sequencia" > ? and "MestreNota"."Tipo" <> ? and "MestreNota"."DtEmissao" between ? and ? and "MestreNota"."CdCliente" = ? and ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadPro.CdProduto = ItemNota.CdProduto group by "CdCliente", "NmCategoria", CONVERT(char(7), dbo.MestreNota.DtEmissao, 126) order by CONVERT(CHAR(7),[mestrenota].[DtEmissao],126) DESC`
    );
  });
});
