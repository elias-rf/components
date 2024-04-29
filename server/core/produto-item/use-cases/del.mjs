export const del = (dataSource) => async (args) => {
  return dataSource.oftalmo.produtoItem.del(args)
}
