export const read = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaControle.read(args)
}
