import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const MestrePedido: TSchema = {
  table: 'MestrePedido',
  primary: ['CdFilial', 'NumPedido'] as const,
  fields: [
    'CdEmitente',

    'CdFilial',

    'CdTipoVenda',

    'CdTransportadora',

    'CdVendedor',

    'ComboFilial',

    'CondFaturamento',

    'CondPgto',

    'DtColocacao',

    'DtEmissao',

    'DtEntrega',

    'FgSituacao',

    'FgSomaIPI',

    'FgVendaFilial',

    'Garantia',

    'Horario',

    'NmConfirmacao',

    'NmFavorecido',

    'Nop',

    'NumPedido',

    'NumPedidoEmitente',

    'NumRecibo',

    'Obs',

    'Op_Transferencia',

    'PercAcrescimo',

    'PercComissaoPrazo',

    'PercComissaoVista',

    'PercDesconto',

    'Tipo',

    'TipoFrete',

    'Validade',

    'VlAcrescimo',

    'VlDesconto',

    'VlPago',

    'VlTotal',

    'CdSetor',

    'FgPreVenda',

    'HrEntrega',

    'ModeloPedido',

    'CdStatus',

    'VlFrete',

    'DtUltAlteracao',

    'CdCondPagtoChe',

    'CdTipoEntrega',

    'CdCondPagto',

    'HrEntregaIni',

    'HrEntregaFim',

    'VlTaxaEntrega',

    'CdVendedorExtra',

    'PercComissaoVistaExtra',

    'PercComissaoPrazoExtra',

    'CdMatriculaVMS',

    'NSU',

    'VlCreditoVMS',

    'OperadoraVMS',

    'FgEnvioCaneta',

    'NmPaciente',

    'CdProjeto',

    'CdLocalEstoque',

    'FgStatusOrdem',

    'FgConferencia',

    'Contato',

    'Departamento',

    'AssisTecnica',

    'PrazoEntrega',

    'FgRateio',

    'CondPagamentoIni',

    'FgEndComercial',

    'CdClienteImpressao',

    'NumPedidoOriginal',

    'FgBuscaReceita',

    'FgVendaConsultorio',

    'DestinoMaterial',

    'VlIPIFrete',

    'FgObrigaNotaFiscal',

    'NumECFCupomVinculado',

    'NumCOOCupomVinculado',

    'NumCOODAV',

    'NumSerieECF',

    'CNPJCPFAdquirente',

    'ControleNum',

    'LocalEntregaAnterior',

    'ProximidadesAnterior',

    'Usuario',

    'NumPlaca',

    'FgEntregaFutura',

    'VlSeguro',

    'VlDespesasAcessorias',

    'FgImprimePedidoSemVlUnitario',

    'VlTotalPesoBruto',

    'VlDescontoCombo',
  ],
}

export type TPedidoFields = (typeof MestrePedido.fields)[number]
export type TPedidoKeys = (typeof MestrePedido.primary)[number]

function pedidoControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TPedidoFields, TPedidoKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const pedidoController = pedidoControllerFactory(dbPlano, MestrePedido)
