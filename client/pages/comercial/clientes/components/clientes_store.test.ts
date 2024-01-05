import { clienteStore } from '@/client/pages/comercial/clientes/components/clientes_store.js'
import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'
import { TId, TOrderBy, TWhere } from '@/types/index.js'
import { describe, expect, test } from 'vitest'

describe('clienteStore', () => {
  mockedFetch.reset()
  mockedFetch.addRpc(async (rpc) => {
    if (rpc.method === 'cliente_list') {
      return [{ CdCliente: 1 }, { CdCliente: 2 }]
    }
  })
  mockedFetch.addRpc(async (rpc) => {
    if (rpc.method === 'cliente_read') {
      return { CdCliente: 1 }
    }
  })
  mockedFetch.addRpc(async (rpc) => {
    if (
      [
        'cliente_vendaMensalQuantidade',
        'fetchVendaMensalValor',
        'fetchVendaMensalValorMedio',
      ].includes(rpc.method)
    ) {
      return [
        { categoria: 'LITEFLEX', '2020-01': 10 },
        { categoria: 'LITEFLEX', '2020-02': 20 },
      ]
    }
  })

  test('initial value', () => {
    clienteStore.reset()
    expect(clienteStore.state).toEqual({
      fim: '2023-12-31',
      inicio: '2023-01-01',
      list: [],
      orderBy: [['CdCliente', 'asc']],
      record: {},
      recordClear: {
        CGC: '',
        CdCliente: '',
        CdVendedor: '',
        Cidade: '',
        DtCadastro: '',
        EMail: '',
        FgAtivo: '',
        NumIdentidade: '',
        RzSocial: '',
        Uf: '',
      },
      selection: [],
      status: 'none',
      vendaMensalQuantidade: [],
      vendaMensalValor: [],
      vendaMensalValorMedio: [],
      where: [],
    })
  })

  test('fetchList', async () => {
    clienteStore.reset()
    mockedFetch.clearHistory()
    await clienteStore.fetchList()
    expect(clienteStore.state.list).toEqual([
      { CdCliente: 1 },
      { CdCliente: 2 },
    ])
    await clienteStore.fetchList()
    expect(mockedFetch.history().length).toEqual(1)
  })

  test('fetchVendaMensalQuantidade', async () => {
    clienteStore.reset()
    mockedFetch.clearHistory()
    clienteStore.state.selection = [['CdCliente', '1']]
    clienteStore.state.inicio = '2020-01-01'
    clienteStore.state.fim = '2020-03-31'
    await clienteStore.fetchVendaMensalQuantidade()
    expect(clienteStore.state.vendaMensalQuantidade).toEqual([
      { categoria: 'LITEFLEX', '2020-01': 10 },
      { categoria: 'LITEFLEX', '2020-02': 20 },
    ])
  })
  test('fetchVendaMensalValor', async () => {
    clienteStore.reset()
    mockedFetch.clearHistory()
    clienteStore.state.selection = [['CdCliente', '1']]
    clienteStore.state.inicio = '2020-01-01'
    clienteStore.state.fim = '2020-03-31'
    await clienteStore.fetchVendaMensalValor()
    expect(clienteStore.state.vendaMensalValor).toEqual([
      { categoria: 'LITEFLEX', '2020-01': 10 },
      { categoria: 'LITEFLEX', '2020-02': 20 },
    ])
  })
  test('fetchVendaMensalValorMedio', async () => {
    clienteStore.reset()
    mockedFetch.clearHistory()
    clienteStore.state.selection = [['CdCliente', '1']]
    clienteStore.state.inicio = '2020-01-01'
    clienteStore.state.fim = '2020-03-31'
    await clienteStore.fetchVendaMensalValorMedio()
    expect(clienteStore.state.vendaMensalValorMedio).toEqual([
      { categoria: 'LITEFLEX', '2020-01': 10 },
      { categoria: 'LITEFLEX', '2020-02': 20 },
    ])
  })

  test('fetchRecord', async () => {
    clienteStore.reset()
    mockedFetch.clearHistory()
    clienteStore.state.selection = [['CdCliente', '1']]
    await clienteStore.fetchRecord()
    expect(clienteStore.state.record).toEqual({ CdCliente: 1 })
    await clienteStore.fetchRecord()
    expect(mockedFetch.history().length).toEqual(1)
  })

  test('setWhere', () => {
    clienteStore.reset()
    const where = [['CdCliente', '>', 0]] as TWhere<any>
    clienteStore.setWhere(where)
    expect(clienteStore.state.where).toEqual(where)
  })

  test('setOrderBy', () => {
    clienteStore.reset()
    const orderBy = [['CdCliente', 'desc']] as TOrderBy<any>
    clienteStore.setOrderBy(orderBy)
    expect(clienteStore.state.orderBy).toEqual(orderBy)
  })

  test('setSelection', () => {
    clienteStore.reset()
    const selection = [['CdCliente', '1']] as TId<any>
    // set selection
    clienteStore.setSelection(selection)
    expect(clienteStore.state.selection).toEqual(selection)
    expect(clienteStore.state.status).toEqual('view')
    // reset selection
    clienteStore.setSelection(selection)
    expect(clienteStore.state.selection).toEqual([])
    expect(clienteStore.state.status).toEqual('none')
  })
})
