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
import { TUsuarioFields, TUsuarioKeys } from '@/controllers/usuario_controller'
import { rpc } from '@/rpc/rpc-client'
import { TData } from '@/types'
import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

const tableName = 'usuario' as const

const recordClear: TData<TUsuarioFields> = {
  kUsuario: '',
  NomeUsuario: '',
  nome: '',
  email: '',
  setor: '',
  idGroup: '',
  Ativo: true,
} as TData<TUsuarioFields>

type TUsuarioState = {
  fetchList: () => Promise<TData<TUsuarioFields>[]>
  fetchRecord: () => Promise<TData<TUsuarioFields>>
  onDelete: () => void
  onSave: () => void
  recordClear: TData<TUsuarioFields>
} & TCreateButtonsStore &
  TCreateListStore<TUsuarioFields, TUsuarioKeys> &
  TCreateRecordStore<TUsuarioFields>

const usuarioStoreBase = createStore<TUsuarioState>()(
  devtools(
    (set, get) => ({
      ...createListStore<TUsuarioFields, TUsuarioKeys>(set, get),
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
        )) as TData<TUsuarioFields>[]
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
        )) as TData<TUsuarioFields>
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
          () => ({ record: get().recordClear, status: 'view', selection: [] }),
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

usuarioStoreBase.getState().setOrderBy([['kUsuario', 'asc']])

export const usuarioStore = createSelectors(usuarioStoreBase)
