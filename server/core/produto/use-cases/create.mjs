export const create = (dataSource) => async (args) => {
  return dataSource.oftalmo.produto.create(args)
}
