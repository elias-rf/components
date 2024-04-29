import { beforeEach, describe, expect, test } from 'vitest'
import { transferenciaModelo } from '../../../core/nf-saida/use-cases/transferencia-modelo.mjs'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = transferenciaModelo(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('transferenciaModelo', async () => {
    tracker.on
      .select('MestreNota')
      .response([{ modelo: 'modelo', quantidade: 10 }])
    const rsp = await useCase({
      data: '2020-01-01',
    })
    expect(rsp).toEqual([{ modelo: 'modelo', quantidade: 10 }])
    expect(planoDb.log()).toEqual([
      `select CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where [MestreNota].[DtEmissao] = '2020-01-01' and [MestreNota].[CdFilial] = 1 and [NatOpe].[Nop] = 5151 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[NotadeComplemento] = 'N' group by [CadPro].[Descricao] order by [CadPro].[Descricao] asc`,
    ])
  })
})
