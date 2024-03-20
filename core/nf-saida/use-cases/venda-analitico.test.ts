import { vendaAnalitico } from '@/core/nf-saida/use-cases/venda-analitico.js'
import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = vendaAnalitico(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('vendaAnalitico', async () => {
    tracker.on.select('MestreNota').response([
      {
        categoria: 'categoria',
        DtEmissao: '2020-01-01',
      },
    ])
    const rsp = await useCase({
      inicio: '2020-01-01',
      fim: '2020-01-31',
    })
    expect(rsp).toEqual([{ DtEmissao: '2020-01-01', categoria: 'categoria' }])

    expect(planoDb.log()).toEqual([
      "select 'VT' as origem, [CategPro].[NmCategoria], [MestreNota].[DtEmissao], [MestreNota].[NumNota], [MestreNota].[Serie], [MestreNota].[Tipo], [ItemNota].[CdProduto], [ItemNota].[Quantidade], [ItemNota].[VlTotal], [CadPro].[Descricao], [MestreNota].[CdVendedor], [CadVen].[NmVendedor], [CidadesERF].[uf] from [MestreNota] inner join [ItemNota] on [ItemNota].[CdFilial] = [MestreNota].[CdFilial] and [ItemNota].[NumNota] = [MestreNota].[NumNota] and [ItemNota].[Serie] = [MestreNota].[Serie] and [ItemNota].[Modelo] = [MestreNota].[Modelo] inner join [CadVen] on [MestreNota].[CdVendedor] = [CadVen].[CdVendedor] inner join [CadCli] on [MestreNota].[CdCliente] = [CadCli].[CdCliente] inner join [cidadesErf] on [CadCli].[Cidade] = [cidadesErf].[NmCidadeIBGE] inner join [CadPro] on [ItemNota].[CdProduto] = [CadPro].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[CdFilial] = 2 and [CadVen].[FgControle] = 'S' and [MestreNota].[FgEstatistica] = 'S' and [CadPro].[FgEstatistica] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] <> 0 and [MestreNota].[cdcliente] <> 3158 and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [MestreNota].[Tipo] in ('E', 'S')",
    ])
  })
})
