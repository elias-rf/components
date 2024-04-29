import { beforeEach, describe, expect, test } from 'vitest'
import { transferenciaMensal } from '../../../core/nf-saida/use-cases/transferencia-mensal.mjs'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = transferenciaMensal(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('transferenciaMensal', async () => {
    tracker.on
      .select('MestreNota')
      .response([{ mes: '2020-01', NmCategoria: 'categoria', quantidade: 10 }])
    const rsp = await useCase({
      mes: '2020-01',
    })
    expect(rsp).toEqual([{ mes: '2020-01', categoria: 10 }])
    expect(planoDb.log()).toEqual([
      "select CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where CONVERT(CHAR(7),[MestreNota].[DtEmissao],120)>='2020-01' and [MestreNota].[CdFilial] = 1 and [NatOpe].[Nop] = 5151 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[NotadeComplemento] = 'N' group by CONVERT(CHAR(7),[MestreNota].[DtEmissao],120), CategPro.NmCategoria order by CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) desc",
    ])
  })
})
