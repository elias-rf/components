import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

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

function estoqueControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TEstoqueFields, TEstoqueKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const estoqueController = estoqueControllerFactory(
  dbPlano,
  estoqueSchema
)
