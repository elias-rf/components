export const count = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaLog.count(args)
}
