import { knexMockHistory } from "@er/utils/src/knex-mock-history";
import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { NfSaidaFvModel } from "./nf-saida-fv.model";

describe("nfSaidaFvModel", () => {
  const knexDb = Knex({ client: MockClient });
  const nfSaida = new NfSaidaFvModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: Tracker;

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

  it("vendaDiario", async () => {
    const rsp = await nfSaida.vendaDiario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      uf: ["MG"],
    });
    expect(rsp).toEqual([{ categoria: "categoria", DtEmissao: "2020-01-01" }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [
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
          ],
          sql: `select "NmCategoria", "MestreNota"."DtEmissao", sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor, sum("ItemNota"."Quantidade") as "quantidade" from MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF where "MestreNota"."FgEstatistica" = ? and "MestreNota"."CdFilial" = ? and "CadPro"."FgEstatistica" = ? and "CadVen"."FgControle" = ? and "ItemNota"."ImprimeComponentes" = ? and "ItemNota"."Sequencia" > ? and "MestreNota"."Tipo" <> ? and "MestreNota"."cdcliente" <> ? and "MestreNota"."DtEmissao" between ? and ? and ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE and "cidadeserf"."uf" in (?) group by "NmCategoria", "MestreNota"."DtEmissao" order by "NmCategoria" asc, "MestreNota"."DtEmissao" desc`,
        },
      ],
    });
  });

  it("vendaMensal", async () => {
    const rsp = await nfSaida.vendaMensal({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      cliente_id: 123,
    });
    expect(rsp).toEqual([
      {
        NmCategoria: "categoria",
        CdCliente: 123,
        anoMes: "2020-01",
        quantidade: 10,
        valor: 100,
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [
            "S",
            2,
            "S",
            "S",
            "N",
            0,
            "C",
            "2020-01-01",
            "2020-01-31",
            123,
          ],
          sql: `select "CategPro"."NmCategoria", "MestreNota"."CdCliente", CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from MestreNota, ItemNota, CadVen, NatOpe, CadPro, CategPro where "MestreNota"."FgEstatistica" = ? and "MestreNota"."CdFilial" = ? and "CadPro"."FgEstatistica" = ? and "CadVen"."FgControle" = ? and "ItemNota"."ImprimeComponentes" = ? and "ItemNota"."Sequencia" > ? and "MestreNota"."Tipo" <> ? and "MestreNota"."DtEmissao" between ? and ? and "MestreNota"."CdCliente" = ? and ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadPro.CdProduto = ItemNota.CdProduto group by "CdCliente", "NmCategoria", CONVERT(char(7), dbo.MestreNota.DtEmissao, 126) order by CONVERT(CHAR(7),[MestreNota].[DtEmissao],126) DESC`,
        },
      ],
    });
  });

  it("vendaAnalitico", async () => {
    const rsp = await nfSaida.vendaAnalitico({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([
      {
        DtEmissao: "2020-01-01",
        NmCategoria: "categoria",
        origem: "VT",
      },
      {
        DtEmissao: "2020-01-01",
        NmCategoria: "categoria",
        origem: "FV",
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [
            1,
            "S",
            "S",
            "S",
            "N",
            0,
            3158,
            "2020-01-01",
            "2020-01-31",
            "E",
            "S",
          ],
          sql: `select 'FV' as origem, "CategPro"."NmCategoria", "MestreNota"."DtEmissao", "MestreNota"."NumNota", "MestreNota"."Serie", "MestreNota"."Tipo", "ItemNota"."CdProduto", "ItemNota"."Quantidade", "ItemNota"."VlTotal", "CadPro"."Descricao", "MestreNota"."CdVendedor", "CadVen"."NmVendedor", "CidadesERF"."uf" from "MestreNota" inner join "ItemNota" on "ItemNota"."CdFilial" = "MestreNota"."CdFilial" and "ItemNota"."NumNota" = "MestreNota"."NumNota" and "ItemNota"."Serie" = "MestreNota"."Serie" and "ItemNota"."Modelo" = "MestreNota"."Modelo" inner join "CadVen" on "MestreNota"."CdVendedor" = "CadVen"."CdVendedor" inner join "CadCli" on "MestreNota"."CdCliente" = "CadCli"."CdCliente" inner join "cidadesErf" on "CadCli"."Cidade" = "cidadesErf"."NmCidadeIBGE" inner join "CadPro" on "ItemNota"."CdProduto" = "CadPro"."CdProduto" inner join "CategPro" on "CadPro"."CdCategoria" = "CategPro"."CdCategoria" where "MestreNota"."CdFilial" = ? and "CadVen"."FgControle" = ? and "MestreNota"."FgEstatistica" = ? and "CadPro"."FgEstatistica" = ? and "ItemNota"."ImprimeComponentes" = ? and "ItemNota"."Sequencia" <> ? and "mestrenota"."cdcliente" <> ? and "MestreNota"."DtEmissao" between ? and ? and "MestreNota"."Tipo" in (?, ?)`,
        },
        {
          bindings: [
            2,
            "S",
            "S",
            "S",
            "N",
            0,
            3158,
            "2020-01-01",
            "2020-01-31",
            "E",
            "S",
          ],
          sql: `select 'VT' as origem, "CategPro"."NmCategoria", "MestreNota"."DtEmissao", "MestreNota"."NumNota", "MestreNota"."Serie", "MestreNota"."Tipo", "ItemNota"."CdProduto", "ItemNota"."Quantidade", "ItemNota"."VlTotal", "CadPro"."Descricao", "MestreNota"."CdVendedor", "CadVen"."NmVendedor", "CidadesERF"."uf" from "MestreNota" inner join "ItemNota" on "ItemNota"."CdFilial" = "MestreNota"."CdFilial" and "ItemNota"."NumNota" = "MestreNota"."NumNota" and "ItemNota"."Serie" = "MestreNota"."Serie" and "ItemNota"."Modelo" = "MestreNota"."Modelo" inner join "CadVen" on "MestreNota"."CdVendedor" = "CadVen"."CdVendedor" inner join "CadCli" on "MestreNota"."CdCliente" = "CadCli"."CdCliente" inner join "cidadesErf" on "CadCli"."Cidade" = "cidadesErf"."NmCidadeIBGE" inner join "CadPro" on "ItemNota"."CdProduto" = "CadPro"."CdProduto" inner join "CategPro" on "CadPro"."CdCategoria" = "CategPro"."CdCategoria" where "MestreNota"."CdFilial" = ? and "CadVen"."FgControle" = ? and "MestreNota"."FgEstatistica" = ? and "CadPro"."FgEstatistica" = ? and "ItemNota"."ImprimeComponentes" = ? and "ItemNota"."Sequencia" <> ? and "MestreNota"."cdcliente" <> ? and "MestreNota"."DtEmissao" between ? and ? and "MestreNota"."Tipo" in (?, ?)`,
        },
      ],
    });
  });
});