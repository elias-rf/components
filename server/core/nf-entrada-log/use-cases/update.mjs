export const update = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaLog.update(args)
}
