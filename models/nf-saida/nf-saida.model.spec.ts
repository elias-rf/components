import { connectionsMock } from "@mono/mocks/connections.mock";
import { knexMockHistory } from "@mono/utils/data/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { describe, expect, it } from "vitest";
import { nfSaidaFvModelFactory } from "../nf-saida-fv/nf-saida-fv.model";
import { nfSaidaModelFactory } from "./nf-saida.model";

describe("nfSaidaModel", () => {
  const tracker = createTracker(connectionsMock.plano);

  const nfSaida = nfSaidaModelFactory({
    connections: connectionsMock,
    nfSaidaFvModel: nfSaidaFvModelFactory({ connections: connectionsMock }),
  });

  beforeEach(() => {
    tracker.reset();
  });

  it("transferenciaDiario", async () => {
    tracker.on
      .select("MestreNota")
      .response([
        { dia: "2020-01-01", NmCategoria: "categoria", quantidade: 10 },
      ]);
    const rsp = await nfSaida.query.transferenciaDiario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([{ dia: "2020-01-01", categoria: 10 }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01-01", "2020-01-31"],
          sql: `select CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where [MestreNota].[DtEmissao] between @p0 and @p1 and MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N' group by [MestreNota].[DtEmissao], CategPro.NmCategoria order by [MestreNota].[DtEmissao] desc`,
        },
      ],
    });
  });

  it("transferenciaMensal", async () => {
    tracker.on
      .select("MestreNota")
      .response([{ mes: "2020-01", NmCategoria: "categoria", quantidade: 10 }]);
    const rsp = await nfSaida.query.transferenciaMensal({
      mes: "2020-01",
    });
    expect(rsp).toEqual([{ mes: "2020-01", categoria: 10 }]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01"],
          sql: `select CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where CONVERT(CHAR(7),[MestreNota].[DtEmissao],120)>=@p0 and MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N' group by CONVERT(CHAR(7),[MestreNota].[DtEmissao],120), CategPro.NmCategoria order by CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) desc`,
        },
      ],
    });
  });

  it("transferenciaModelo", async () => {
    tracker.on
      .select("MestreNota")
      .response([{ modelo: "modelo", quantidade: 10 }]);
    const rsp = await nfSaida.query.transferenciaModelo({
      data: "2020-01-01",
    });
    expect(rsp).toEqual([{ modelo: "modelo", quantidade: 10 }]);

    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["2020-01-01"],
          sql: `select CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where MestreNota.DtEmissao = @p0 and MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N' group by CadPro.Descricao order by CadPro.Descricao asc`,
        },
      ],
    });
  });

  it("vendaDiario", async () => {
    tracker.on.select("MestreNota").response([
      {
        categoria: "categoria",
        DtEmissao: "2020-01-01",
      },
    ]);
    const rsp = await nfSaida.query.vendaDiario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      uf: ["MG"],
    });
    expect(rsp).toEqual([{ categoria: "categoria", DtEmissao: "2020-01-01" }]);

    expect(knexMockHistory(tracker)).toEqual({
      select: [
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
          sql: `select [NmCategoria], [MestreNota].[DtEmissao], sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor, sum([ItemNota].[Quantidade]) as [quantidade] from MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [MestreNota].[cdcliente] <> @p7 and [MestreNota].[DtEmissao] between @p8 and @p9 and ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE and [cidadeserf].[uf] in (@p10) group by [NmCategoria], [MestreNota].[DtEmissao] order by [NmCategoria] asc, [MestreNota].[DtEmissao] desc`,
        },
      ],
    });
  });

  it("vendaMensalCliente", async () => {
    tracker.on.select("MestreNota").response([
      {
        categoria: "categoria",
        DtEmissao: "2020-01-01",
      },
    ]);
    const rsp = await nfSaida.query.vendaMensalCliente({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      cliente: 123,
    });
    expect(rsp).toEqual([
      {
        DtEmissao: "2020-01-01",
        categoria: "categoria",
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
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
          sql: `select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[CdCliente] = @p9 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)`,
        },
      ],
    });
  });

  it("vendaAnalitico", async () => {
    tracker.on.select("MestreNota").response([
      {
        categoria: "categoria",
        DtEmissao: "2020-01-01",
      },
    ]);
    const rsp = await nfSaida.query.vendaAnalitico({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([
      { DtEmissao: "2020-01-01", categoria: "categoria" },
      {
        DtEmissao: "2020-01-01",
        categoria: "categoria",
      },
    ]);

    expect(knexMockHistory(tracker)).toEqual({
      select: [
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
          sql: `select 'FV' as origem, [CategPro].[NmCategoria], [MestreNota].[DtEmissao], [MestreNota].[NumNota], [MestreNota].[Serie], [MestreNota].[Tipo], [ItemNota].[CdProduto], [ItemNota].[Quantidade], [ItemNota].[VlTotal], [CadPro].[Descricao], [MestreNota].[CdVendedor], [CadVen].[NmVendedor], [CidadesERF].[uf] from [MestreNota] inner join [ItemNota] on [ItemNota].[CdFilial] = [MestreNota].[CdFilial] and [ItemNota].[NumNota] = [MestreNota].[NumNota] and [ItemNota].[Serie] = [MestreNota].[Serie] and [ItemNota].[Modelo] = [MestreNota].[Modelo] inner join [CadVen] on [MestreNota].[CdVendedor] = [CadVen].[CdVendedor] inner join [CadCli] on [MestreNota].[CdCliente] = [CadCli].[CdCliente] inner join [cidadesErf] on [CadCli].[Cidade] = [cidadesErf].[NmCidadeIBGE] inner join [CadPro] on [ItemNota].[CdProduto] = [CadPro].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[CdFilial] = @p0 and [CadVen].[FgControle] = @p1 and [MestreNota].[FgEstatistica] = @p2 and [CadPro].[FgEstatistica] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] <> @p5 and [mestrenota].[cdcliente] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[Tipo] in (@p9, @p10)`,
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
          sql: `select 'VT' as origem, [CategPro].[NmCategoria], [MestreNota].[DtEmissao], [MestreNota].[NumNota], [MestreNota].[Serie], [MestreNota].[Tipo], [ItemNota].[CdProduto], [ItemNota].[Quantidade], [ItemNota].[VlTotal], [CadPro].[Descricao], [MestreNota].[CdVendedor], [CadVen].[NmVendedor], [CidadesERF].[uf] from [MestreNota] inner join [ItemNota] on [ItemNota].[CdFilial] = [MestreNota].[CdFilial] and [ItemNota].[NumNota] = [MestreNota].[NumNota] and [ItemNota].[Serie] = [MestreNota].[Serie] and [ItemNota].[Modelo] = [MestreNota].[Modelo] inner join [CadVen] on [MestreNota].[CdVendedor] = [CadVen].[CdVendedor] inner join [CadCli] on [MestreNota].[CdCliente] = [CadCli].[CdCliente] inner join [cidadesErf] on [CadCli].[Cidade] = [cidadesErf].[NmCidadeIBGE] inner join [CadPro] on [ItemNota].[CdProduto] = [CadPro].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[CdFilial] = @p0 and [CadVen].[FgControle] = @p1 and [MestreNota].[FgEstatistica] = @p2 and [CadPro].[FgEstatistica] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] <> @p5 and [MestreNota].[cdcliente] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[Tipo] in (@p9, @p10)`,
        },
      ],
    });
  });
});
