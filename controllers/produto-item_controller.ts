import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tbl_Produto_Item } from '@/schemas/oftalmo/tbl_Produto_Item.schema'
import type { TSchema } from '@/schemas/schema.type'
import {
  TProdutoPlanoFields,
  produtoPlanoController,
} from './produto-plano_controller'

export type TProdutoItemFields = keyof typeof tbl_Produto_Item.fields
export type TProdutoItemKeys = (typeof tbl_Produto_Item.primary)[number]
;(tbl_Produto_Item as TSchema).relations = {
  produto: {
    method: () =>
      import('./produto_controller').then((m) => m.produtoController.read),
    where: [['kProduto', 'fkProduto']],
  },
}

function produtoItemControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoItemFields, TProdutoItemKeys>(db, schema)

  const produtoPlano = async ({
    id,
    select,
  }: {
    id: Array<[TProdutoItemKeys, any]>
    select?: Array<TProdutoPlanoFields>
  }) => {
    // const selected = produtoPlanoController.orm.util.validSelect(select)
    orm.util.validId(id)

    const produtoItem = await orm.rpc.read({
      where: id,
      select: ['IdVisiontech'],
    })

    if (typeof produtoItem.IdVisiontech === 'string') {
      produtoItem.IdVisiontech = produtoItem.IdVisiontech.trim()
      return produtoPlanoController.read({
        where: [['CdProduto', produtoItem.IdVisiontech]],
        select,
      })
    }
    return []
  }
  produtoPlano.rpc = true

  return {
    ...orm.rpc,
    produtoPlano,
  }
}

export const produtoItemController = produtoItemControllerFactory(
  dbOftalmo,
  tbl_Produto_Item
)
