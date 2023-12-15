import { round } from '@/utils/number/round.js'
import React from 'react'
import { inteiro, moeda } from '../../../../lib/text-box-formats.js'
import { calculadora } from './calculadora.js'
import { TGrupos } from './precos-vendedor.js'

const produtos: TGrupos[] = ['hilite', 'liteflex', 'metil', 'enlite']

const stateProdDefault = {
  quantidade: 0,
  tabela: 0,
  ofertado: 0,
  combo: 0,
  precoPadrao: 0,
  precoSugerido: 0,
  precoMinimo: 0,
  saldoProduto: 0,
  saldoCombo: 0,
  totalTabela: 0,
  totalOfertado: 0,
  totalMinimo: 0,
}

let stateStorage = '{}'
if (typeof window !== 'undefined') {
  stateStorage = window.localStorage.getItem('precosState') || '{}'
}

let stateDefault: Record<TGrupos, any> = {
  hilite: { ...stateProdDefault },
  liteflex: { ...stateProdDefault },
  metil: { ...stateProdDefault },
  enlite: { ...stateProdDefault },
  combo1: { ...stateProdDefault },
  combo2: { ...stateProdDefault },
  total: { tabela: 0, ofertado: 0, minimo: 0 },
  desconto: { ofertado: 0 },
  disponivel: { saldoCombo: 0 },
}

if (stateDefault) {
  stateDefault = { ...stateDefault, ...JSON.parse(stateStorage) }
}

function calcPrecos(
  state: any,
  group: keyof typeof calculadora,
  item: string,
  value: number | string
) {
  if (item === 'quantidade') {
    value = inteiro.parse(value)
  } else {
    value = moeda.parse(value as string)
  }

  state[group][item] = value

  state[group].precoPadrao = round(calculadora[group](1) * 1.1, 2)

  state[group].precoSugerido = round(
    calculadora[group](state[group].quantidade) * 1.1,
    2
  )
  state[group].precoMinimo = calculadora[group](state[group].quantidade)
  state[group].saldoProduto =
    state[group].quantidade === 0
      ? 0
      : round(state[group].ofertado - state[group].precoMinimo)

  state[group].totalTabela = state[group].quantidade * state[group].tabela
  state[group].totalOfertado = state[group].quantidade * state[group].ofertado
  state[group].totalMinimo = state[group].quantidade * state[group].precoMinimo

  state.total.tabela = round(
    state.hilite.totalTabela +
      state.liteflex.totalTabela +
      state.metil.totalTabela +
      state.enlite.totalTabela
  )

  state.total.ofertado = round(
    state.hilite.totalOfertado +
      state.liteflex.totalOfertado +
      state.metil.totalOfertado +
      state.enlite.totalOfertado
  )

  state.total.minimo = round(
    state.hilite.totalMinimo +
      state.liteflex.totalMinimo +
      state.metil.totalMinimo +
      state.enlite.totalMinimo
  )

  state.desconto.ofertado = round(state.total.tabela - state.total.ofertado)

  state.disponivel.saldoCombo = round(state.total.ofertado - state.total.minimo)

  for (const gp of produtos) {
    state[gp].saldoCombo =
      state[gp].quantidade > 0
        ? round(state.disponivel.saldoCombo / state[gp].quantidade)
        : 0
  }

  let qtd = 0

  state.combo1.tabela = 0
  state.combo1.quantidade = 0
  state.combo2.tabela = 0
  state.combo2.quantidade = 0

  // COMBO 1
  // LITEFLEX
  qtd = Math.min(
    state.liteflex.quantidade,
    state.enlite.quantidade,
    state.metil.quantidade
  )

  if (qtd > 0) {
    state.combo1.quantidade = qtd
    state.combo1.tabela = round(
      calculadora.liteflexEnliteMetil(state.combo1.quantidade)
    )
  }

  // HILITE
  qtd = Math.min(
    state.hilite.quantidade,
    state.enlite.quantidade,
    state.metil.quantidade
  )
  if (qtd > 0) {
    state.combo1.quantidade = qtd

    state.combo1.tabela = round(
      calculadora.hiliteEnliteMetil(state.combo1.quantidade)
    )
  }

  state.combo1.totalTabela = round(
    state.combo1.quantidade * state.combo1.tabela
  )

  // COMBO 2
  // LITEFLEX
  qtd =
    Math.min(state.liteflex.quantidade, state.enlite.quantidade) -
    state.combo1.quantidade

  if (qtd > 0) {
    state.combo2.quantidade = qtd
    state.combo2.tabela = round(
      calculadora.liteflexEnlite(state.combo2.quantidade)
    )
  }

  // HILITE
  qtd =
    Math.min(state.hilite.quantidade, state.enlite.quantidade) -
    state.combo1.quantidade

  if (qtd > 0) {
    state.combo2.quantidade = qtd

    state.combo2.tabela = round(
      calculadora.hiliteEnlite(state.combo2.quantidade)
    )
  }

  state.combo2.totalTabela = round(
    state.combo2.quantidade * state.combo2.tabela
  )
  return state
}

export function usePrecosState() {
  const [state, setState] = React.useState(stateDefault)

  function setPrecos(
    group: keyof typeof calculadora,
    item: string,
    value: number
  ) {
    const result = calcPrecos({ ...state }, group, item, value)
    window.localStorage.setItem('precosState', JSON.stringify(result))
    setState(result)
  }

  return [state, setPrecos]
}
