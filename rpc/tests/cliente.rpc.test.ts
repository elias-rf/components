import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { beforeEach, describe, test, expect } from 'vitest'
import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { dbPlano } from '@/controllers/db-plano.db'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { clientMock } from '@/mocks/prim'

describe('clienteRpc', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql
  dbPlano.knex = knexMockMsql

  beforeEach(() => {
    dbOftalmo.startLog()
    dbPlano.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('CadCli').response([{ id: '1' }])

    const rsp = await clientMock.cliente.list({
      where: [['CdCliente', 1]],
      orderBy: [['CdCliente', 'asc']],
    })

    expect(rsp).toEqual([{ id: '1' }])
    expect(dbPlano.sql()).toEqual([
      'select top (50) * from [CadCli] where [CdCliente] = 1 order by [CdCliente] asc',
    ])
  })

  test('read', async () => {
    tracker.on.select('CadCli').response([{ id: '1' }])

    const rsp = await clientMock.cliente.read({
      id: [['CdCliente', 1]],
      select: ['CdCliente'],
    })

    expect(rsp).toEqual({ id: '1' })
    expect(dbPlano.sql()).toEqual([
      'select top (1) [CdCliente] from [CadCli] where [CdCliente] = 1',
    ])
  })

  test('update', async () => {
    tracker.on.update('CadCli').response(1)

    const rsp = await clientMock.cliente.update({
      id: [['CdCliente', 1]],
      data: { RzSocial: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbPlano.sql()).toEqual([
      "update [CadCli] set [RzSocial] = 'test' where [CdCliente] = 1;select @@rowcount",
    ])
  })

  test('create', async () => {
    tracker.on.insert('CadCli').response(1)

    const rsp = await clientMock.cliente.create({
      data: { CdCliente: 1, RzSocial: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbPlano.sql()).toEqual([
      "insert into [CadCli] ([CdCliente], [RzSocial]) values (1, 'test')",
    ])
  })

  test('del', async () => {
    tracker.on.delete('CadCli').response(1)

    const rsp = await clientMock.cliente.del({
      id: [['CdCliente', 1]],
    })

    expect(rsp).toEqual(1)
    expect(dbPlano.sql()).toEqual([
      'delete from [CadCli] where [CdCliente] = 1;select @@rowcount',
    ])
  })

  test('vendaMensalQuantidade', async () => {
    tracker.on
      .select('MestreNota')
      .response([{ NmCategoria: 'cat1', anoMes: '2020-01', quantidade: 10 }])

    const rsp = await clientMock.cliente.vendaMensalQuantidade({
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
})
