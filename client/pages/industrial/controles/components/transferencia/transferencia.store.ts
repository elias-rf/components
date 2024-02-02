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

const fetchTransferenciaDiario = async (mes: ['mes', string][]) => {
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
  const params = { inicio, fim }
  const data = await rpc.request('nfSaida_transferenciaDiario', params)
  return data
}

const fetchTransferenciaMensal = async (mesInicio: ['mes', string][]) => {
  const params = {
    mes: getFieldId('mes', mesInicio),
  }
  const data = await rpc.request('nfSaida_transferenciaMensal', params)
  return data
}

const fetchTransferenciaModelo = async (dia: ['dia', string][]) => {
  const params = {
    data: getFieldId('dia', dia),
  }
  const data = await rpc.request('nfSaida_transferenciaModelo', params)
  return data
}

export const transferenciaStore = {
  state,
  setDia,
  setMes,
  fetchTransferenciaDiario,
  fetchTransferenciaMensal,
  fetchTransferenciaModelo,
}

export type TTransferenciaStore = typeof transferenciaStore
