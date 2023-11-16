import { formatDiario } from '@/client/features/vendas30dias/format-diario'
import { cache } from '@/client/lib/cache'
import { createSelectors } from '@/client/lib/create-selectors'
import { rpc } from '@/rpc/rpc-client'
import { day } from '@/utils/date/day'
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
      inicio: day().subtract(90, 'days').format('YYYY-MM-DD'),
      fim: day().format('YYYY-MM-DD'),
      fetchList: async () => {
        const list = (await cache.fetch(
          {
            inicio: get().inicio,
            fim: get().fim,
            uf,
            _table: 'vendas30dias',
            _method: 'vendas30dias.list',
          },
          {
            context: {
              method: rpc.nfSaida.vendaDiario,
            },
          }
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