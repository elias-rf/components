import { dbPlano } from '@/core/db/db-plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const NfLogConferencia: TSchema = {
  table: 'NfLogConferencia',
  primary: ['NumNota', 'Serie', 'Modelo'] as const,
  fields: [
    'CdFilial',
    'NumNota',
    'Serie',
    'CdFornecedor',
    'Data',
    'Usuario',
    'Operacao',
    'Modelo',
  ],
}

export type TNfEntradaLogFields = (typeof NfLogConferencia.fields)[number]
export type TNfEntradaLogKeys = (typeof NfLogConferencia.primary)[number]

function nfEntradaLogControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfEntradaLogFields, TNfEntradaLogKeys>(db, schema)
  return {
    nfEntradaLog_list: orm.rpc.list,
    nfEntradaLog_read: orm.rpc.read,
    nfEntradaLog_count: orm.rpc.count,
    nfEntradaLog_update: orm.rpc.update,
    nfEntradaLog_create: orm.rpc.create,
    nfEntradaLog_del: orm.rpc.del,
    nfEntradaLog_increment: orm.rpc.increment,
  }
}

export const nfEntradaLogController = nfEntradaLogControllerFactory(
  dbPlano,
  NfLogConferencia
)
