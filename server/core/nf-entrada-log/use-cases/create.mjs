export const create = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaLog.create(args)
}
