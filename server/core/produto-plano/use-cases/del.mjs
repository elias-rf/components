export const del = (dataSource) => async (args) => {
  return dataSource.plano.produto.del(args)
}
