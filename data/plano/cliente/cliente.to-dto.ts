import { clienteMapFields } from '@/data/plano/cliente/cliente.map-fields.js'
import {
  TClienteDtoFields,
  TClienteFields,
} from '@/data/plano/cliente/cliente.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const clienteToDto = (
  data: TData<TClienteFields>
): TData<TClienteDtoFields> => {
  const obj = {} as TData<TClienteDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(clienteMapFields).forEach((key) => {
    if (Object.hasOwn(data, clienteMapFields[key as TClienteDtoFields]))
      obj[key as TClienteDtoFields] =
        data[clienteMapFields[key as TClienteDtoFields]]
  })

  return obj
}
