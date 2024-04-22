import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'
import { grupoMapFields } from './grupo.map-fields.js'
import { TGrupoDtoFields, TGrupoFields } from './grupo.type.js'

export const grupoToDto = (
  data: TData<TGrupoFields>
): TData<TGrupoDtoFields> => {
  const obj = {} as TData<TGrupoDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(grupoMapFields).forEach((key) => {
    if (Object.hasOwn(data, grupoMapFields[key as TGrupoDtoFields])) {
      obj[key as TGrupoDtoFields] = data[grupoMapFields[key as TGrupoDtoFields]]
    }
  })
  return obj
}
