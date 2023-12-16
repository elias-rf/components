import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { day } from '@/utils/date/day.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { isIdEqual } from '@/utils/query/is-id-equal.js'
import { create } from 'zustand'

interface TransferenciaState {
  mes: ['mes', string][]
  dia: ['dia', string][]
  operacao: ['operacao', string][]
  produto: ['produto', string][]
  mesInicio: ['mes', string][]
  setMes: (mes: ['mes', string][]) => void
  setDia: (dia: ['dia', string][]) => void
  setOperacao: (operacao: ['operacao', string][]) => void
  setProduto: (produto: ['produto', string][]) => void
  setMesInicio: (mes: ['mes', string][]) => void

  fetchTransferenciaDiario: () => Promise<any[]>
  transferenciaDiario: any[]
  fetchTransferenciaMensal: () => Promise<any[]>
  transferenciaMensal: any[]
  fetchTransferenciaModelo: () => Promise<any[]>
  transferenciaModelo: any[]
}

const useTransferenciaBase = create<TransferenciaState>()((set, get) => ({
  mes: [],
  dia: [],
  operacao: [['operacao', '3058']],
  produto: [],
  mesInicio: [['mes', day().subtract(13, 'month').format('YYYY-MM')]],
  setMes: (mes: ['mes', string][]) => {
    if (isIdEqual(get().mes, mes)) {
      set({ mes: [] })
      return
    }
    set({ mes })
  },
  setDia: (dia: ['dia', string][]) => {
    if (isIdEqual(get().dia, dia)) {
      set({ dia: [] })
      return
    }
    set({ dia })
  },
  setOperacao: (operacao: ['operacao', string][]) => {
    set({ operacao })
  },
  setProduto: (produto: ['produto', string][]) => {
    if (isIdEqual(get().produto, produto)) {
      set({ produto: [] })
      return
    }
    set({ produto })
  },
  setMesInicio: (mes: ['mes', string][]) => {
    set({ mesInicio: mes })
  },

  fetchTransferenciaDiario: async () => {
    const data = (await cache.memo(
      {
        inicio: day(getFieldId('mes', get().mes) + '-01')
          .startOf('month')
          .format('YYYY-MM-DD'),
        fim: day(getFieldId('mes', get().mes) + '-01')
          .endOf('month')
          .format('YYYY-MM-DD'),
      },
      () =>
        rpc.request('nfSaida_transferenciaDiario', {
          inicio: day(getFieldId('mes', get().mes) + '-01')
            .startOf('month')
            .format('YYYY-MM-DD'),
          fim: day(getFieldId('mes', get().mes) + '-01')
            .endOf('month')
            .format('YYYY-MM-DD'),
        })
    )) as any[]
    set({ transferenciaDiario: data })
    return data
  },
  transferenciaDiario: [],

  fetchTransferenciaMensal: async () => {
    const data = (await cache.memo(
      {
        mes: getFieldId('mes', get().mesInicio),
      },
      () =>
        rpc.request('nfSaida_transferenciaMensal', {
          mes: getFieldId('mes', get().mesInicio),
        })
    )) as any[]
    set({ transferenciaMensal: data })
    return data
  },
  transferenciaMensal: [],

  fetchTransferenciaModelo: async () => {
    const data = (await cache.memo(
      {
        data: getFieldId('dia', get().dia),
      },
      () =>
        rpc.request('nfSaida_transferenciaModelo', {
          data: getFieldId('dia', get().dia),
        })
    )) as any[]
    set({ transferenciaModelo: data })
    return data
  },
  transferenciaModelo: [],
}))

export const useTransferencia = createSelectors(useTransferenciaBase)
