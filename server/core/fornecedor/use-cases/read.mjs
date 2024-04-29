export const read = (dataSource) => async (args) => {
  return dataSource.plano.fornecedor.read(args)
}
