import { TData, TId } from '@/types/index.js'

export function getIdDefault(row: TData<string>) {
  return Object.keys(row).reduce((acc, key) => {
    acc.push([key, row[key]])
    return acc
  }, [] as TId<string>)
}
