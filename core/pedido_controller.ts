import { dbPlano } from '@/core/db/db-plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

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

function pedidoControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TPedidoFields, TPedidoKeys>(db, schema)
  return {
    pedido_list: orm.rpc.list,
    pedido_read: orm.rpc.read,
    pedido_count: orm.rpc.count,
    pedido_update: orm.rpc.update,
    pedido_create: orm.rpc.create,
    pedido_del: orm.rpc.del,
    pedido_increment: orm.rpc.increment,
  }
}

export const pedidoController = pedidoControllerFactory(dbPlano, MestrePedido)
