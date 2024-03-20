import { TDataSource } from '@/data/index.js'
import * as v from 'valibot'

export const mensal =
  (dataSource: TDataSource) =>
  async ({
    mes,
  }: {
    mes: string
  }): Promise<{ mes: string; quantidade: number }[]> => {
    v.parse(
      v.string([v.regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]),
      mes
    )
    const qry = await dataSource.oftalmo.ds({
      from: 'tOperacaoOrdemProducao',
      selectRaw: [
        'CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade',
      ],
      orderByRaw: ['CONVERT(CHAR(7),[DataInicio],120) desc'],
      groupByRaw: ['CONVERT(CHAR(7),[DataInicio],120)'],
      whereRaw: [
        'fkOperacao in (3058, 3158) and CONVERT(CHAR(7),[DataInicio],120)>=?',
        [mes],
      ],
    })
    return qry
  }
