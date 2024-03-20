import { nfSaidaItemMapFields } from '@/data/plano/nf-saida-item/nf-saida-item.map-fields.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'
import {
  TNfSaidaItemDtoFields,
  TNfSaidaItemFields,
} from './nf-saida-item.type.js'

export const nfSaidaItemToDto = (
  data: TData<TNfSaidaItemFields>
): TData<TNfSaidaItemDtoFields> => {
  const obj = {} as TData<TNfSaidaItemDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(nfSaidaItemMapFields).forEach((key) => {
    if (Object.hasOwn(data, nfSaidaItemMapFields[key as TNfSaidaItemDtoFields]))
      obj[key as TNfSaidaItemDtoFields] =
        data[nfSaidaItemMapFields[key as TNfSaidaItemDtoFields]]
  })

  return obj
}
