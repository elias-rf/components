import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
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
import { TData, TFormStatus } from '@/types/index.js'
import { day } from '@/utils/date/day.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { ms } from '@/utils/string/ms.js'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

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

type TClienteState = {
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

const store = {
  state: proxy({
    list: [],
    where: [],
    orderBy: [['CdCliente', 'asc']],
    selection: [],
    record: {} as TData<TClienteFields>,
  }),
  action: {
    setWhere: (where) => {
      where = whereType(where, 'id', 'int')
      set(() => ({ where }), false, 'setWhere')
    },

    setOrderBy: (orderBy) => {
      set(() => ({ orderBy }), false, 'setOrderBy')
    },

    setSelection: (selection) => {
      if (deepEqual(selection, get().selection)) {
        set(() => ({ selection: [], status: 'none' }), false, 'setSelection')
        return
      }
      set(() => ({ selection, status: 'view' }), false, 'setSelection')
    },

    setRecord: (record) => {
      set(() => ({ record }), false, 'setRecord')
    },
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
          rpc.request('cliente_list', {
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
          rpc.request('cliente_read', {
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
          rpc.request('cliente_vendaMensalQuantidade', {
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
          rpc.request('cliente_vendaMensalValor', {
            cliente: parseInt(getFieldId('CdCliente', id)),
            inicio: get().inicio,
            fim: get().fim,
          }),
        { ttl: ms('10m') }
      )) as any[]
      set(() => ({ vendaMensalValor: record }), false, 'fetchVendaMensalValor')
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
          rpc.request('cliente_vendaMensalValorMedio', {
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
  },
}

devtools(store, {
  name: 'store.cliente',
  enabled: import.meta.env.DEV,
})

export const clienteStore = store
export type TClienteStore = typeof clienteStore
