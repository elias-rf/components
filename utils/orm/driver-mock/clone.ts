import { deepCopy } from '@/utils/deep-copy.js'
import { TQuery } from './driver-mock.js'

export function fnClone({
  data,
  query,
}: {
  data: Record<string, any>[]
  query: TQuery
}) {
  return { data: deepCopy(data), query }
}
