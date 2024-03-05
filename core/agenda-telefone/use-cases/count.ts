import { TAgendaTelefoneDtoFields } from '@/core/agenda-telefone/agenda-telefone.type.js'
import { TDataSource } from '@/data/index.js'
import { TCount } from '@/types/index.js'

export const count =
  (
    dataSource: TDataSource['oftalmo']['agendaTelefone']
  ): TCount<TAgendaTelefoneDtoFields> =>
  async (args) => {
    return dataSource.count(args)
  }
