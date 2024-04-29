export const read = (dataSource) => async (args) => {
  return dataSource.plano.receber.read(args)
}
