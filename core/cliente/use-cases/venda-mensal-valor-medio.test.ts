import { modules } from '@/core/index.js'
import { nfSaidaController } from '@/core/nf-saida/nf-saida_controller.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { vendaMensalValorMedio } from './venda-mensal-valor-medio.js'

describe('vendaMensalQuantidade', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = vendaMensalValorMedio({ nfSaidaController })

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('vendaMensalValorMedio', async () => {
    tracker.on
      .select('MestreNota')
      .response([
        { NmCategoria: 'cat1', anoMes: '2020-01', quantidade: 10, valor: 200 },
      ])
    const rsp = await useCase({
      inicio: '2020-01-01',
      fim: '2020-01-01',
      clienteId: 1,
    })
    expect(planoDb.log()).toEqual([
      "select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = 'S' and [MestreNota].[CdFilial] = 2 and [CadPro].[FgEstatistica] = 'S' and [CadVen].[FgControle] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] > 0 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-01' and [MestreNota].[CdCliente] = 1 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)",
    ])
    expect(rsp).toEqual([{ '2020-01': '20,00', categoria: 'cat1' }])
  })

  test('vendaMensalQuantidade erro em argumentos', async () => {
    await expect(() =>
      /* @ts-ignore */
      useCase({
        inicio: '2020-01-01',
        fim: '2020-01-01',
      })
    ).rejects.toThrow('cliente deve ser informado')
    await expect(() =>
      /* @ts-ignore */
      useCase({
        inicio: '2020-01-01',
        clienteId: 1,
      })
    ).rejects.toThrow('fim deve ser informado')
    await expect(() =>
      useCase({
        inicio: '2020-01',
        fim: '2020-01-01',
        clienteId: 1,
      })
    ).rejects.toThrow('data inicial inválida')
  })
})
