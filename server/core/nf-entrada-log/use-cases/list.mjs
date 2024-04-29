export const list = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaLog.list(args)
}
