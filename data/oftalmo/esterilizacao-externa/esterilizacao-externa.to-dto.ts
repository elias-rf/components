import { esterilizacaoExternaMapFields } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.map-fields.js'
import {
  TEsterilizacaoExternaDtoFields,
  TEsterilizacaoExternaFields,
} from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const esterilizacaoExternaToDto = (
  data: TData<TEsterilizacaoExternaFields>
): TData<TEsterilizacaoExternaDtoFields> => {
  const obj = {} as TData<TEsterilizacaoExternaDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(esterilizacaoExternaMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        esterilizacaoExternaMapFields[key as TEsterilizacaoExternaDtoFields]
      )
    ) {
      obj[key as TEsterilizacaoExternaDtoFields] =
        data[
          esterilizacaoExternaMapFields[key as TEsterilizacaoExternaDtoFields]
        ]
    }
  })
  return obj
}
