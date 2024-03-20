import { TDataSource } from '@/data/index.js'
import {
  TGroupDtoFields,
  TGroupDtoKeys,
} from '@/data/oftalmo/group/group.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TGroupDtoFields, TGroupDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.group.del(args)
  }
