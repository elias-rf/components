import { UTCDateMini } from '@date-fns/utc'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as v from 'valibot'

export const diario =
  (dataSource) =>
  async ({ operacao, inicio, fim }) => {
    v.parse(
      v.object({
        operacao: v.union(
          [v.number(), v.string()],
          'operacao dever ser number ou string'
        ),
        inicio: v.string([v.isoDate('data inicial inválida')]),
        fim: v.string([v.isoDate('data final inválida')]),
      }),
      {
        operacao,
        inicio,
        fim,
      }
    )

    const data = await dataSource.oftalmo.ds({
      from: 'tOperacaoOrdemProducao',
      select: ['DataInicio as dia'],
      sum: ['QtdConforme as quantidade'],
      orderBy: [['DataInicio', 'desc']],
      groupBy: ['DataInicio'],
      where: [
        ['fkOperacao', operacao],
        ['DataInicio', 'between', [inicio, fim]],
      ],
    })

    return data.map((item) => {
      const itemDia = new UTCDateMini(item.dia)
      item.diaSemana = format(itemDia, 'EEEEEE', { locale: ptBR })
      item.dia = format(new UTCDateMini(itemDia), 'yyyy-MM-dd')
      return item
    })
  }
