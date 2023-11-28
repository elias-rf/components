import { dbFullvision } from '@/controllers/db/db-fullvision.db.js'
import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { knexMockHistory } from '@/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { nfSaidaFvController } from './nf-saida-fv_controller.js'

describe('nfSaidaFvController', () => {
  const tracker = getTracker()
  dbPlano.setDriver(knexMockMsql)
  dbOftalmo.setDriver(knexMockMsql)
  dbFullvision.setDriver(knexMockMsql)

  beforeEach(() => {
    dbOftalmo.startLog()
    dbPlano.startLog()
    dbFullvision.startLog()
    tracker.reset()
  })

  it('vendaDiario', async () => {
    tracker.on.select('MestreNota').response([
      {
        categoria: 'categoria',
        DtEmissao: '2020-01-01',
      },
    ])
    const rsp = await nfSaidaFvController.vendaDiario({
      inicio: '2020-01-01',
      fim: '2020-01-31',
      uf: ['MG'],
    })
    expect(rsp).toEqual([{ categoria: 'categoria', DtEmissao: '2020-01-01' }])
    expect(dbFullvision.log()).toEqual([
      `select [NmCategoria], [MestreNota].[DtEmissao], sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor, sum([ItemNota].[Quantidade]) as [quantidade] from MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF where [MestreNota].[FgEstatistica] = 'S' and [MestreNota].[CdFilial] = 1 and [CadPro].[FgEstatistica] = 'S' and [CadVen].[FgControle] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] > 0 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [cidadeserf].[uf] in ('MG') and ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE group by [NmCategoria], [MestreNota].[DtEmissao] order by [NmCategoria] asc, [MestreNota].[DtEmissao] desc`,
    ])
  })

  it('vendaMensalCliente', async () => {
    tracker.on.select('MestreNota').response([
      {
        categoria: 'categoria',
        DtEmissao: '2020-01-01',
      },
    ])
    const rsp = await nfSaidaFvController.vendaMensalCliente({
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

    expect(dbFullvision.log()).toEqual([
      "select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = 'S' and [MestreNota].[CdFilial] = 1 and [CadPro].[FgEstatistica] = 'S' and [CadVen].[FgControle] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] > 0 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [MestreNota].[CdCliente] = 123 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)",
    ])
  })

  it('vendaAnalitico', async () => {
    tracker.on.select('MestreNota').response([
      {
        categoria: 'categoria',
        DtEmissao: '2020-01-01',
      },
    ])
    const rsp = await nfSaidaFvController.vendaAnalitico({
      inicio: '2020-01-01',
      fim: '2020-01-31',
    })
    expect(rsp).toEqual([
      {
        DtEmissao: '2020-01-01',
        categoria: 'categoria',
      },
    ])
    expect(dbFullvision.log()).toEqual([
      "select 'FV' as origem, [CategPro].[NmCategoria], [MestreNota].[DtEmissao], [MestreNota].[NumNota], [MestreNota].[Serie], [MestreNota].[Tipo], [ItemNota].[CdProduto], [ItemNota].[Quantidade], [ItemNota].[VlTotal], [CadPro].[Descricao], [MestreNota].[CdVendedor], [CadVen].[NmVendedor], [CidadesERF].[uf] from [MestreNota] inner join [ItemNota] on [ItemNota].[CdFilial] = [MestreNota].[CdFilial] and [ItemNota].[NumNota] = [MestreNota].[NumNota] and [ItemNota].[Serie] = [MestreNota].[Serie] and [ItemNota].[Modelo] = [MestreNota].[Modelo] inner join [CadVen] on [MestreNota].[CdVendedor] = [CadVen].[CdVendedor] inner join [CadCli] on [MestreNota].[CdCliente] = [CadCli].[CdCliente] inner join [cidadesErf] on [CadCli].[Cidade] = [cidadesErf].[NmCidadeIBGE] inner join [CadPro] on [ItemNota].[CdProduto] = [CadPro].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[CdFilial] = 1 and [CadVen].[FgControle] = 'S' and [MestreNota].[FgEstatistica] = 'S' and [CadPro].[FgEstatistica] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] <> 0 and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [MestreNota].[Tipo] in ('E', 'S')",
    ])
  })
})
