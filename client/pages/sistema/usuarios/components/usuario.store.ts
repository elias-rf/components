import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { locationState } from '@/client/store/location_state.js'
import {
  TUsuarioDtoFields,
  TUsuarioDtoKeys,
} from '@/core/usuario/usuario.type.js'
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
  id: '',
  nome: '',
  email: '',
  setor: '',
  usuario: '',
  ativo: true,
} as TData<TUsuarioDtoFields>

type TState = {
  orderBy: TOrderBy<TUsuarioDtoFields>
  selection: TId<TUsuarioDtoKeys>
  status: TFormStatus
  where: TWhere<TUsuarioDtoFields>
}

const initialState: TState = {
  orderBy: [['nome', 'asc']] as TOrderBy<TUsuarioDtoFields>,
  selection: [] as TId<TUsuarioDtoKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TUsuarioDtoFields>,
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TUsuarioDtoFields>
  orderBy: TOrderBy<TUsuarioDtoFields>
  select: TSelect<TUsuarioDtoFields>
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

const fetchRecord = async ({
  selection,
}: {
  selection: TId<TUsuarioDtoKeys>
}) => {
  if (selection.length === 0) return recordClear
  const params = {
    where: selection,
    select: Object.keys(recordClear) as TUsuarioDtoKeys[],
  }
  const record = await rpc.request('usuario_read', params)
  for (const key in record) {
    record[key as TUsuarioDtoFields] = record[key as TUsuarioDtoFields] ?? ''
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

const onDelete = async (selection: TId<TUsuarioDtoKeys>) => {
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

const onSave = async (record: TData<TUsuarioDtoFields>) => {
  const data = filterNullProperties(record) as TData<TUsuarioDtoFields>
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('usuario_update', {
      data,
      where: state.getState().selection as TId<TUsuarioDtoKeys>,
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

const setOrderBy = (orderBy: TOrderBy<TUsuarioDtoFields>) => {
  state.setState({ orderBy }, false, { type: 'usuario/setOrderBy', orderBy })
}

const setSelection = (selection: TId<TUsuarioDtoKeys>) => {
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

const setWhere = (where: TWhere<TUsuarioDtoFields>) => {
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
