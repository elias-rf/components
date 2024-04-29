export const list = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaControle.list(args)
}
