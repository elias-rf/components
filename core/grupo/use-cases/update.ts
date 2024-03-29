import { TDataSource } from '@/data/index.js'
import { TGroupDtoFields } from '@/data/oftalmo/grupo/group.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TGroupDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.agendaTelefone.update(args)
  }
