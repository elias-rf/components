import { TDataSource } from '@/data/index.js'
import {
  TAgendaTelefoneDtoFields,
  TAgendaTelefoneDtoKeys,
} from '@/data/oftalmo/agenda-telefone/agenda-telefone.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource['oftalmo']['agendaTelefone']
  ): TDel<TAgendaTelefoneDtoFields, TAgendaTelefoneDtoKeys> =>
  async (args) => {
    return dataSource.del(args)
  }
