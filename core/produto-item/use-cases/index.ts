import { TProdutoPlanoController } from '@/core/produto-plano/produto-plano_controller.js'
import { TDataSource } from '@/data/index.js'
import { count } from './count.js'
import { create } from './create.js'
import { del } from './del.js'
import { list } from './list.js'
import { produtoPlano } from './produto-plano.js'
import { read } from './read.js'
import { update } from './update.js'

export const produtoItemUseCases = (
  dataSource: TDataSource,
  {
    produtoPlanoController,
  }: { produtoPlanoController: TProdutoPlanoController }
) => ({
  count: count(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  list: list(dataSource),
  produtoPlano: produtoPlano(dataSource, { produtoPlanoController }),
  read: read(dataSource),
  update: update(dataSource),
})
