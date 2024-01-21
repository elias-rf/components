import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import { formatDiario } from '@/client/pages/comercial/vendas-30dias/components/format-diario.js'
import { format, subDays } from 'date-fns'
import { flow } from 'lodash-es'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

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
  list: TList
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
  list: {} as TList,
  inicio: flow([($) => subDays($, 90), ($) => format($, 'yyyy-MM-dd')])(
    new Date()
  ), // day().subtract(90, 'days').format('YYYY-MM-DD'),
  fim: format(new Date(), 'yyyy-MM-dd'), // day().format('YYYY-MM-DD'),
}

const state = proxy(initialState)
devtools(state, { name: 'vendas30dias', enabled: true })

const fetchList = async () => {
  const params = {
    inicio: state.inicio,
    fim: state.fim,
    uf,
  }
  const list = (await cache.memo(
    {
      params,
      tables: ['vendas'],
      rpc: 'nfSaida_vendaDiario',
    },
    () => rpc.request('nfSaida_vendaDiario', params)
  )) as any[]
  const response = formatDiario(list, state.fim) as TList
  state.list = response
  return response
}

export const vendas30DiasStore = {
  state,
  fetchList,
}

export type TVendas30DiasStore = typeof vendas30DiasStore
