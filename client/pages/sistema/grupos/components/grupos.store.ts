import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import {
  TGrupoDtoFields,
  TGrupoDtoKeys,
} from '@/data/oftalmo/grupo/grupo.type.js'

import {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelect,
  TWhere,
} from '@/types/index.js'
import { filterNullProperties } from '@/utils/object/filter-null-properties.mjs'
import { isEqual } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const tableName = 'grupo' as const

const recordClear = {
  id: '',
  nome: '',
} as TData<TGrupoDtoFields>

type TState = {
  orderBy: TOrderBy<TGrupoDtoFields>
  selection: TId<TGrupoDtoKeys>
  status: TFormStatus
  where: TWhere<TGrupoDtoFields>
}

const initialState: TState = {
  orderBy: [['nome', 'asc']] as TOrderBy<TGrupoDtoFields>,
  selection: [] as TId<TGrupoDtoKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TGrupoDtoFields>,
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TGrupoDtoFields>
  orderBy: TOrderBy<TGrupoDtoFields>
  select: TSelect<TGrupoDtoFields>
}) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const list = await rpc.request('grupo_list', params)
  return list
}

const fetchRecord = async ({
  selection,
}: {
  selection: TId<TGrupoDtoKeys>
}) => {
  if (selection.length === 0) return recordClear
  const params = {
    where: selection,
    select: Object.keys(recordClear) as TGrupoDtoKeys[],
  }
  const record = await rpc.request('grupo_read', params)
  for (const key in record) {
    record[key as TGrupoDtoFields] = record[key as TGrupoDtoFields] ?? ''
  }
  return record
}

const onCancel = () => {
  if (state.getState().status === 'new') {
    state.setState({ status: 'none' }, false, 'usuario/onCancel')
    return
  }
  state.setState({ status: 'view' }, false, 'usuario/onCancel')
}

const onDelete = async (selection: TId<TGrupoDtoKeys>) => {
  await rpc.request('grupo_del', {
    where: selection,
  })
  state.setState({ selection: [], status: 'none' }, false, {
    type: 'grupo/onDelete',
    selection,
  })
}

const onEdit = () => {
  state.setState({ status: 'edit' }, false, 'grupo/onEdit')
}

const onNew = () => {
  state.setState({ status: 'new', selection: [] }, false, 'grupo/onNew')
}

const onSave = async (record: TData<TGrupoDtoFields>) => {
  const data = filterNullProperties(record) as TData<TGrupoDtoFields>
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('grupo_update', {
      data,
      where: state.getState().selection as TId<TGrupoDtoKeys>,
    })
  }
  if (state.getState().status === 'new') {
    response = await rpc.request('grupo_create', {
      data,
    })
  }
  state.setState({ status: 'view' }, false, 'grupo_onSave')
  return response
}

const reset = () => {
  const resetState = structuredClone(initialState)
  state.setState(resetState, false, 'grupo/reset')
}

const setOrderBy = (orderBy: TOrderBy<TGrupoDtoFields>) => {
  state.setState({ orderBy }, false, { type: 'grupo/setOrderBy', orderBy })
}

const setSelection = (selection: TId<TGrupoDtoKeys>) => {
  if (isEqual(selection, state.getState().selection)) {
    state.setState({ status: 'none', selection: [] }, false, {
      type: 'grupo/setSelection',
      selection,
    })
    return
  }
  state.setState({ status: 'view', selection }, false, {
    type: 'grupo/setSelection',
    selection,
  })
}

const setWhere = (where: TWhere<TGrupoDtoFields>) => {
  state.setState({ where }, false, { type: 'usuario/setWhere', where })
}

locationState(state, ['selection', 'status', 'orderBy', 'where'])

export const grupoStore = {
  state,
  recordClear,
  fetchList,
  fetchRecord,
  onCancel,
  onDelete,
  onEdit,
  onNew,
  onSave,
  reset,
  setOrderBy,
  setSelection,
  setWhere,
}

export type TGrupoStore = typeof grupoStore
