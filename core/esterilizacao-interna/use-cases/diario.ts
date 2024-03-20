import { TDataSource } from '@/data/index.js'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as v from 'valibot'

export const diario =
  (dataSource: TDataSource) =>
  async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> => {
    v.parse(
      v.object({
        inicio: v.string([v.isoDate('data inicial inválida')]),
        fim: v.string([v.isoDate('data final inválida')]),
      }),
      { inicio, fim }
    )
    const qry = await dataSource.oftalmo.ds({
      from: 'tOperacaoOrdemProducao',
      selectRaw: ['DataInicio as dia, Sum(QtdConforme) AS quantidade'],
      orderBy: [['DataInicio', 'desc']],
      groupBy: ['DataInicio'],
      where: [['DataInicio', 'between', [inicio, fim]]],
      whereRaw: ['fkOperacao in (3058, 3158)'],
    })
    return qry.map((rec: any) => {
      rec.dia_semana = format(rec.dia, 'EEEEEE', { locale: ptBR })
      rec.dia = format(rec.dia, 'yyyy-MM-dd')
      return rec
    })
  }
