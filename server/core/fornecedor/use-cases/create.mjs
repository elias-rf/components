export const create = (dataSource) => async (args) => {
  return dataSource.plano.fornecedor.create(args)
}
