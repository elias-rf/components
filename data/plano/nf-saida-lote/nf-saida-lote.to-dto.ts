import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'
import { nfSaidaLoteMapFields } from './nf-saida-lote.map-fields.js'
import {
  TNfSaidaLoteDtoFields,
  TNfSaidaLoteFields,
} from './nf-saida-lote.type.js'

export const nfSaidaLoteToDto = (
  data: TData<TNfSaidaLoteFields>
): TData<TNfSaidaLoteDtoFields> => {
  const obj = {} as TData<TNfSaidaLoteDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(nfSaidaLoteMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfSaidaLoteMapFields[key as TNfSaidaLoteDtoFields]))
      obj[key as TNfSaidaLoteDtoFields] =
        data[nfSaidaLoteMapFields[key as TNfSaidaLoteDtoFields]]
  })

  return obj
}
