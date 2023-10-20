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
import { TGroupFields, TGroupKeys } from '@/controllers/group.controller'
import { rpc } from '@/rpc/rpc-client'
import { TData } from '@/types'
import { omit } from '@/utils/object/omit'
import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

const tableName = 'group' as const

const recordClear = {
  kGrupo: '',
  NomeGrupo: '',
} as TData<TGroupFields>

type GruposState = {
  fetchList: () => Promise<TData<TGroupFields>[]> // store
  fetchRecord: () => Promise<TData<TGroupFields>> // store
  onDelete: () => void
  onSave: () => void
  recordClear: TData<TGroupFields>
} & TCreateButtonsStore &
  TCreateListStore<TGroupFields, TGroupKeys> &
  TCreateRecordStore<TGroupFields>

const gruposStoreBase = createStore<GruposState>()(
  devtools(
    (set, get) => ({
      ...createListStore<TGroupFields, TGroupKeys>(set, get),
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
        )) as TData<TGroupFields>[]
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
        )) as TData<TGroupFields>
        set(() => ({ record }), false, 'fetchRecord')
        return record
      },

      onSave: async () => {
        cache.purgeTable(tableName)
        const data = omit(get().record || {}, ['kGrupo'])

        if (get().status === 'edit') {
          await rpc[tableName].update({
            data,
            id: get().selection,
          })
        }
        if (get().status === 'new') {
          await rpc[tableName].create({ data })
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

gruposStoreBase.getState().setOrderBy([['NomeGrupo', 'asc']])

export const gruposStore = createSelectors(gruposStoreBase)
