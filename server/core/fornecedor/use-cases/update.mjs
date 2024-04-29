export const update = (dataSource) => async (args) => {
  return dataSource.plano.fornecedor.update(args)
}
