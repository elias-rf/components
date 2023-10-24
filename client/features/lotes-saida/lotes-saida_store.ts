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
  TNfSaidaLoteFields,
  TNfSaidaLoteKeys,
} from '@/controllers/nf-saida-lote_controller'
import { rpc } from '@/rpc/rpc-client'
import { TData } from '@/types'
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
        const list = (await cache.fetch(
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
              nfSaida: ['CdCliente', ['Tipo', 'S']],
              'nfSaida.cliente': ['RzSocial', 'Uf'],
            },
            _table: tableName,
            _method: `${tableName}.list`,
          },
          {
            context: {
              method: rpc[tableName].list,
            },
          }
        )) as TData<TNfSaidaLoteFields>[]
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
        )) as TData<TNfSaidaLoteFields>
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

lotesSaidaStoreBase.getState().setOrderBy([['NumLote', 'desc']])

export const lotesSaidaStore = createSelectors(lotesSaidaStoreBase)
