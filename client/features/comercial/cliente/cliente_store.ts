import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import {
  TCreateListStore,
  createListStore,
} from '@/client/store/create-list-store.js'
import {
  TCreateRecordStore,
  createRecordStore,
} from '@/client/store/create-record-store.js'
import {
  TClienteFields,
  TClienteKeys,
} from '@/controllers/cliente_controller.js'
import { rpc } from '@/rpc/rpc-client.js'
import { TData, TFormStatus } from '@/types/index.js'
import { day } from '@/utils/date/day.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { ms } from '@/utils/string/ms.js'
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
        const list = (await cache.memo(
          {
            where: get().where,
            orderBy: get().orderBy,
            select: Object.keys(recordClear),
            _table: 'cliente',
          },
          () =>
            rpc.cliente.list({
              where: get().where,
              orderBy: get().orderBy,
              select: Object.keys(recordClear) as TClienteKeys[],
            })
        )) as TData<TClienteFields>[]
        set(() => ({ list }), false, 'fetchList')
        return list
      },

      status: 'none',

      fetchRecord: async () => {
        const id = get().selection
        if (id.length === 0) return recordClear
        const record = (await cache.memo(
          {
            where: id,
            select: Object.keys(recordClear),
            _table: 'cliente',
          },
          () =>
            rpc.cliente.read({
              where: id,
              select: Object.keys(recordClear) as TClienteKeys[],
            })
        )) as TData<TClienteFields>
        set(() => ({ record }), false, 'fetchRecord')
        return record
      },

      fetchVendaMensalQuantidade: async () => {
        const id = get().selection
        if (id.length === 0) return []
        const record = (await cache.memo(
          {
            cliente: parseInt(getFieldId('CdCliente', id)),
            inicio: get().inicio,
            fim: get().fim,
          },

          () =>
            rpc.cliente.vendaMensalQuantidade({
              cliente: parseInt(getFieldId('CdCliente', id)),
              inicio: get().inicio,
              fim: get().fim,
            }),
          { ttl: ms('10m') }
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
        const record = (await cache.memo(
          {
            cliente: parseInt(getFieldId('CdCliente', id)),
            inicio: get().inicio,
            fim: get().fim,
          },
          () =>
            rpc.cliente.vendaMensalValor({
              cliente: parseInt(getFieldId('CdCliente', id)),
              inicio: get().inicio,
              fim: get().fim,
            }),
          { ttl: ms('10m') }
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
        const record = (await cache.memo(
          {
            cliente: parseInt(getFieldId('CdCliente', id)),
            inicio: get().inicio,
            fim: get().fim,
          },

          () =>
            rpc.cliente.vendaMensalValorMedio({
              cliente: parseInt(getFieldId('CdCliente', id)),
              inicio: get().inicio,
              fim: get().fim,
            }),
          { ttl: ms('10m') }
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
