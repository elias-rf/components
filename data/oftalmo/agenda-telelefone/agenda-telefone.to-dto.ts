import { TAgendaTelefoneDtoFields } from '@/core/agenda-telefone/agenda-telefone.type.js'
import { agendaTelefoneMapFields } from '@/data/oftalmo/agenda-telelefone/agenda-telefone.map-fields.js'
import { TAgendaTelefoneFields } from '@/data/oftalmo/agenda-telelefone/agenda-telefone.schema.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

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
