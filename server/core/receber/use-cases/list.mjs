export const list = (dataSource) => async (args) => {
  return dataSource.plano.receber.list(args)
}
