import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
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
import { TGroupFields, TGroupKeys } from '@/controllers/group_controller.js'
import { rpc } from '@/rpc/rpc-client.js'
import { TData } from '@/types/index.js'
import { omit } from '@/utils/object/omit.js'
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
        const list = (await cache.memo(
          {
            where: get().where,
            orderBy: get().orderBy,
            _table: tableName,
          },
          () =>
            rpc[tableName].list({ where: get().where, orderBy: get().orderBy })
        )) as TData<TGroupFields>[]
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
          () => rpc[tableName].read({ where: get().selection })
        )) as TData<TGroupFields>
        set(() => ({ record }), false, 'fetchRecord')
        return record
      },

      onSave: async () => {
        cache.purgeTable(tableName)
        const data = omit(get().record || {}, ['kGrupo'])

        if (get().status === 'edit') {
          await rpc[tableName].update$({
            data,
            where: get().selection,
          })
        }
        if (get().status === 'new') {
          await rpc[tableName].create$({ data })
        }
        await get().fetchList()
        set(() => ({ status: 'view' }), false, 'onSave')
      },

      onDelete: async () => {
        cache.purgeTable(tableName)
        await rpc[tableName].del$({ where: get().selection })
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
