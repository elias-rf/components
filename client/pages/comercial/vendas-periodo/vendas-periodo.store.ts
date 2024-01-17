import { cache } from '@/client/lib/cache.js'
import { rpc } from '@/client/lib/rpc.js'
import { formatDiario } from '@/client/pages/comercial/vendas-periodo/format-diario.js'
import { format, subDays } from 'date-fns/fp'
import { flowRight } from 'lodash-es'
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

const uf: string[] = []

const initialState: TState = {
  list: {} as TList,
  inicio: flowRight([format('yyyy-MM-dd'), subDays(30)])(new Date()), //format(subDays(new Date(), 30), 'yyyy-MM-dd'),
  fim: format('yyyy-MM-dd')(new Date()),
}

const state = proxy(initialState)
devtools(state, { name: 'vendasPeriodo', enabled: true })

const fetchList = async () => {
  const list = (await cache.memo(
    {
      inicio: state.inicio,
      fim: state.fim,
      uf,
      _table: 'vendasPeriodo',
    },
    () =>
      rpc.request('nfSaida_vendaDiario', {
        inicio: state.inicio,
        fim: state.fim,
        uf,
      })
  )) as any[]
  const response = formatDiario(list) as TList

  state.list = response
  return response
}

export const vendasPeriodoStore = {
  state,
  fetchList,
}
export type TVendasPeriodoStore = typeof vendasPeriodoStore
