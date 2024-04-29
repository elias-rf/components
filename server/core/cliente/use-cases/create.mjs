export const create = (dataSource) => async (args) => {
  return dataSource.plano.cliente.create(args)
}
