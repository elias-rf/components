import { dbPlano } from '@/core/db/db-plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const estoqueSchema: TSchema = {
  table: 'Estoque',
  primary: ['CdEmpresa', 'CdProduto'] as const,
  fields: [
    'CdEmpresa',

    'CdProduto',

    'EndPrateleira',

    'EstInicial',

    'EstAtual',

    'EstCorrecao',

    'DemandaDia',

    'EstMaximo',

    'EstMinimo',

    'MaximoDia',

    'MinimoDia',

    'QtdeAssistencia',

    'QtdeConsignacao',

    'QtdeDemonstracao',

    'QtdePedEntrada',

    'QtdePedSaida',

    'DtUltMovimento',

    'EstReservado',

    'VlUltCustoMedio',

    'CdMoedaCustoMedio',

    'PercRepasseComercial',

    'PercDescontoComercial',

    'VlBaseCalculoSTRetido',

    'VlICMSSTRetido',

    'AliquotaSTRetido',

    'VlICMSSubstituto',
  ],
}

export type TEstoqueFields = (typeof estoqueSchema.fields)[number]
export type TEstoqueKeys = (typeof estoqueSchema.primary)[number]

function estoqueControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TEstoqueFields, TEstoqueKeys>(db, schema)
  return {
    estoque_list: orm.rpc.list,
    estoque_read: orm.rpc.read,
    estoque_count: orm.rpc.count,
    estoque_update: orm.rpc.update,
    estoque_create: orm.rpc.create,
    estoque_del: orm.rpc.del,
    estoque_increment: orm.rpc.increment,
  }
}

export const estoqueController = estoqueControllerFactory(
  dbPlano,
  estoqueSchema
)
