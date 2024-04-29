export const update = (dataSource) => async (args) => {
  return dataSource.plano.cliente.update(args)
}
