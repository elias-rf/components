export const list = (dataSource) => async (args) => {
  return dataSource.plano.cliente.list(args)
}
