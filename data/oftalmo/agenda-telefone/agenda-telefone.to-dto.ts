import { agendaTelefoneMapFields } from '@/data/oftalmo/agenda-telefone/agenda-telefone.map-fields.js'
import {
  TAgendaTelefoneDtoFields,
  TAgendaTelefoneFields,
} from '@/data/oftalmo/agenda-telefone/agenda-telefone.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'
import { agendaTelefoneSchema } from './agenda-telefone.schema.js'

export const agendaTelefoneToDto = (
  data: TData<TAgendaTelefoneFields>
): TData<TAgendaTelefoneDtoFields> => {
  const obj = {} as TData<TAgendaTelefoneDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(agendaTelefoneMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        agendaTelefoneMapFields[key as TAgendaTelefoneDtoFields]
      )
    ) {
      obj[key as TAgendaTelefoneDtoFields] =
        data[agendaTelefoneMapFields[key as TAgendaTelefoneDtoFields]]
    }
  })
  return obj
}
