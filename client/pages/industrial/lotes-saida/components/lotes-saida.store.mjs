import { isEqual } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createSelectors } from '../../../../lib/create-selectors.mjs'
import { rpc } from '../../../../lib/rpc.mjs'
import { locationState } from '../../../../store/location_state.mjs'

const tableName = 'nfSaidaLote'

const recordClear = {
  empresaId: '',
  numero: '',
  serie: '',
  modelo: '',
}

const initialState = {
  orderBy: [['controle', 'desc']],
  selection: [],
  status: 'none',
  where: [],
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({ where, orderBy, select }) => {
  const params = {
    where,
    orderBy,
    select,
    // include: {
    //   produto: ['Descricao'],
    //   nfSaida: ['clientId', 'Tipo'],
    //   'nfSaida.cliente': ['RzSocial', 'Uf'],
    // },
    limit: 1500,
  }
  const list = await rpc.request('nfSaidaLote_list', params)
  return list
}

const reset = () => {
  const resetState = structuredClone(initialState)
  state.setState(resetState, false, 'nfSaidaLote/reset')
}

const setOrderBy = (orderBy) => {
  state.setState({ orderBy }, false, {
    type: 'nfSaidaLote/setOrderBy',
    orderBy,
  })
}

const setSelection = (selection) => {
  if (isEqual(selection, state.getState().selection)) {
    state.setState({ status: 'none', selection: [] }, false, {
      type: 'nfSaidaLote/setSelection',
      selection,
    })
    return
  }
  state.setState({ status: 'view', selection }, false, {
    type: 'nfSaidaLote/setSelection',
    selection,
  })
}

const setWhere = (where) => {
  state.setState({ where }, false, { type: 'nfSaidaLote/setWhere', where })
}

locationState(state, ['selection', 'status', 'orderBy', 'where'])

export const lotesSaidaStore = {
  state,
  recordClear,
  fetchList,
  reset,
  setOrderBy,
  setSelection,
  setWhere,
}
