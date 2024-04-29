import { beforeEach, describe, expect, test } from 'vitest'
import { vendaDiario } from '../../../core/nf-saida/use-cases/venda-diario.mjs'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = vendaDiario(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('vendaDiario', async () => {
    tracker.on.select('MestreNota').response([
      {
        categoria: 'categoria',
        DtEmissao: '2020-01-01',
      },
    ])
    const rsp = await useCase({
      inicio: '2020-01-01',
      fim: '2020-01-31',
      uf: ['MG'],
    })
    expect(rsp).toEqual([{ categoria: 'categoria', DtEmissao: '2020-01-01' }])
    expect(planoDb.log()).toEqual([
      `select [NmCategoria], [MestreNota].[DtEmissao], sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor, sum([ItemNota].[Quantidade]) as [quantidade] from MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF where [MestreNota].[FgEstatistica] = 'S' and [MestreNota].[CdFilial] = 2 and [CadPro].[FgEstatistica] = 'S' and [CadVen].[FgControle] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] > 0 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[cdcliente] <> 3158 and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [cidadeserf].[uf] in ('MG') and ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE group by [NmCategoria], [MestreNota].[DtEmissao] order by [NmCategoria] asc, [MestreNota].[DtEmissao] desc`,
    ])
  })
})
