import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { knexMockHistory } from '@/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { clienteController } from './cliente_controller.js'

describe('rpc de cliente', () => {
  const tracker = getTracker()
  dbPlano.setDriver(knexMockMsql)

  beforeEach(() => {
    tracker.reset()
  })

  it('lista sem argumentos', async () => {
    tracker.on.select('CadCli').response([{ CdCliente: 1 }])
    const rsp = await clienteController.list({})
    expect(rsp).toEqual([
      {
        CdCliente: 1,
      },
    ])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50],
        sql: 'select top (@p0) * from [CadCli]',
      },
    ])
  })

  it('lista com argumentos', async () => {
    tracker.on.select('CadCli').response([{ CdCliente: 1 }])
    const rsp = await clienteController.list({
      where: [['CdCliente', 1]],
      select: ['CdCliente'],
    })
    expect(rsp).toEqual([
      {
        CdCliente: 1,
      },
    ])

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 1],
        sql: 'select top (@p0) [CdCliente] from [CadCli] where [CdCliente] = @p1',
      },
    ])
  })

  it('read', async () => {
    tracker.on.select('CadCli').response([{ CdCliente: 1 }])
    const rsp = await clienteController.read({
      where: [['CdCliente', 1]],
      select: ['CdCliente'],
    })
    expect(rsp).toEqual({ CdCliente: 1 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [CdCliente] from [CadCli] where [CdCliente] = @p1',
      },
    ])
  })

  it('create e del', async () => {
    tracker.on.insert('CadCli').response({ CdCliente: 1 })
    tracker.on.delete('CadCli').response(1)

    const crt = await clienteController.create$({
      data: {
        CdCliente: 1,
        DtCadastro: '2020-01-01',
        EMail: '',
        NumIdentidade: '',
      },
      select: ['CdCliente'],
    })

    expect(crt).toEqual({
      CdCliente: 1,
    })

    const dlt = await clienteController.del$({
      where: [['CdCliente', 10]],
    })
    expect(dlt).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, '2020-01-01', '', ''],
        sql: 'insert into [CadCli] ([CdCliente], [DtCadastro], [EMail], [NumIdentidade]) output inserted.[CdCliente] values (@p0, @p1, @p2, @p3)',
      },
      {
        bindings: [10],
        sql: 'delete from [CadCli] where [CdCliente] = @p0;select @@rowcount',
      },
    ])
  })

  it('update', async () => {
    tracker.on.update('CadCli').response({ CdCliente: 1 })
    const rsp = await clienteController.update$({
      where: [['CdCliente', 1]],
      data: { EMail: '' },
      select: ['CdCliente'],
    })
    expect(rsp).toEqual({ CdCliente: 1 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['', 1],
        sql: 'update [CadCli] set [EMail] = @p0 output inserted.[CdCliente] where [CdCliente] = @p1',
      },
    ])
  })

  it('vendaMensalQuantidade', async () => {
    tracker.on
      .select('MestreNota')
      .response([{ NmCategoria: 'cat1', anoMes: '2020-01', quantidade: 10 }])
    const rsp = await clienteController.vendaMensalQuantidade({
      inicio: '2020-01-01',
      fim: '2020-01-01',
      cliente: 1,
    })
    expect(rsp).toEqual([{ '2020-01': 10, categoria: 'cat1' }])
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
          '2020-01-01',
          1,
        ],
        sql: "select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[CdCliente] = @p9 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)",
      },
    ])
  })
  it('vendaMensalQuantidade erro em argumentos', async () => {
    await expect(() =>
      /* @ts-ignore */
      clienteController.vendaMensalQuantidade({
        inicio: '2020-01-01',
        fim: '2020-01-01',
      })
    ).rejects.toThrow('cliente deve ser informado')
    await expect(() =>
      /* @ts-ignore */
      clienteController.vendaMensalQuantidade({
        inicio: '2020-01-01',
        cliente: 1,
      })
    ).rejects.toThrow('fim deve ser informado')
    await expect(() =>
      clienteController.vendaMensalQuantidade({
        inicio: '2020-01',
        fim: '2020-01-01',
        cliente: 1,
      })
    ).rejects.toThrow('data inicial inválida')
  })
})
