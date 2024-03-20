import { nfEntradaControleMapFields } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.map-fields.js'
import {
  TNfEntradaControleDtoFields,
  TNfEntradaControleFields,
} from '@/data/plano/nf-entrada-controle/nf-entrada-controle.type.js'
import { TData } from '@/types/query.js'
import { isEmpty } from 'lodash-es'

export const nfEntradaControleToDto = (
  data: TData<TNfEntradaControleFields>
): TData<TNfEntradaControleDtoFields> => {
  const obj = {} as TData<TNfEntradaControleDtoFields>
  if (isEmpty(data)) return obj

  Object.keys(nfEntradaControleMapFields).forEach((key) => {
    if (
      Object.hasOwn(
        data,
        nfEntradaControleMapFields[key as TNfEntradaControleDtoFields]
      )
    )
      obj[key as TNfEntradaControleDtoFields] =
        data[nfEntradaControleMapFields[key as TNfEntradaControleDtoFields]]
  })

  return obj
}
