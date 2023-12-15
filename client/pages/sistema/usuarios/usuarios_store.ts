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
  TUsuarioFields,
  TUsuarioKeys,
} from '@/controllers/usuario_controller.js'
import { TData } from '@/types/index.js'
import { omit } from '@/utils/object/omit.js'
import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

const tableName = 'usuario' as const

const recordClear: TData<TUsuarioFields> = {
  kUsuario: '',
  nome: '',
  email: '',
  setor: '',
  fkFuncionario: '',
  NomeUsuario: '',
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
        const list = (await cache.memo(
          {
            where: get().where,
            orderBy: get().orderBy,
            _table: tableName,
          },
          () =>
            rpc.request('usuario_list', {
              where: get().where,
              orderBy: get().orderBy,
            })
        )) as TData<TUsuarioFields>[]
        set(() => ({ list }), false, 'fetchList')
        return list
      },

      fetchRecord: async () => {
        const id = get().selection
        if (id.length === 0) return recordClear
        const record = (await cache.memo(
          {
            where: get().selection,
            select: Object.keys(recordClear),
            _table: tableName,
          },

          () =>
            rpc.request('usuario_read', {
              where: get().selection,
              select: Object.keys(recordClear) as TUsuarioKeys[],
            })
        )) as TData<TUsuarioFields>
        for (const key in record) {
          record[key as TUsuarioFields] = record[key as TUsuarioFields] ?? ''
        }
        set(() => ({ record }), false, 'fetchRecord')
        return record
      },

      onSave: async () => {
        cache.purgeTable(tableName)
        const record = omit(get().record, ['kUsuario'])
        if (record.fkFuncionario === '') {
          record.fkFuncionario = null
        }
        if (get().status === 'edit') {
          await rpc.request('usuario_update', {
            data: record,
            where: get().selection,
          })
        }
        if (get().status === 'new') {
          await rpc.request('usuario_create', { data: record })
        }
        await get().fetchList()
        set(() => ({ status: 'view' }), false, 'onSave')
      },

      onDelete: async () => {
        cache.purgeTable(tableName)
        await rpc.request('usuario_del', { where: get().selection })
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

export type TUsuarioStore = typeof usuarioStore
