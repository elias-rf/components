export const read = (dataSource) => async (args) => {
  return dataSource.plano.produto.read(args)
}
