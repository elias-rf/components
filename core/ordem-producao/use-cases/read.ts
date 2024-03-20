import { TDataSource } from '@/data/index.js'
import {
  TOrdemProducaoDtoFields,
  TOrdemProducaoDtoKeys,
} from '@/data/oftalmo/ordem-producao/ordem-producao.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TOrdemProducaoDtoFields, TOrdemProducaoDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.ordemProducao.read(args)
  }
