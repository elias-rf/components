export const count = (dataSource) => async (args) => {
  return dataSource.plano.produtoControle.count(args)
}
