import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { knexMockHistory } from "../../../utils/data/knex-mock-history";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { nfSaidaModel } from "./nf-saida.model";

describe("nfSaidaModel", () => {
  const knexDb = Knex({ client: MockClient });
  const nfSaida = nfSaidaModel({
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

  it("transferenciaDiario", async () => {
    const rsp = await nfSaida.transferenciaDiario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([{ dia: "2020-01-01", categoria: 10 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["2020-01-01", "2020-01-31"],
          sql: `select CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where [MestreNota].[DtEmissao] between ? and ? and MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N' group by [MestreNota].[DtEmissao], CategPro.NmCategoria order by [MestreNota].[DtEmissao] desc`,
        },
      ],
    });
  });

  it("transferenciaMensal", async () => {
    const rsp = await nfSaida.transferenciaMensal({
      mes: "2020-01",
    });
    expect(rsp).toEqual([{ mes: "2020-01", categoria: 10 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["2020-01"],
          sql: `select CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where CONVERT(CHAR(7),[MestreNota].[DtEmissao],120)>=? and MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N' group by CONVERT(CHAR(7),[MestreNota].[DtEmissao],120), CategPro.NmCategoria order by CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) desc`,
        },
      ],
    });
  });

  it("transferenciaModelo", async () => {
    const rsp = await nfSaida.transferenciaModelo({
      data: "2020-01-01",
    });
    expect(rsp).toEqual([{ modelo: "modelo", quantidade: 10 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["2020-01-01"],
          sql: `select CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where MestreNota.DtEmissao = ? and MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N' group by CadPro.Descricao order by CadPro.Descricao asc`,
        },
      ],
    });
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
      cliente: 123,
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
