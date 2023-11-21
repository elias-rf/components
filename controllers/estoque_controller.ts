import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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

function estoqueControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TEstoqueFields, TEstoqueKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const estoqueController = estoqueControllerFactory(
  dbPlano,
  estoqueSchema
)
