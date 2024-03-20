import { TDataSource } from '@/data/index.js'
import { TQueryKnex } from '@/utils/orm/adapter-knex.js'
import * as v from 'valibot'

/**
 * VENDA MENSAL CLIENTE
 */
export const vendaMensalCliente =
  (dataSource: TDataSource) =>
  async ({
    inicio,
    fim,
    clienteId,
  }: {
    inicio: string
    fim: string
    clienteId: number
  }) => {
    v.parse(v.string([v.isoDate('data inicial inválida')]), inicio)
    v.parse(v.string([v.isoDate('data final inválida')]), fim)
    v.parse(v.union([v.string(), v.number()]), clienteId)

    const rsp: TQueryKnex = {
      from: 'MestreNota',
      join: [
        [
          'ItemNota',
          {
            'MestreNota.CdFilial': 'ItemNota.CdFilial',
            'MestreNota.Serie': 'ItemNota.Serie',
            'MestreNota.Modelo': 'ItemNota.Modelo',
            'MestreNota.NumNota': 'ItemNota.NumNota',
          },
        ],
        ['NatOpe', { 'NatOpe.Nop': 'MestreNota.Nop' }],
        ['CadVen', { 'CadVen.CdVendedor': 'MestreNota.CdVendedor' }],
        [
          'CadPro',
          {
            'CadPro.CdProduto': 'ItemNota.CdProduto',
          },
        ],
        [
          'CategPro',
          {
            'CadPro.CdCategoria': 'CategPro.CdCategoria',
          },
        ],
      ],
      where: [
        ['MestreNota.FgEstatistica', 'S'],
        ['MestreNota.CdFilial', 2],
        ['CadPro.FgEstatistica', 'S'],
        ['CadVen.FgControle', 'S'],
        ['ItemNota.ImprimeComponentes', 'N'],
        ['ItemNota.Sequencia', '>', 0],
        ['MestreNota.Tipo', '<>', 'C'],
        ['MestreNota.DtEmissao', 'between', [inicio, fim]],
        ['MestreNota.CdCliente', clienteId],
      ],
      select: ['CategPro.NmCategoria', 'MestreNota.CdCliente'],
      selectRaw: [
        "CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor",
      ],
      groupBy: ['CdCliente', 'NmCategoria'],
      groupByRaw: ['CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)'],
    }

    return (await dataSource.plano.ds(rsp)) as {
      NmCategoria: string
      CdCliente: number
      anoMes: string
      quantidade: number
      valor: number
    }[]
  }
