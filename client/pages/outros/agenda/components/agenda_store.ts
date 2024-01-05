import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone_controller.js'
import { TData, TFormStatus, TId, TOrderBy, TWhere } from '@/types/index.js'
import { copyProperties } from '@/utils/object/copy-properties.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

const tableName = 'agendaTelefone' as const

const recordClear = {
  id: '',
  name: '',
  email: '',
  department: '',
} as TData<TAgendaTelefoneFields>

type TState = {
  recordClear: TData<TAgendaTelefoneFields>
  list: TData<TAgendaTelefoneFields>[]
  orderBy: TOrderBy<TAgendaTelefoneFields>
  record: TData<TAgendaTelefoneFields>
  selection: TId<TAgendaTelefoneKeys>
  status: TFormStatus
  where: TWhere<TAgendaTelefoneFields>
}

const initialState: TState = {
  recordClear: recordClear,
  list: [] as TData<TAgendaTelefoneFields>[],
  orderBy: [['id', 'asc']] as TOrderBy<TAgendaTelefoneFields>,
  record: recordClear,
  selection: [] as TId<TAgendaTelefoneKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TAgendaTelefoneFields>,
}

const state = proxy(initialState)
devtools(state, { name: 'agenda', enabled: true })

const fetchList = async () => {
  const where = state.where as TWhere<TAgendaTelefoneFields>
  const orderBy = state.orderBy as TOrderBy<TAgendaTelefoneFields>
  const list = (await cache.memo(
    {
      where,
      orderBy,
      _table: tableName,
    },
    () =>
      rpc.request('agendaTelefone_list', {
        where,
        orderBy,
      })
  )) as TData<TAgendaTelefoneFields>[]
  state.list = list
  return list
}

const fetchRecord = async () => {
  const where = state.selection as TId<TAgendaTelefoneKeys>
  if (where.length === 0) return recordClear
  const record = (await cache.memo(
    {
      where,
      select: Object.keys(recordClear),
      _table: tableName,
    },
    () =>
      rpc.request('agendaTelefone_read', {
        where,
        select: Object.keys(recordClear) as TAgendaTelefoneKeys[],
      })
  )) as TData<TAgendaTelefoneFields>
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
  await rpc.request('agendaTelefone_del', {
    where: state.selection,
  })
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
  if (state.status === 'edit') {
    await rpc.request('agendaTelefone_update', {
      data: state.record as TData<TAgendaTelefoneFields>,
      where: state.selection as TId<TAgendaTelefoneKeys>,
    })
  }
  if (state.status === 'new') {
    await rpc.request('agendaTelefone_create', {
      data: state.record as TData<TAgendaTelefoneFields>,
    })
  }
  await fetchList()
  state.status = 'view'
}

const reset = () => {
  const resetState = structuredClone(initialState)
  copyProperties(resetState, state)
}

const setOrderBy = (orderBy: TOrderBy<TAgendaTelefoneFields>) => {
  state.orderBy = orderBy
}

const setRecord = (record: TData<TAgendaTelefoneFields>) => {
  state.record = record
}

const setSelection = (selection: TId<TAgendaTelefoneKeys>) => {
  if (deepEqual(selection, state.selection)) {
    state.selection = []
    state.status = 'none'

    return
  }
  state.selection = selection
  state.status = 'view'
}

const setWhere = (where: TWhere<TAgendaTelefoneFields>) => {
  // where = whereType(where, 'id', 'int')
  state.where = where
}

export const agendaTelefoneStore = {
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

export type TAgendaTelefoneStore = typeof agendaTelefoneStore
