import { TAgendaTelefoneDtoFields } from '@/core/agenda-telefone/agenda-telefone.type.js'
import { TDataSource } from '@/data/index.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (
    dataSource: TDataSource['oftalmo']['agendaTelefone']
  ): TUpdate<TAgendaTelefoneDtoFields> =>
  async (args) => {
    return dataSource.update(args)
  }
