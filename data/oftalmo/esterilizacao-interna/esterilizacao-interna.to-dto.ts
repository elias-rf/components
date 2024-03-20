import { esterilizacaoInternaMapFields } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.map-fields.js'
import {
  TEsterilizacaoInternaDtoFields,
  TEsterilizacaoInternaFields,
} from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const esterilizacaoInternaToDto = (
  data: TData<TEsterilizacaoInternaFields>
): TData<TEsterilizacaoInternaDtoFields> => {
  const obj = {} as TData<TEsterilizacaoInternaDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(esterilizacaoInternaMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        esterilizacaoInternaMapFields[key as TEsterilizacaoInternaDtoFields]
      )
    ) {
      obj[key as TEsterilizacaoInternaDtoFields] =
        data[
          esterilizacaoInternaMapFields[key as TEsterilizacaoInternaDtoFields]
        ]
    }
  })
  return obj
}
