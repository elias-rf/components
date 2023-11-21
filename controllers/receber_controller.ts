import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const TitCobr: TSchema = {
  table: 'TitCobr',
  primary: ['CdFilial', 'NrDoc', 'Serie', 'Modelo'] as const,
  fields: [
    'CdFilial',
    'NrDoc',
    'Serie',
    'Modelo',
    'SiglaDoc',
    'ItemDoc',
    'CdAgencia',
    'CdAgenciaCliente',
    'CdBanco',
    'CdBancoCliente',
    'CdCliente',
    'CdFuncionario',
    'DaEmissao',
    'DaLimDesconto',
    'DaLiqCanc',
    'DaRemCob',
    'DaVencto',
    'DtUltAlteracao',
    'FgBloqueto',
    'FgCobranca',
    'FgDuplicata',
    'FgFatura',
    'FgSituacao',
    'Motivo',
    'NmCartao',
    'NossoNr',
    'NossoNumero',
    'NumCheque',
    'NumConta',
    'SgFormaCob',
    'VlAmortizado',
    'VlDescNegociado',
    'VlDesconto',
    'VlEstorno',
    'VlJuroDiaAtr',
    'VlTitulo',
    'FgTipoCarteira',
    'FgAceite',
    'PracaCompensacao',
    'NumPDV',
    'PrazoCompensacao',
    'DtCancelamento',
    'CdVendedor',
    'CdDepositario',
    'NumMapaEntrega',
    'DtAcertoMapaEntrega',
    'CdCarteira',
    'CdComprador',
    'FgReceita',
    'NumPedido',
    'SeqCaixa',
    'TarjaCheque',
    'NumAutCartao',
    'CdVendedorExtra',
    'NumeroFatura',
    'TipoDocFatura',
    'PercMultaAtraso',
    'Usuario',
    'TipoOperacaoCartao',
    'OrigemLancamento',
    'VlJuros',
    'FgCompensar',
    'DtUltimoEnvioEmailCR',
    'FgEmailAVencer',
    'NSU',
  ],
}

export type TReceberFields = (typeof TitCobr.fields)[number]
export type TReceberKeys = (typeof TitCobr.primary)[number]

function receberControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TReceberFields, TReceberKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const receberController = receberControllerFactory(dbPlano, TitCobr)
