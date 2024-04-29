export const del = (dataSource) => async (args) => {
  return dataSource.plano.fornecedor.del(args)
}
