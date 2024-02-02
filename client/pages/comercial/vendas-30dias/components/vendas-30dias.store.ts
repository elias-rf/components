import { rpc } from '@/client/lib/rpc.js'
import { formatDiario } from '@/client/pages/comercial/vendas-30dias/components/format-diario.js'
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

const uf = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MG',
  'MS',
  'MT',
  'PA',
  'PB',
  'PE',
  'PI',
  'PR',
  'RJ',
  'RN',
  'RO',
  'RR',
  'RS',
  'SC',
  'SE',
  'SP1',
  'SP2',
  'TO',
  'EX',
  'FV',
]

const initialState: TState = {
  inicio: flow([($) => subDays($, 90), ($) => format($, 'yyyy-MM-dd')])(
    new Date()
  ),
  fim: format(new Date(), 'yyyy-MM-dd'),
}

const state = create(devtools(() => initialState))

const fetchList = async ({ inicio, fim }: { inicio: string; fim: string }) => {
  const params = {
    inicio,
    fim,
    uf,
  }
  const list = await rpc.request('nfSaida_vendaDiario', params)
  const response = formatDiario(list, fim) as TList
  return response
}

export const vendas30DiasStore = {
  state,
  fetchList,
}

export type TVendas30DiasStore = typeof vendas30DiasStore
