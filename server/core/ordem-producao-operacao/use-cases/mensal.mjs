import * as v from 'valibot'

export const mensal =
  (dataSource) =>
  async ({ operacao, mes }) => {
    v.parse(
      v.object({
        operacao: v.union(
          [v.number(), v.string()],
          'operacao dever ser number ou string'
        ),
        mes: v.string([v.regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]),
      }),
      { operacao, mes }
    )

    const qry = await dataSource.oftalmo.ds({
      from: 'tOperacaoOrdemProducao',
      selectRaw: [
        'CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade',
      ],
      orderByRaw: ['CONVERT(CHAR(7),[DataInicio],120) desc'],
      groupByRaw: ['CONVERT(CHAR(7),[DataInicio],120)'],
      havingRaw: ['CONVERT(CHAR(7),[DataInicio],120)>=?', [mes]],
      where: [['fkOperacao', operacao]],
    })
    return qry
  }
