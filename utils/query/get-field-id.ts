import { TId } from '@/types'

export function getFieldId<T>(field: string, id: TId<T>) {
  for (const fld of id) {
    if (fld[0] === field) return fld[1]
  }
  return undefined
}
