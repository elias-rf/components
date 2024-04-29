import { UTCDateMini } from '@date-fns/utc'
import { endOfMonth, format, startOfMonth, subMonths, subYears } from 'date-fns'
import { flow, isEqual } from 'lodash-es'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { createSelectors } from '../../../../lib/create-selectors.mjs'
import { paramStorage } from '../../../../lib/param-storage.mjs'
import { rpc } from '../../../../lib/rpc.mjs'
import { getFieldId } from '../../../../utils/query/get-field-id.mjs'

const recordClear = {
  id: '',
  razaoSocial: '',
  cidade: '',
  uf: '',
  cnpj: '',
  vendedorId: '',
  ativo: '',
  cadastroData: '',
  email: '',
}

const initialState = {
  where: [],
  orderBy: [['id', 'asc']],
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

const state = createSelectors(
  create(
    persist(
      devtools(() => initialState),
      {
        name: 'cliente',
        storage: createJSONStorage(() => paramStorage),
      }
    )
  )
)

const fetchList = async ({ where, orderBy, select }) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const response = await rpc.request('cliente_list', params)

  const resp = response.map((record) => {
    if (record.cadastroData)
      record.cadastroData = flow([
        ($) => new UTCDateMini($),
        ($) => format($, 'dd/MM/yyyy'),
      ])(record.cadastroData)
    return record
  })

  return resp
}

const fetchRecord = async ({ selection }) => {
  if (selection.length === 0) return recordClear

  const params = {
    where: selection,
    select: Object.keys(recordClear),
  }
  const record = await rpc.request('cliente_read', params)
  if (record.cadastroData)
    record.cadastroData = flow([
      ($) => new UTCDateMini($),
      ($) => format($, 'dd/MM/yyyy'),
    ])(record.cadastroData)
  return record
}

const fetchVendaMensalQuantidade = async ({ selection, inicio, fim }) => {
  if (selection.length === 0) return []
  const params = {
    clienteId: parseInt(getFieldId('id', selection)),
    inicio,
    fim,
  }

  return rpc.request('cliente_vendaMensalQuantidade', params)
}

const fetchVendaMensalValor = async ({ selection, inicio, fim }) => {
  if (selection.length === 0) return []
  const params = {
    clienteId: parseInt(getFieldId('id', selection)),
    inicio,
    fim,
  }
  return rpc.request('cliente_vendaMensalValor', params)
}

const fetchVendaMensalValorMedio = async ({ selection, inicio, fim }) => {
  if (selection.length === 0) return []
  const params = {
    clienteId: parseInt(getFieldId('id', selection)),
    inicio,
    fim,
  }
  return rpc.request('cliente_vendaMensalValorMedio', params)
}

const reset = () => {
  const resetState = structuredClone(initialState)

  resetState.inicio = flow([
    ($) => subYears($, 1),
    startOfMonth,
    ($) => format($, 'yyyy-MM-dd'),
  ])(new Date())
  resetState.fim = flow([
    ($) => subMonths($, 1),
    endOfMonth,
    ($) => format($, 'yyyy-MM-dd'),
  ])(new Date())

  state.setState(resetState, false, 'cliente/reset')
}

const setOrderBy = (orderBy) => {
  state.setState({ orderBy }, false, { type: 'cliente/setOrderBy', orderBy })
}

const setSelection = (selection) => {
  if (isEqual(selection, state.getState().selection)) {
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

const setWhere = (where) => {
  state.setState({ where }, false, { type: 'cliente/setWhere', where })
}

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
