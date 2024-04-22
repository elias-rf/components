import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import {
  TGrupoSujeitoDtoFields,
  TGrupoSujeitoDtoKeys,
} from '@/data/oftalmo/grupo-sujeito/grupo-sujeito.type.js'

import {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelect,
  TWhere,
} from '@/types/index.js'
import { filterNullProperties } from '@/utils/object/filter-null-properties.js'
import { isEqual } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const recordClear = {
  grupoId: '',
  sujeitoId: '',
} as TData<TGrupoSujeitoDtoFields>

export type TState = {
  orderBy: TOrderBy<TGrupoSujeitoDtoFields>
  selection: TId<TGrupoSujeitoDtoKeys>
  status: TFormStatus
  where: TWhere<TGrupoSujeitoDtoFields>
}

const initialState: TState = {
  orderBy: [['grupoId', 'asc']] as TOrderBy<TGrupoSujeitoDtoFields>,
  selection: [] as TId<TGrupoSujeitoDtoKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TGrupoSujeitoDtoFields>,
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TGrupoSujeitoDtoFields>
  orderBy: TOrderBy<TGrupoSujeitoDtoFields>
  select: TSelect<TGrupoSujeitoDtoFields>
}) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const response = await rpc.request('grupoSujeito_list', params)

  return response
}

const fetchRecord = async ({
  selection,
}: {
  selection: TId<TGrupoSujeitoDtoKeys>
}) => {
  if (selection.length === 0) return recordClear

  const params = {
    where: selection,
    select: Object.keys(recordClear) as TGrupoSujeitoDtoKeys[],
  }
  return rpc.request('grupoSujeito_read', params)
}

const onCancel = () => {
  if (state.getState().status === 'new') {
    state.setState({ status: 'none' }, false, 'grupoSujeito/onCancel')
    return
  }
  state.setState({ status: 'view' }, false, 'grupoSujeito/onCancel')
}

const onDelete = async (selection: TId<TGrupoSujeitoDtoKeys>) => {
  await rpc.request('grupoSujeito_del', {
    where: selection,
  })
  state.setState({ selection: [], status: 'none' }, false, {
    type: 'grupoSujeito/onDelete',
    selection,
  })
}

const onEdit = () => {
  state.setState({ status: 'edit' }, false, 'grupoSujeito/onEdit')
}

const onNew = () => {
  state.setState({ status: 'new', selection: [] }, false, 'grupoSujeito/onNew')
}

const onSave = async (record: TData<TGrupoSujeitoDtoFields>) => {
  const data = filterNullProperties(record) as TData<TGrupoSujeitoDtoFields>
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('grupoSujeito_update', {
      data,
      where: state.getState().selection as TId<TGrupoSujeitoDtoKeys>,
    })
  }
  if (state.getState().status === 'new') {
    response = await rpc.request('grupoSujeito_create', {
      data,
    })
  }
  state.setState({ status: 'view' }, false, 'grupoSujeito/onSave')
  return response
}

const reset = () => {
  const resetState = structuredClone(initialState)
  state.setState(resetState, false, 'grupoSujeito/reset')
}

const setOrderBy = (orderBy: TOrderBy<TGrupoSujeitoDtoFields>) => {
  state.setState({ orderBy }, false, {
    type: 'grupoSujeito/setOrderBy',
    orderBy,
  })
}

const setSelection = (selection: TId<TGrupoSujeitoDtoKeys>) => {
  if (isEqual(selection, state.getState().selection)) {
    state.setState({ status: 'none', selection: [] }, false, {
      type: 'grupoSujeito/setSelection',
      selection,
    })
    return
  }
  state.setState({ status: 'view', selection }, false, {
    type: 'grupoSujeito/setSelection',
    selection,
  })
}

const setWhere = (where: TWhere<TGrupoSujeitoDtoFields>) => {
  state.setState({ where }, false, { type: 'grupoSujeito/setWhere', where })
}

locationState(state, ['selection', 'status', 'orderBy', 'where'])

export const grupoSujeitoStore = {
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

export type TGrupoSujeitoStore = typeof grupoSujeitoStore
