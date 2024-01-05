import { dbPlano } from '@/core/db/db-plano.db.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { knexMockHistory } from '@/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { clienteController } from './cliente_controller.js'

describe('rpc de cliente', () => {
  const tracker = getTracker()
  dbPlano.setDriver(knexMockMsql)

  beforeEach(() => {
    dbPlano.startLog()
    tracker.reset()
  })

  test('lista sem argumentos', async () => {
    tracker.on.select('CadCli').response([{ CdCliente: 1 }])
    const rsp = await clienteController.cliente_list({})
    expect(rsp).toEqual([{ CdCliente: 1 }])
    expect(dbPlano.log()).toEqual(['select top (50) * from [CadCli]'])
  })

  test('lista com argumentos', async () => {
    tracker.on.select('CadCli').response([{ CdCliente: 1 }])
    const rsp = await clienteController.cliente_list({
      where: [['CdCliente', 1]],
      select: ['CdCliente'],
    })
    expect(rsp).toEqual([{ CdCliente: 1 }])
    expect(dbPlano.log()).toEqual([
      'select top (50) [CdCliente] from [CadCli] where [CdCliente] = 1',
    ])
  })

  test('read', async () => {
    tracker.on.select('CadCli').response([{ CdCliente: 1 }])
    const rsp = await clienteController.cliente_read({
      where: [['CdCliente', 1]],
      select: ['CdCliente'],
    })
    expect(rsp).toEqual({ CdCliente: 1 })
    expect(dbPlano.log()).toEqual([
      'select top (1) [CdCliente] from [CadCli] where [CdCliente] = 1',
    ])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [CdCliente] from [CadCli] where [CdCliente] = @p1',
      },
    ])
  })

  test('create e del', async () => {
    tracker.on.insert('CadCli').response({ CdCliente: 1 })
    tracker.on.delete('CadCli').response(1)

    const crt = await clienteController.cliente_create({
      data: {
        CdCliente: 1,
        DtCadastro: '2020-01-01',
        EMail: '',
        NumIdentidade: '',
      },
      returning: ['CdCliente'],
    })

    expect(crt).toEqual({
      CdCliente: 1,
    })

    const dlt = await clienteController.cliente_del({
      where: [['CdCliente', 10]],
    })
    expect(dlt).toEqual(1)
    expect(dbPlano.log()).toEqual([
      "insert into [CadCli] ([CdCliente], [DtCadastro], [EMail], [NumIdentidade]) output inserted.[CdCliente] values (1, '2020-01-01', '', '')",
      'delete from [CadCli] where [CdCliente] = 10;select @@rowcount',
    ])
  })

  test('update', async () => {
    tracker.on.update('CadCli').response({ CdCliente: 1 })
    const rsp = await clienteController.cliente_update({
      where: [['CdCliente', 1]],
      data: { EMail: '' },
      returning: ['CdCliente'],
    })
    expect(rsp).toEqual({ CdCliente: 1 })
    expect(dbPlano.log()).toEqual([
      "update [CadCli] set [EMail] = '' output inserted.[CdCliente] where [CdCliente] = 1",
    ])
  })

  test('vendaMensalQuantidade', async () => {
    tracker.on
      .select('MestreNota')
      .response([{ NmCategoria: 'cat1', anoMes: '2020-01', quantidade: 10 }])
    const rsp = await clienteController.cliente_vendaMensalQuantidade({
      inicio: '2020-01-01',
      fim: '2020-01-01',
      cliente: 1,
    })
    expect(rsp).toEqual([{ '2020-01': 10, categoria: 'cat1' }])
    expect(dbPlano.log()).toEqual([
      "select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = 'S' and [MestreNota].[CdFilial] = 2 and [CadPro].[FgEstatistica] = 'S' and [CadVen].[FgControle] = 'S' and [ItemNota].[ImprimeComponentes] = 'N' and [ItemNota].[Sequencia] > 0 and [MestreNota].[Tipo] <> 'C' and [MestreNota].[DtEmissao] between '2020-01-01' and '2020-01-01' and [MestreNota].[CdCliente] = 1 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)",
    ])
  })
  test('vendaMensalQuantidade erro em argumentos', async () => {
    await expect(() =>
      /* @ts-ignore */
      clienteController.cliente_vendaMensalQuantidade({
        inicio: '2020-01-01',
        fim: '2020-01-01',
      })
    ).rejects.toThrow('cliente deve ser informado')
    await expect(() =>
      /* @ts-ignore */
      clienteController.cliente_vendaMensalQuantidade({
        inicio: '2020-01-01',
        cliente: 1,
      })
    ).rejects.toThrow('fim deve ser informado')
    await expect(() =>
      clienteController.cliente_vendaMensalQuantidade({
        inicio: '2020-01',
        fim: '2020-01-01',
        cliente: 1,
      })
    ).rejects.toThrow('data inicial inválida')
  })
})
