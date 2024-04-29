export const update = (dataSource) => async (args) => {
  return dataSource.plano.produtoControle.update(args)
}
