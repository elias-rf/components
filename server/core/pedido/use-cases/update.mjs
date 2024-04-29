import { TUpdate } from '../../../types/query.mjs'

export const update = (dataSource) => async (args) => {
  return dataSource.update(args)
}
