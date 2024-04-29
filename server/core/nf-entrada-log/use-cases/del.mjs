export const del = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaLog.del(args)
}
