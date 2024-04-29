export const create = (dataSource) => async (args) => {
  return dataSource.oftalmo.produtoItem.create(args)
}
