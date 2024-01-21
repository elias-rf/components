import { TColumn } from '@/types/index.js'
import { addMonths, parse as dateParse, format } from 'date-fns'
import { flow } from 'lodash-es'
import * as v from 'valibot'

export function getSchema(args: { inicio: string; fim: string }): TColumn[] {
  v.parse(
    v.object({
      inicio: v.string([v.isoDate('data inicial inválida')]),
      fim: v.string([v.isoDate('data final inválida')]),
    }),
    args
  )

  const rsp: TColumn[] = [
    {
      name: 'categoria',
      label: 'Produto',
    },
  ]
  let dtInicio = dateParse(args.inicio, 'yyyy-MM-dd', new Date())
  const dtFim = flow([
    ($) => dateParse($, 'yyyy-MM-dd', new Date()),
    ($) => addMonths($, 1),
  ])(args.fim)
  while (format(dtInicio, 'yyyy-MM') !== format(dtFim, 'yyyy-MM')) {
    rsp.push({
      name: format(dtInicio, 'yyyy-MM'),
      label: format(dtInicio, 'yyyy-MM'),
      align: 'right',
    })
    dtInicio = addMonths(dtInicio, 1)
  }
  return rsp
}
