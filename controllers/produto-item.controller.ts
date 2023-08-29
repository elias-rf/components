import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  Ttbl_Produto_Item,
  tbl_Produto_Item,
} from '@/schemas/oftalmo/tbl_Produto_Item.schema'
import type { TSchema } from '@/schemas/schema.type'
import { TCadPro } from '@/schemas/plano/CadPro.schema'
import { produtoPlanoController } from './produto-plano.controller'

class ProdutoItemController extends OrmTable<Ttbl_Produto_Item> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }

  produtoPlano = async ({
    id,
    select,
  }: {
    id: [string, any][]
    select?: Array<TCadPro>
  }) => {
    let { IdVisiontech } = await this.read({
      id: [['kProdutoItem', id[0][1]]],
      select: ['IdVisiontech'],
    })

    if (IdVisiontech) {
      IdVisiontech = IdVisiontech?.trim()
      return produtoPlanoController.read({
        id: [['CdProduto', IdVisiontech]],
        select,
      })
    }
    return []
  }
}

export const produtoItemController = new ProdutoItemController(
  dbOftalmo,
  tbl_Produto_Item
)
