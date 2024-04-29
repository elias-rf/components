export const del = (dataSource) => async (args) => {
  return dataSource.oftalmo.produto.del(args)
}
