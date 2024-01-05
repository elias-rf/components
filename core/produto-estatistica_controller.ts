import { dbPlano } from '@/core/db/db-plano.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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

function produtoEstatisticaControllerFactory(
  db: TAdapterKnex,
  schema: TSchema
) {
  const orm = ormTable<TProdutoEstatisticaFields, TProdutoEstatisticaKeys>(
    db,
    schema
  )
  return {
    produtoEstatistica_list: orm.rpc.list,
    produtoEstatistica_read: orm.rpc.read,
    produtoEstatistica_count: orm.rpc.count,
    produtoEstatistica_update: orm.rpc.update,
    produtoEstatistica_create: orm.rpc.create,
    produtoEstatistica_del: orm.rpc.del,
    produtoEstatistica_increment: orm.rpc.increment,
  }
}

export const produtoEstatisticaController = produtoEstatisticaControllerFactory(
  dbPlano,
  EstatPro
)
