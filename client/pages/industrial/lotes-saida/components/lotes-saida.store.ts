import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import {
  TNfSaidaLoteFields,
  TNfSaidaLoteKeys,
} from '@/core/nf-saida-lote_controller.js'
import {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelect,
  TWhere,
} from '@/types/index.js'
import { copyProperties } from '@/utils/object/copy-properties.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const tableName = 'nfSaidaLote' as const

const recordClear = {
  CdFilial: '',
  NumNota: '',
  Serie: '',
  Modelo: '',
} as TData<TNfSaidaLoteFields>

type TState = {
  orderBy: TOrderBy<TNfSaidaLoteFields>
  selection: TId<TNfSaidaLoteKeys>
  status: TFormStatus
  where: TWhere<TNfSaidaLoteFields>
}

const initialState: TState = {
  orderBy: [['NumLote', 'desc']] as TOrderBy<TNfSaidaLoteFields>,
  selection: [] as TId<TNfSaidaLoteKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TNfSaidaLoteFields>,
}

const state = create(devtools(() => initialState))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TNfSaidaLoteFields>
  orderBy: TOrderBy<TNfSaidaLoteFields>
  select: TSelect<TNfSaidaLoteFields>
}) => {
  const params = {
    where,
    orderBy,
    select,
    include: {
      produto: ['Descricao'],
      nfSaida: ['CdCliente', 'Tipo'],
      'nfSaida.cliente': ['RzSocial', 'Uf'],
    },
    limit: 1500,
  }
  const list = await rpc.request('nfSaidaLote_list', params)
  return list
}

const reset = () => {
  const resetState = structuredClone(initialState)
  state.setState(resetState, false, 'nfSaidaLote/reset')
}

const setOrderBy = (orderBy: TOrderBy<TNfSaidaLoteFields>) => {
  state.setState({ orderBy }, false, {
    type: 'nfSaidaLote/setOrderBy',
    orderBy,
  })
}

const setSelection = (selection: TId<TNfSaidaLoteKeys>) => {
  if (deepEqual(selection, state.getState().selection)) {
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

const setWhere = (where: TWhere<TNfSaidaLoteFields>) => {
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
