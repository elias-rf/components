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
  esterilizacaoExternaDiario: any[]
  esterilizacaoExternaMensal: any[]
  esterilizacaoExternaModelo: any[]
  esterilizacaoExternaProduto: any[]
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
  esterilizacaoExternaDiario: [],
  esterilizacaoExternaMensal: [],
  esterilizacaoExternaModelo: [],
  esterilizacaoExternaProduto: [],
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
  // fetchEsterilizacaoExternaDiario(mes)
}

const setDia = (dia: ['dia', string][]) => {
  if (isIdEqual(state.dia, dia)) {
    state.dia = []
    return
  }
  state.dia = dia
  // fetchEsterilizacaoExternaProduto(dia)
  // fetchEsterilizacaoExternaModelo(dia, state.produto)
}

const setProduto = (produto: ['produto', string][]) => {
  if (isIdEqual(state.produto, produto)) {
    state.produto = []
    return
  }
  state.produto = produto
  // fetchEsterilizacaoExternaModelo(state.dia, produto)
}

const fetchEsterilizacaoExternaDiario = async (mes: ['mes', string][]) => {
  const dia = getFieldId('mes', mes) + '-01'
  if (dia.length !== 10) {
    state.esterilizacaoExternaDiario = []
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
      tables: ['esterilizacaoExterna'],
      rpc: 'esterilizacaoExterna_diario',
    },
    () => rpc.request('esterilizacaoExterna_diario', params)
  )) as any[]
  state.esterilizacaoExternaDiario = data
  return data
}

const fetchEsterilizacaoExternaMensal = async (
  mesInicio: ['mes', string][]
) => {
  const params = {
    mes: getFieldId('mes', mesInicio),
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['esterilizacaoExterna'],
      rpc: 'esterilizacaoExterna_mensal',
    },
    () => rpc.request('esterilizacaoExterna_mensal', params)
  )) as any[]
  state.esterilizacaoExternaMensal = data
  return data
}

const fetchEsterilizacaoExternaModelo = async (
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
      tables: ['esterilizacaoExterna'],
      rpc: 'esterilizacaoExterna_modelo',
    },
    () => rpc.request('esterilizacaoExterna_modelo', params)
  )) as any[]
  state.esterilizacaoExternaModelo = data
  return data
}

const fetchEsterilizacaoExternaProduto = async (dia: ['dia', string][]) => {
  const params = {
    data: getFieldId('dia', dia),
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['esterilizacaoExterna'],
      rpc: 'esterilizacaoExterna_produto',
    },
    () => rpc.request('esterilizacaoExterna_produto', params)
  )) as any[]
  state.esterilizacaoExternaProduto = data
  return data
}

export const esterilizacaoExternaStore = {
  state,
  fetchEsterilizacaoExternaDiario,
  fetchEsterilizacaoExternaMensal,
  fetchEsterilizacaoExternaModelo,
  fetchEsterilizacaoExternaProduto,
  setMes,
  setDia,
  setProduto,
}

export type TEsterilizacaoExternaStore = typeof esterilizacaoExternaStore
