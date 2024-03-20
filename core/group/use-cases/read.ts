import { TDataSource } from '@/data/index.js'
import {
  TGroupDtoFields,
  TGroupDtoKeys,
} from '@/data/oftalmo/group/group.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TGroupDtoFields, TGroupDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.agendaTelefone.read(args)
  }
