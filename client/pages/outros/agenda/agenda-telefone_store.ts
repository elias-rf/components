import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import {
  TCreateButtonsStore,
  createButtonsStore,
} from '@/client/store/create-buttons-store.js'
import {
  TCreateListStore,
  createListStore,
} from '@/client/store/create-list-store.js'
import {
  TCreateRecordStore,
  createRecordStore,
} from '@/client/store/create-record-store.js'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone_controller.js'
import { TData } from '@/types/index.js'
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
        const list = (await cache.memo(
          {
            where: get().where,
            orderBy: get().orderBy,
            _table: tableName,
          },
          () =>
            rpc.request('agendaTelefone_list', {
              where: get().where,
              orderBy: get().orderBy,
            })
        )) as TData<TAgendaTelefoneFields>[]
        set(() => ({ list }), false, 'fetchList')
        return list
      },

      fetchRecord: async () => {
        const id = get().selection
        if (id.length === 0) return recordClear
        const record = (await cache.memo(
          {
            where: get().selection,
            _table: tableName,
          },
          () => rpc.request('agendaTelefone_read', { where: get().selection })
        )) as TData<TAgendaTelefoneFields>

        set(() => ({ record }), false, 'fetchRecord')
        return record
      },

      onSave: async () => {
        cache.purgeTable(tableName)
        if (get().status === 'edit') {
          await rpc.request('agendaTelefone_update', {
            data: get().record || {},
            where: get().selection,
          })
        }
        if (get().status === 'new') {
          await rpc.request('agendaTelefone_create', {
            data: get().record || {},
          })
        }
        await get().fetchList()
        set(() => ({ status: 'view' }), false, 'onSave')
      },

      onDelete: async () => {
        cache.purgeTable(tableName)
        await rpc.request('agendaTelefone_del', { where: get().selection })
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
agendaTelefoneStoreBase
  .getState()
  .setRecord(agendaTelefoneStoreBase.getState().recordClear)

export const agendaTelefoneStore = createSelectors(agendaTelefoneStoreBase)

export type TAgendaTelefoneStore = typeof agendaTelefoneStore
