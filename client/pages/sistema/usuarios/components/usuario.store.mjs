import { isEqual } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createSelectors } from '../../../../lib/create-selectors.mjs'
import { rpc } from '../../../../lib/rpc.mjs'
import { locationState } from '../../../../store/location_state.mjs'
import { filterNullProperties } from '../../../../utils/object/filter-null-properties.mjs'

const recordClear = {
  id: '',
  nome: '',
  email: '',
  grupos: '',
  usuario: '',
  ativo: true,
}

const initialState = {
  orderBy: [['nome', 'asc']],
  selection: [],
  status: 'none',
  where: [],
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({ where, orderBy, select }) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const list = await rpc.request('usuario_list', params)
  return list
}

const fetchRecord = async ({ selection }) => {
  if (selection.length === 0) return recordClear
  const params = {
    where: selection,
    select: Object.keys(recordClear),
  }
  const record = await rpc.request('usuario_read', params)
  for (const key in record) {
    record[key] = record[key] ?? ''
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

const onDelete = async (selection) => {
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

const onSave = async (record) => {
  const data = filterNullProperties(record)
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('usuario_update', {
      data,
      where: state.getState().selection,
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

const setOrderBy = (orderBy) => {
  state.setState({ orderBy }, false, { type: 'usuario/setOrderBy', orderBy })
}

const setSelection = (selection) => {
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

const setWhere = (where) => {
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
