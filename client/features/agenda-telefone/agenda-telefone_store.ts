import { cache } from '@/client/lib/cache'
import { createSelectors } from '@/client/lib/create-selectors'
import {
  TCreateButtonsStore,
  createButtonsStore,
} from '@/client/store/create-buttons-store'
import {
  TCreateListStore,
  createListStore,
} from '@/client/store/create-list-store'
import {
  TCreateRecordStore,
  createRecordStore,
} from '@/client/store/create-record-store'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone.controller'
import { rpc } from '@/rpc/rpc-client'
import { TData } from '@/types'
import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

const tableName = 'agendaTelefone' as const

const recordClear = {
  id: '',
  name: '',
  email: '',
  department: '',
} as TData<TAgendaTelefoneFields>

type AgendaTelefoneState = {
  fetchList: () => Promise<TData<TAgendaTelefoneFields>[]>
  fetchRecord: () => Promise<TData<TAgendaTelefoneFields>>
  onDelete: () => void
  onSave: () => void
  recordClear: TData<TAgendaTelefoneFields>
} & TCreateButtonsStore &
  TCreateListStore<TAgendaTelefoneFields, TAgendaTelefoneKeys> &
  TCreateRecordStore<TAgendaTelefoneFields>

const agendaTelefoneStoreBase = createStore<AgendaTelefoneState>()(
  devtools(
    (set, get) => ({
      ...createListStore<TAgendaTelefoneFields, TAgendaTelefoneKeys>(set, get),
      ...createRecordStore(set),
      ...createButtonsStore(set, get),

      recordClear: recordClear,

      fetchList: async () => {
        const list = (await cache.fetch(
          {
            where: get().where,
            orderBy: get().orderBy,
            _table: tableName,
            _method: `${tableName}.list`,
          },
          {
            context: {
              method: rpc[tableName].list,
            },
          }
        )) as TData<TAgendaTelefoneFields>[]
        set(() => ({ list }), false, 'fetchList')
        return list
      },

      fetchRecord: async () => {
        const id = get().selection
        if (id.length === 0) return recordClear
        const record = (await cache.fetch(
          {
            id: get().selection,
            _table: tableName,
            _method: `${tableName}.read`,
          },
          {
            context: {
              method: rpc[tableName].read,
            },
          }
        )) as TData<TAgendaTelefoneFields>
        set(() => ({ record }), false, 'fetchRecord')
        return record
      },

      onSave: async () => {
        cache.purgeTable(tableName)
        if (get().status === 'edit') {
          await rpc[tableName].update({
            data: get().record || {},
            id: get().selection,
          })
        }
        if (get().status === 'new') {
          await rpc[tableName].create({ data: get().record || {} })
        }
        await get().fetchList()
        set(() => ({ status: 'view' }), false, 'onSave')
      },

      onDelete: async () => {
        cache.purgeTable(tableName)
        await rpc[tableName].del({ id: get().selection })
        await get().fetchList()
        set(
          () => ({ record: get().recordClear, status: 'none', selection: [] }),
          false,
          'onDelete'
        )
      },
    }),
    {
      name: 'intranet',
      store: tableName,
      serialize: { options: true },
    }
  )
)

agendaTelefoneStoreBase.getState().setOrderBy([['id', 'asc']])

export const agendaTelefoneStore = createSelectors(agendaTelefoneStoreBase)
