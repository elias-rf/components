import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import {
  TGroupSubjectFields,
  TGroupSubjectKeys,
} from '@/core/group-subject_controller.js'
import {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelect,
  TWhere,
} from '@/types/index.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { filterNullProperties } from '@/utils/object/filter-null-properties.js'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const recordClear = {
  idGroup: '',
  idSubject: '',
} as TData<TGroupSubjectFields>

export type TState = {
  orderBy: TOrderBy<TGroupSubjectFields>
  selection: TId<TGroupSubjectKeys>
  status: TFormStatus
  where: TWhere<TGroupSubjectFields>
}

const initialState: TState = {
  orderBy: [['idGroup', 'asc']] as TOrderBy<TGroupSubjectFields>,
  selection: [] as TId<TGroupSubjectKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TGroupSubjectFields>,
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TGroupSubjectFields>
  orderBy: TOrderBy<TGroupSubjectFields>
  select: TSelect<TGroupSubjectFields>
}) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const response = await rpc.request('groupSubject_list', params)

  return response
}

const fetchRecord = async ({
  selection,
}: {
  selection: TId<TGroupSubjectKeys>
}) => {
  if (selection.length === 0) return recordClear

  const params = {
    where: selection,
    select: Object.keys(recordClear) as TGroupSubjectKeys[],
  }
  return rpc.request('groupSubject_read', params)
}

const onCancel = () => {
  if (state.getState().status === 'new') {
    state.setState({ status: 'none' }, false, 'groupSubject/onCancel')
    return
  }
  state.setState({ status: 'view' }, false, 'groupSubject/onCancel')
}

const onDelete = async (selection: TId<TGroupSubjectKeys>) => {
  await rpc.request('groupSubject_del', {
    where: selection,
  })
  state.setState({ selection: [], status: 'none' }, false, {
    type: 'groupSubject/onDelete',
    selection,
  })
}

const onEdit = () => {
  state.setState({ status: 'edit' }, false, 'groupSubject/onEdit')
}

const onNew = () => {
  state.setState({ status: 'new', selection: [] }, false, 'groupSubject/onNew')
}

const onSave = async (record: TData<TGroupSubjectFields>) => {
  const data = filterNullProperties(record) as TData<TGroupSubjectFields>
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('groupSubject_update', {
      data,
      where: state.getState().selection as TId<TGroupSubjectKeys>,
    })
  }
  if (state.getState().status === 'new') {
    response = await rpc.request('groupSubject_create', {
      data,
    })
  }
  state.setState({ status: 'view' }, false, 'groupSubject/onSave')
  return response
}

const reset = () => {
  const resetState = structuredClone(initialState)
  state.setState(resetState, false, 'groupSubject/reset')
}

const setOrderBy = (orderBy: TOrderBy<TGroupSubjectFields>) => {
  state.setState({ orderBy }, false, {
    type: 'groupSubject/setOrderBy',
    orderBy,
  })
}

const setSelection = (selection: TId<TGroupSubjectKeys>) => {
  if (deepEqual(selection, state.getState().selection)) {
    state.setState({ status: 'none', selection: [] }, false, {
      type: 'groupSubject/setSelection',
      selection,
    })
    return
  }
  state.setState({ status: 'view', selection }, false, {
    type: 'groupSubject/setSelection',
    selection,
  })
}

const setWhere = (where: TWhere<TGroupSubjectFields>) => {
  state.setState({ where }, false, { type: 'groupSubject/setWhere', where })
}

locationState(state, ['selection', 'status', 'orderBy', 'where'])

export const groupSubjectStore = {
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

export type TGroupSubjectStore = typeof groupSubjectStore
