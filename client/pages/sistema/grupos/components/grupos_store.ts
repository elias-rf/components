import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import { TGroupFields, TGroupKeys } from '@/core/group_controller.js'
import { TData, TFormStatus, TId, TOrderBy, TWhere } from '@/types/index.js'
import { copyProperties } from '@/utils/object/copy-properties.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { omit } from '@/utils/object/omit.js'
import { proxy } from 'valtio'

const tableName = 'group' as const

const recordClear = {
  kGrupo: '',
  NomeGrupo: '',
} as TData<TGroupFields>

type TState = {
  recordClear: TData<TGroupFields>
  list: TData<TGroupFields>[]
  orderBy: TOrderBy<TGroupFields>
  record: TData<TGroupFields>
  selection: TId<TGroupKeys>
  status: TFormStatus
  where: TWhere<TGroupFields>
}

const initialState: TState = {
  recordClear: recordClear,
  list: [] as TData<TGroupFields>[],
  orderBy: [['NomeGrupo', 'asc']] as TOrderBy<TGroupFields>,
  record: recordClear,
  selection: [] as TId<TGroupKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TGroupFields>,
}

const state = proxy(initialState)

const fetchList = async () => {
  const where = state.where as TWhere<TGroupFields>
  const orderBy = state.orderBy as TOrderBy<TGroupFields>
  const list = (await cache.memo(
    {
      where,
      orderBy,
      _table: tableName,
    },
    () =>
      rpc.request('group_list', {
        where,
        orderBy,
      })
  )) as TData<TGroupFields>[]
  state.list = list
  return list
}

const fetchRecord = async () => {
  const where = state.selection as TId<TGroupKeys>
  if (where.length === 0) return recordClear
  const record = (await cache.memo(
    {
      where,
      select: Object.keys(recordClear),
      _table: tableName,
    },
    () =>
      rpc.request('group_read', {
        where,
        select: Object.keys(recordClear) as TGroupKeys[],
      })
  )) as TData<TGroupFields>
  state.record = record
  return record
}

const onCancel = () => {
  if (state.status === 'new') {
    state.status = 'none'
    return
  }
  state.status = 'view'
}

const onDelete = async () => {
  cache.purgeTable(tableName)
  await rpc.request('group_del', { where: state.selection })
  await fetchList()
  state.record = state.recordClear
  state.selection = []
  state.status = 'none'
}

const onEdit = () => {
  state.status = 'edit'
}

const onNew = () => {
  state.record = state.recordClear
  state.status = 'new'
  state.selection = []
}

const onSave = async () => {
  cache.purgeTable(tableName)
  const data = omit(state.record || {}, ['kGrupo'])

  if (state.status === 'edit') {
    await rpc.request('group_update', {
      data,
      where: state.selection,
    })
  }
  if (state.status === 'new') {
    await rpc.request('group_create', { data })
  }
  await fetchList()
  state.status = 'view'
}

const reset = () => {
  const resetState = structuredClone(initialState)
  copyProperties(resetState, state)
}

const setOrderBy = (orderBy: TOrderBy<TGroupFields>) => {
  state.orderBy = orderBy
}

const setRecord = (record: TData<TGroupFields>) => {
  state.record = record
}

const setSelection = (selection: TId<TGroupKeys>) => {
  if (deepEqual(selection, state.selection)) {
    state.selection = []
    state.status = 'none'

    return
  }
  state.selection = selection
  state.status = 'view'
}

const setWhere = (where: TWhere<TGroupFields>) => {
  // where = whereType(where, 'id', 'int')
  state.where = where
}

export const groupStore = {
  state,
  fetchList,
  fetchRecord,
  onCancel,
  onDelete,
  onEdit,
  onNew,
  onSave,
  reset,
  setOrderBy,
  setRecord,
  setSelection,
  setWhere,
}

export type TGroupStore = typeof groupStore
