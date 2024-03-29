import { operacaoProducaoMapFields } from '@/data/oftalmo/operacao-producao/operacao-producao.map-fields.js'
import {
  TOperacaoProducaoDtoFields,
  TOperacaoProducaoFields,
} from '@/data/oftalmo/operacao-producao/operacao-producao.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const operacaoProducaoToDto = (
  data: TData<TOperacaoProducaoFields>
): TData<TOperacaoProducaoDtoFields> => {
  const obj = {} as TData<TOperacaoProducaoDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(operacaoProducaoMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        operacaoProducaoMapFields[key as TOperacaoProducaoDtoFields]
      )
    ) {
      obj[key as TOperacaoProducaoDtoFields] =
        data[operacaoProducaoMapFields[key as TOperacaoProducaoDtoFields]]
    }
  })
  return obj
}
