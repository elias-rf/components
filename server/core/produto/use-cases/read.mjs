export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.produto.read(args)
}
