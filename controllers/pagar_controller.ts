import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const ArqDup: TSchema = {
  table: 'ArqDup',
  primary: [],
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

export type TPagarFields = (typeof ArqDup.fields)[number]
export type TPagarKeys = (typeof ArqDup.primary)[number]

function pagarControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TPagarFields, TPagarKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const pagarController = pagarControllerFactory(dbPlano, ArqDup)
