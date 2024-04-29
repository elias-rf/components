export const del = (dataSource) => async (args) => {
  return dataSource.plano.cliente.del(args)
}
