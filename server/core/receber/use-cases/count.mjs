export const count = (dataSource) => async (args) => {
  return dataSource.plano.receber.count(args)
}
