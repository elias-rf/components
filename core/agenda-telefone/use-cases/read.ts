import { TDataSource } from '@/data/index.js'
import {
  TAgendaTelefoneDtoFields,
  TAgendaTelefoneDtoKeys,
} from '@/data/oftalmo/agenda-telefone/agenda-telefone.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TAgendaTelefoneDtoFields, TAgendaTelefoneDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.agendaTelefone.read(args)
  }
