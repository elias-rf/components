import { nfEntradaLogMapFields } from '@/data/plano/nf-entrada-log/nf-entrada-log.map-fields.js'
import {
  TNfEntradaLogDtoFields,
  TNfEntradaLogFields,
} from '@/data/plano/nf-entrada-log/nf-entrada-log.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const nfEntradaLogToDto = (
  data: TData<TNfEntradaLogFields>
): TData<TNfEntradaLogDtoFields> => {
  const obj = {} as TData<TNfEntradaLogDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(nfEntradaLogMapFields).forEach((key) => {
    if (
      Object.hasOwn(data, nfEntradaLogMapFields[key as TNfEntradaLogDtoFields])
    )
      obj[key as TNfEntradaLogDtoFields] =
        data[nfEntradaLogMapFields[key as TNfEntradaLogDtoFields]]
  })

  return obj
}
