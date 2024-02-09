import { createSelectors } from '@/client/lib/create-selectors.js'
import { paramStorage } from '@/client/lib/param-storage.js'
import { rpc } from '@/client/lib/rpc.js'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/core/agenda-telefone_controller.js'
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
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

const recordClear = {
  id: '',
  name: '',
  email: '',
  department: '',
} as TData<TAgendaTelefoneFields>

export type TState = {
  orderBy: TOrderBy<TAgendaTelefoneFields>
  selection: TId<TAgendaTelefoneKeys>
  status: TFormStatus
  where: TWhere<TAgendaTelefoneFields>
}

const initialState: TState = {
  orderBy: [['id', 'asc']] as TOrderBy<TAgendaTelefoneFields>,
  selection: [] as TId<TAgendaTelefoneKeys>,
  status: 'none' as TFormStatus,
  where: [] as TWhere<TAgendaTelefoneFields>,
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
const fetchList = async ({
  where,
  orderBy,
  select,
}: {
  where: TWhere<TAgendaTelefoneFields>
  orderBy: TOrderBy<TAgendaTelefoneFields>
  select: TSelect<TAgendaTelefoneFields>
}) => {
  const params = {
    where,
    orderBy,
    select,
    limit: 100,
  }
  const response = await rpc.request('agendaTelefone_list', params)

  return response
}

const fetchRecord = async ({
  selection,
}: {
  selection: TId<TAgendaTelefoneKeys>
}) => {
  if (selection.length === 0) return recordClear

  const params = {
    where: selection,
    select: Object.keys(recordClear) as TAgendaTelefoneKeys[],
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

const onDelete = async (selection: TId<TAgendaTelefoneKeys>) => {
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

const onSave = async (record: TData<TAgendaTelefoneFields>) => {
  const data = filterNullProperties(record) as TData<TAgendaTelefoneFields>
  let response = {}
  if (state.getState().status === 'edit') {
    response = await rpc.request('agendaTelefone_update', {
      data,
      where: state.getState().selection as TId<TAgendaTelefoneKeys>,
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

const setOrderBy = (orderBy: TOrderBy<TAgendaTelefoneFields>) => {
  state.setState({ orderBy }, false, { type: 'agenda/setOrderBy', orderBy })
}

const setSelection = (selection: TId<TAgendaTelefoneKeys>) => {
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

const setWhere = (where: TWhere<TAgendaTelefoneFields>) => {
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

export type TAgendaTelefoneStore = typeof agendaTelefoneStore
