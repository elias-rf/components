export const update = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaControle.update(args)
}
