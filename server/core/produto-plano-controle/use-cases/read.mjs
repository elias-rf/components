export const read = (dataSource) => async (args) => {
  return dataSource.plano.produtoControle.read(args)
}
