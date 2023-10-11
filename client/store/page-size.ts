import { create } from 'zustand'

interface PageSizeState {
  left: number
  top: number
  width: number
  height: number
  setSize: ({ left, top, width, height }: TPageSize) => void
}

type TPageSize = Omit<PageSizeState, 'setSize'>

export const usePageSize = create<PageSizeState>()((set) => ({
  left: 0,
  top: 0,
  width: 0,
  height: 0,
  setSize: ({ left, top, width, height }: TPageSize) =>
    set(() => ({ left, top, width, height })),
}))
