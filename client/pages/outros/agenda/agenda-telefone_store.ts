import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone_controller.js'
import { TData, TFormStatus, TId, TOrderBy, TWhere } from '@/types/index.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { proxy } from 'valtio'

const tableName = 'agendaTelefone' as const

const recordClear = {
  id: '',
  name: '',
  email: '',
  department: '',
} as TData<TAgendaTelefoneFields>

const state = proxy({
  recordClear: recordClear,
  list: [] as TData<TAgendaTelefoneFields>[],
  orderBy: [['id', 'asc']] as TOrderBy<TAgendaTelefoneFields>,
  record: recordClear,
  selection: [] as TId<TAgendaTelefoneKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TAgendaTelefoneFields>,
})

const onNew = () => {
  state.record = state.recordClear
  state.status = 'new'
  state.selection = []
}

const onEdit = () => {
  state.status = 'edit'
}

const onCancel = () => {
  if (state.status === 'new') {
    state.status = 'none'
    return
  }
  state.status = 'view'
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
      _table: tableName,
    },
    () => rpc.request('agendaTelefone_read', { where })
  )) as TData<TAgendaTelefoneFields>
  state.record = record
  return record
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

const onDelete = async () => {
  cache.purgeTable(tableName)
  await rpc.request('agendaTelefone_del', {
    where: state.selection as TId<TAgendaTelefoneKeys>,
  })
  await fetchList()
  state.record = state.recordClear
  state.selection = []
  state.status = 'none'
}

export const agendaTelefoneStore = {
  state,
  fetchList,
  fetchRecord,
  onDelete,
  onSave,
  onCancel,
  onEdit,
  onNew,
  setSelection,
}

export type TAgendaTelefoneStore = typeof agendaTelefoneStore
