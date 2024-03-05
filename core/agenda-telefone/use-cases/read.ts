import {
  TAgendaTelefoneDtoFields,
  TAgendaTelefoneDtoKeys,
} from '@/core/agenda-telefone/agenda-telefone.type.js'
import { TDataSource } from '@/data/index.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource['oftalmo']['agendaTelefone']
  ): TRead<TAgendaTelefoneDtoFields, TAgendaTelefoneDtoKeys> =>
  async (args) => {
    return dataSource.read(args)
  }
