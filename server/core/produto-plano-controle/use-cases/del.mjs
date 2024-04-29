export const del = (dataSource) => async (args) => {
  return dataSource.plano.produtoControle.del(args)
}
