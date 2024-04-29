import * as v from 'valibot'

/**
 * VENDA ANALITICO
 * @param param0
 * @returns
 */
export const vendaAnalitico =
  (dataSource) =>
  async ({ inicio, fim }) => {
    v.parse(v.string([v.isoDate('data inicial inválida')]), inicio)
    v.parse(v.string([v.isoDate('data final inválida')]), fim)

    const qryPlano = await dataSource.plano.ds({
      from: 'MestreNota',
      selectRaw: ["'VT' as origem"],
      select: [
        'CategPro.NmCategoria',
        'MestreNota.DtEmissao',
        'MestreNota.NumNota',
        'MestreNota.Serie',
        'MestreNota.Tipo',
        'ItemNota.CdProduto',
        'ItemNota.Quantidade',
        'ItemNota.VlTotal',
        'CadPro.Descricao',
        'MestreNota.CdVendedor',
        'CadVen.NmVendedor',
        'CidadesERF.uf',
      ],
      join: [
        [
          'ItemNota',
          {
            'ItemNota.CdFilial': 'MestreNota.CdFilial',
            'ItemNota.NumNota': 'MestreNota.NumNota',
            'ItemNota.Serie': 'MestreNota.Serie',
            'ItemNota.Modelo': 'MestreNota.Modelo',
          },
        ],
        ['CadVen', 'MestreNota.CdVendedor', 'CadVen.CdVendedor'],
        ['CadCli', 'MestreNota.CdCliente', 'CadCli.CdCliente'],
        ['cidadesErf', 'CadCli.Cidade', 'cidadesErf.NmCidadeIBGE'],
        ['CadPro', 'ItemNota.CdProduto', 'CadPro.CdProduto'],
        ['CategPro', 'CadPro.CdCategoria', 'CategPro.CdCategoria'],
      ],
      where: [
        ['MestreNota.CdFilial', 2],
        ['CadVen.FgControle', 'S'],
        ['MestreNota.FgEstatistica', 'S'],
        ['CadPro.FgEstatistica', 'S'],
        ['ItemNota.ImprimeComponentes', 'N'],
        ['ItemNota.Sequencia', '<>', 0],
        ['MestreNota.cdcliente', '<>', 3158],
        ['MestreNota.DtEmissao', 'between', [inicio, fim]],
        ['MestreNota.Tipo', 'in', ['E', 'S']],
      ],
    })
    // const qryFullvision = nfSaidaFvController.nfSaidaFv_vendaAnalitico({
    //   inicio,
    //   fim,
    // })
    // const resp = await Promise.all([qryPlano, qryFullvision])
    // return resp[0].concat(resp[1])
    return qryPlano
  }
