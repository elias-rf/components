import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { formatDiario } from '@/client/pages/comercial/vendas-30dias/format-diario.js'
import { format, subDays } from 'date-fns/fp'
import { flowRight } from 'lodash'
import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

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

type Vendas30DiasState = {
  inicio: string
  fim: string
  list: TList
  fetchList: () => Promise<TList>
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

const vendas30DiasStoreBase = createStore<Vendas30DiasState>()(
  devtools(
    (set, get) => ({
      list: {} as TList,
      inicio: flowRight([format('yyyy-MM-dd'), subDays(90)])(new Date()), // day().subtract(90, 'days').format('YYYY-MM-DD'),
      fim: format('yyyy-MM-dd')(new Date()), // day().format('YYYY-MM-DD'),
      fetchList: async () => {
        const list = (await cache.memo(
          {
            inicio: get().inicio,
            fim: get().fim,
            uf,
            _table: 'vendas30dias',
          },
          () =>
            rpc.request('nfSaida_vendaDiario', {
              inicio: get().inicio,
              fim: get().fim,
              uf,
            })
        )) as any[]
        const response = formatDiario(list, get().fim) as TList
        set(() => ({ list: response }), false, 'fetchList')
        return response
      },
    }),
    {
      name: 'intranet',
      store: 'vendas30dias',
      serialize: { options: true },
    }
  )
)

export const vendas30DiasStore = createSelectors(vendas30DiasStoreBase)

export type TVendas30DiasStore = typeof vendas30DiasStore
