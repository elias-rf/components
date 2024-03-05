import { TAgendaTelefoneDtoFields } from '@/core/agenda-telefone/agenda-telefone.type.js'
import { TDataSource } from '@/data/index.js'
import { TCreate } from '@/types/index.js'

export const create =
  (
    dataSource: TDataSource['oftalmo']['agendaTelefone']
  ): TCreate<TAgendaTelefoneDtoFields> =>
  async (args) => {
    return dataSource.create(args)
  }
