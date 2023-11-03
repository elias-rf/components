import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'
import {
  TProdutoPlanoFields,
  produtoPlanoController,
} from './produto-plano_controller'

export const tbl_Produto_Item: TSchema = {
  table: 'tbl_Produto_Item',
  primary: ['kProdutoItem'] as const,
  relations: {
    produto: {
      method: () =>
        import('./produto_controller').then((m) => m.produtoController.read),
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
