export const create = (dataSource) => async (args) => {
  return dataSource.plano.receber.create(args)
}
