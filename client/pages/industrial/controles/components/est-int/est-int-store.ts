import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { isIdEqual } from '@/utils/query/is-id-equal.js'
import { endOfMonth, format, parse, startOfMonth, subMonths } from 'date-fns'
import { flow } from 'lodash-es'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

type TState = {
  mes: ['mes', string][]
  dia: ['dia', string][]
  operacao: ['operacao', string][]
  produto: ['produto', string][]
  mesInicio: ['mes', string][]
  esterilizacaoInternaDiario: any[]
  esterilizacaoInternaMensal: any[]
  esterilizacaoInternaModelo: any[]
  esterilizacaoInternaProduto: any[]
}

const initialState: TState = {
  mes: [['mes', flow([($) => format($, 'yyyy-MM')])(new Date())]] as [
    'mes',
    string,
  ][],
  dia: [] as ['dia', string][],
  operacao: [['operacao', '3058']],
  produto: [] as ['produto', string][],
  mesInicio: [
    [
      'mes',
      flow([($) => subMonths($, 13), ($) => format($, 'yyyy-MM')])(new Date()),
    ],
  ],
  esterilizacaoInternaDiario: [],
  esterilizacaoInternaMensal: [],
  esterilizacaoInternaModelo: [],
  esterilizacaoInternaProduto: [],
}

const state = proxy(initialState)
devtools(state, {
  name: 'controles',
  enabled: true,
})

const setMes = (mes: ['mes', string][]) => {
  if (isIdEqual(state.mes, mes)) {
    state.mes = []
    return
  }
  state.mes = mes
}

const setDia = (dia: ['dia', string][]) => {
  if (isIdEqual(state.dia, dia)) {
    state.dia = []
    return
  }
  state.dia = dia
}

const setProduto = (produto: ['produto', string][]) => {
  if (isIdEqual(state.produto, produto)) {
    state.produto = []
    return
  }
  state.produto = produto
}

const fetchEsterilizacaoInternaDiario = async (mes: ['mes', string][]) => {
  const dia = getFieldId('mes', mes) + '-01'
  if (dia.length !== 10) {
    state.esterilizacaoInternaDiario = []
    return []
  }
  const inicio = flow([
    ($) => parse($, 'yyyy-MM-dd', new Date()),
    startOfMonth,
    ($) => format($, 'yyyy-MM-dd'),
  ])(dia)
  const fim = flow([
    ($) => parse($, 'yyyy-MM-dd', new Date()),
    endOfMonth,
    ($) => format($, 'yyyy-MM-dd'),
  ])(dia)
  const params = { inicio, fim }
  const data = (await cache.memo(
    {
      params,
      tables: ['esterilizacaoInterna'],
      rpc: 'esterilizacaoExterna_diario',
    },
    () => rpc.request('esterilizacaoInterna_diario', params)
  )) as any[]
  state.esterilizacaoInternaDiario = data
  return data
}

const fetchEsterilizacaoInternaMensal = async (
  mesInicio: ['mes', string][]
) => {
  const params = {
    mes: getFieldId('mes', mesInicio),
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['esterilizacaoInterna'],
      rpc: 'esterilizacaoExterna_mensal',
    },
    () => rpc.request('esterilizacaoInterna_mensal', params)
  )) as any[]
  state.esterilizacaoInternaMensal = data
  return data
}

const fetchEsterilizacaoInternaModelo = async (
  dia: ['dia', string][],
  produto: ['produto', string][]
) => {
  const params = {
    data: getFieldId('dia', dia),
    produto: getFieldId('produto', produto),
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['esterilizacaoInterna'],
      rpc: 'esterilizacaoExterna_modelo',
    },
    () => rpc.request('esterilizacaoInterna_modelo', params)
  )) as any[]
  state.esterilizacaoInternaModelo = data
  return data
}

const fetchEsterilizacaoInternaProduto = async (dia: ['dia', string][]) => {
  const params = {
    data: getFieldId('dia', dia),
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['esterilizacaoInterna'],
      rpc: 'esterilizacaoExterna_produto',
    },
    () => rpc.request('esterilizacaoInterna_produto', params)
  )) as any[]
  state.esterilizacaoInternaProduto = data
  return data
}

export const esterilizacaoInternaStore = {
  state,
  setDia,
  setMes,
  setProduto,
  fetchEsterilizacaoInternaDiario,
  fetchEsterilizacaoInternaMensal,
  fetchEsterilizacaoInternaModelo,
  fetchEsterilizacaoInternaProduto,
}

export type TEsterilizacaoInternaStore = typeof esterilizacaoInternaStore
