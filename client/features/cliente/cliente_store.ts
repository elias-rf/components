import { cache } from '@/client/lib/cache'
import { createSelectors } from '@/client/lib/create-selectors'
import {
  TCreateListStore,
  createListStore,
} from '@/client/store/create-list-store'
import {
  TCreateRecordStore,
  createRecordStore,
} from '@/client/store/create-record-store'
import { TClienteFields, TClienteKeys } from '@/controllers/cliente_controller'
import { rpc } from '@/rpc/rpc-client'
import { TData, TFormStatus } from '@/types'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import { ms } from '@/utils/string/ms'
import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

const recordClear = {
  CdCliente: '',
  RzSocial: '',
  Cidade: '',
  Uf: '',
  CGC: '',
  CdVendedor: '',
  FgAtivo: '',
  EMail: '',
  NumIdentidade: '',
  DtCadastro: '',
}

type ClienteState = {
  recordClear: typeof recordClear // form
  record: typeof recordClear // store
  vendaMensalQuantidade: any[]
  fetchVendaMensalQuantidade: () => Promise<any[]>
  vendaMensalValor: any[]
  fetchVendaMensalValor: () => Promise<any[]>
  vendaMensalValorMedio: any[]
  fetchVendaMensalValorMedio: () => Promise<any[]>
  fetchList: () => Promise<TData<TClienteFields>[]> // store
  status: TFormStatus // store
  fetchRecord: () => Promise<typeof recordClear> // store
  inicio: string
  fim: string
} & TCreateListStore<TClienteFields, TClienteKeys> &
  TCreateRecordStore<TClienteFields>

const clienteStoreBase = createStore<ClienteState>()(
  devtools(
    (set, get) => ({
      ...createListStore<TClienteFields, TClienteKeys>(set, get),
      ...createRecordStore(set),
      recordClear: recordClear,

      inicio: day().subtract(1, 'year').startOf('month').format('YYYY-MM-DD'),
      fim: day().subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
      vendaMensalQuantidade: [],
      vendaMensalValor: [],
      vendaMensalValorMedio: [],

      fetchList: async () => {
        const list = (await cache.fetch(
          {
            where: get().where,
            orderBy: get().orderBy,
            select: Object.keys(recordClear),
            _table: 'cliente',
            _method: 'cliente.list',
          },
          {
            context: {
              method: rpc.cliente.list,
            },
          }
        )) as TData<TClienteFields>[]
        set(() => ({ list }), false, 'fetchList')
        return list
      },

      status: 'none',

      fetchRecord: async () => {
        const id = get().selection
        if (id.length === 0) return recordClear
        const record = (await cache.fetch(
          {
            where: id,
            select: Object.keys(recordClear),
            _table: 'cliente',
            _method: 'cliente.read',
          },
          {
            context: {
              method: rpc.cliente.read,
            },
          }
        )) as TData<TClienteFields>
        set(() => ({ record }), false, 'fetchRecord')
        return record
      },

      fetchVendaMensalQuantidade: async () => {
        const id = get().selection
        if (id.length === 0) return []
        const record = (await cache.fetch(
          {
            cliente: parseInt(getFieldId('CdCliente', id)),
            inicio: get().inicio,
            fim: get().fim,
            _method: 'cliente.vendaMensalQuantidade',
          },
          {
            ttl: ms('10m'),
            context: {
              method: rpc.cliente.vendaMensalQuantidade,
            },
          }
        )) as any[]
        set(
          () => ({ vendaMensalQuantidade: record }),
          false,
          'fetchVendaMensalQuantidade'
        )
        return record
      },

      fetchVendaMensalValor: async () => {
        const id = get().selection
        if (id.length === 0) return []
        const record = (await cache.fetch(
          {
            cliente: parseInt(getFieldId('CdCliente', id)),
            inicio: get().inicio,
            fim: get().fim,
            _method: 'cliente.vendaMensalValor',
          },
          {
            ttl: ms('10m'),
            context: {
              method: rpc.cliente.vendaMensalValor,
            },
          }
        )) as any[]
        set(
          () => ({ vendaMensalValor: record }),
          false,
          'fetchVendaMensalValor'
        )
        return record
      },

      fetchVendaMensalValorMedio: async () => {
        const id = get().selection
        if (id.length === 0) return []
        const record = (await cache.fetch(
          {
            cliente: parseInt(getFieldId('CdCliente', id)),
            inicio: get().inicio,
            fim: get().fim,
            _method: 'cliente.vendaMensalValorMedio',
          },
          {
            ttl: ms('10m'),
            context: {
              method: rpc.cliente.vendaMensalValorMedio,
            },
          }
        )) as any[]
        set(
          () => ({ vendaMensalValorMedio: record }),
          false,
          'fetchVendaMensalValorMedio'
        )
        return record
      },
    }),
    {
      name: 'intranet',
      store: 'cliente',
      serialize: { options: true },
    }
  )
)

clienteStoreBase.getState().setOrderBy([['CdCliente', 'asc']])

export const clienteStore = createSelectors(clienteStoreBase)
