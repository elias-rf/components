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

  fetchEsterilizacaoInternaDiario: () => Promise<any[]>
  esterilizacaoInternaDiario: any[]
  fetchEsterilizacaoInternaMensal: () => Promise<any[]>
  esterilizacaoInternaMensal: any[]
  fetchEsterilizacaoInternaModelo: () => Promise<any[]>
  esterilizacaoInternaModelo: any[]
  fetchEsterilizacaoInternaProduto: () => Promise<any[]>
  esterilizacaoInternaProduto: any[]
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

  fetchEsterilizacaoInternaDiario: async () => {
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
        inicio,
        fim,
      },
      () =>
        rpc.request('esterilizacaoInterna_diario', {
          inicio,
          fim,
        })
    )) as any[]
    set({ esterilizacaoInternaDiario: data })
    return data
  },
  esterilizacaoInternaDiario: [],

  fetchEsterilizacaoInternaMensal: async () => {
    const data = (await cache.memo(
      {
        mes: getFieldId('mes', get().mesInicio),
      },
      () =>
        rpc.request('esterilizacaoInterna_mensal', {
          mes: getFieldId('mes', get().mesInicio),
        })
    )) as any[]
    set({ esterilizacaoInternaMensal: data })
    return data
  },
  esterilizacaoInternaMensal: [],

  fetchEsterilizacaoInternaModelo: async () => {
    const data = (await cache.memo(
      {
        data: getFieldId('dia', get().dia),
        produto: getFieldId('produto', get().produto),
      },
      () =>
        rpc.request('esterilizacaoInterna_modelo', {
          data: getFieldId('dia', get().dia),
          produto: getFieldId('produto', get().produto),
        })
    )) as any[]
    set({ esterilizacaoInternaModelo: data })
    return data
  },
  esterilizacaoInternaModelo: [],

  fetchEsterilizacaoInternaProduto: async () => {
    const data = (await cache.memo(
      {
        data: getFieldId('dia', get().dia),
      },
      () =>
        rpc.request('esterilizacaoInterna_produto', {
          data: getFieldId('dia', get().dia),
        })
    )) as any[]
    set({ esterilizacaoInternaProduto: data })
    return data
  },
  esterilizacaoInternaProduto: [],
}))

export const useControles = createSelectors(useControlesBase)
