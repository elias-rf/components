import { createSelectors } from '@/client/lib/create-selectors.mjs'
import { rpc } from '@/client/lib/rpc.mjs'
import { formatDiario } from '@/client/pages/comercial/vendas-30dias/components/format-diario.mjs'
import { format, subDays } from 'date-fns'
import { flow } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

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

const initialState = {
  inicio: flow([($) => subDays($, 90), ($) => format($, 'yyyy-MM-dd')])(
    new Date()
  ),
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
  const response = formatDiario(list, fim)
  return response
}

export const vendas30DiasStore = {
  state,
  fetchList,
}
