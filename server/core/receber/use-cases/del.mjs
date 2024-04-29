export const del = (dataSource) => async (args) => {
  return dataSource.plano.receber.del(args)
}
