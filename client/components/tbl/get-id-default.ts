import { TId } from '@/types'
import { TRow } from './table'

export function getIdDefault(row: TRow) {
  return Object.keys(row).reduce((acc, key) => {
    acc.push([key, row[key]])
    return acc
  }, [] as TId<string>)
}
