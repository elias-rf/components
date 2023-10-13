import { createSelectors } from '@/client/lib/create-selectors'
import { rpc } from '@/rpc/rpc-client'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import { isIdEqual } from '@/utils/query/is-id-equal'
import { diff } from 'deep-object-diff'
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

  fetchEsterilizacaoInternaDiario: () => Promise<any[]>
  esterilizacaoInternaDiario: any[]
  fetchEsterilizacaoInternaMensal: () => Promise<any[]>
  esterilizacaoInternaMensal: any[]
  fetchEsterilizacaoInternaModelo: () => Promise<any[]>
  esterilizacaoInternaModelo: any[]
  fetchEsterilizacaoInternaProduto: () => Promise<any[]>
  esterilizacaoInternaProduto: any[]

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

  fetchTransferenciaDiario: () => Promise<any[]>
  transferenciaDiario: any[]
  fetchTransferenciaMensal: () => Promise<any[]>
  transferenciaMensal: any[]
  fetchTransferenciaModelo: () => Promise<any[]>
  transferenciaModelo: any[]
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
    const data = await rpc.esterilizacaoExterna.diario({
      inicio: day(getFieldId('mes', get().mes) + '-01')
        .startOf('month')
        .format('YYYY-MM-DD'),
      fim: day(getFieldId('mes', get().mes) + '-01')
        .endOf('month')
        .format('YYYY-MM-DD'),
    })
    set({ esterilizacaoExternaDiario: data })
    return data
  },
  esterilizacaoExternaDiario: [],

  fetchEsterilizacaoExternaMensal: async () => {
    const data = await rpc.esterilizacaoExterna.mensal({
      mes: getFieldId('mes', get().mesInicio),
    })
    set({ esterilizacaoExternaMensal: data })
    return data
  },
  esterilizacaoExternaMensal: [],

  fetchEsterilizacaoExternaModelo: async () => {
    const data = await rpc.esterilizacaoExterna.modelo({
      data: getFieldId('dia', get().dia),
      produto: getFieldId('produto', get().produto),
    })
    set({ esterilizacaoExternaModelo: data })
    return data
  },
  esterilizacaoExternaModelo: [],

  fetchEsterilizacaoExternaProduto: async () => {
    const data = await rpc.esterilizacaoExterna.produto({
      data: getFieldId('dia', get().dia),
    })
    set({ esterilizacaoExternaProduto: data })
    return data
  },
  esterilizacaoExternaProduto: [],

  fetchEsterilizacaoInternaDiario: async () => {
    const data = await rpc.esterilizacaoInterna.diario({
      inicio: day(getFieldId('mes', get().mes) + '-01')
        .startOf('month')
        .format('YYYY-MM-DD'),
      fim: day(getFieldId('mes', get().mes) + '-01')
        .endOf('month')
        .format('YYYY-MM-DD'),
    })
    set({ esterilizacaoInternaDiario: data })
    return data
  },
  esterilizacaoInternaDiario: [],

  fetchEsterilizacaoInternaMensal: async () => {
    const data = await rpc.esterilizacaoInterna.mensal({
      mes: getFieldId('mes', get().mesInicio),
    })
    set({ esterilizacaoInternaMensal: data })
    return data
  },
  esterilizacaoInternaMensal: [],

  fetchEsterilizacaoInternaModelo: async () => {
    const data = await rpc.esterilizacaoInterna.modelo({
      data: getFieldId('dia', get().dia),
      produto: getFieldId('produto', get().produto),
    })
    set({ esterilizacaoInternaModelo: data })
    return data
  },
  esterilizacaoInternaModelo: [],

  fetchEsterilizacaoInternaProduto: async () => {
    const data = await rpc.esterilizacaoInterna.produto({
      data: getFieldId('dia', get().dia),
    })
    set({ esterilizacaoInternaProduto: data })
    return data
  },
  esterilizacaoInternaProduto: [],

  fetchOperacaoDiario: async () => {
    const data = await rpc.ordemProducaoOperacao.diario({
      operacao: getFieldId('operacao', get().operacao) || '',
      inicio: day(getFieldId('mes', get().mes) + '-01')
        .startOf('month')
        .format('YYYY-MM-DD'),
      fim: day(getFieldId('mes', get().mes) + '-01')
        .endOf('month')
        .format('YYYY-MM-DD'),
    })
    set({ esterilizacaoExternaDiario: data })
    return data
  },
  operacaoDiario: [],

  fetchOperacaoMensal: async () => {
    const data = await rpc.ordemProducaoOperacao.mensal({
      operacao: getFieldId('operacao', get().operacao) || '',
      mes: getFieldId('mes', get().mesInicio),
    })
    set({ operacaoMensal: data })
    return data
  },
  operacaoMensal: [],

  fetchOperacaoProduto: async () => {
    const data = await rpc.ordemProducaoOperacao.produto({
      operacao: getFieldId('operacao', get().operacao) || '',
      data: getFieldId('dia', get().dia),
    })
    set({ operacaoProduto: data })
    return data
  },
  operacaoProduto: [],

  fetchOperacaoModelo: async () => {
    const data = await rpc.ordemProducaoOperacao.modelo({
      operacao: getFieldId('operacao', get().operacao) || '',
      data: getFieldId('dia', get().dia),
      produto: getFieldId('produto', get().produto),
    })
    set({ operacaoModelo: data })
    return data
  },
  operacaoModelo: [],

  fetchOperacaoTurno: async () => {
    const data = await rpc.ordemProducaoOperacao.turno({
      operacao: getFieldId('operacao', get().operacao) || '',
      data: getFieldId('dia', get().dia),
    })
    set({ operacaoTurno: data })
    return data
  },
  operacaoTurno: [],

  fetchTransferenciaDiario: async () => {
    const data = await rpc.nfSaida.transferenciaDiario({
      inicio: day(getFieldId('mes', get().mes) + '-01')
        .startOf('month')
        .format('YYYY-MM-DD'),
      fim: day(getFieldId('mes', get().mes) + '-01')
        .endOf('month')
        .format('YYYY-MM-DD'),
    })
    set({ transferenciaDiario: data })
    return data
  },
  transferenciaDiario: [],

  fetchTransferenciaMensal: async () => {
    const data = await rpc.nfSaida.transferenciaMensal({
      mes: getFieldId('mes', get().mesInicio),
    })
    set({ transferenciaMensal: data })
    return data
  },
  transferenciaMensal: [],

  fetchTransferenciaModelo: async () => {
    const data = await rpc.nfSaida.transferenciaModelo({
      data: getFieldId('dia', get().dia),
    })
    set({ transferenciaModelo: data })
    return data
  },
  transferenciaModelo: [],
}))

useControlesBase.subscribe((state: any, prev: any) =>
  console.log(diff(prev, state))
)

// useControlesBase.getState().fetchList()

export const useControles = createSelectors(useControlesBase)
