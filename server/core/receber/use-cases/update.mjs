export const update = (dataSource) => async (args) => {
  return dataSource.plano.receber.update(args)
}
