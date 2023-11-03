import { create } from 'zustand'

interface PageSizeState {
  left: number
  top: number
  width: number
  height: number
}

export const usePageSize = create<PageSizeState>()(() => ({
  left: 0,
  top: 0,
  width: 0,
  height: 0,
}))

export function setSize({ left, top, width, height }: PageSizeState) {
  usePageSize.setState({ left, top, width, height })
}
