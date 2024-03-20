import { TDataSource } from '@/data/index.js'
import { TAgendaTelefoneDtoFields } from '@/data/oftalmo/agenda-telefone/agenda-telefone.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TAgendaTelefoneDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.agendaTelefone.create(args)
  }
