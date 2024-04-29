import { createSelectors } from '@/client/lib/create-selectors.mjs'
import { rpc } from '@/client/lib/rpc.mjs'
import { formatDiario } from '@/client/pages/comercial/vendas-periodo/format-diario.mjs'
import { format, subDays } from 'date-fns'
import { flow } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const uf = []

const initialState = {
  inicio: flow([($) => subDays($, 30), ($) => format($, 'yyyy-MM-dd')])(
    new Date()
  ), //format(subDays(new Date(), 30), 'yyyy-MM-dd'),
  fim: format(new Date(), 'yyyy-MM-dd'),
}

const state = createSelectors(create(devtools(() => initialState)))

const fetchList = async ({ inicio, fim }) => {
  const params = {
    inicio,
    fim,
    uf,
  }
  const list = await rpc.request('nfSaida_vendaDiario', params)
  const response = formatDiario(list)
  return response
}

export const vendasPeriodoStore = {
  state,
  fetchList,
}
