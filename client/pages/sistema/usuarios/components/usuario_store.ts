import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import { TUsuarioFields, TUsuarioKeys } from '@/core/usuario_controller.js'
import { TData, TFormStatus, TId, TOrderBy, TWhere } from '@/types/index.js'
import { copyProperties } from '@/utils/object/copy-properties.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { omit } from '@/utils/object/omit.js'
import { proxy } from 'valtio'

const tableName = 'usuario' as const

const recordClear = {
  kUsuario: '',
  nome: '',
  email: '',
  setor: '',
  fkFuncionario: '',
  NomeUsuario: '',
  Ativo: true,
} as TData<TUsuarioFields>

type TState = {
  recordClear: TData<TUsuarioFields>
  list: TData<TUsuarioFields>[]
  orderBy: TOrderBy<TUsuarioFields>
  record: TData<TUsuarioFields>
  selection: TId<TUsuarioKeys>
  status: TFormStatus
  where: TWhere<TUsuarioFields>
}

const initialState: TState = {
  recordClear: recordClear,
  list: [] as TData<TUsuarioFields>[],
  orderBy: [['nome', 'asc']] as TOrderBy<TUsuarioFields>,
  record: recordClear,
  selection: [] as TId<TUsuarioKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TUsuarioFields>,
}

const state = proxy(initialState)

const fetchList = async () => {
  const where = state.where as TWhere<TUsuarioFields>
  const orderBy = state.orderBy as TOrderBy<TUsuarioFields>
  const list = (await cache.memo(
    {
      where,
      orderBy,
      _table: tableName,
    },
    () =>
      rpc.request('usuario_list', {
        where,
        orderBy,
      })
  )) as TData<TUsuarioFields>[]
  state.list = list
  return list
}

const fetchRecord = async () => {
  const where = state.selection as TId<TUsuarioKeys>
  if (where.length === 0) return recordClear

  const record = (await cache.memo(
    {
      where,
      select: Object.keys(recordClear),
      _table: tableName,
    },

    () =>
      rpc.request('usuario_read', {
        where,
        select: Object.keys(recordClear) as TUsuarioKeys[],
      })
  )) as TData<TUsuarioFields>
  for (const key in record) {
    record[key as TUsuarioFields] = record[key as TUsuarioFields] ?? ''
  }
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
  await rpc.request('usuario_del', { where: state.selection })
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
  const record = omit(state.record, ['kUsuario'])
  if (record.fkFuncionario === '') {
    record.fkFuncionario = null
  }
  if (state.status === 'edit') {
    await rpc.request('usuario_update', {
      data: record,
      where: state.selection,
    })
  }
  if (state.status === 'new') {
    await rpc.request('usuario_create', { data: record })
  }
  await fetchList()
  state.status = 'view'
}

const reset = () => {
  const resetState = structuredClone(initialState)
  copyProperties(resetState, state)
}

const setOrderBy = (orderBy: TOrderBy<TUsuarioFields>) => {
  state.orderBy = orderBy
}

const setRecord = (record: TData<TUsuarioFields>) => {
  state.record = record
}

const setSelection = (selection: TId<TUsuarioKeys>) => {
  if (deepEqual(selection, state.selection)) {
    state.selection = []
    state.status = 'none'

    return
  }
  state.selection = selection
  state.status = 'view'
}
const setWhere = (where: TWhere<TUsuarioFields>) => {
  // where = whereType(where, 'id', 'int')
  state.where = where
}

export const usuarioStore = {
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

export type TUsuarioStore = typeof usuarioStore
