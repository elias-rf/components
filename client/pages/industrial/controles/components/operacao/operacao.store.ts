import { rpc } from '@/client/lib/rpc.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { isIdEqual } from '@/utils/query/is-id-equal.js'
import { endOfMonth, format, parse, startOfMonth, subMonths } from 'date-fns'
import { flow } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type TState = {
  mes: ['mes', string][]
  dia: ['dia', string][]
  operacao: ['operacao', string][]
  produto: ['produto', string][]
  mesInicio: ['mes', string][]
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
}

const state = create(devtools(() => initialState))

const setMes = (mes: ['mes', string][]) => {
  if (isIdEqual(state.getState().mes, mes)) {
    state.setState({ mes: [] })
    return
  }
  state.setState({ mes })
}

const setDia = (dia: ['dia', string][]) => {
  if (isIdEqual(state.getState().dia, dia)) {
    state.setState({ dia: [] })
    return
  }
  state.setState({ dia })
}

const setOperacao = (operacao: ['operacao', string][]) => {
  state.setState({ operacao })
}

const setProduto = (produto: ['produto', string][]) => {
  if (isIdEqual(state.getState().produto, produto)) {
    state.setState({ produto: [] })
    return
  }
  state.setState({ produto })
}

const fetchOperacaoDiario = async (
  mes: ['mes', string][],
  operacao: ['operacao', string][]
) => {
  const dia = getFieldId('mes', mes) + '-01'
  if (dia.length !== 10) {
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
  const data = await rpc.request('ordemProducaoOperacao_diario', params)
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
  const data = await rpc.request('ordemProducaoOperacao_mensal', params)
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
  const data = await rpc.request('ordemProducaoOperacao_produto', params)
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
  const data = await rpc.request('ordemProducaoOperacao_modelo', params)
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
  const data = await rpc.request('ordemProducaoOperacao_turno', params)
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
