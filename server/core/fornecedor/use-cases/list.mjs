export const list = (dataSource) => async (args) => {
  return dataSource.plano.fornecedor.list(args)
}
