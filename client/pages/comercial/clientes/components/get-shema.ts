import { TColumn } from '@/types/index.js'
import { addMonths, parse as dateParse, format } from 'date-fns/fp'
import { flowRight } from 'lodash'
import { isoDate, object, parse, string } from 'valibot'

export function getSchema(args: { inicio: string; fim: string }): TColumn[] {
  parse(
    object({
      inicio: string([isoDate('data inicial inválida')]),
      fim: string([isoDate('data final inválida')]),
    }),
    args
  )

  const rsp: TColumn[] = [
    {
      name: 'categoria',
      label: 'Produto',
    },
  ]
  let dtInicio = dateParse(new Date(), 'yyyy-MM-dd')(args.inicio)
  const dtFim = flowRight([addMonths(1), dateParse(new Date(), 'yyyy-MM-dd')])(
    args.fim
  )
  while (format('yyyy-MM')(dtInicio) !== format('yyyy-MM')(dtFim)) {
    rsp.push({
      name: format('yyyy-MM')(dtInicio),
      label: format('yyyy-MM')(dtInicio),
      align: 'right',
    })
    dtInicio = addMonths(1)(dtInicio)
  }
  return rsp
}
