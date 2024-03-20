import { TDataSource } from '@/data/index.js'
import { TOrdemProducaoOperacaoDtoFields } from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TOrdemProducaoOperacaoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.ordemProducaoOperacao.list(args)
  }
