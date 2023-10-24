import { TColumn } from '@/types'
import { day } from '@/utils/date/day'
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
  let dtInicio = day(args.inicio)
  const dtFim = day(args.fim).add(1, 'month')
  while (dtInicio.format('YYYY-MM') !== dtFim.format('YYYY-MM')) {
    rsp.push({
      name: dtInicio.format('YYYY-MM'),
      label: dtInicio.format('YYYY-MM'),
      align: 'right',
    })
    dtInicio = dtInicio.add(1, 'month')
  }
  return rsp
}
