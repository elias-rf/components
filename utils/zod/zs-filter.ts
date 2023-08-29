import { zd } from './zod'

export const zsFilter = zd
  .array(
    zd.union([
      zd.tuple([zd.string(), zd.any()]),
      zd.tuple([zd.string(), zd.any(), zd.any()]),
    ])
  )
  .nonempty()
