import { cloneDeep } from 'lodash-es'
import { TQuery } from './driver-mock.js'

export function fnClone({
  data,
  query,
}: {
  data: Record<string, any>[]
  query: TQuery
}) {
  return { data: cloneDeep(data), query }
}
