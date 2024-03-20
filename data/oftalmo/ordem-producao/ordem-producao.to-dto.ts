import { ordemProducaoMapFields } from '@/data/oftalmo/ordem-producao/ordem-producao.map-fields.js'
import {
  TOrdemProducaoDtoFields,
  TOrdemProducaoFields,
} from '@/data/oftalmo/ordem-producao/ordem-producao.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const ordemProducaoToDto = (
  data: TData<TOrdemProducaoFields>
): TData<TOrdemProducaoDtoFields> => {
  const obj = {} as TData<TOrdemProducaoDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(ordemProducaoMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        ordemProducaoMapFields[key as TOrdemProducaoDtoFields]
      )
    ) {
      obj[key as TOrdemProducaoDtoFields] =
        data[ordemProducaoMapFields[key as TOrdemProducaoDtoFields]]
    }
  })
  return obj
}
