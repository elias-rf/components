import { proxy } from 'valtio'
export const pageSizeState = proxy({
  left: 0,
  top: 0,
  width: 0,
  height: 0,
})
