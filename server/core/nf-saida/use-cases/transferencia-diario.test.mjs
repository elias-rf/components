import { beforeEach, describe, expect, test } from 'vitest'
import { transferenciaDiario } from '../../../core/nf-saida/use-cases/transferencia-diario.mjs'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = transferenciaDiario(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('transferenciaDiario', async () => {
    tracker.on
      .select('MestreNota')
      .response([
        { dia: '2020-01-01', NmCategoria: 'categoria', quantidade: 10 },
      ])
    const rsp = await useCase({
      inicio: '2020-01-01',
      fim: '2020-01-31',
    })
    expect(rsp).toEqual([{ dia: '2020-01-01', categoria: 10 }])
    expect(planoDb.log()).toEqual([
      "select CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-31' and [MestreNota].[CdFilial] = 1 and [NatOpe].[Nop] = 5151 and [MestreNota].[NotadeComplemento] = 'N' and [MestreNota].[Tipo] <> 'C' group by [MestreNota].[DtEmissao], [CategPro].[NmCategoria] order by [MestreNota].[DtEmissao] desc",
    ])
  })
})
