export const create = (dataSource) => async (args) => {
  return dataSource.plano.produtoControle.create(args)
}
