import { TDataSource } from '@/data/index.js'
import {
  TOrdemProducaoOperacaoDtoFields,
  TOrdemProducaoOperacaoDtoKeys,
} from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TOrdemProducaoOperacaoDtoFields, TOrdemProducaoOperacaoDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.ordemProducaoOperacao.read(args)
  }
