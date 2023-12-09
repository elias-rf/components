import { formatDiario } from '@/client/features/comercial/vendas-periodo/format-diario.js'
import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/rpc/rpc-client.js'
import { day } from '@/utils/date/day.js'
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

type VendasPeriodoState = {
  inicio: string
  fim: string
  list: TList
  fetchList: () => Promise<TList>
}

const uf: string[] = []

const vendasPeriodoStoreBase = createStore<VendasPeriodoState>()(
  devtools(
    (set, get) => ({
      list: {} as TList,
      inicio: day().subtract(30, 'days').format('YYYY-MM-DD'),
      fim: day().format('YYYY-MM-DD'),
      fetchList: async () => {
        const list = (await cache.memo(
          {
            inicio: get().inicio,
            fim: get().fim,
            uf,
            _table: 'vendasPeriodo',
          },
          () =>
            rpc.nfSaida.vendaDiario({
              inicio: get().inicio,
              fim: get().fim,
              uf,
            })
        )) as any[]
        const response = formatDiario(list) as TList

        set(() => ({ list: response }), false, 'fetchList')
        return response
      },
    }),
    {
      name: 'intranet',
      store: 'vendasPeriodo',
      serialize: { options: true },
    }
  )
)

export const vendasPeriodoStore = createSelectors(vendasPeriodoStoreBase)
