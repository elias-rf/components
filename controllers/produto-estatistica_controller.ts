import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const EstatPro: TSchema = {
  table: 'EstatPro',
  primary: ['CdEmpresa', 'AnoRef', 'MesRef', 'CdProduto'] as const,
  fields: [
    'CdEmpresa',

    'AnoRef',

    'MesRef',

    'CdProduto',

    'EstInicial',

    'Entradas',

    'Saidas',

    'Ajustes',

    'QtdCompras',

    'QtdMedio',

    'QtdVendas',

    'VlCusto',

    'VlMedio',

    'VlVendas',

    'VlCustoMedio',

    'VlVenda',

    'VlAtacado',

    'EstInicialPsico',
  ] as const,
}

export type TProdutoEstatisticaFields = (typeof EstatPro.fields)[number]
export type TProdutoEstatisticaKeys = (typeof EstatPro.primary)[number]

function produtoEstatisticaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoEstatisticaFields, TProdutoEstatisticaKeys>(
    db,
    schema
  )
  return {
    ...orm.rpc,
  }
}

export const produtoEstatisticaController = produtoEstatisticaControllerFactory(
  dbPlano,
  EstatPro
)
