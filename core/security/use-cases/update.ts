import { TDataSource } from '@/data/index.js'
import { TAgendaTelefoneDtoFields } from '@/data/oftalmo/agenda-telefone/agenda-telefone.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (
    dataSource: TDataSource['oftalmo']['agendaTelefone']
  ): TUpdate<TAgendaTelefoneDtoFields> =>
  async (args) => {
    return dataSource.update(args)
  }
