import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'
import { nfEntradaItemMapFields } from './nf-entrada-item.map-fields.js'
import {
  TNfEntradaItemDtoFields,
  TNfEntradaItemFields,
} from './nf-entrada-item.type.js'

export const nfEntradaItemToDto = (
  data: TData<TNfEntradaItemFields>
): TData<TNfEntradaItemDtoFields> => {
  const obj = {} as TData<TNfEntradaItemDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(nfEntradaItemMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        nfEntradaItemMapFields[key as TNfEntradaItemDtoFields]
      )
    )
      obj[key as TNfEntradaItemDtoFields] =
        data[nfEntradaItemMapFields[key as TNfEntradaItemDtoFields]]
  })

  return obj
}
