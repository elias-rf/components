export const count = (dataSource) => async (args) => {
  return dataSource.plano.fornecedor.count(args)
}
