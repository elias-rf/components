import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import {
  TGroupDtoFields,
  TGroupDtoKeys,
} from '@/data/oftalmo/grupo/group.type.js'

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

const tableName = 'group' as const

const recordClear = {
  id: '',
  nome: '',
} as TData<TGroupDtoFields>

type TState = {
  orderBy: TOrderBy<TGroupDtoFields>
  selection: TId<TGroupDtoKeys>
  status: TFormStatus
  where: TWhere<TGroupDtoFields>
}

const initialState: TState = {
  orderBy: [['nome', 'asc']] as TOrderBy<TGroupDtoFields>,
  selection: [] as TId<TGroupDtoKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TGroupDtoFields>,
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TGroupDtoFields>
  orderBy: TOrderBy<TGroupDtoFields>
  select: TSelect<TGroupDtoFields>
}) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const list = await rpc.request('group_list', params)
  return list
}

const fetchRecord = async ({
  selection,
}: {
  selection: TId<TGroupDtoKeys>
}) => {
  if (selection.length === 0) return recordClear
  const params = {
    where: selection,
    select: Object.keys(recordClear) as TGroupDtoKeys[],
  }
  const record = await rpc.request('group_read', params)
  for (const key in record) {
    record[key as TGroupDtoFields] = record[key as TGroupDtoFields] ?? ''
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

const onDelete = async (selection: TId<TGroupDtoKeys>) => {
  await rpc.request('group_del', {
    where: selection,
  })
  state.setState({ selection: [], status: 'none' }, false, {
    type: 'group/onDelete',
    selection,
  })
}

const onEdit = () => {
  state.setState({ status: 'edit' }, false, 'group/onEdit')
}

const onNew = () => {
  state.setState({ status: 'new', selection: [] }, false, 'group/onNew')
}

const onSave = async (record: TData<TGroupDtoFields>) => {
  const data = filterNullProperties(record) as TData<TGroupDtoFields>
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('group_update', {
      data,
      where: state.getState().selection as TId<TGroupDtoKeys>,
    })
  }
  if (state.getState().status === 'new') {
    response = await rpc.request('group_create', {
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

const setOrderBy = (orderBy: TOrderBy<TGroupDtoFields>) => {
  state.setState({ orderBy }, false, { type: 'grupo/setOrderBy', orderBy })
}

const setSelection = (selection: TId<TGroupDtoKeys>) => {
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

const setWhere = (where: TWhere<TGroupDtoFields>) => {
  state.setState({ where }, false, { type: 'usuario/setWhere', where })
}

locationState(state, ['selection', 'status', 'orderBy', 'where'])

export const groupStore = {
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

export type TGroupStore = typeof groupStore
