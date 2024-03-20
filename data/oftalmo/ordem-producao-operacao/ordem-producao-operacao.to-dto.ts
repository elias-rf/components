import { ordemProducaoOperacaoMapFields } from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.map-fields.js'
import {
  TOrdemProducaoOperacaoDtoFields,
  TOrdemProducaoOperacaoFields,
} from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const ordemProducaoOperacaoToDto = (
  data: TData<TOrdemProducaoOperacaoFields>
): TData<TOrdemProducaoOperacaoDtoFields> => {
  const obj = {} as TData<TOrdemProducaoOperacaoDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(ordemProducaoOperacaoMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        ordemProducaoOperacaoMapFields[key as TOrdemProducaoOperacaoDtoFields]
      )
    ) {
      obj[key as TOrdemProducaoOperacaoDtoFields] =
        data[
          ordemProducaoOperacaoMapFields[key as TOrdemProducaoOperacaoDtoFields]
        ]
    }
  })
  return obj
}
