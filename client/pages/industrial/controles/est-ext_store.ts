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

  fetchEsterilizacaoExternaDiario: () => Promise<any[]>
  esterilizacaoExternaDiario: any[]
  fetchEsterilizacaoExternaMensal: () => Promise<any[]>
  esterilizacaoExternaMensal: any[]
  fetchEsterilizacaoExternaModelo: () => Promise<any[]>
  esterilizacaoExternaModelo: any[]
  fetchEsterilizacaoExternaProduto: () => Promise<any[]>
  esterilizacaoExternaProduto: any[]
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

  fetchEsterilizacaoExternaDiario: async () => {
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
        rpc.request('esterilizacaoExterna_diario', {
          inicio,
          fim,
        })
    )) as any[]
    set({ esterilizacaoExternaDiario: data })
    return data
  },
  esterilizacaoExternaDiario: [],

  fetchEsterilizacaoExternaMensal: async () => {
    const data = (await cache.memo(
      {
        mes: getFieldId('mes', get().mesInicio),
      },
      () =>
        rpc.request('esterilizacaoExterna_mensal', {
          mes: getFieldId('mes', get().mesInicio),
        })
    )) as any[]
    set({ esterilizacaoExternaMensal: data })
    return data
  },
  esterilizacaoExternaMensal: [],

  fetchEsterilizacaoExternaModelo: async () => {
    const data = (await cache.memo(
      {
        data: getFieldId('dia', get().dia),
        produto: getFieldId('produto', get().produto),
      },
      () =>
        rpc.request('esterilizacaoExterna_modelo', {
          data: getFieldId('dia', get().dia),
          produto: getFieldId('produto', get().produto),
        })
    )) as any[]
    set({ esterilizacaoExternaModelo: data })
    return data
  },
  esterilizacaoExternaModelo: [],

  fetchEsterilizacaoExternaProduto: async () => {
    const data = (await cache.memo(
      {
        data: getFieldId('dia', get().dia),
      },
      () =>
        rpc.request('esterilizacaoExterna_produto', {
          data: getFieldId('dia', get().dia),
        })
    )) as any[]
    set({ esterilizacaoExternaProduto: data })
    return data
  },
  esterilizacaoExternaProduto: [],
}))

export const useControles = createSelectors(useControlesBase)
