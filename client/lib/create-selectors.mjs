/* eslint-disable no-extra-semi */
/* eslint-disable react-hooks/rules-of-hooks */
import { useStore } from 'zustand'

/**
 * Creates selectors for a given zustand store.
 *
 * @template S - The type of the store.
 * @param {S} _store - The store to create selectors for.
 * @return {WithSelectors<S>} The store with selectors.
 */
export const createSelectors = (_store) => {
  const store = _store
  store.use = {}
  for (const k of Object.keys(store.getState())) {
    store.use[k] = () => useStore(store, (s) => s[k])
    // (store.use )[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}
