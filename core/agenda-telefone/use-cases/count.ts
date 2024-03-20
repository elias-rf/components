import { TDataSource } from '@/data/index.js'
import { TAgendaTelefoneDtoFields } from '@/data/oftalmo/agenda-telefone/agenda-telefone.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TAgendaTelefoneDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.agendaTelefone.count(args)
  }
