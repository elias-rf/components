export const read = (dataSource) => async (args) => {
  return dataSource.plano.cliente.read(args)
}
