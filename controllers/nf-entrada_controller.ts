import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { estoqueController } from '@/controllers/estoque_controller.js'
import { nfEntradaControleController } from '@/controllers/nf-entrada-controle_controller.js'
import { nfEntradaItemController } from '@/controllers/nf-entrada-item_controller.js'
import { nfEntradaLogController } from '@/controllers/nf-entrada-log_controller.js'
import { ordemProducaoController } from '@/controllers/ordem-producao_controller.js'
import { produtoControleController } from '@/controllers/produto-controle_controller.js'
import { produtoEstatisticaController } from '@/controllers/produto-estatistica_controller.js'
import { TProdutoPlanoFields } from '@/controllers/produto-plano_controller.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { day } from '@/utils/date/day.js'
import { isEmpty } from '@/utils/identify/is-empty.js'

export const NfMestre: TSchema = {
  table: 'NfMestre',
  primary: ['CdEmpresa', 'Modelo', 'NroNf', 'Serie'] as const,
  fields: [
    'CdEmpresa',
    'NroNf',
    'Serie',
    'Modelo',
    'CdFornecedor',
    'DtEmi',
    'DtEntr',
    'Nop',
    'NopFiscal',
    'TotNF',
    'BaseSubstituicao',
    'IPIBasCalc',
    'IPIVlr',
    'IPIFrete',
    'ICMSAliq',
    'ICMSBasCalc',
    'ICMSVlr',
    'ICMSRetido',
    'ICMSOperPropria',
    'ICMSFrete',
    'Frete',
    'Seguro',
    'DtValidacao',
    'VlMercadorias',
    'ConPag',
    'Tipo',
    'Horario',
    'FgIPICompoeBase',
    'VlNfComplementar',
    'FgIPICompoeBaseSub',
    'FgEstoque',
    'IdParametro',
    'GrupoFiscal',
    'FgConferencia',
    'VlRepasseICMS',
    'FgSomaICMSSub',
    'DtConferencia',
    'SgUsuario',
    'dsObservacao',
    'FgUtilizaPercRedBCIcms',
    'VlDespAcessorias',
    'NumNotaRelacionada',
    'VlNotaRelacionada',
    'FgDespesasCompoeTotal',
    'NumChaveNfe',
    'FgXML',
    'FgGNRE',
    'FgStatusGNRE',
    'VlGNRE',
    'DtValidacaoNota',
    'DtRecolhimentoGNRE',
    'IndicadorFormaPgto',
    'VlPIS',
    'VlCofins',
    'VlPISSubstituido',
    'VlCofinsSubstituido',
    'FgFreteCompoeBaseICMS',
    'FgFreteCompoeBaseIPI',
    'FgFreteCompoeTotal',
    'FgFreteCompoeVlProdutos',
    'FgDespesasCompoeBaseICMS',
    'FgDespesasCompoeBaseIPI',
    'FgDespesasCompoeVlProdutos',
    'FgSeguroCompoeVlProdutos',
    'FgSeguroCompoeBaseICMS',
    'FgSeguroCompoeBaseIPI',
    'FgSeguroCompoeTotal',
    'NumPedido',
    'FgLogEtiquetasLote',
    'FgUtilizaVlICMSSTProdutos',
    'SituacaoDoc',
    'VlDesconto',
    'VlFreteConhecTransp',
    'NumNotaConhecTransp',
    'FgFreteCompoeBasePIS',
    'FgFreteCompoeBaseCOFINS',
    'VlTotalFCPST',
    'FgFCPSTCompoeVlTotalProdutos',
    'FgFCPSTCompoeVlTotalNota',
    'FgFCPSTCompoeVlCustoProduto',
  ] as const,
}

export type TNfEntradaFields = (typeof NfMestre.fields)[number]
export type TNfEntradaKeys = (typeof NfMestre.primary)[number]

function nfEntradaControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfEntradaFields, TNfEntradaKeys>(db, schema)

  async function nfEntrada_transferenciaCreate({
    controles,
  }: {
    controles: string[]
  }) {
    if (controles.length === 0)
      throw new Error(`Controles não foram enviados para a transferência`)

    const kOp = await ordemProducaoController.ordemProducao_fromControle({
      controle: controles[0],
    })

    // todos controles são válidos e da mesma ordem de produção
    for (const ctrl of controles) {
      const valid =
        await ordemProducaoController.ordemProducao_ehControleValido({
          controle: ctrl,
        })
      if (!valid) throw new Error(`Controle ${ctrl} inválido`)
      const op_id = await ordemProducaoController.ordemProducao_fromControle({
        controle: ctrl,
      })
      if (kOp !== op_id)
        throw new Error(`Controle ${ctrl} pertence a outra ordem de produção`)
    }

    const { CdProduto } =
      (await ordemProducaoController.ordemProducao_produtoPlano({
        id: [['kOp', kOp]],
        select: ['CdProduto'],
      })) as Record<TProdutoPlanoFields, any>

    if (isEmpty(CdProduto)) {
      throw new Error(`Ordem de produção ${kOp} não possui vinculo com Plano`)
    }

    const fabricacao = await ordemProducaoController
      .ordemProducao_dataFabricacao({ id: [['kOp', kOp]] })
      .then((dt: any) => {
        if (isEmpty(dt)) {
          throw new Error(
            `Ordem de produção ${kOp} não possui data de fabricação`
          )
        }
        return day(dt).format('YYYY-MM-DD')
      })

    const expiracao = await ordemProducaoController.ordemProducao_dataValidade({
      id: [['kOp', kOp]],
    })

    const quantidade = controles.length

    const hoje = day().format('YYYY-MM-DD')
    const agora = day().format('HH:mm:ss')

    const nf = await orm.rpc.read({
      where: [
        ['CdEmpresa', 1],
        ['NroNf', kOp],
        ['Serie', 'XX'],
        ['Modelo', '1'],
      ],
      select: ['NroNf'],
    })

    if (!isEmpty(nf)) {
      throw new Error(`Ordem de produção ${kOp} já está cadastrada`)
    }

    await orm.rpc.create({
      data: {
        CdEmpresa: 1,
        NroNf: kOp,
        Serie: 'XX',
        Modelo: '1',
        CdFornecedor: 1,
        DtEmi: `${hoje} ${agora}`,
        DtEntr: `${hoje} ${agora}`,
        Nop: 1102,
        NopFiscal: 1102,
        TotNF: quantidade * 2,
        BaseSubstituicao: 0,
        IPIBasCalc: 0,
        IPIVlr: 0,
        IPIFrete: 0,
        ICMSBasCalc: 0,
        ICMSVlr: 0,
        ICMSRetido: 0,
        ICMSOperPropria: 0,
        ICMSFrete: 0,
        Frete: 0,
        Seguro: 0,
        DtValidacao: hoje,
        VlMercadorias: quantidade * 2,
        ConPag: 'P',
        Tipo: 'N',
        Horario: agora,
        FgIPICompoeBase: 'N',
        VlNfComplementar: 0,
        FgIPICompoeBaseSub: 'N',
        FgEstoque: 'S',
        IdParametro: 0,
        GrupoFiscal: 0,
        FgConferencia: 'P',
        VlRepasseICMS: 0,
        FgSomaICMSSub: 'S',
        DtConferencia: '1900-01-01 00:00:00',
        SgUsuario: 'ERIBEIRO',
        dsObservacao: ' ',
        FgUtilizaPercRedBCIcms: 'N',
        VlDespAcessorias: 0,
        NumNotaRelacionada: 0,
        VlNotaRelacionada: 0,
        FgDespesasCompoeTotal: 'N',
        NumChaveNfe: ' ',
        FgXML: 'N',
        FgGNRE: 'A',
        FgFreteCompoeBaseICMS: 'N',
        FgFreteCompoeBaseIPI: 'N',
        FgFreteCompoeVlProdutos: 'N',
        FgFreteCompoeTotal: 'N',
        FgDespesasCompoeBaseICMS: 'N',
        FgDespesasCompoeBaseIPI: 'N',
        FgDespesasCompoeVlProdutos: 'N',
        FgSeguroCompoeVlProdutos: 'N',
        FgSeguroCompoeBaseICMS: 'N',
        FgSeguroCompoeBaseIPI: 'N',
        FgSeguroCompoeTotal: 'N',
      },
    })

    await nfEntradaItemController.nfEntradaItem_create({
      data: {
        CdBaseCalculoCreditoPISCOFINS: 0,
        CdContribuicaoApuradaPISCOFINS: 0,
        CdEmpresa: 1,
        CdFornecedor: 1,
        CdProduto: CdProduto.toString(),
        CdTipoCreditoPISCOFINS: 0,
        DtEntr: `${hoje} ${agora}`,
        FgCompoeBaseSub: 'S',
        FgConferido: ' ',
        FgCusto: 'S',
        FgEstoque: 'S',
        FgEtiqueta: 'N',
        FgICMSJaRecolhido: '0',
        Modelo: '1',
        Nop: 0,
        NopfiscalItem: 0,
        NroNF: kOp,
        PercICMS: 0,
        PercIPI: 0,
        PrecPMC: 0,
        Quantidade: quantidade,
        Sequencia: 1,
        Serie: 'XX',
        TipoMovimentacao: 'N',
        TipoTributacao: 'T',
        VlAcrescItem: 0,
        VlBaseCalculoICMS: 0,
        VlBaseCalculoIPI: 0,
        VlBaseSub: 0,
        VlBrutoUnitario: 2,
        VlDescItem: 0,
        VlICMSSub: 0,
        VlLiquidoUnitario: 2,
        VlRelacionado: 0,
        VlRepasseICMSItem: 0,
        VlrICMS: 0,
        VlrIPI: 0,
        VlTotItem: quantidade * 2,
      },
    })

    await estoqueController.estoque_increment({
      where: [
        ['CdEmpresa', 1],
        ['CdProduto', CdProduto.toString() || ''],
      ],
      increment: ['EstAtual', quantidade],
    })

    await produtoEstatisticaController.produtoEstatistica_increment({
      where: [
        ['CdEmpresa', 1],
        ['MesRef', parseInt(day().format('MM'))],
        ['AnoRef', parseInt(day().format('YY'))],
        ['CdProduto', CdProduto.toString() || ''],
      ],
      increment: ['QtdCompras', quantidade],
    })

    for (const ctrl of controles) {
      await produtoControleController.produtoControle_create({
        data: {
          CdFilial: 1,
          NumNfEntrada: CdProduto,
          SerieNfEntrada: 'XX',
          Modelo: '1',
          CdFornecedor: 1,
          Aspecto: ' ',
          CdLote: ctrl,
          CdNRA: ' ',
          CdProduto: CdProduto.toString(),
          Densidade: 0,
          DtAnalise: fabricacao || '',
          DtEntrada: hoje,
          DtFabricacao: fabricacao || '',
          DtLimiteUso: expiracao || '',
          DtValidade: expiracao || '',
          FatorCorrecao: 0,
          PercentualDiluicao: 0,
          QtdeAdquirida: 1,
          SaldoPeso: 1,
          SituacaoLote: 'A',
          TipoLote: 'C',
        },
      })
      await nfEntradaControleController.nfEntradaControle_create({
        data: {
          CdFilial: 1,
          NumNota: kOp,
          Serie: 'XX',
          CdFornecedor: 1,
          Modelo: '1',
          NumLote: ctrl,
          CdProduto: CdProduto.toString(),
          Quantidade: 1,
        },
      })
    }

    await nfEntradaLogController.nfEntradaLog_create({
      data: {
        CdFilial: 1,
        NumNota: kOp,
        Serie: 'XX',
        Modelo: '1',
        CdFornecedor: 1,
        Data: `${hoje} ${agora}`,
        Usuario: 'ERIBEIRO',
        Operacao: 'INCLUSAO DA CONFERENCIA',
      },
    })

    return true
  }

  return {
    nfEntrada_list: orm.rpc.list,
    nfEntrada_read: orm.rpc.read,
    nfEntrada_count: orm.rpc.count,
    nfEntrada_update: orm.rpc.update,
    nfEntrada_create: orm.rpc.create,
    nfEntrada_del: orm.rpc.del,
    nfEntrada_increment: orm.rpc.increment,
    nfEntrada_transferenciaCreate,
  }
}

export const nfEntradaController = nfEntradaControllerFactory(dbPlano, NfMestre)
