import { connectionsMock } from "@mono/mocks/connections.mock";
import { knexMockHistory } from "@mono/utils/data/knex-mock-history";
import { createTracker, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { setTracker } from "../../server/lib/set_tracker";
import { nfSaidaFvModelFactory } from "./nf-saida-fv.model";

describe("nfSaidaFvModel", () => {
  const nfSaida = nfSaidaFvModelFactory({
    connections: connectionsMock,
  });
  let tracker: Tracker;

  beforeAll(() => {
    tracker = createTracker(connectionsMock.plano);
    setTracker(tracker);
  });

  afterEach(() => {
    tracker.resetHistory();
  });

  afterAll(() => {
    tracker.reset();
  });

  it("vendaDiario", async () => {
    tracker.on
      .any("MestreNota")
      .response([{ categoria: "categoria", DtEmissao: "2020-01-01" }]);
    const rsp = await nfSaida.query.vendaDiario({
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
          sql: `select [NmCategoria], [MestreNota].[DtEmissao], sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor, sum([ItemNota].[Quantidade]) as [quantidade] from MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [mestrenota].[cdcliente] <> @p7 and [MestreNota].[DtEmissao] between @p8 and @p9 and ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE and [cidadeserf].[uf] in (@p10) group by [NmCategoria], [MestreNota].[DtEmissao] order by [NmCategoria] asc, [MestreNota].[DtEmissao] desc`,
        },
      ],
    });
  });

  it("vendaMensal", async () => {
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
          sql: `select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from MestreNota, ItemNota, CadVen, NatOpe, CadPro, CategPro where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[CdCliente] = @p9 and ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadPro.CdProduto = ItemNota.CdProduto group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126) order by CONVERT(CHAR(7),[mestrenota].[DtEmissao],126) DESC`,
        },
      ],
    });
  });

  it("vendaAnalitico", async () => {
    const rsp = await nfSaida.query.vendaAnalitico({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([
      {
        DtEmissao: "2020-01-01",
        categoria: "categoria",
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
          sql: `select 'FV' as origem, [CategPro].[NmCategoria], [MestreNota].[DtEmissao], [MestreNota].[NumNota], [MestreNota].[Serie], [MestreNota].[Tipo], [ItemNota].[CdProduto], [ItemNota].[Quantidade], [ItemNota].[VlTotal], [CadPro].[Descricao], [MestreNota].[CdVendedor], [CadVen].[NmVendedor], [CidadesERF].[uf] from [MestreNota] inner join [ItemNota] on [ItemNota].[CdFilial] = [MestreNota].[CdFilial] and [ItemNota].[NumNota] = [MestreNota].[NumNota] and [ItemNota].[Serie] = [MestreNota].[Serie] and [ItemNota].[Modelo] = [MestreNota].[Modelo] inner join [CadVen] on [MestreNota].[CdVendedor] = [CadVen].[CdVendedor] inner join [CadCli] on [MestreNota].[CdCliente] = [CadCli].[CdCliente] inner join [cidadesErf] on [CadCli].[Cidade] = [cidadesErf].[NmCidadeIBGE] inner join [CadPro] on [ItemNota].[CdProduto] = [CadPro].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[CdFilial] = @p0 and [CadVen].[FgControle] = @p1 and [MestreNota].[FgEstatistica] = @p2 and [CadPro].[FgEstatistica] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] <> @p5 and [mestrenota].[cdcliente] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[Tipo] in (@p9, @p10)`,
        },
      ],
    });
  });
});
