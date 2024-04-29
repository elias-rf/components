import { isEqual } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createSelectors } from '../../../../lib/create-selectors.mjs'
import { rpc } from '../../../../lib/rpc.mjs'
import { locationState } from '../../../../store/location_state.mjs'
import { filterNullProperties } from '../../../../utils/object/filter-null-properties.mjs'

const recordClear = {
  grupoId: '',
  sujeitoId: '',
}

const initialState = {
  orderBy: [['grupoId', 'asc']],
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
  const response = await rpc.request('grupoSujeito_list', params)

  return response
}

const fetchRecord = async ({ selection }) => {
  if (selection.length === 0) return recordClear

  const params = {
    where: selection,
    select: Object.keys(recordClear),
  }
  return rpc.request('grupoSujeito_read', params)
}

const onCancel = () => {
  if (state.getState().status === 'new') {
    state.setState({ status: 'none' }, false, 'grupoSujeito/onCancel')
    return
  }
  state.setState({ status: 'view' }, false, 'grupoSujeito/onCancel')
}

const onDelete = async (selection) => {
  await rpc.request('grupoSujeito_del', {
    where: selection,
  })
  state.setState({ selection: [], status: 'none' }, false, {
    type: 'grupoSujeito/onDelete',
    selection,
  })
}

const onEdit = () => {
  state.setState({ status: 'edit' }, false, 'grupoSujeito/onEdit')
}

const onNew = () => {
  state.setState({ status: 'new', selection: [] }, false, 'grupoSujeito/onNew')
}

const onSave = async (record) => {
  const data = filterNullProperties(record)
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('grupoSujeito_update', {
      data,
      where: state.getState().selection,
    })
  }
  if (state.getState().status === 'new') {
    response = await rpc.request('grupoSujeito_create', {
      data,
    })
  }
  state.setState({ status: 'view' }, false, 'grupoSujeito/onSave')
  return response
}

const reset = () => {
  const resetState = structuredClone(initialState)
  state.setState(resetState, false, 'grupoSujeito/reset')
}

const setOrderBy = (orderBy) => {
  state.setState({ orderBy }, false, {
    type: 'grupoSujeito/setOrderBy',
    orderBy,
  })
}

const setSelection = (selection) => {
  if (isEqual(selection, state.getState().selection)) {
    state.setState({ status: 'none', selection: [] }, false, {
      type: 'grupoSujeito/setSelection',
      selection,
    })
    return
  }
  state.setState({ status: 'view', selection }, false, {
    type: 'grupoSujeito/setSelection',
    selection,
  })
}

const setWhere = (where) => {
  state.setState({ where }, false, { type: 'grupoSujeito/setWhere', where })
}

locationState(state, ['selection', 'status', 'orderBy', 'where'])

export const grupoSujeitoStore = {
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
