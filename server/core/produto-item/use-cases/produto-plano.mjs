import { read } from './read.mjs'

export const produtoPlano =
  (dataSource, { produtoPlanoController }) =>
  async ({ id, select }) => {
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
