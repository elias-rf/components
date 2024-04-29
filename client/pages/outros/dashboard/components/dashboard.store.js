import { createSelectors } from '@/client/lib/create-selectors.mjs'
import { paramStorage } from '@/client/lib/param-storage.mjs'
import { startOfMonth } from 'date-fns'
import { flow } from 'lodash-es'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

const initialState = {
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

const setInicial = (inicial) => {
  state.setState({ inicial }, false, { type: 'dashboard/setInicial', inicial })
}

const setFinal = (final) => {
  state.setState({ final }, false, { type: 'dashboard/setFinal', final })
}

export const dashboardStore = {
  state,
  setInicial,
  setFinal,
}
