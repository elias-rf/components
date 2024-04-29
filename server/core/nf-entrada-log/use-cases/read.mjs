export const read = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaLog.read(args)
}
