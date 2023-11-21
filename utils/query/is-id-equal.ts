import { TId } from '@/types/index.js'

export function isIdEqual(id1: TId<string>, id2: TId<string>) {
  if (id1.length !== id2.length) return false
  for (let i = 0; i < id1.length; i++) {
    if (id1[i][0] !== id2[i][0]) return false
    if (id1[i][1] !== id2[i][1]) return false
  }
  return true
}
