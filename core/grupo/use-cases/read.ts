import { TDataSource } from '@/data/index.js'
import {
  TGroupDtoFields,
  TGroupDtoKeys,
} from '@/data/oftalmo/grupo/group.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TGroupDtoFields, TGroupDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.group.read(args)
  }
