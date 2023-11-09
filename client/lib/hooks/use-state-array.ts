import { useState } from 'react'

const updateAt = <T>(
  index: number,
  updateFn: (item: T) => T,
  set: React.Dispatch<React.SetStateAction<T[]>>
) =>
  set((l: any) => {
    const copy = l.slice(0)
    const item = copy[index]
    copy[index] = updateFn(item)
    return copy
  })

type TUseArrayResponse<T> = {
  value: T[]
  setValue: React.Dispatch<React.SetStateAction<T[]>>
  empty: () => void
  replace: (list: T[]) => void
  push: (item: T) => void
  updateAt: (index: number, updateFn: (item: T) => T) => void
  setAt: (index: number, value: T) => void
  removeAt: (index: number) => void
  filter: (
    filterFn: (value: T, index: number, array: T[]) => value is T
  ) => void
  map: (mapFn: (value: T, index: number, array: T[]) => T) => void
  sort: (sortFn: (a: T, b: T) => number) => void
  reverse: () => void
  includes: (value: T) => boolean
  mergeBefore: (arr: T[]) => void
  mergeAfter: (arr: T[]) => void
}

export function useStateArray<T>(value: T[]): TUseArrayResponse<T> {
  const [list, set] = useState(value)

  return {
    value: list,
    setValue: set,
    empty: () => set([]),
    replace: (list) => set(list),
    push: (item: T) => set((l) => [...l, item]),
    updateAt: (index, updateFn) => updateAt(index, updateFn, set),
    setAt: (index, value: T) =>
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
