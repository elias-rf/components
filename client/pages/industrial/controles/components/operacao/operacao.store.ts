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
  operacaoDiario: any[]
  operacaoMensal: any[]
  operacaoProduto: any[]
  operacaoModelo: any[]
  operacaoTurno: any[]
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
  operacaoDiario: [],
  operacaoMensal: [],
  operacaoProduto: [],
  operacaoModelo: [],
  operacaoTurno: [],
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

const setOperacao = (operacao: ['operacao', string][]) => {
  state.operacao = operacao
}

const setProduto = (produto: ['produto', string][]) => {
  if (isIdEqual(state.produto, produto)) {
    state.produto = []
    return
  }
  state.produto = produto
}

const fetchOperacaoDiario = async (
  mes: ['mes', string][],
  operacao: ['operacao', string][]
) => {
  const dia = getFieldId('mes', mes) + '-01'
  if (dia.length !== 10) {
    state.operacaoDiario = []
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
  const params = {
    operacao: getFieldId('operacao', operacao) || '',
    inicio,
    fim,
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['ordemProducaoOperacao'],
      rpc: 'ordemProducaoOperacao_diario',
    },
    () => rpc.request('ordemProducaoOperacao_diario', params)
  )) as any[]
  state.operacaoDiario = data
  return data
}

const fetchOperacaoMensal = async (
  mesInicio: ['mes', string][],
  operacao: ['operacao', string][]
) => {
  const params = {
    operacao: getFieldId('operacao', operacao) || '',
    mes: getFieldId('mes', mesInicio),
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['ordemProducaoOperacao'],
      rpc: 'ordemProducaoOperacao_mensal',
    },
    () => rpc.request('ordemProducaoOperacao_mensal', params)
  )) as any[]
  state.operacaoMensal = data
  return data
}

const fetchOperacaoProduto = async (
  dia: ['dia', string][],
  operacao: ['operacao', string][]
) => {
  const params = {
    data: getFieldId('dia', dia),
    operacao: getFieldId('operacao', operacao) || '',
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['ordemProducaoOperacao'],
      rpc: 'ordemProducaoOperacao_produto',
    },
    () => rpc.request('ordemProducaoOperacao_produto', params)
  )) as any[]
  state.operacaoProduto = data
  return data
}

const fetchOperacaoModelo = async (
  dia: ['dia', string][],
  produto: ['produto', string][],
  operacao: ['operacao', string][]
) => {
  const params = {
    operacao: getFieldId('operacao', operacao) || '',
    data: getFieldId('dia', dia),
    produto: getFieldId('produto', produto),
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['ordemProducaoOperacao'],
      rpc: 'ordemProducaoOperacao_modelo',
    },
    () => rpc.request('ordemProducaoOperacao_modelo', params)
  )) as any[]
  state.operacaoModelo = data
  return data
}

const fetchOperacaoTurno = async (
  dia: ['dia', string][],
  operacao: ['operacao', string][]
) => {
  const params = {
    operacao: getFieldId('operacao', operacao) || '',
    data: getFieldId('dia', dia),
  }
  const data = (await cache.memo(
    {
      rpc: 'ordemProducaoOperacao_diario',
      params,
      tables: ['ordemProducaoOperacao'],
    },
    () => rpc.request('ordemProducaoOperacao_turno', params)
  )) as any[]
  state.operacaoTurno = data
  return data
}

export const operacaoStore = {
  state,
  setOperacao,
  setDia,
  setMes,
  setProduto,
  fetchOperacaoDiario,
  fetchOperacaoMensal,
  fetchOperacaoProduto,
  fetchOperacaoModelo,
  fetchOperacaoTurno,
}

export type TOperacaoStore = typeof operacaoStore
