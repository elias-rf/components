import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import { TUsuarioFields, TUsuarioKeys } from '@/core/usuario_controller.js'
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
  kUsuario: '',
  nome: '',
  email: '',
  setor: '',
  fkFuncionario: '',
  NomeUsuario: '',
  Ativo: true,
} as TData<TUsuarioFields>

type TState = {
  orderBy: TOrderBy<TUsuarioFields>
  selection: TId<TUsuarioKeys>
  status: TFormStatus
  where: TWhere<TUsuarioFields>
}

const initialState: TState = {
  orderBy: [['nome', 'asc']] as TOrderBy<TUsuarioFields>,
  selection: [] as TId<TUsuarioKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TUsuarioFields>,
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TUsuarioFields>
  orderBy: TOrderBy<TUsuarioFields>
  select: TSelect<TUsuarioFields>
}) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const list = await rpc.request('usuario_list', params)
  return list
}

const fetchRecord = async ({ selection }: { selection: TId<TUsuarioKeys> }) => {
  if (selection.length === 0) return recordClear
  const params = {
    where: selection,
    select: Object.keys(recordClear) as TUsuarioKeys[],
  }
  const record = await rpc.request('usuario_read', params)
  for (const key in record) {
    record[key as TUsuarioFields] = record[key as TUsuarioFields] ?? ''
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

const onDelete = async (selection: TId<TUsuarioKeys>) => {
  await rpc.request('usuario_del', {
    where: selection,
  })
  state.setState({ selection: [], status: 'none' }, false, {
    type: 'usuario/onDelete',
    selection,
  })
}

const onEdit = () => {
  state.setState({ status: 'edit' }, false, 'usuario/onEdit')
}

const onNew = () => {
  state.setState({ status: 'new', selection: [] }, false, 'usuario/onNew')
}

const onSave = async (record: TData<TUsuarioFields>) => {
  const data = filterNullProperties(record) as TData<TUsuarioFields>
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('usuario_update', {
      data,
      where: state.getState().selection as TId<TUsuarioKeys>,
    })
  }
  if (state.getState().status === 'new') {
    response = await rpc.request('usuario_create', {
      data,
    })
  }
  state.setState({ status: 'view' }, false, 'usuario/onSave')
  return response
}

const reset = () => {
  const resetState = structuredClone(initialState)
  state.setState(resetState, false, 'usuario/reset')
}

const setOrderBy = (orderBy: TOrderBy<TUsuarioFields>) => {
  state.setState({ orderBy }, false, { type: 'usuario/setOrderBy', orderBy })
}

const setSelection = (selection: TId<TUsuarioKeys>) => {
  if (isEqual(selection, state.getState().selection)) {
    state.setState({ status: 'none', selection: [] }, false, {
      type: 'usuario/setSelection',
      selection,
    })
    return
  }
  state.setState({ status: 'view', selection }, false, {
    type: 'usuario/setSelection',
    selection,
  })
}

const setWhere = (where: TWhere<TUsuarioFields>) => {
  state.setState({ where }, false, { type: 'usuario/setWhere', where })
}

locationState(state, ['selection', 'status', 'orderBy', 'where'])

export const usuarioStore = {
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

export type TUsuarioStore = typeof usuarioStore
