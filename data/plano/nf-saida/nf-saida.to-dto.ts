import { nfSaidaMapFields } from '@/data/plano/nf-saida/nf-saida.map-fields.js'
import {
  TNfSaidaDtoFields,
  TNfSaidaFields,
} from '@/data/plano/nf-saida/nf-saida.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const nfSaidaToDto = (
  data: TData<TNfSaidaFields>
): TData<TNfSaidaDtoFields> => {
  const obj = {} as TData<TNfSaidaDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(nfSaidaMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfSaidaMapFields[key as TNfSaidaDtoFields]))
      obj[key as TNfSaidaDtoFields] =
        data[nfSaidaMapFields[key as TNfSaidaDtoFields]]
  })

  return obj
}
