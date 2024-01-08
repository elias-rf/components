import { dbPlano } from '@/core/db/db-plano.db.js'
import { nfSaidaFvController } from '@/core/nf-saida-fv_controller.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex, TQueryKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'
import { UTCDateMini } from '@date-fns/utc'
import { format } from 'date-fns/fp'
import { array, isoDate, number, parse, regex, string, union } from 'valibot'

export const MestreNota: TSchema = {
  table: 'MestreNota',
  primary: ['CdFilial', 'Serie', 'Modelo', 'NumNota'] as const,
  relations: {
    itens: {
      method: () =>
        import('./nf-saida-item_controller.js').then(
          (m) => m.nfSaidaItemController.nfSaidaItem_list
        ),
      where: [
        ['CdFilial', 'CdFilial'],
        ['Serie', 'Serie'],
        ['Modelo', 'Modelo'],
        ['NumNota', 'NumNota'],
      ],
    },
    cliente: {
      method: () =>
        import('./cliente_controller.js').then(
          (m) => m.clienteController.cliente_read
        ),
      where: [['CdCliente', 'CdCliente']],
    },
  },
  fields: [
    'CdFilial',
    'NumNota',
    'Serie',
    'Modelo',
    'DtEmissao',
    'Tipo',
    'CdCliente',
    'CdVendedor',
    'FgEstatistica',
    'FgEstoque',
    'VlTotal',
    'VlBaseCalculo',
    'BaseSubstituicao',
    'IcmsSubstituicao',
    'VlIcms',
    'VlIRRF',
    'VlISS',
    'VlProdutos',
    'VlFrete',
    'VlSeguro',
    'VlAcessorias',
    'VlIPI',
    'Servico',
    'VlServico',
    'NumPedido',
    'OrdemCompra',
    'NumNotaOrigem',
    'DtUltAlteracao',
    'Horario',
    'FgRatearDescontoAcrescimo',
    'FgDesconto',
    'VlDesconto',
    'NumCupomFiscalOrigem',
    'NumPDVOrigem',
    'CdFilialAssociada',
    'CdVendedorExtra',
    'NotadeComplemento',
    'VlTroco',
    'VlBaseCalculoIRRF',
    'PercAliqIRRF',
    'VlBaseCalculoIN381',
    'PercAliqIN381',
    'VlIN381',
    'PercParticipPrazo',
    'PercParticipVista',
    'RedutorComissao',
    'GrupoFiscal',
    'CdTipoVenda',
    'CdFuncionario',
    'CdUsuario',
    'Nop',
    'NopFiscal',
    'VlImpostoDiferido',
    'CdLocalEstoque',
    'VlIPIFrete',
    'VlBaseCalculoII',
    'VlII',
    'DtSaida',
    'VlBaseCalculoIPI',
    'VlPISSubstituido',
    'VlCofinsSubstituido',
    'VlBaseCalculoPIS',
    'VlPIS',
    'VlBaseCalculoCOFINS',
    'VlCofins',
    'VlAproximadoImpostoNota',
    'CdSituacaoDocumento',
    'SerieNotaOrigem',
    'ModeloNotaOrigem',
    'VlDeducaoFiscal',
    'DescricaoNop',
    'TipoNota',
    'IndicadorFormaPgto',
    'FinalidadeNf',
    'FgVendaConsumidor',
    'FgDiferencialAliquota',
    'SituacaoNfe',
    'AmbienteNfe',
    'NumOrdemFaturamento',
    'FgImportacao',
    'IndicadorPresenca',
    'FgNfTerceiros',
    'VlAproximadoImpostoFederal',
    'VlAproximadoImpostoEstadual',
    'VlAproximadoImpostoMunicipal',
    'VlFCP',
    'VlFCPST',
    'NomeAdquirente',
    'CPFCNPJAdquirente',
    'percComissao',
  ] as const,
}

export type TNfSaidaFields = (typeof MestreNota.fields)[number]
export type TNfSaidaKeys = (typeof MestreNota.primary)[number]

function nfSaidaControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfSaidaFields, TNfSaidaKeys>(db, schema)

  /**
   * TRANSFERENCIA DIARIO
   * @param param0
   * @returns
   */
  const nfSaida_transferenciaDiario = async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }) => {
    parse(string([isoDate('data inicial inválida')]), inicio)
    parse(string([isoDate('data final inválida')]), fim)

    const aux: any = {}
    const rsp = []
    const qry = await db({
      fromRaw: [
        'NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)',
      ],
      selectRaw: [
        'CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade',
      ],
      orderBy: [['MestreNota.DtEmissao', 'desc']],
      groupBy: ['MestreNota.DtEmissao', 'CategPro.NmCategoria'],
      where: [
        ['MestreNota.DtEmissao', 'between', [inicio, fim]],
        ['MestreNota.CdFilial', 1],
        ['NatOpe.Nop', 5151],
        ['MestreNota.NotadeComplemento', 'N'],
        ['MestreNota.Tipo', '<>', 'C'],
      ],
    })
    for (const item of qry) {
      aux[item.dia] = {
        ...aux[item.dia],
        ...{ [item.NmCategoria]: item.quantidade },
      }
    }

    for (const [key, value] of Object.entries(aux)) {
      const item = { dia: key, ...(<any>value) }
      rsp.push(item)
    }
    return rsp
  }
  nfSaida_transferenciaDiario.rpc = true

  /**
   * TRANSFERENCIA MENSAL
   * @param param0
   * @returns
   */
  const nfSaida_transferenciaMensal = async ({ mes }: { mes: string }) => {
    parse(string([regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]), mes)

    const aux: any = {}
    const rsp = []
    const qry = await db({
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
      const item = { mes: key, ...(<any>value) }
      rsp.push(item)
    }

    return rsp
  }
  nfSaida_transferenciaMensal.rpc = true

  /**
   * TRANSFERENCIA MODELO
   * @param param0
   * @returns
   */
  const nfSaida_transferenciaModelo = async ({ data }: { data: string }) => {
    parse(string([isoDate('data inválida')]), data)

    const qry = await db({
      fromRaw: [
        'NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)',
      ],
      selectRaw: [
        'CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade',
      ],

      orderBy: [['CadPro.Descricao', 'asc']],
      groupBy: ['CadPro.Descricao'],
      where: [
        ['MestreNota.DtEmissao', data],
        ['MestreNota.CdFilial', 1],
        ['NatOpe.Nop', 5151],
        ['MestreNota.Tipo', '<>', 'C'],
        ['MestreNota.NotadeComplemento', 'N'],
      ],
    })
    return qry
  }

  /**
   * VENDA ANALITICO
   * @param param0
   * @returns
   */
  const nfSaida_vendaAnalitico = async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }) => {
    parse(string([isoDate('data inicial inválida')]), inicio)
    parse(string([isoDate('data final inválida')]), fim)

    const qryPlano = await db({
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
    const qryFullvision = nfSaidaFvController.nfSaidaFv_vendaAnalitico({
      inicio,
      fim,
    })
    const resp: any = await Promise.all([qryPlano, qryFullvision])
    return resp[0].concat(resp[1])
  }

  /**
   * VENDA DIARIO
   */
  const nfSaida_vendaDiario = async ({
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
        ['MestreNota.CdFilial', 2],
        ['CadPro.FgEstatistica', 'S'],
        ['CadVen.FgControle', 'S'],
        ['ItemNota.ImprimeComponentes', 'N'],
        ['ItemNota.Sequencia', '>', 0],
        ['MestreNota.Tipo', '<>', 'C'],
        ['MestreNota.cdcliente', '<>', 3158],
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
    const result = (await db(qry)) as unknown as {
      NmCategoria: string
      DtEmissao: string
      quantidade: number
      valor: number
    }[]

    const response = result.map((item) => {
      item.DtEmissao = format('yyyy-MM-dd')(new UTCDateMini(item.DtEmissao))
      return item
    })
    return response
  }
  nfSaida_vendaDiario.rpc = true

  /**
   * VENDA MENSAL CLIENTE
   */
  const nfSaida_vendaMensalCliente = async ({
    inicio,
    fim,
    cliente,
  }: {
    inicio: string
    fim: string
    cliente: number
  }) => {
    parse(string([isoDate('data inicial inválida')]), inicio)
    parse(string([isoDate('data final inválida')]), fim)
    parse(union([string(), number()]), cliente)

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
        ['MestreNota.CdCliente', cliente],
      ],
      select: ['CategPro.NmCategoria', 'MestreNota.CdCliente'],
      selectRaw: [
        "CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor",
      ],
      groupBy: ['CdCliente', 'NmCategoria'],
      groupByRaw: ['CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)'],
    }

    return (await db(rsp)) as {
      NmCategoria: string
      CdCliente: number
      anoMes: string
      quantidade: number
      valor: number
    }[]
  }

  return {
    nfSaida_list: orm.rpc.list,
    nfSaida_read: orm.rpc.read,
    nfSaida_count: orm.rpc.count,
    nfSaida_update: orm.rpc.update,
    nfSaida_create: orm.rpc.create,
    nfSaida_del: orm.rpc.del,
    nfSaida_increment: orm.rpc.increment,
    nfSaida_vendaMensalCliente,
    nfSaida_vendaDiario,
    nfSaida_vendaAnalitico,
    nfSaida_transferenciaDiario,
    nfSaida_transferenciaMensal,
    nfSaida_transferenciaModelo,
  }
}

export const nfSaidaController = nfSaidaControllerFactory(dbPlano, MestreNota)
