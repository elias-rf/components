import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import {
  TNfSaidaLoteDtoFields,
  TNfSaidaLoteDtoKeys,
} from '@/data/plano/nf-saida-lote/nf-saida-lote.type.js'
import {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelect,
  TWhere,
} from '@/types/index.js'
import { isEqual } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const tableName = 'nfSaidaLote' as const

const recordClear = {
  empresaId: '',
  numero: '',
  serie: '',
  modelo: '',
} as TData<TNfSaidaLoteDtoFields>

type TState = {
  orderBy: TOrderBy<TNfSaidaLoteDtoFields>
  selection: TId<TNfSaidaLoteDtoKeys>
  status: TFormStatus
  where: TWhere<TNfSaidaLoteDtoFields>
}

const initialState: TState = {
  orderBy: [['controle', 'desc']] as TOrderBy<TNfSaidaLoteDtoFields>,
  selection: [] as TId<TNfSaidaLoteDtoKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TNfSaidaLoteDtoFields>,
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TNfSaidaLoteDtoFields>
  orderBy: TOrderBy<TNfSaidaLoteDtoFields>
  select: TSelect<TNfSaidaLoteDtoFields>
}) => {
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

const setOrderBy = (orderBy: TOrderBy<TNfSaidaLoteDtoFields>) => {
  state.setState({ orderBy }, false, {
    type: 'nfSaidaLote/setOrderBy',
    orderBy,
  })
}

const setSelection = (selection: TId<TNfSaidaLoteDtoKeys>) => {
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

const setWhere = (where: TWhere<TNfSaidaLoteDtoFields>) => {
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

export type TLotesSaidaStore = typeof lotesSaidaStore
