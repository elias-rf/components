import { createSelectors } from '@/client/lib/create-selectors.js'
import { paramStorage } from '@/client/lib/param-storage.js'
import { format, startOfMonth } from 'date-fns'
import { flow } from 'lodash-es'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

export type TState = {
  inicial: Date
  final: Date
}

const initialState: TState = {
  inicial: flow([($) => startOfMonth($)])(new Date()),
  final: new Date(),
}

const state = createSelectors(
  create(
    persist(
      devtools(() => initialState),
      {
        name: 'dashboard',
        storage: createJSONStorage(() => paramStorage),
      }
    )
  )
)

const setInicial = (inicial: Date) => {
  state.setState({ inicial }, false, { type: 'dashboard/setInicial', inicial })
}

const setFinal = (final: Date) => {
  state.setState({ final }, false, { type: 'dashboard/setFinal', final })
}

export const dashboardStore = {
  state,
  setInicial,
  setFinal,
}

export type TDashboardStore = typeof dashboardStore
