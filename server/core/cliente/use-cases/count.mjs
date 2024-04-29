export const count = (dataSource) => async (args) => {
  return dataSource.plano.cliente.count(args)
}
