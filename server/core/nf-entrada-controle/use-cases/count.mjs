export const count = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaControle.count(args)
}
