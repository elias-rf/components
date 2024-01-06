import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'
import {
  TProdutoPlanoFields,
  produtoPlanoController,
} from './produto-plano_controller.js'

export const tbl_Produto_Item: TSchema = {
  table: 'tbl_Produto_Item',
  primary: ['kProdutoItem'] as const,
  relations: {
    produto: {
      method: () =>
        import('./produto_controller.js').then(
          (m) => m.produtoController.produto_read
        ),
      where: [['kProduto', 'fkProduto']],
    },
  },
  fields: [
    'kProdutoItem',
    'NomeProdutoItem',
    'fkProduto',
    'QtdMinima',
    'QtdAtual',
    'QtdMaxima',
    'QtdSeguranca',
    'ConsumoMedioMes',
    'ValorVenda',
    'IdVisiontech',
    'ForaDeLinha',
    'GrupoCredito',
    'fkProdutoItemAssociado',
    'AvisoEstoqueMinMax',
  ],
}

export type TProdutoItemFields = (typeof tbl_Produto_Item.fields)[number]
export type TProdutoItemKeys = (typeof tbl_Produto_Item.primary)[number]

function produtoItemControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TProdutoItemFields, TProdutoItemKeys>(db, schema)

  const produtoItem_produtoPlano = async ({
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
      return produtoPlanoController.produtoPlano_read({
        where: [['CdProduto', produtoItem.IdVisiontech]],
        select,
      })
    }
    return []
  }

  return {
    produtoItem_list: orm.rpc.list,
    produtoItem_read: orm.rpc.read,
    produtoItem_count: orm.rpc.count,
    produtoItem_update: orm.rpc.update,
    produtoItem_create: orm.rpc.create,
    produtoItem_del: orm.rpc.del,
    produtoItem_increment: orm.rpc.increment,
    produtoItem_produtoPlano,
  }
}

export const produtoItemController = produtoItemControllerFactory(
  dbOftalmo,
  tbl_Produto_Item
)
