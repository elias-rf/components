import { TDataSource } from '@/data/index.js'
import { TGroupDtoFields } from '@/data/oftalmo/group/group.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TGroupDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.group.create(args)
  }
