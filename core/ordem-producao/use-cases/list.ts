import { TDataSource } from '@/data/index.js'
import { TOrdemProducaoDtoFields } from '@/data/oftalmo/ordem-producao/ordem-producao.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TOrdemProducaoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.ordemProducao.list(args)
  }
