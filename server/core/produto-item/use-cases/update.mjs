export const update = (dataSource) => async (args) => {
  return dataSource.oftalmo.produtoItem.update(args)
}
