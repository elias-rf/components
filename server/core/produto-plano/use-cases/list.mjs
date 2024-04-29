export const list = (dataSource) => async (args) => {
  return dataSource.plano.produto.list(args)
}
