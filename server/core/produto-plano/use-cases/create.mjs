export const create = (dataSource) => async (args) => {
  return dataSource.plano.produto.create(args)
}
