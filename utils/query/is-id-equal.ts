import { TId } from '@/types/index.js'
import { isEqual, sortBy } from 'lodash-es'

export function isIdEqual(id1: TId<string>, id2: TId<string>) {
  if (id1.length !== id2.length) return false
  return isEqual(sortBy(id1), sortBy(id2))
}
