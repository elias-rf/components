import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { ItemNota } from '@/schemas/plano/ItemNota.schema'
import { TSchema } from '@/schemas/schema.type'

export type TNfSaidaItemFields = keyof typeof ItemNota.fields
export type TNfSaidaItemKeys = (typeof ItemNota.primary)[number]
;(ItemNota as TSchema).relations = {
  produto: {
    method: () =>
      import('./produto-plano_controller').then(
        (m) => m.produtoPlanoController.read
      ),

    where: [['CdProduto', 'CdProduto']],
  },
}

function nfSaidaItemControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfSaidaItemFields, TNfSaidaItemKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const nfSaidaItemController = nfSaidaItemControllerFactory(
  dbPlano,
  ItemNota
)
