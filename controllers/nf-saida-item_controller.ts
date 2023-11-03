import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const ItemNota: TSchema = {
  table: 'ItemNota',
  primary: ['CdFilial', 'NumNota', 'Serie', 'Modelo'] as const,
  relations: {
    produto: {
      method: () =>
        import('./produto-plano_controller').then(
          (m) => m.produtoPlanoController.read
        ),

      where: [['CdProduto', 'CdProduto']],
    },
  },
  fields: [
    'CdFilial',

    'NumNota',

    'Serie',

    'Modelo',

    'CdProduto',

    'Sequencia',

    'CdProdutoAssociado',

    'CdRefEstoque',

    'Quantidade',

    'QtdeAtendida',

    'ConversaoMedida',

    'Correcao',

    'VlUnitario',

    'VlTotal',

    'PercDesconto',

    'VlLiquido',

    'VlCusto',

    'BaseSub',

    'FgEstoque',

    'FgKit',

    'FgPeso',

    'ImprimeComponentes',

    'Irrf',

    'MargemSub',

    'Peso',

    'PesoBruto',

    'PesoLiq',

    'ReducaoICMS',

    'TaxaFCA',

    'TipoMovimentacao',

    'VlComissaoPrazo',

    'VlComissaoVista',

    'CdVendedor',

    'CdVendedorExtra',

    'PercComisVista',

    'PercComisPrazo',

    'PercReducaoComissao',

    'VlICMS',

    'VlIcmsSub',

    'VlIPI',

    'VlISS',

    'CustoMedio',

    'ComplementoDescricao',

    'FgEtiqueta',

    'PercLimiteComissao',

    'ComplementoDesc',

    'BaseCalculoIPI',

    'NumEtiqKanBan',

    'NumOrdemCompra',

    'VlComissaoVistaExtra',

    'VlComissaoPrazoExtra',

    'DtEmissao',

    'Tipo',

    'CRM',

    'Unidade',

    'VlImpostoDiferido',

    'Fg6142',

    'Nop',

    'NopFiscalItem',

    'fgBuscaDCB',

    'VlPrecoAnvisa',

    'AliqRedBaseST',

    'DescComplementarProd',

    'VlVendaOriginal',

    'SituacaoTributariaIPI',

    'CdEnquadramentoIPI',

    'AliquotaIPI',

    'AliquotaPIS',

    'VlPIS',

    'AliquotaCOFINS',

    'VlCOFINS',

    'SituacaoTributariaCOFINS',

    'BaseCalculoCOFINS',

    'SituacaoTributariaPIS',

    'BaseCalculoPIS',

    'AliquotaICMS',

    'BaseCalculoICMS',

    'SituacaoTributariaICMS',

    'FgICMSDiferimentoTotal',

    'CdBaseCalculoCreditoPISCOFINS',

    'CdTipoCreditoPISCOFINS',

    'CdContribuicaoApuradaPISCOFINS',

    'VlAproximadoImpostoItem',

    'VlFreteItem',

    'VlSeguroItem',

    'VlDespesaAcessoriaItem',

    'VlDescontoGerente',

    'FgConsideraItemNfe',

    'OrigemMercadoria',

    'PercentualMVA',

    'PercReducaoBaseSub',

    'PercICMSSub',

    'UFSub',

    'VlBaseCalculoICMSRetido',

    'VlICMSRetido',

    'VlBaseCalculoICMSDest',

    'VlICMSDest',

    'PercBaseOperacaoPropria',

    'AliquotaCreditoSimples',

    'VlCreditoSimples',

    'ModalidadeBaseICMS',

    'ModalidadeBaseSub',

    'MotivoDesoneracaoICMS',

    'FgEmprestimo',

    'PercDiferimento',

    'QuantidadeLitros',

    'VlIPILitro',

    'VlPISLitro',

    'VlCOFINSLitro',

    'VlAproximadoImpostoFederal',

    'VlAproximadoImpostoEstadual',

    'VlAproximadoImpostoMunicipal',

    'PlanoContaSped',

    'PercFCP',

    'VlBaseFCP',

    'VlFCP',

    'PercFCPST',

    'VlBaseFCPST',

    'VlFCPST',

    'VlBaseCalculoSTRetido',

    'VlICMSSTRetido',

    'AliquotaSTRetido',

    'VlICMSSubstituto',
  ] as const,
}

export type TNfSaidaItemFields = (typeof ItemNota.fields)[number]
export type TNfSaidaItemKeys = (typeof ItemNota.primary)[number]

function nfSaidaItemControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfSaidaItemFields, TNfSaidaItemKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const nfSaidaItemController = nfSaidaItemControllerFactory(
  dbPlano,
  ItemNota
)
