import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { day } from '@/utils/date/day.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { isIdEqual } from '@/utils/query/is-id-equal.js'
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

  fetchEsterilizacaoExternaDiario: async () => {
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
        rpc.request('esterilizacaoExterna_diario', {
          inicio: day(getFieldId('mes', get().mes) + '-01')
            .startOf('month')
            .format('YYYY-MM-DD'),
          fim: day(getFieldId('mes', get().mes) + '-01')
            .endOf('month')
            .format('YYYY-MM-DD'),
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
