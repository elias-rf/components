export const update = (dataSource) => async (args) => {
  return dataSource.plano.produto.update(args)
}
