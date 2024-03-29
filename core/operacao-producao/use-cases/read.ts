import { TDataSource } from '@/data/index.js'
import {
  TOperacaoProducaoDtoFields,
  TOperacaoProducaoDtoKeys,
} from '@/data/oftalmo/operacao-producao/operacao-producao.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TOperacaoProducaoDtoFields, TOperacaoProducaoDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.operacaoProducao.read(args)
  }
