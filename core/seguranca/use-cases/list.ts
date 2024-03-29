import { TDataSource } from '@/data/index.js'
import { TAgendaTelefoneDtoFields } from '@/data/oftalmo/agenda-telefone/agenda-telefone.type.js'
import { TList } from '@/types/index.js'

export const list =
  (
    dataSource: TDataSource['oftalmo']['agendaTelefone']
  ): TList<TAgendaTelefoneDtoFields> =>
  async (args) => {
    return dataSource.list(args)
  }
