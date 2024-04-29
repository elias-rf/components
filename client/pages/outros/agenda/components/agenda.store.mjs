import { isEqual } from 'lodash-es'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { createSelectors } from '../../../../lib/create-selectors.mjs'
import { paramStorage } from '../../../../lib/param-storage.mjs'
import { rpc } from '../../../../lib/rpc.mjs'
import { filterNullProperties } from '../../../../utils/object/filter-null-properties.mjs'

const recordClear = {
  id: '',
  nome: '',
  email: '',
  setor: '',
}

const initialState = {
  orderBy: [['id', 'asc']],
  selection: [],
  status: 'none',
  where: [],
}

const state = createSelectors(
  create(
    persist(
      devtools(() => initialState),
      {
        name: 'agenda',
        storage: createJSONStorage(() => paramStorage),
      }
    )
  )
)
const fetchList = async ({ where, orderBy, select }) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const response = await rpc.request('agendaTelefone_list', params)

  return response
}

const fetchRecord = async ({ selection }) => {
  if (selection.length === 0) return recordClear

  const params = {
    where: selection,
    select: Object.keys(recordClear),
  }
  return rpc.request('agendaTelefone_read', params)
}

const onCancel = () => {
  if (state.getState().status === 'new') {
    state.setState({ status: 'none' }, false, 'agenda/onCancel')
    return
  }
  state.setState({ status: 'view' }, false, 'agenda/onCancel')
}

const onDelete = async (selection) => {
  await rpc.request('agendaTelefone_del', {
    where: selection,
  })
  state.setState({ selection: [], status: 'none' }, false, {
    type: 'agenda/onDelete',
    selection,
  })
}

const onEdit = () => {
  state.setState({ status: 'edit' }, false, 'agenda/onEdit')
}

const onNew = () => {
  state.setState({ status: 'new', selection: [] }, false, 'agenda/onNew')
}

const onSave = async (record) => {
  const data = filterNullProperties(record)
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('agendaTelefone_update', {
      data,
      where: state.getState().selection,
    })
  }
  if (state.getState().status === 'new') {
    response = await rpc.request('agendaTelefone_create', {
      data,
    })
  }
  state.setState({ status: 'view' }, false, 'agenda/onSave')
  return response
}

const reset = () => {
  const resetState = structuredClone(initialState)
  state.setState(resetState, false, 'agenda/reset')
}

const setOrderBy = (orderBy) => {
  state.setState({ orderBy }, false, { type: 'agenda/setOrderBy', orderBy })
}

const setSelection = (selection) => {
  if (isEqual(selection, state.getState().selection)) {
    state.setState({ status: 'none', selection: [] }, false, {
      type: 'agenda/setSelection',
      selection,
    })
    return
  }
  state.setState({ status: 'view', selection }, false, {
    type: 'agenda/setSelection',
    selection,
  })
}

const setWhere = (where) => {
  state.setState({ where }, false, { type: 'agenda/setWhere', where })
}

export const agendaTelefoneStore = {
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
