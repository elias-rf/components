import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import { TGroupFields, TGroupKeys } from '@/core/group_controller.js'
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
import { filterNullProperties } from '@/utils/object/filter-null-properties.js'
import { omit } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const tableName = 'group' as const

const recordClear = {
  kGrupo: '',
  NomeGrupo: '',
} as TData<TGroupFields>

type TState = {
  orderBy: TOrderBy<TGroupFields>
  selection: TId<TGroupKeys>
  status: TFormStatus
  where: TWhere<TGroupFields>
}

const initialState: TState = {
  orderBy: [['NomeGrupo', 'asc']] as TOrderBy<TGroupFields>,
  selection: [] as TId<TGroupKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TGroupFields>,
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TGroupFields>
  orderBy: TOrderBy<TGroupFields>
  select: TSelect<TGroupFields>
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

const fetchRecord = async ({ selection }: { selection: TId<TGroupKeys> }) => {
  if (selection.length === 0) return recordClear
  const params = {
    where: selection,
    select: Object.keys(recordClear) as TGroupKeys[],
  }
  const record = await rpc.request('group_read', params)
  for (const key in record) {
    record[key as TGroupFields] = record[key as TGroupFields] ?? ''
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

const onDelete = async (selection: TId<TGroupKeys>) => {
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

const onSave = async (record: TData<TGroupFields>) => {
  const data = filterNullProperties(record) as TData<TGroupFields>
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('group_update', {
      data,
      where: state.getState().selection as TId<TGroupKeys>,
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

const setOrderBy = (orderBy: TOrderBy<TGroupFields>) => {
  state.setState({ orderBy }, false, { type: 'grupo/setOrderBy', orderBy })
}

const setSelection = (selection: TId<TGroupKeys>) => {
  if (deepEqual(selection, state.getState().selection)) {
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

const setWhere = (where: TWhere<TGroupFields>) => {
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
