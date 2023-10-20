import { cache } from '@/client/lib/cache'
import { createSelectors } from '@/client/lib/create-selectors'
import { rpc } from '@/rpc/rpc-client'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import { isIdEqual } from '@/utils/query/is-id-equal'
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
    const data = (await cache.fetch(
      {
        inicio: day(getFieldId('mes', get().mes) + '-01')
          .startOf('month')
          .format('YYYY-MM-DD'),
        fim: day(getFieldId('mes', get().mes) + '-01')
          .endOf('month')
          .format('YYYY-MM-DD'),
        _method: 'esterilizacaoExterna.diario',
      },
      {
        context: {
          method: rpc.esterilizacaoExterna.diario,
        },
      }
    )) as any[]
    set({ esterilizacaoExternaDiario: data })
    return data
  },
  esterilizacaoExternaDiario: [],

  fetchEsterilizacaoExternaMensal: async () => {
    const data = (await cache.fetch(
      {
        mes: getFieldId('mes', get().mesInicio),
        _method: 'esterilicaoExterna.mensal',
      },
      {
        context: {
          method: rpc.esterilizacaoExterna.mensal,
        },
      }
    )) as any[]
    set({ esterilizacaoExternaMensal: data })
    return data
  },
  esterilizacaoExternaMensal: [],

  fetchEsterilizacaoExternaModelo: async () => {
    const data = (await cache.fetch(
      {
        data: getFieldId('dia', get().dia),
        produto: getFieldId('produto', get().produto),
        _method: 'esterilicaoExterna.modelo',
      },
      {
        context: {
          method: rpc.esterilizacaoExterna.modelo,
        },
      }
    )) as any[]
    set({ esterilizacaoExternaModelo: data })
    return data
  },
  esterilizacaoExternaModelo: [],

  fetchEsterilizacaoExternaProduto: async () => {
    const data = (await cache.fetch(
      {
        data: getFieldId('dia', get().dia),
        _method: 'esterilizacaoExterna.produto',
      },
      {
        context: {
          method: rpc.esterilizacaoExterna.produto,
        },
      }
    )) as any[]
    set({ esterilizacaoExternaProduto: data })
    return data
  },
  esterilizacaoExternaProduto: [],

  fetchEsterilizacaoInternaDiario: async () => {
    const data = (await cache.fetch(
      {
        inicio: day(getFieldId('mes', get().mes) + '-01')
          .startOf('month')
          .format('YYYY-MM-DD'),
        fim: day(getFieldId('mes', get().mes) + '-01')
          .endOf('month')
          .format('YYYY-MM-DD'),
        _method: 'esterilizacaoInterna.diario',
      },
      {
        context: {
          method: rpc.esterilizacaoInterna.diario,
        },
      }
    )) as any[]
    set({ esterilizacaoInternaDiario: data })
    return data
  },
  esterilizacaoInternaDiario: [],

  fetchEsterilizacaoInternaMensal: async () => {
    const data = (await cache.fetch(
      {
        mes: getFieldId('mes', get().mesInicio),
        _method: 'esterilizacaoInterna.mensal',
      },
      {
        context: {
          method: rpc.esterilizacaoInterna.mensal,
        },
      }
    )) as any[]
    set({ esterilizacaoInternaMensal: data })
    return data
  },
  esterilizacaoInternaMensal: [],

  fetchEsterilizacaoInternaModelo: async () => {
    const data = (await cache.fetch(
      {
        data: getFieldId('dia', get().dia),
        produto: getFieldId('produto', get().produto),
        _method: 'esterilizacaoInterna.modelo',
      },
      {
        context: {
          method: rpc.esterilizacaoInterna.modelo,
        },
      }
    )) as any[]
    set({ esterilizacaoInternaModelo: data })
    return data
  },
  esterilizacaoInternaModelo: [],

  fetchEsterilizacaoInternaProduto: async () => {
    const data = (await cache.fetch(
      {
        data: getFieldId('dia', get().dia),
        _method: 'esterilizacaoInterna.produto',
      },
      {
        context: {
          method: rpc.esterilizacaoInterna.produto,
        },
      }
    )) as any[]
    set({ esterilizacaoInternaProduto: data })
    return data
  },
  esterilizacaoInternaProduto: [],

  fetchOperacaoDiario: async () => {
    const data = (await cache.fetch(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        inicio: day(getFieldId('mes', get().mes) + '-01')
          .startOf('month')
          .format('YYYY-MM-DD'),
        fim: day(getFieldId('mes', get().mes) + '-01')
          .endOf('month')
          .format('YYYY-MM-DD'),
        _method: 'ordemProducaoOperacao.diario',
      },
      {
        context: {
          method: rpc.ordemProducaoOperacao.diario,
        },
      }
    )) as any[]
    set({ operacaoDiario: data })
    return data
  },
  operacaoDiario: [],

  fetchOperacaoMensal: async () => {
    const data = (await cache.fetch(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        mes: getFieldId('mes', get().mesInicio),
        _method: 'ordemProducaoOperacao.mensal',
      },
      {
        context: {
          method: rpc.ordemProducaoOperacao.mensal,
        },
      }
    )) as any[]
    set({ operacaoMensal: data })
    return data
  },
  operacaoMensal: [],

  fetchOperacaoProduto: async () => {
    const data = (await cache.fetch(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        data: getFieldId('dia', get().dia),
        _method: 'ordemProducaoOperacao.produto',
      },
      {
        context: {
          method: rpc.ordemProducaoOperacao.produto,
        },
      }
    )) as any[]
    set({ operacaoProduto: data })
    return data
  },
  operacaoProduto: [],

  fetchOperacaoModelo: async () => {
    const data = (await cache.fetch(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        data: getFieldId('dia', get().dia),
        produto: getFieldId('produto', get().produto),
        _method: 'ordemProducaoOperacao.modelo',
      },
      {
        context: {
          method: rpc.ordemProducaoOperacao.modelo,
        },
      }
    )) as any[]
    set({ operacaoModelo: data })
    return data
  },
  operacaoModelo: [],

  fetchOperacaoTurno: async () => {
    const data = (await cache.fetch(
      {
        operacao: getFieldId('operacao', get().operacao) || '',
        data: getFieldId('dia', get().dia),
        _method: 'ordemProducaoOperacao.turno',
      },
      {
        context: {
          method: rpc.ordemProducaoOperacao.turno,
        },
      }
    )) as any[]
    set({ operacaoTurno: data })
    return data
  },
  operacaoTurno: [],

  fetchTransferenciaDiario: async () => {
    const data = (await cache.fetch(
      {
        inicio: day(getFieldId('mes', get().mes) + '-01')
          .startOf('month')
          .format('YYYY-MM-DD'),
        fim: day(getFieldId('mes', get().mes) + '-01')
          .endOf('month')
          .format('YYYY-MM-DD'),
        _method: 'nfSaida.transferenciaDiario',
      },
      {
        context: {
          method: rpc.nfSaida.transferenciaDiario,
        },
      }
    )) as any[]
    set({ transferenciaDiario: data })
    return data
  },
  transferenciaDiario: [],

  fetchTransferenciaMensal: async () => {
    const data = (await cache.fetch(
      {
        mes: getFieldId('mes', get().mesInicio),
        _method: 'nfSaida.transferenciaMensal',
      },
      {
        context: {
          method: rpc.nfSaida.transferenciaMensal,
        },
      }
    )) as any[]
    set({ transferenciaMensal: data })
    return data
  },
  transferenciaMensal: [],

  fetchTransferenciaModelo: async () => {
    const data = (await cache.fetch(
      {
        data: getFieldId('dia', get().dia),
        _method: 'nfSaida.transferenciaModelo',
      },
      {
        context: {
          method: rpc.nfSaida.transferenciaModelo,
        },
      }
    )) as any[]
    set({ transferenciaModelo: data })
    return data
  },
  transferenciaModelo: [],
}))

export const useControles = createSelectors(useControlesBase)
