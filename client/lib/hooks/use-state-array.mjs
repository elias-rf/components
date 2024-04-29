import { useState } from 'react'

const updateAt = (index, updateFn, set) =>
  set((l) => {
    const copy = l.slice(0)
    const item = copy[index]
    copy[index] = updateFn(item)
    return copy
  })

export function useStateArray(value) {
  const [list, set] = useState(value)

  return {
    value: list,
    setValue: set,
    empty: () => set([]),
    replace: (list) => set(list),
    push: (item) => set((l) => [...l, item]),
    updateAt: (index, updateFn) => updateAt(index, updateFn, set),
    setAt: (index, value) =>
      set((l) => [...l.slice(0, index), value, ...l.slice(index + 1)]),
    removeAt: (index) =>
      set((l) => [...l.slice(0, index), ...l.slice(index + 1)]),
    filter: (filterFn) => set((l) => l.filter(filterFn)),
    map: (mapFn) => set((l) => [...l].map(mapFn)),
    sort: (sortFn) => set((l) => [...l].sort(sortFn)),
    reverse: () => set((l) => [...l].reverse()),
    mergeBefore: (arr) => set((l) => [...arr].concat([...l])),
    includes: (item) => list.includes(item),
    mergeAfter: (arr) => set((l) => [...l].concat([...arr])),
  }
}
