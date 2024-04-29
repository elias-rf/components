export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.produtoItem.read(args)
}
