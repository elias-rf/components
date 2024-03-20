import { TProdutoPlanoController } from '@/core/produto-plano/produto-plano_controller.js'
import { TDataSource } from '@/data/index.js'
import { TProdutoItemDtoKeys } from '@/data/oftalmo/produto-item/produto-item.type.js'
import { TProdutoDtoFields } from '@/data/plano/produto/produto.type.js'
import { read } from './read.js'

export const produtoPlano =
  (
    dataSource: TDataSource,
    {
      produtoPlanoController,
    }: { produtoPlanoController: TProdutoPlanoController }
  ) =>
  async ({
    id,
    select,
  }: {
    id: Array<[TProdutoItemDtoKeys, any]>
    select?: Array<TProdutoDtoFields>
  }) => {
    // const selected = produtoPlanoController.orm.util.validSelect(select)
    //orm.util.validId(id)
    const readUseCase = read(dataSource)
    const produtoItem = await readUseCase({
      where: id,
      select: ['planoId'],
    })

    if (typeof produtoItem.planoId === 'string') {
      produtoItem.planoId = produtoItem.planoId.trim()
      return produtoPlanoController.produtoPlano_read({
        where: [['id', produtoItem.planoId]],
        select,
      })
    }
    return []
  }
