import { isEqual, sortBy } from 'lodash-es'

export function isIdEqual(id1, id2) {
  if (id1.length !== id2.length) return false
  return isEqual(sortBy(id1), sortBy(id2))
}
