import { TDataSource } from '@/data/index.js'
import { TAgendaTelefoneDtoFields } from '@/data/oftalmo/agenda-telefone/agenda-telefone.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TAgendaTelefoneDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.agendaTelefone.update(args)
  }
