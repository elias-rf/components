import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const CategPro = {
  database: 'plano',
  table: 'CategPro',
  primary: ['CdCategoria'],
  fields: [
    'CdCategoria',

    'NmCategoria',

    'CdDepartamento',

    'FgListaPreco',

    'DtUltAlteracao',

    'Mensagem',

    'PercDescMaxGerente',

    'PercDescMaxVendedor',
  ],
}

export type TProdutoCategoriaFields = (typeof CategPro.fields)[number]
export type TProdutoCategoriaKeys = (typeof CategPro.primary)[number]

function produtoCategoriaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoCategoriaFields, TProdutoCategoriaKeys>(
    db,
    schema
  )
  return {
    ...orm.rpc,
  }
}

export const produtoCategoriaController = produtoCategoriaControllerFactory(
  dbPlano,
  CategPro
)
