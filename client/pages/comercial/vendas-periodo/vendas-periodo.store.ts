import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { formatDiario } from '@/client/pages/comercial/vendas-periodo/format-diario.js'
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
      inicio: flowRight([format('yyyy-MM-dd'), subDays(30)])(new Date()), //format(subDays(new Date(), 30), 'yyyy-MM-dd'),
      fim: format('yyyy-MM-dd')(new Date()),
      fetchList: async () => {
        const list = (await cache.memo(
          {
            inicio: get().inicio,
            fim: get().fim,
            uf,
            _table: 'vendasPeriodo',
          },
          () =>
            rpc.request('nfSaida_vendaDiario', {
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
