import { TDataSource } from '@/data/index.js'
import { TGroupDtoFields } from '@/data/oftalmo/group/group.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TGroupDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.group.list(args)
  }
