import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import { TClienteFields, TClienteKeys } from '@/core/cliente_controller.js'
import {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelect,
  TWhere,
} from '@/types/index.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { UTCDateMini } from '@date-fns/utc'
import { endOfMonth, format, startOfMonth, subMonths, subYears } from 'date-fns'
import { flow } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const recordClear = {
  CdCliente: '',
  RzSocial: '',
  Cidade: '',
  Uf: '',
  CGC: '',
  CdVendedor: '',
  FgAtivo: '',
  NumIdentidade: '',
  DtCadastro: '',
  EMail: '',
} as TData<TClienteFields>

type TState = {
  where: TWhere<TClienteFields>
  orderBy: TOrderBy<TClienteFields>
  selection: TId<TClienteKeys>
  status: TFormStatus
  inicio: string
  fim: string
}

const initialState: TState = {
  where: [],
  orderBy: [['CdCliente', 'asc']],
  selection: [],
  status: 'none',
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
}

const state = create(devtools(() => initialState))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TClienteFields>
  orderBy: TOrderBy<TClienteFields>
  select: TSelect<TClienteFields>
}) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const response = await rpc.request('cliente_list', params)

  const resp = response.map((record) => {
    if (record.DtCadastro)
      record.DtCadastro = flow([
        ($) => new UTCDateMini($),
        ($) => format($, 'dd/MM/yyyy'),
      ])(record.DtCadastro)
    return record
  })

  return resp
}

const fetchRecord = async ({ selection }: { selection: TId<TClienteKeys> }) => {
  if (selection.length === 0) return recordClear

  const params = {
    where: selection,
    select: Object.keys(recordClear) as TClienteKeys[],
  }
  const record = await rpc.request('cliente_read', params)
  if (record.DtCadastro)
    record.DtCadastro = flow([
      ($) => new UTCDateMini($),
      ($) => format($, 'dd/MM/yyyy'),
    ])(record.DtCadastro)
  return record
}

const fetchVendaMensalQuantidade = async ({
  selection,
  inicio,
  fim,
}: {
  selection: TId<TClienteKeys>
  inicio: string
  fim: string
}) => {
  if (selection.length === 0) return []
  const params = {
    cliente: parseInt(getFieldId('CdCliente', selection)),
    inicio,
    fim,
  }
  return rpc.request('cliente_vendaMensalQuantidade', params)
}

const fetchVendaMensalValor = async ({
  selection,
  inicio,
  fim,
}: {
  selection: TId<TClienteKeys>
  inicio: string
  fim: string
}) => {
  if (selection.length === 0) return []
  const params = {
    cliente: parseInt(getFieldId('CdCliente', selection)),
    inicio,
    fim,
  }
  return rpc.request('cliente_vendaMensalValor', params)
}

const fetchVendaMensalValorMedio = async ({
  selection,
  inicio,
  fim,
}: {
  selection: TId<TClienteKeys>
  inicio: string
  fim: string
}) => {
  if (selection.length === 0) return []
  const params = {
    cliente: parseInt(getFieldId('CdCliente', selection)),
    inicio,
    fim,
  }
  return rpc.request('cliente_vendaMensalValorMedio', params)
}

const reset = () => {
  const resetState = structuredClone(initialState)
  state.setState(resetState, false, 'cliente/reset')
}

const setOrderBy = (orderBy: TOrderBy<TClienteFields>) => {
  state.setState({ orderBy }, false, { type: 'cliente/setOrderBy', orderBy })
}

const setSelection = (selection: TId<TClienteKeys>) => {
  if (deepEqual(selection, state.getState().selection)) {
    state.setState({ status: 'none', selection: [] }, false, {
      type: 'cliente/setSelection',
      selection,
    })
    return
  }
  state.setState({ status: 'view', selection }, false, {
    type: 'cliente/setSelection',
    selection,
  })
}

const setWhere = (where: TWhere<TClienteFields>) => {
  state.setState({ where }, false, { type: 'cliente/setWhere', where })
}

locationState(state, ['selection', 'status', 'orderBy', 'where'])

export const clienteStore = {
  state,
  recordClear,
  fetchList,
  fetchRecord,
  fetchVendaMensalQuantidade,
  fetchVendaMensalValor,
  fetchVendaMensalValorMedio,
  reset,
  setOrderBy,
  setSelection,
  setWhere,
}
export type TClienteStore = typeof clienteStore
