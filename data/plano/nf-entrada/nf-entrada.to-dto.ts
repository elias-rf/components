import { nfEntradaMapFields } from '@/data/plano/nf-entrada/nf-entrada.map-fields.js'
import {
  TNfEntradaDtoFields,
  TNfEntradaFields,
} from '@/data/plano/nf-entrada/nf-entrada.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const nfEntradaToDto = (
  data: TData<TNfEntradaFields>
): TData<TNfEntradaDtoFields> => {
  const obj = {} as TData<TNfEntradaDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(nfEntradaMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfEntradaMapFields[key as TNfEntradaDtoFields]))
      obj[key as TNfEntradaDtoFields] =
        data[nfEntradaMapFields[key as TNfEntradaDtoFields]]
  })

  return obj
}
