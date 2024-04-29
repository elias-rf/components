export const list = (dataSource) => async (args) => {
  return dataSource.plano.produtoControle.list(args)
}
