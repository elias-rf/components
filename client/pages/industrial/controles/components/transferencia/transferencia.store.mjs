import { endOfMonth, format, parse, startOfMonth, subMonths } from 'date-fns'
import { flow } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createSelectors } from '../../../../../lib/create-selectors.mjs'
import { rpc } from '../../../../../lib/rpc.mjs'
import { getFieldId } from '../../../../../utils/query/get-field-id.mjs'
import { isIdEqual } from '../../../../../utils/query/is-id-equal.mjs'

const initialState = {
  mes: [['mes', flow([($) => format($, 'yyyy-MM')])(new Date())]],
  dia: [],
  operacao: [['operacao', '3058']],
  produto: [],
  mesInicio: [
    [
      'mes',
      flow([($) => subMonths($, 13), ($) => format($, 'yyyy-MM')])(new Date()),
    ],
  ],
}

const state = createSelectors(create(devtools(() => initialState)))

const setMes = (mes) => {
  if (isIdEqual(state.getState().mes, mes)) {
    state.setState({ mes: [] })
    return
  }
  state.setState({ mes })
}

const setDia = (dia) => {
  if (isIdEqual(state.getState().dia, dia)) {
    state.setState({ dia: [] })
    return
  }
  state.setState({ dia })
}

const fetchTransferenciaDiario = async (mes) => {
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

const fetchTransferenciaMensal = async (mesInicio) => {
  const params = {
    mes: getFieldId('mes', mesInicio),
  }
  const data = await rpc.request('nfSaida_transferenciaMensal', params)
  return data
}

const fetchTransferenciaModelo = async (dia) => {
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
