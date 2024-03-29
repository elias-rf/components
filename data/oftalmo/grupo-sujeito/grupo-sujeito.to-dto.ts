import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'
import { grupoSujeitoMapFields } from './grupo-sujeito.map-fields.js'
import {
  TGrupoSujeitoDtoFields,
  TGrupoSujeitoFields,
} from './grupo-sujeito.type.js'

export const groupToDto = (
  data: TData<TGrupoSujeitoFields>
): TData<TGrupoSujeitoDtoFields> => {
  const obj = {} as TData<TGrupoSujeitoDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(grupoSujeitoMapFields).forEach((key) => {
    if (
      Object.hasOwn(data, grupoSujeitoMapFields[key as TGrupoSujeitoDtoFields])
    ) {
      obj[key as TGrupoSujeitoDtoFields] =
        data[grupoSujeitoMapFields[key as TGrupoSujeitoDtoFields]]
    }
  })
  return obj
}
