import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import { TClienteFields, TClienteKeys } from '@/core/cliente_controller.js'
import { TData, TFormStatus, TId, TOrderBy, TWhere } from '@/types/index.js'
import { copyProperties } from '@/utils/object/copy-properties.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { ms } from '@/utils/string/ms.js'
import {
  endOfMonth,
  format,
  startOfMonth,
  subMonths,
  subYears,
} from 'date-fns/fp'
import { flowRight } from 'lodash'
import { proxy } from 'valtio'

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
  inicio: flowRight([format('yyyy-MM-dd'), startOfMonth(), subYears(1)])(
    new Date()
  ),
  fim: flowRight([format('yyyy-MM-dd'), endOfMonth(), subMonths(1)])(
    new Date()
  ),
  vendaMensalQuantidade: [],
  vendaMensalValor: [],
  vendaMensalValorMedio: [],
}

const state = proxy(initialState)

const fetchList = async () => {
  const list = (await cache.memo(
    {
      where: state.where,
      orderBy: state.orderBy,
      select: Object.keys(recordClear),
      _table: 'cliente',
    },
    () =>
      rpc.request('cliente_list', {
        where: state.where,
        orderBy: state.orderBy,
        select: Object.keys(recordClear) as TClienteKeys[],
      })
  )) as TData<TClienteFields>[]
  state.list = list
  return list
}

const fetchRecord = async () => {
  const id = state.selection
  if (id.length === 0) {
    state.record = recordClear
    return recordClear
  }
  const record = (await cache.memo(
    {
      where: id,
      select: Object.keys(recordClear),
      _table: 'cliente',
    },
    () =>
      rpc.request('cliente_read', {
        where: id,
        select: Object.keys(recordClear) as TClienteKeys[],
      })
  )) as TData<TClienteFields>
  state.record = record
  return record
}

const fetchVendaMensalQuantidade = async () => {
  const id = state.selection
  if (id.length === 0) return []
  const record = (await cache.memo(
    {
      cliente: parseInt(getFieldId('CdCliente', id)),
      inicio: state.inicio,
      fim: state.fim,
    },

    () =>
      rpc.request('cliente_vendaMensalQuantidade', {
        cliente: parseInt(getFieldId('CdCliente', id)),
        inicio: state.inicio,
        fim: state.fim,
      }),
    { ttl: ms('10m') }
  )) as any[]
  state.vendaMensalQuantidade = record
  return record
}

const fetchVendaMensalValor = async () => {
  const id = state.selection
  if (id.length === 0) return []
  const record = (await cache.memo(
    {
      cliente: parseInt(getFieldId('CdCliente', id)),
      inicio: state.inicio,
      fim: state.fim,
    },
    () =>
      rpc.request('cliente_vendaMensalValor', {
        cliente: parseInt(getFieldId('CdCliente', id)),
        inicio: state.inicio,
        fim: state.fim,
      }),
    { ttl: ms('10m') }
  )) as any[]
  state.vendaMensalValor = record
  return record
}

const fetchVendaMensalValorMedio = async () => {
  const id = state.selection
  if (id.length === 0) return []
  const record = (await cache.memo(
    {
      cliente: parseInt(getFieldId('CdCliente', id)),
      inicio: state.inicio,
      fim: state.fim,
    },

    () =>
      rpc.request('cliente_vendaMensalValorMedio', {
        cliente: parseInt(getFieldId('CdCliente', id)),
        inicio: state.inicio,
        fim: state.fim,
      }),
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
}

const setWhere = (where: TWhere<TClienteFields>) => {
  // where = whereType(where, 'id', 'int')
  state.where = where
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
