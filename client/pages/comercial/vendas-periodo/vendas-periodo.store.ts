import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { formatDiario } from '@/client/pages/comercial/vendas-periodo/format-diario.js'
import { format, subDays } from 'date-fns'
import { flow } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type TFormatDiario = {
  dia: string
  quantidade: number
  fat: number
  valor: number
}

type TList = {
  liteflex: TFormatDiario[]
  metil: TFormatDiario[]
  enlite: TFormatDiario[]
  hilite: TFormatDiario[]
  anel: TFormatDiario[]
  enliteLiteflex: TFormatDiario[]
}

type TState = {
  inicio: string
  fim: string
}

const uf: string[] = []

const initialState: TState = {
  inicio: flow([($) => subDays($, 30), ($) => format($, 'yyyy-MM-dd')])(
    new Date()
  ), //format(subDays(new Date(), 30), 'yyyy-MM-dd'),
  fim: format(new Date(), 'yyyy-MM-dd'),
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({ inicio, fim }: { inicio: string; fim: string }) => {
  const params = {
    inicio,
    fim,
    uf,
  }
  const list = await rpc.request('nfSaida_vendaDiario', params)
  const response = formatDiario(list) as TList
  return response
}

export const vendasPeriodoStore = {
  state,
  fetchList,
}
export type TVendasPeriodoStore = typeof vendasPeriodoStore
