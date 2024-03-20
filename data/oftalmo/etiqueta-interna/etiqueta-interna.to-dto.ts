import { etiquetaInternaMapFields } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.map-fields.js'
import {
  TEtiquetaInternaDtoFields,
  TEtiquetaInternaFields,
} from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const etiquetaInternaToDto = (
  data: TData<TEtiquetaInternaFields>
): TData<TEtiquetaInternaDtoFields> => {
  const obj = {} as TData<TEtiquetaInternaDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(etiquetaInternaMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        etiquetaInternaMapFields[key as TEtiquetaInternaDtoFields]
      )
    ) {
      obj[key as TEtiquetaInternaDtoFields] =
        data[etiquetaInternaMapFields[key as TEtiquetaInternaDtoFields]]
    }
  })
  return obj
}
