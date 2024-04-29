export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.produtoItem.list(args)
}
