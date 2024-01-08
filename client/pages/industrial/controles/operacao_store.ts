import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { isIdEqual } from '@/utils/query/is-id-equal.js'
import { endOfMonth, format, parse, startOfMonth, subMonths } from 'date-fns/fp'
import { flowRight } from 'lodash'
import { create } from 'zustand'

interface ControlesState {
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

  fetchOperacaoDiario: () => Promise<any[]>
  operacaoDiario: any[]
  fetchOperacaoMensal: () => Promise<any[]>
  operacaoMensal: any[]
  fetchOperacaoProduto: () => Promise<any[]>
  operacaoProduto: any[]
  fetchOperacaoModelo: () => Promise<any[]>
  operacaoModelo: any[]
  fetchOperacaoTurno: () => Promise<any[]>
  operacaoTurno: any[]
}

const useControlesBase = create<ControlesState>()((set, get) => ({
  mes: [],
  dia: [],
  operacao: [['operacao', '3058']],
  produto: [],
  mesInicio: [
    ['mes', flowRight([format('yyyy-MM'), subMonths(13)])(new Date())],
  ],
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

  fetchOperacaoDiario: async () => {
    const inicio = flowRight([
      format('yyyy-MM-dd'),
      startOfMonth(),
      parse('yyyy-MM-dd'),
    ])(getFieldId('mes', get().mes) + '-01')
    const fim = flowRight([
      format('yyyy-MM-dd'),
      endOfMonth,
      parse('yyyy-MM-dd'),
    ])(getFieldId('mes', get().mes) + '-01')
    const data = (await cache.memo(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        inicio,
        fim,
      },
      () =>
        rpc.request('ordemProducaoOperacao_diario', {
          operacao: getFieldId('operacao', get().operacao) || '',
          inicio,
          fim,
        })
    )) as any[]
    set({ operacaoDiario: data })
    return data
  },
  operacaoDiario: [],

  fetchOperacaoMensal: async () => {
    const data = (await cache.memo(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        mes: getFieldId('mes', get().mesInicio),
      },
      () =>
        rpc.request('ordemProducaoOperacao_mensal', {
          operacao: getFieldId('operacao', get().operacao) || '',
          mes: getFieldId('mes', get().mesInicio),
        })
    )) as any[]
    set({ operacaoMensal: data })
    return data
  },
  operacaoMensal: [],

  fetchOperacaoProduto: async () => {
    const data = (await cache.memo(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        data: getFieldId('dia', get().dia),
      },
      () =>
        rpc.request('ordemProducaoOperacao_produto', {
          operacao: getFieldId('operacao', get().operacao) || '',
          data: getFieldId('dia', get().dia),
        })
    )) as any[]
    set({ operacaoProduto: data })
    return data
  },
  operacaoProduto: [],

  fetchOperacaoModelo: async () => {
    const data = (await cache.memo(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        data: getFieldId('dia', get().dia),
        produto: getFieldId('produto', get().produto),
      },
      () =>
        rpc.request('ordemProducaoOperacao_modelo', {
          operacao: getFieldId('operacao', get().operacao) || '',
          data: getFieldId('dia', get().dia),
          produto: getFieldId('produto', get().produto),
        })
    )) as any[]
    set({ operacaoModelo: data })
    return data
  },
  operacaoModelo: [],

  fetchOperacaoTurno: async () => {
    const data = (await cache.memo(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        data: getFieldId('dia', get().dia),
      },
      () =>
        rpc.request('ordemProducaoOperacao_turno', {
          operacao: getFieldId('operacao', get().operacao) || '',
          data: getFieldId('dia', get().dia),
        })
    )) as any[]
    set({ operacaoTurno: data })
    return data
  },
  operacaoTurno: [],
}))

export const useControles = createSelectors(useControlesBase)
