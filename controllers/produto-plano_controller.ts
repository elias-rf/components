import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { CadPro } from '@/schemas/plano/CadPro.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TProdutoPlanoFields = keyof typeof CadPro.fields
export type TProdutoPlanoKeys = (typeof CadPro.primary)[number]
;(CadPro as TSchema).relations = {
  fornecedor: {
    method: () =>
      import('./fornecedor_controller').then(
        (m) => m.fornecedorController.read
      ),

    where: [['CdFornecedor', 'CdFornecedor']],
  },
}

function produtoPlanoControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoPlanoFields, TProdutoPlanoKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const produtoPlanoController = produtoPlanoControllerFactory(
  dbPlano,
  CadPro
)
