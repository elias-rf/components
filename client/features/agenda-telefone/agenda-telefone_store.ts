import { cache } from '@/client/lib/cache'
import { createSelectors } from '@/client/lib/create-selectors'
import { formButtonStatus } from '@/client/lib/form-button-status'
import { whereType } from '@/client/lib/where-type'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone.controller'
import { rpc } from '@/rpc/rpc-client'
import {
  TData,
  TFormButtonStatus,
  TFormStatus,
  TOrderBy,
  TSelection,
  TWhere,
} from '@/types'
import { deepEqual } from '@/utils/object/deep-equal'
import { UseFormReturn } from 'react-hook-form'
import { create } from 'zustand'

const recordClear = {
  id: '',
  name: '',
  email: '',
  department: '',
}

interface AgendaTelefoneState {
  fetchList: () => Promise<TData<TAgendaTelefoneFields>[]> // store
  fetchRecord: () => Promise<TData<TAgendaTelefoneFields>> // store
  form: UseFormReturn<typeof recordClear, any> | undefined // store
  formButtonStatus: () => TFormButtonStatus // head form
  handleCancel: () => void // form
  handleDelete: () => void // form
  handleEdit: () => void // form
  handleNew: () => void // head
  handleSave: () => void // form
  list: TData<TAgendaTelefoneFields>[] // table
  orderBy: TOrderBy<TAgendaTelefoneFields> // table
  record: TData<TAgendaTelefoneFields> // store
  recordClear: typeof recordClear // form
  // resetRecord: () => void
  selection: TSelection<TAgendaTelefoneKeys> // table
  setForm: (form: UseFormReturn<typeof recordClear, any>) => void // form
  setOrderBy: (orderBy: TOrderBy<TAgendaTelefoneFields>) => void // table
  setSelection: (selection: TSelection<TAgendaTelefoneKeys>) => void // table
  // setStatus: (status: TFormStatus) => void
  setWhere: (where: TWhere<TAgendaTelefoneFields>) => void // table
  status: TFormStatus // store
  where: TWhere<TAgendaTelefoneFields> // table
}

const useAgendaTelefoneBase = create<AgendaTelefoneState>()((set, get) => ({
  form: undefined,
  status: 'none',
  list: [],
  record: recordClear,
  recordClear: recordClear,
  where: [],
  orderBy: [['id', 'asc']],
  selection: [],
  formButtonStatus: () => formButtonStatus(get().status),
  // setStatus: (status) => {
  //   set(() => ({ status }))
  // },
  setWhere: (where) => {
    where = whereType(where, 'id', 'int')

    set(() => ({ where }))
    get().fetchList()
  },

  setOrderBy: (orderBy) => {
    set(() => ({ orderBy }))
    get().fetchList()
  },

  setSelection: (selection) => {
    if (deepEqual(selection, get().selection)) {
      set(() => ({ selection: [], status: 'none' }))
      return
    }
    set(() => ({ selection, status: 'view' }))
    get().fetchRecord()
  },

  setForm: (form) => {
    set(() => ({ form }))
  },

  // resetRecord: () => {
  //   set(() => ({ record: recordClear }))
  //   get().form?.reset(recordClear)
  // },

  fetchList: async () => {
    const list = (await cache.fetch(
      { where: get().where, orderBy: get().orderBy, table: 'agendaTelefone' },
      {
        context: {
          method: rpc.agendaTelefone.list,
          name: 'agendaTelefone.list',
        },
      }
    )) as TData<TAgendaTelefoneFields>[]
    set(() => ({ list }))
    return list
  },

  fetchRecord: async () => {
    const id = get().selection
    if (id.length === 0) return recordClear
    const record = (await cache.fetch(
      { id: get().selection, table: 'agendaTelefone' },
      {
        context: {
          method: rpc.agendaTelefone.read,
          name: 'agendaTelefone.read',
        },
      }
    )) as TData<TAgendaTelefoneFields>
    set(() => ({ record }))
    get().form?.reset(record)
    return record
  },
  handleNew: () => {
    set(() => ({ record: recordClear, status: 'new', selection: [] }))
  },
  handleEdit: () => {
    set(() => ({ status: 'edit' }))
  },
  handleSave: async () => {
    if (get().status === 'edit') {
      cache.purgeTable('agendaTelefone')
      await rpc.agendaTelefone.update({
        data: get().form?.getValues() || {},
        id: get().selection,
      })
    }
    if (get().status === 'new') {
      cache.purgeTable('agendaTelefone')
      await rpc.agendaTelefone.create({ data: get().form?.getValues() || {} })
    }
    await get().fetchList()
    set(() => ({ status: 'view' }))
  },
  handleDelete: async () => {
    cache.purgeTable('agendaTelefone')
    await rpc.agendaTelefone.del({ id: get().selection })
    await get().fetchList()
    set(() => ({ status: 'view', selection: [] }))
  },
  handleCancel: () => {
    if (get().status === 'new') {
      set(() => ({ status: 'none' }))
      return
    }
    set(() => ({ status: 'view' }))
  },
}))

// useAgendaTelefoneBase.subscribe((state: any) =>
//   console.log(JSON.stringify(state, null, 2))
// )

useAgendaTelefoneBase.getState().fetchList()

export const useAgendaTelefone = createSelectors(useAgendaTelefoneBase)
