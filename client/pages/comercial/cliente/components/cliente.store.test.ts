import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { TId, TOrderBy, TWhere } from '@/types/index.js'
import { server } from '@/utils/mocks/core-msw/server.js'

import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  test,
  vi,
} from 'vitest'

describe('clienteStore', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('initial value', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2020-01-01'))
    clienteStore.reset()
    expect(clienteStore.state.getState()).toEqual({
      fim: '2019-11-30',
      inicio: '2018-12-01',
      orderBy: [['id', 'asc']],
      selection: [],
      status: 'none',
      where: [],
    })
  })

  test('fetchList', async () => {
    clienteStore.reset()
    const data = await clienteStore.fetchList({
      where: [],
      orderBy: [],
      select: ['id'],
    })
    expect(data).toEqual([{ id: 100 }, { id: 200 }, { id: 300 }])
  })

  test('fetchVendaMensalQuantidade', async () => {
    clienteStore.reset()
    const data = await clienteStore.fetchVendaMensalQuantidade({
      inicio: '2020-01-01',
      fim: '2020-03-31',
      selection: [['id', 100]],
    })
    expect(data).toEqual([
      { '2020-01': 100, categoria: 'LITEFLEX' },
      { '2020-03': 200, categoria: 'LITEFLEX' },
    ])
  })

  test('fetchVendaMensalValor', async () => {
    clienteStore.reset()
    const data = await clienteStore.fetchVendaMensalValor({
      inicio: '2020-01-01',
      fim: '2020-03-31',
      selection: [['id', '100']],
    })
    expect(data).toEqual([
      { '2020-01': '1000,10', categoria: 'LITEFLEX' },
      { '2020-03': '2000,20', categoria: 'LITEFLEX' },
    ])
  })

  test('fetchVendaMensalValorMedio', async () => {
    clienteStore.reset()
    const data = await clienteStore.fetchVendaMensalValorMedio({
      inicio: '2020-01-01',
      fim: '2020-03-31',
      selection: [['id', '100']],
    })
    expect(data).toEqual([
      { '2020-01': '100,10', categoria: 'LITEFLEX' },
      { '2020-03': '200,20', categoria: 'LITEFLEX' },
    ])
  })

  test('fetchRecord', async () => {
    clienteStore.reset()
    const data = await clienteStore.fetchRecord({
      selection: [['id', '100']],
    })
    expect(data).toEqual({
      id: 100,
      razaoSocial: 'Fulano de tal',
      cidade: 'São Paulo',
      uf: 'SP',
      cnpj: '10.100.100/0001-01',
      vendedorId: '10',
      ativo: 'S',
      email: 'fulano@example.com',
      cadastroData: '01/01/2020',
    })
  })

  test('setWhere', () => {
    clienteStore.reset()
    const where = [['id', '>', 0]] as TWhere<any>
    clienteStore.setWhere(where)
    expect(clienteStore.state.getState().where).toEqual(where)
  })

  test('setOrderBy', () => {
    clienteStore.reset()
    const orderBy = [['id', 'desc']] as TOrderBy<any>
    clienteStore.setOrderBy(orderBy)
    expect(clienteStore.state.getState().orderBy).toEqual(orderBy)
  })

  test('setSelection', () => {
    clienteStore.reset()
    const selection = [['id', '1']] as TId<any>
    // set selection
    clienteStore.setSelection(selection)
    expect(clienteStore.state.getState().selection).toEqual(selection)
    expect(clienteStore.state.getState().status).toEqual('view')
    // reset selection
    clienteStore.setSelection(selection)
    expect(clienteStore.state.getState().selection).toEqual([])
    expect(clienteStore.state.getState().status).toEqual('none')
  })
})
