import { dbFullvision } from '@/controllers/db/db-fullvision.db.js'
import { MestreNota } from '@/controllers/nf-saida_controller.js'
import { TAdapterKnex, TQueryKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { array, isoDate, number, object, parse, string, union } from 'valibot'

export type TNfSaidaFvFields = (typeof MestreNota.fields)[number]
export type TNfSaidaFvKeys = (typeof MestreNota.primary)[number]

function nfSaidaFvControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfSaidaFvFields, TNfSaidaFvKeys>(db, schema)

  const vendaAnalitico = async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }) => {
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
      }),
      {
        inicio,
        fim,
      }
    )
    const qryPlano = await db({
      from: 'MestreNota',
      selectRaw: ["'FV' as origem"],
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
        ['MestreNota.CdFilial', 1],
        ['CadVen.FgControle', 'S'],
        ['MestreNota.FgEstatistica', 'S'],
        ['CadPro.FgEstatistica', 'S'],
        ['ItemNota.ImprimeComponentes', 'N'],
        ['ItemNota.Sequencia', '<>', 0],
        ['MestreNota.DtEmissao', 'between', [inicio, fim]],
        ['MestreNota.Tipo', 'in', ['E', 'S']],
      ],
    })
    return qryPlano
  }
  vendaAnalitico.rpc = true

  /**
   * VENDA DIARIO
   */
  const vendaDiario = async ({
    inicio,
    fim,
    uf,
  }: {
    inicio: string
    fim: string
    uf: string[]
  }): Promise<
    {
      NmCategoria: string
      DtEmissao: string
      valor: number
      quantidade: number
    }[]
  > => {
    parse(string([isoDate('data inicial inválida')]), inicio)
    parse(string([isoDate('data final inválida')]), fim)
    parse(array(string('uf deve ser string')), uf)

    let qry: TQueryKnex = {
      fromRaw: [
        'MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF',
      ],
      select: ['NmCategoria', 'MestreNota.DtEmissao'],
      selectRaw: [
        "sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor",
      ],
      sum: ['ItemNota.Quantidade as quantidade'],
      where: [
        ['MestreNota.FgEstatistica', 'S'],
        ['MestreNota.CdFilial', 1],
        ['CadPro.FgEstatistica', 'S'],
        ['CadVen.FgControle', 'S'],
        ['ItemNota.ImprimeComponentes', 'N'],
        ['ItemNota.Sequencia', '>', 0],
        ['MestreNota.Tipo', '<>', 'C'],
        ['MestreNota.DtEmissao', 'between', [inicio, fim]],
      ],
      whereRaw: [
        'ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE',
      ],
      groupBy: ['NmCategoria', 'MestreNota.DtEmissao'],
      orderBy: [
        ['NmCategoria', 'asc'],
        ['MestreNota.DtEmissao', 'desc'],
      ],
    }

    if (uf.length > 0) {
      qry.where?.push(['cidadeserf.uf', 'in', uf])
    }

    return (await db(qry)) as {
      NmCategoria: string
      DtEmissao: string
      quantidade: number
      valor: number
    }[]
  }
  vendaDiario.rpc = true

  const vendaMensalCliente = async ({
    inicio,
    fim,
    cliente,
  }: {
    inicio: string
    fim: string
    cliente: number
  }) => {
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
        cliente: union([number(), string()]),
      }),
      { inicio, fim, cliente }
    )

    const qry: TQueryKnex = {
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
        ['MestreNota.CdFilial', 1],
        ['CadPro.FgEstatistica', 'S'],
        ['CadVen.FgControle', 'S'],
        ['ItemNota.ImprimeComponentes', 'N'],
        ['ItemNota.Sequencia', '>', 0],
        ['MestreNota.Tipo', '<>', 'C'],
        ['MestreNota.DtEmissao', 'between', [inicio, fim]],
        ['MestreNota.CdCliente', cliente],
      ],
      select: ['CategPro.NmCategoria', 'MestreNota.CdCliente'],
      selectRaw: [
        "CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor",
      ],
      groupBy: ['CdCliente', 'NmCategoria'],
      groupByRaw: ['CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)'],
    }

    const response = (await db(qry)) as {
      NmCategoria: string
      CdCliente: number
      anoMes: string
      quantidade: number
      valor: number
    }[]
    return response
  }
  vendaMensalCliente.rpc = true

  return {
    ...orm.rpc,
    vendaAnalitico,
    vendaDiario,
    vendaMensalCliente,
  }
}

export const nfSaidaFvController = nfSaidaFvControllerFactory(
  dbFullvision,
  MestreNota
)
