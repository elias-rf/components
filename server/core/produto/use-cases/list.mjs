export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.produto.list(args)
}
