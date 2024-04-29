export const update = (dataSource) => async (args) => {
  return dataSource.oftalmo.produto.update(args)
}
