import { TDataSource } from '@/data/index.js'
import { TOperacaoProducaoDtoFields } from '@/data/oftalmo/operacao-producao/operacao-producao.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TOperacaoProducaoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.operacaoProducao.list(args)
  }
