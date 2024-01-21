import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import {
  TNfSaidaLoteFields,
  TNfSaidaLoteKeys,
} from '@/core/nf-saida-lote_controller.js'
import { TData, TFormStatus, TId, TOrderBy, TWhere } from '@/types/index.js'
import { copyProperties } from '@/utils/object/copy-properties.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

const tableName = 'nfSaidaLote' as const

const recordClear = {
  CdFilial: '',
  NumNota: '',
  Serie: '',
  Modelo: '',
} as TData<TNfSaidaLoteFields>

type TState = {
  recordClear: TData<TNfSaidaLoteFields>
  list: TData<TNfSaidaLoteFields>[]
  orderBy: TOrderBy<TNfSaidaLoteFields>
  record: TData<TNfSaidaLoteFields>
  selection: TId<TNfSaidaLoteKeys>
  status: TFormStatus
  where: TWhere<TNfSaidaLoteFields>
}

const initialState: TState = {
  recordClear: recordClear,
  list: [] as TData<TNfSaidaLoteFields>[],
  orderBy: [['NumLote', 'desc']] as TOrderBy<TNfSaidaLoteFields>,
  record: recordClear,
  selection: [] as TId<TNfSaidaLoteKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TNfSaidaLoteFields>,
}

const state = proxy(initialState)
devtools(state, { name: 'agenda', enabled: true })

const fetchList = async () => {
  const where = state.where as TWhere<TNfSaidaLoteFields>
  const orderBy = state.orderBy as TOrderBy<TNfSaidaLoteFields>
  const params = {
    where,
    orderBy,
    select: [
      'CdFilial',
      'NumNota',
      'DtEmissao',
      'CdProduto',
      'NumLote',
      'Sequencia',
    ],
    include: {
      produto: ['Descricao'],
      nfSaida: ['CdCliente', 'Tipo'],
      'nfSaida.cliente': ['RzSocial', 'Uf'],
    },
    limit: 200,
  }
  const list = (await cache.memo(
    {
      params,
      tables: [tableName],
      rpc: 'nfSaidaLote_list',
    },
    () => rpc.request('nfSaidaLote_list', params)
  )) as TData<TNfSaidaLoteFields>[]
  state.list = list
  return list
}

const reset = () => {
  const resetState = structuredClone(initialState)
  copyProperties(resetState, state)
}

const setOrderBy = (orderBy: TOrderBy<TNfSaidaLoteFields>) => {
  state.orderBy = orderBy
}

const setRecord = (record: TData<TNfSaidaLoteFields>) => {
  state.record = record
}

const setSelection = (selection: TId<TNfSaidaLoteKeys>) => {
  if (deepEqual(selection, state.selection)) {
    state.selection = []
    state.status = 'none'

    return
  }
  state.selection = selection
  state.status = 'view'
}

const setWhere = (where: TWhere<TNfSaidaLoteFields>) => {
  // where = whereType(where, 'id', 'int')
  state.where = where
}

export const lotesSaidaStore = {
  state,
  fetchList,
  reset,
  setOrderBy,
  setRecord,
  setSelection,
  setWhere,
}

export type TLotesSaidaStore = typeof lotesSaidaStore
