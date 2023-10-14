import { cache } from '@/client/lib/cache'
import { createSelectors } from '@/client/lib/create-selectors'
import { formButtonStatus } from '@/client/lib/form-button-status'
import { whereType } from '@/client/lib/where-type'
import { TClienteFields, TClienteKeys } from '@/controllers/cliente.controller'
import { rpc } from '@/rpc/rpc-client'
import {
  TData,
  TFormButtonStatus,
  TFormStatus,
  TOrderBy,
  TSelection,
  TWhere,
} from '@/types'
import { day } from '@/utils/date/day'
import { deepEqual } from '@/utils/object/deep-equal'
import { getFieldId } from '@/utils/query/get-field-id'
import { UseFormReturn } from 'react-hook-form'
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

interface ClienteState {
  recordClear: typeof recordClear // form
  record: typeof recordClear // store
  vendaMensalQuantidade: any[]
  fetchVendaMensalQuantidade: () => Promise<any[]>
  vendaMensalValor: any[]
  fetchVendaMensalValor: () => Promise<any[]>
  vendaMensalValorMedio: any[]
  fetchVendaMensalValorMedio: () => Promise<any[]>
  fetchList: () => Promise<TData<TClienteFields>[]> // store
  form: UseFormReturn<typeof recordClear, any> | undefined // store

  formButtonStatus: () => TFormButtonStatus // head form
  list: TData<TClienteFields>[] // table
  orderBy: TOrderBy<TClienteFields> // table

  status: TFormStatus // store
  where: TWhere<TClienteFields> // table
  setForm: (form: UseFormReturn<typeof recordClear, any>) => void // form
  selection: TSelection<TClienteKeys> // table
  setOrderBy: (orderBy: TOrderBy<TClienteFields>) => void // table
  setSelection: (selection: TSelection<TClienteKeys>) => void // table
  fetchRecord: () => Promise<typeof recordClear> // store
  setWhere: (where: TWhere<TClienteFields>) => void // table
  inicio: string
  fim: string
}

const clienteStoreBase = createStore<ClienteState>()((set, get) => ({
  record: recordClear,
  vendaMensalQuantidade: [],
  inicio: day().subtract(1, 'year').startOf('month').format('YYYY-MM-DD'),
  fim: day().subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
  vendaMensalValor: [],
  vendaMensalValorMedio: [],
  recordClear: recordClear,
  selection: [],
  form: undefined,
  where: [],
  orderBy: [['CdCliente', 'asc']],
  fetchList: async () => {
    const list = (await cache.fetch(
      {
        where: get().where,
        orderBy: get().orderBy,
        select: Object.keys(recordClear),
        table: 'cliente',
      },
      {
        context: {
          method: rpc.cliente.list,
          name: 'cliente.list',
        },
      }
    )) as TData<TClienteFields>[]
    set(() => ({ list }))
    return list
  },

  status: 'none',
  list: [],

  formButtonStatus: () => formButtonStatus(get().status),
  setForm: (form) => {
    set(() => ({ form }))
  },

  setOrderBy: (orderBy) => {
    set(() => ({ orderBy }))
    // get().fetchList()
  },

  setSelection: (selection) => {
    if (deepEqual(selection, get().selection)) {
      set(() => ({
        selection: [],
        status: 'none',
        vendaMensalQuantidade: [],
        vendaMensalValor: [],
        vendaMensalValorMedio: [],
      }))
      return
    }
    set(() => ({ selection, status: 'view' }))
    // get().fetchRecord()
    // get().fetchVendaMensalQuantidade()
    // get().fetchVendaMensalValor()
    // get().fetchVendaMensalValorMedio()
  },

  fetchRecord: async () => {
    const id = get().selection
    if (id.length === 0) return recordClear
    const record = (await cache.fetch(
      {
        id,
        select: Object.keys(recordClear),
        table: 'cliente',
      },
      {
        context: {
          method: rpc.cliente.read,
          name: 'cliente.read',
        },
      }
    )) as TData<TClienteFields>
    set(() => ({ record }))
    get().form?.reset(record)
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
      },
      {
        context: {
          method: rpc.cliente.vendaMensalQuantidade,
          name: 'cliente.vendaMensalQuantidade',
        },
      }
    )) as any[]
    set(() => ({ vendaMensalQuantidade: record }))
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
      },
      {
        context: {
          method: rpc.cliente.vendaMensalValor,
          name: 'cliente.vendaMensalValor',
        },
      }
    )) as any[]
    set(() => ({ vendaMensalValor: record }))
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
      },
      {
        context: {
          method: rpc.cliente.vendaMensalValorMedio,
          name: 'cliente.vendaMensalValorMedio',
        },
      }
    )) as any[]
    set(() => ({ vendaMensalValorMedio: record }))
    return record
  },

  setWhere: (where) => {
    where = whereType(where, 'CdCliente', 'int')

    set(() => ({ where }))
    // get().fetchList()
  },
}))

export const clienteStore = createSelectors(clienteStoreBase)
