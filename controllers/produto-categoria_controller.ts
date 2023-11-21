import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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

function produtoCategoriaControllerFactory(db: AdapterKnex, schema: TSchema) {
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
