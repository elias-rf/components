import { etiquetaExternaMapFields } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.map-fields.js'
import {
  TEtiquetaExternaDtoFields,
  TEtiquetaExternaFields,
} from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const etiquetaExternaToDto = (
  data: TData<TEtiquetaExternaFields>
): TData<TEtiquetaExternaDtoFields> => {
  const obj = {} as TData<TEtiquetaExternaDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(etiquetaExternaMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        etiquetaExternaMapFields[key as TEtiquetaExternaDtoFields]
      )
    ) {
      obj[key as TEtiquetaExternaDtoFields] =
        data[etiquetaExternaMapFields[key as TEtiquetaExternaDtoFields]]
    }
  })
  return obj
}
