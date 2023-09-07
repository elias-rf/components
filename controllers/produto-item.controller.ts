import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tbl_Produto_Item } from '@/schemas/oftalmo/tbl_Produto_Item.schema'
import type { TSchema } from '@/schemas/schema.type'
import {
  TProdutoPlanoFields,
  produtoPlanoController,
} from './produto-plano.controller'

export type TProdutoItemFields = keyof typeof tbl_Produto_Item.fields
export type TProdutoItemKeys = (typeof tbl_Produto_Item.primary)[number]

function produtoItemControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoItemFields, TProdutoItemKeys>(db, schema)

  const produtoPlano = async ({
    id,
    select,
  }: {
    id: Array<[TProdutoItemKeys, any]>
    select?: Array<TProdutoPlanoFields>
  }) => {
    const selected = produtoPlanoController.orm.validSelect(select)
    orm.validId(id)

    const produtoItem = await orm.read({
      id,
      select: ['IdVisiontech'],
    })

    if (typeof produtoItem.IdVisiontech === 'string') {
      produtoItem.IdVisiontech = produtoItem.IdVisiontech.trim()
      return produtoPlanoController.read({
        id: [['CdProduto', produtoItem.IdVisiontech]],
        ...selected,
      })
    }
    return []
  }
  produtoPlano.rpc = true

  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    produtoPlano,
  }
}

export const produtoItemController = produtoItemControllerFactory(
  dbOftalmo,
  tbl_Produto_Item
)
