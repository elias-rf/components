import { TUsuarioDtoFields } from '@/core/usuario/usuario.type.js'
import { usuarioMapFields } from '@/data/oftalmo/usuario/usuario.map-fields.js'
import { TUsuarioFields } from '@/data/oftalmo/usuario/usuario.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const usuarioToDto = (
  data: TData<TUsuarioFields>
): TData<TUsuarioDtoFields> => {
  const obj = {} as TData<TUsuarioDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(usuarioMapFields).forEach((key) => {
    if (Object.hasOwn(data, usuarioMapFields[key as TUsuarioDtoFields])) {
      obj[key as TUsuarioDtoFields] =
        data[usuarioMapFields[key as TUsuarioDtoFields] as TUsuarioFields]
    }
  })
  return obj
}
