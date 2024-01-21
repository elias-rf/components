import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import { TClienteFields, TClienteKeys } from '@/core/cliente_controller.js'
import { TData, TFormStatus, TId, TOrderBy, TWhere } from '@/types/index.js'
import { copyProperties } from '@/utils/object/copy-properties.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { ms } from '@/utils/string/ms.js'
import { endOfMonth, format, startOfMonth, subMonths, subYears } from 'date-fns'
import { flow } from 'lodash-es'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

const recordClear = {
  CdCliente: '',
  RzSocial: '',
  Cidade: '',
  Uf: '',
  CGC: '',
  CdVendedor: '',
  FgAtivo: '',
  EMail: '',
  NumIdentidade: '',
  DtCadastro: '',
} as TData<TClienteFields>

type TState = {
  list: TData<TClienteFields>[]
  where: TWhere<TClienteFields>
  orderBy: TOrderBy<TClienteFields>
  selection: TId<TClienteKeys>
  record: TData<TClienteFields>
  status: TFormStatus
  recordClear: TData<TClienteFields>
  inicio: string
  fim: string
  vendaMensalQuantidade: any[]
  vendaMensalValor: any[]
  vendaMensalValorMedio: any[]
}

const initialState: TState = {
  list: [],
  where: [],
  orderBy: [['CdCliente', 'asc']],
  selection: [],
  record: {} as TData<TClienteFields>,
  status: 'none',
  recordClear: recordClear,
  inicio: flow([
    ($) => subYears($, 1),
    startOfMonth,
    ($) => format($, 'yyyy-MM-dd'),
  ])(new Date()),
  fim: flow([
    ($) => subMonths($, 1),
    endOfMonth,
    ($) => format($, 'yyyy-MM-dd'),
  ])(new Date()),
  vendaMensalQuantidade: [],
  vendaMensalValor: [],
  vendaMensalValorMedio: [],
}

const state = proxy(initialState)
devtools(state, { name: 'cliente', enabled: true })

const fetchList = async () => {
  const params = {
    where: state.where,
    orderBy: state.orderBy,
    select: Object.keys(recordClear) as TClienteKeys[],
    limit: 100,
  }
  const list = (await cache.memo(
    {
      params,
      tables: ['cliente'],
      rpc: 'cliente_list',
    },
    () => rpc.request('cliente_list', params)
  )) as TData<TClienteFields>[]
  state.list = list
  return list
}

const fetchRecord = async () => {
  const where = state.selection
  if (where.length === 0) {
    state.record = recordClear
    state.vendaMensalQuantidade = []
    state.vendaMensalValor = []
    state.vendaMensalValorMedio = []
    return recordClear
  }
  const params = {
    where,
    select: Object.keys(recordClear) as TClienteKeys[],
  }
  const record = (await cache.memo(
    {
      params,
      tables: ['cliente'],
      rpc: 'cliente_read',
    },
    () => rpc.request('cliente_read', params)
  )) as TData<TClienteFields>
  state.record = record

  await fetchVendaMensalQuantidade()
  await fetchVendaMensalValor()
  await fetchVendaMensalValorMedio()

  return record
}

const fetchVendaMensalQuantidade = async () => {
  const id = state.selection
  if (id.length === 0) return []
  const params = {
    cliente: parseInt(getFieldId('CdCliente', id)),
    inicio: state.inicio,
    fim: state.fim,
  }
  const record = (await cache.memo(
    {
      params,
      tables: ['cliente', 'venda'],
      rpc: 'cliente_vendaMensalQuantidade',
    },
    () => rpc.request('cliente_vendaMensalQuantidade', params),
    { ttl: ms('10m') }
  )) as any[]
  state.vendaMensalQuantidade = record
  return record
}

const fetchVendaMensalValor = async () => {
  const id = state.selection
  if (id.length === 0) return []
  const params = {
    cliente: parseInt(getFieldId('CdCliente', id)),
    inicio: state.inicio,
    fim: state.fim,
  }
  const record = (await cache.memo(
    {
      params,
      tables: ['cliente', 'venda'],
      rpc: 'cliente_vendaMensalValor',
    },
    () => rpc.request('cliente_vendaMensalValor', params),
    { ttl: ms('10m') }
  )) as any[]
  state.vendaMensalValor = record
  return record
}

const fetchVendaMensalValorMedio = async () => {
  const id = state.selection
  if (id.length === 0) return []
  const params = {
    cliente: parseInt(getFieldId('CdCliente', id)),
    inicio: state.inicio,
    fim: state.fim,
  }
  const record = (await cache.memo(
    {
      params,
      tables: ['cliente', 'venda'],
      rpc: 'cliente_vendaMensalValorMedio',
    },

    () => rpc.request('cliente_vendaMensalValorMedio', params),
    { ttl: ms('10m') }
  )) as any[]
  state.vendaMensalValorMedio = record
  return record
}

const reset = () => {
  const resetState = structuredClone(initialState)
  copyProperties(resetState, state)
}

const setOrderBy = (orderBy: TOrderBy<TClienteFields>) => {
  state.orderBy = orderBy
  fetchList()
}

const setRecord = (record: TData<TClienteFields>) => {
  state.record = record
}

const setSelection = (selection: TId<TClienteKeys>) => {
  if (deepEqual(selection, state.selection)) {
    state.selection = []
    state.status = 'none'
    return
  }
  state.selection = selection
  state.status = 'view'
  fetchRecord()
}

const setWhere = (where: TWhere<TClienteFields>) => {
  state.where = where
  fetchList()
}

export const clienteStore = {
  state,
  fetchList,
  fetchRecord,
  fetchVendaMensalQuantidade,
  fetchVendaMensalValor,
  fetchVendaMensalValorMedio,
  reset,
  setOrderBy,
  setRecord,
  setSelection,
  setWhere,
}
export type TClienteStore = typeof clienteStore
