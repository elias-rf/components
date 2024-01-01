import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import {
  TNfSaidaLoteFields,
  TNfSaidaLoteKeys,
} from '@/controllers/nf-saida-lote_controller.js'
import { TData, TFormStatus, TId, TOrderBy, TWhere } from '@/types/index.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import { proxy } from 'valtio'

const tableName = 'nfSaidaLote' as const

const recordClear = {
  CdFilial: '',
  NumNota: '',
  Serie: '',
  Modelo: '',
} as TData<TNfSaidaLoteFields>

type LotesSaidaState = {
  state: {
    recordClear: TData<TNfSaidaLoteFields>
    list: TData<TNfSaidaLoteFields>[]
    orderBy: TOrderBy<TNfSaidaLoteFields>
    record: TData<TNfSaidaLoteFields>
    selection: TId<TNfSaidaLoteKeys>
    status: TFormStatus
    where: TWhere<TNfSaidaLoteFields>
  }
  action: {
    fetchList: () => Promise<TData<TNfSaidaLoteFields>[]>
    fetchRecord: () => Promise<TData<TNfSaidaLoteFields>>
    onDelete: () => void
    onSave: () => void
    onCancel: () => void
    onEdit: () => void
    onNew: () => void
    setSelection: (selection: TId<TNfSaidaLoteKeys>) => void
  }
}

const store: LotesSaidaState = {
  state: proxy({
    recordClear: recordClear,
    list: [] as TData<TNfSaidaLoteFields>[],
    orderBy: [['NumLote', 'desc']] as TOrderBy<TNfSaidaLoteFields>,
    record: recordClear,
    selection: [] as TId<TNfSaidaLoteKeys>,
    status: 'none' as TFormStatus,
    where: [] as TWhere<TNfSaidaLoteFields>,
  }),
  action: {
    onNew: () => {
      store.state.record = store.state.recordClear.value
      store.state.status = 'new'
      store.state.selection = []
    },
    onEdit: () => {
      store.state.status = 'edit'
    },

    onCancel: () => {
      if (store.state.status === 'new') {
        store.state.status = 'none'
        return
      }
      store.state.status = 'view'
    },
    setSelection: (selection) => {
      if (deepEqual(selection, store.state.selection)) {
        store.state.selection = []
        store.state.status = 'none'
        return
      }
      store.state.selection = selection
      store.state.status = 'view'
    },

    fetchList: async () => {
      const where = store.state.where as TWhere<TNfSaidaLoteFields>
      const orderBy = store.state.orderBy as TOrderBy<TNfSaidaLoteFields>

      const list = (await cache.memo(
        {
          where,
          orderBy,
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
            where,
            orderBy,
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
      store.state.list = list
      return list
    },

    fetchRecord: async () => {
      const where = store.state.selection as TId<TNfSaidaLoteKeys>
      if (where.length === 0) return recordClear
      const record = (await cache.memo(
        {
          where,
          _table: tableName,
        },
        () => rpc.request('nfSaidaLote_read', { where })
      )) as TData<TNfSaidaLoteFields>
      store.state.record.set(record)
      return record
    },

    onSave: async () => {
      cache.purgeTable(tableName)
      if ((store.state.status = 'edit')) {
        await rpc.request('nfSaidaLote_update', {
          data: store.state.record as TData<TNfSaidaLoteFields>,
          where: store.state.selection as TId<TNfSaidaLoteKeys>,
        })
      }
      if ((store.state.status = 'new')) {
        await rpc.request('nfSaidaLote_create', {
          data: store.state.record as TData<TNfSaidaLoteFields>,
        })
      }
      await store.action.fetchList()
      store.state.status = 'view'
    },

    onDelete: async () => {
      cache.purgeTable(tableName)
      await rpc.request('nfSaidaLote_del', {
        where: store.state.selection as TId<TNfSaidaLoteKeys>,
      })
      await store.action.fetchList()
      ;(store.state.record = store.state.recordClear),
        (store.state.selection = [])
      store.state.status = 'none'
    },
  },
}

export const lotesSaidaStore = store

export type TLotesSaidaStore = typeof lotesSaidaStore
