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
  TNfSaidaLoteFields,
  TNfSaidaLoteKeys,
} from '@/controllers/nf-saida-lote_controller.js'
import { TData } from '@/types/index.js'
import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

const tableName = 'nfSaidaLote' as const

const recordClear = {
  CdFilial: '',
  NumNota: '',
  Serie: '',
  Modelo: '',
} as TData<TNfSaidaLoteFields>

type LotesSaidaState = {
  fetchList: () => Promise<TData<TNfSaidaLoteFields>[]>
  fetchRecord: () => Promise<TData<TNfSaidaLoteFields>>
  onDelete: () => void
  onSave: () => void
  recordClear: TData<TNfSaidaLoteFields>
} & TCreateButtonsStore &
  TCreateListStore<TNfSaidaLoteFields, TNfSaidaLoteKeys> &
  TCreateRecordStore<TNfSaidaLoteFields>

const lotesSaidaStoreBase = createStore<LotesSaidaState>()(
  devtools(
    (set, get) => ({
      ...createListStore<TNfSaidaLoteFields, TNfSaidaLoteKeys>(set, get),
      ...createRecordStore(set),
      ...createButtonsStore(set, get),

      recordClear: recordClear,

      fetchList: async () => {
        const list = (await cache.memo(
          {
            where: get().where,
            orderBy: get().orderBy,
            select: [
              'CdFilial',
              'NumNota',
              'DtEmissao',
              'CdProduto',
              'NumLote',
              'Sequencia',
            ],
            include: {
              produto: ['Descricao'],
              nfSaida: ['CdCliente', 'Tipo'],
              'nfSaida.cliente': ['RzSocial', 'Uf'],
            },
            _table: tableName,
          },
          () =>
            rpc.request('nfSaidaLote_list', {
              where: get().where,
              orderBy: get().orderBy,
              select: [
                'CdFilial',
                'NumNota',
                'DtEmissao',
                'CdProduto',
                'NumLote',
                'Sequencia',
              ],
              include: {
                produto: ['Descricao'],
                nfSaida: ['CdCliente', 'Tipo'],
                'nfSaida.cliente': ['RzSocial', 'Uf'],
              },
            })
        )) as TData<TNfSaidaLoteFields>[]
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
          () => rpc.request('nfSaidaLote_read', { where: get().selection })
        )) as TData<TNfSaidaLoteFields>
        set(() => ({ record }), false, 'fetchRecord')
        return record
      },

      onSave: async () => {
        cache.purgeTable(tableName)
        if (get().status === 'edit') {
          await rpc.request('nfSaidaLote_update', {
            data: get().record || {},
            where: get().selection,
          })
        }
        if (get().status === 'new') {
          await rpc.request('nfSaidaLote_create', { data: get().record || {} })
        }
        await get().fetchList()
        set(() => ({ status: 'view' }), false, 'onSave')
      },

      onDelete: async () => {
        cache.purgeTable(tableName)
        await rpc.request('nfSaidaLote_del', { where: get().selection })
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

lotesSaidaStoreBase.getState().setOrderBy([['NumLote', 'desc']])

export const lotesSaidaStore = createSelectors(lotesSaidaStoreBase)
