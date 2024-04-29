import * as v from 'valibot'

/**
 * TRANSFERENCIA MENSAL
 * @param param0
 * @returns
 */
export const transferenciaMensal =
  (dataSource) =>
  async ({ mes }) => {
    v.parse(
      v.string([v.regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]),
      mes
    )

    const aux = {}
    const rsp = []
    const qry = await dataSource.plano.ds({
      fromRaw: [
        'NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)',
      ],
      selectRaw: [
        'CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade',
      ],
      groupByRaw: [
        'CONVERT(CHAR(7),[MestreNota].[DtEmissao],120), CategPro.NmCategoria',
      ],
      orderByRaw: ['CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) desc'],
      whereRaw: ['CONVERT(CHAR(7),[MestreNota].[DtEmissao],120)>=?', [mes]],
      where: [
        ['MestreNota.CdFilial', 1],
        ['NatOpe.Nop', 5151],
        ['MestreNota.Tipo', '<>', 'C'],
        ['MestreNota.NotadeComplemento', 'N'],
      ],
    })
    for (const item of qry) {
      aux[item.mes] = {
        ...aux[item.mes],
        ...{ [item.NmCategoria]: item.quantidade },
      }
    }

    for (const [key, value] of Object.entries(aux)) {
      const item = { mes: key, ...value }
      rsp.push(item)
    }

    return rsp
  }
