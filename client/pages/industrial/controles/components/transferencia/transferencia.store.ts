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
  transferenciaDiario: any[]
  transferenciaMensal: any[]
  transferenciaModelo: any[]
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
  transferenciaDiario: [],
  transferenciaMensal: [],
  transferenciaModelo: [],
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

const fetchTransferenciaDiario = async (mes: ['mes', string][]) => {
  const dia = getFieldId('mes', mes) + '-01'
  if (dia.length !== 10) {
    state.transferenciaDiario = []
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
      tables: ['nfSaida'],
      rpc: 'nfSaida_transferenciaDiario',
    },
    () => rpc.request('nfSaida_transferenciaDiario', params)
  )) as any[]
  state.transferenciaDiario = data
  return data
}

const fetchTransferenciaMensal = async (mesInicio: ['mes', string][]) => {
  const params = {
    mes: getFieldId('mes', mesInicio),
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['nfSaida'],
      rpc: 'nfSaida_transferenciaMensal',
    },
    () => rpc.request('nfSaida_transferenciaMensal', params)
  )) as any[]
  state.transferenciaMensal = data
  return data
}

const fetchTransferenciaModelo = async (dia: ['dia', string][]) => {
  const params = {
    data: getFieldId('dia', dia),
  }
  const data = (await cache.memo(
    {
      params,
      tables: ['nfSaida'],
      rpc: 'nfSaida_transferenciaModelo',
    },
    () => rpc.request('nfSaida_transferenciaModelo', params)
  )) as any[]
  state.transferenciaModelo = data
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
