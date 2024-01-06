import { dbFullvision } from '@/core/db/db-fullvision.db.js'
import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import { dbPlano } from '@/core/db/db-plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { nfSaidaController } from './nf-saida_controller.js'

describe('nfSaidaModel', () => {
  const tracker = getTracker()
  dbOftalmo.setDriver(knexMockMsql)
  dbPlano.setDriver(knexMockMsql)
  dbFullvision.setDriver(knexMockMsql)

  beforeEach(() => {
    dbOftalmo.startLog()
    dbPlano.startLog()
    tracker.reset()
  })

  it('transferenciaDiario', async () => {
    tracker.on
      .select('MestreNota')
      .response([
        { dia: '2020-01-01', NmCategoria: 'categoria', quantidade: 10 },
      ])
    const rsp = await nfSaidaController.nfSaida_transferenciaDiario({
      inicio: '2020-01-01',
      fim: '2020-01-31',
    })
    expect(rsp).toEqual([{ dia: '2020-01-01', categoria: 10 }])
    expect(dbPlano.log()).toEqual([
      "select CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [MestreNota].[CdFilial] = 1 and [NatOpe].[Nop] = 5151 and [MestreNota].[NotadeComplemento] = 'N' and [MestreNota].[Tipo] <> 'C' group by [MestreNota].[DtEmissao], [CategPro].[NmCategoria] order by [MestreNota].[DtEmissao] desc",
    ])
  })

  it('transferenciaMensal', async () => {
    tracker.on
      .select('MestreNota')
      .response([{ mes: '2020-01', NmCategoria: 'categoria', quantidade: 10 }])
    const rsp = await nfSaidaController.nfSaida_transferenciaMensal({
      mes: '2020-01',
    })
    expect(rsp).toEqual([{ mes: '2020-01', categoria: 10 }])
    expect(dbPlano.log()).toEqual([
      "select CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where CONVERT(CHAR(7),[MestreNota].[DtEmissao],120)>='2020-01' and [MestreNota].[CdFilial] = 1 and [NatOpe].[Nop] = 5151 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[NotadeComplemento] = 'N' group by CONVERT(CHAR(7),[MestreNota].[DtEmissao],120), CategPro.NmCategoria order by CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) desc",
    ])
  })

  it('transferenciaModelo', async () => {
    tracker.on
      .select('MestreNota')
      .response([{ modelo: 'modelo', quantidade: 10 }])
    const rsp = await nfSaidaController.nfSaida_transferenciaModelo({
      data: '2020-01-01',
    })
    expect(rsp).toEqual([{ modelo: 'modelo', quantidade: 10 }])
    expect(dbPlano.log()).toEqual([
      `select CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where [MestreNota].[DtEmissao] = '2020-01-01' and [MestreNota].[CdFilial] = 1 and [NatOpe].[Nop] = 5151 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[NotadeComplemento] = 'N' group by [CadPro].[Descricao] order by [CadPro].[Descricao] asc`,
    ])
  })

  it('vendaDiario', async () => {
    tracker.on.select('MestreNota').response([
      {
        categoria: 'categoria',
        DtEmissao: '2020-01-01',
      },
    ])
    const rsp = await nfSaidaController.nfSaida_vendaDiario({
      inicio: '2020-01-01',
      fim: '2020-01-31',
      uf: ['MG'],
    })
    expect(rsp).toEqual([{ categoria: 'categoria', DtEmissao: '2020-01-01' }])
    expect(dbPlano.log()).toEqual([
      `select [NmCategoria], [MestreNota].[DtEmissao], sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor, sum([ItemNota].[Quantidade]) as [quantidade] from MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF where [MestreNota].[FgEstatistica] = 'S' and [MestreNota].[CdFilial] = 2 and [CadPro].[FgEstatistica] = 'S' and [CadVen].[FgControle] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] > 0 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[cdcliente] <> 3158 and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [cidadeserf].[uf] in ('MG') and ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE group by [NmCategoria], [MestreNota].[DtEmissao] order by [NmCategoria] asc, [MestreNota].[DtEmissao] desc`,
    ])
  })

  it('vendaMensalCliente', async () => {
    tracker.on.select('MestreNota').response([
      {
        categoria: 'categoria',
        DtEmissao: '2020-01-01',
      },
    ])
    const rsp = await nfSaidaController.nfSaida_vendaMensalCliente({
      inicio: '2020-01-01',
      fim: '2020-01-31',
      cliente: 123,
    })
    expect(rsp).toEqual([
      {
        DtEmissao: '2020-01-01',
        categoria: 'categoria',
      },
    ])

    expect(dbPlano.log()).toEqual([
      `select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = 'S' and [MestreNota].[CdFilial] = 2 and [CadPro].[FgEstatistica] = 'S' and [CadVen].[FgControle] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] > 0 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [MestreNota].[CdCliente] = 123 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)`,
    ])

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [
          'S',
          2,
          'S',
          'S',
          'N',
          0,
          'C',
          '2020-01-01',
          '2020-01-31',
          123,
        ],
        sql: `select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[CdCliente] = @p9 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)`,
      },
    ])
  })

  it('vendaAnalitico', async () => {
    tracker.on.select('MestreNota').response([
      {
        categoria: 'categoria',
        DtEmissao: '2020-01-01',
      },
    ])
    const rsp = await nfSaidaController.nfSaida_vendaAnalitico({
      inicio: '2020-01-01',
      fim: '2020-01-31',
    })
    expect(rsp).toEqual([
      { DtEmissao: '2020-01-01', categoria: 'categoria' },
      {
        DtEmissao: '2020-01-01',
        categoria: 'categoria',
      },
    ])

    expect(dbPlano.log()).toEqual([
      "select 'VT' as origem, [CategPro].[NmCategoria], [MestreNota].[DtEmissao], [MestreNota].[NumNota], [MestreNota].[Serie], [MestreNota].[Tipo], [ItemNota].[CdProduto], [ItemNota].[Quantidade], [ItemNota].[VlTotal], [CadPro].[Descricao], [MestreNota].[CdVendedor], [CadVen].[NmVendedor], [CidadesERF].[uf] from [MestreNota] inner join [ItemNota] on [ItemNota].[CdFilial] = [MestreNota].[CdFilial] and [ItemNota].[NumNota] = [MestreNota].[NumNota] and [ItemNota].[Serie] = [MestreNota].[Serie] and [ItemNota].[Modelo] = [MestreNota].[Modelo] inner join [CadVen] on [MestreNota].[CdVendedor] = [CadVen].[CdVendedor] inner join [CadCli] on [MestreNota].[CdCliente] = [CadCli].[CdCliente] inner join [cidadesErf] on [CadCli].[Cidade] = [cidadesErf].[NmCidadeIBGE] inner join [CadPro] on [ItemNota].[CdProduto] = [CadPro].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[CdFilial] = 2 and [CadVen].[FgControle] = 'S' and [MestreNota].[FgEstatistica] = 'S' and [CadPro].[FgEstatistica] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] <> 0 and [MestreNota].[cdcliente] <> 3158 and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [MestreNota].[Tipo] in ('E', 'S')",
    ])
  })
})
