export const count = (dataSource) => async (args) => {
  return dataSource.oftalmo.produto.count(args)
}
