import { TAgendaTelefoneDtoFields } from '@/core/agenda-telefone/agenda-telefone.type.js'
import { TDataSource } from '@/data/index.js'
import { TList } from '@/types/index.js'

export const list =
  (
    dataSource: TDataSource['oftalmo']['agendaTelefone']
  ): TList<TAgendaTelefoneDtoFields> =>
  async (args) => {
    return dataSource.list(args)
  }
