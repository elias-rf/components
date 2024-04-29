export const count = (dataSource) => async (args) => {
  return dataSource.plano.produto.count(args)
}
