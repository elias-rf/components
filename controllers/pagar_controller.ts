import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
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

function pagarControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TPagarFields, TPagarKeys>(db, schema)
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

export const pagarController = pagarControllerFactory(dbPlano, ArqDup)
