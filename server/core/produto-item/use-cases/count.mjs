export const count = (dataSource) => async (args) => {
  return dataSource.oftalmo.produtoItem.count(args)
}
