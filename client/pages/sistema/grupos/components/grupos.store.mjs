import { isEqual } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createSelectors } from '../../../../lib/create-selectors.mjs'
import { rpc } from '../../../../lib/rpc.mjs'
import { locationState } from '../../../../store/location_state.mjs'
import { filterNullProperties } from '../../../../utils/object/filter-null-properties.mjs'

const tableName = 'grupo'

const recordClear = {
  id: '',
  nome: '',
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
  const list = await rpc.request('grupo_list', params)
  return list
}

const fetchRecord = async ({ selection }) => {
  if (selection.length === 0) return recordClear
  const params = {
    where: selection,
    select: Object.keys(recordClear),
  }
  const record = await rpc.request('grupo_read', params)
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
  await rpc.request('grupo_del', {
    where: selection,
  })
  state.setState({ selection: [], status: 'none' }, false, {
    type: 'grupo/onDelete',
    selection,
  })
}

const onEdit = () => {
  state.setState({ status: 'edit' }, false, 'grupo/onEdit')
}

const onNew = () => {
  state.setState({ status: 'new', selection: [] }, false, 'grupo/onNew')
}

const onSave = async (record) => {
  const data = filterNullProperties(record)
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('grupo_update', {
      data,
      where: state.getState().selection,
    })
  }
  if (state.getState().status === 'new') {
    response = await rpc.request('grupo_create', {
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

const setOrderBy = (orderBy) => {
  state.setState({ orderBy }, false, { type: 'grupo/setOrderBy', orderBy })
}

const setSelection = (selection) => {
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

const setWhere = (where) => {
  state.setState({ where }, false, { type: 'usuario/setWhere', where })
}

locationState(state, ['selection', 'status', 'orderBy', 'where'])

export const grupoStore = {
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
