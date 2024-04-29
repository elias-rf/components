import { planoDb } from '../../data/plano/plano.db.mjs'
import { ormTable } from '../../utils/orm/index.mjs'

export const ArqDup = {
  table: 'ArqDup',
  primary: ['CdEmpresa', 'NumDoc', 'CodFor', 'SeqDoc'],
  fields: [
    'CdEmpresa',
    'NumDoc',
    'CodFor',
    'SeqDoc',
    'Serie',
    'DatEmi',
    'DatVen',
    'DatPag',
    'TipInd',
    'Aceite',
    'NumFat',
    'CdBanco',
    'CdAgencia',
    'NumConta',
    'NumCheque',
    'FgSituacao',
    'DtUltAlteracao',
    'TpMovimentoBanco',
    'NumLancamento',
    'NumNota',
    'CdTipoPagamento',
    'CdFontePagamento',
    'DtLancamento',
    'Modelo',
    'NumAuxiliar',
    'VlAmortizado',
    'PercJuroDiario',
    'VlMultaAtraso',
    'VlDocumento',
    'VlDeducao',
    'VlAcrescimo',
    'VlJurosPago',
    'ObsDocumento',
    'FgTipoCustoDRE',
  ],
}

function pagarControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
  return {
    pagar_list: orm.rpc.list,
    pagar_read: orm.rpc.read,
    pagar_count: orm.rpc.count,
    pagar_update: orm.rpc.update,
    pagar_create: orm.rpc.create,
    pagar_del: orm.rpc.del,
    pagar_increment: orm.rpc.increment,
  }
}

export const pagarController = pagarControllerFactory(planoDb, ArqDup)
