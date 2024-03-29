import { TDataSource } from '@/data/index.js'
import { TGroupDtoFields } from '@/data/oftalmo/grupo/group.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TGroupDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.group.count(args)
  }
