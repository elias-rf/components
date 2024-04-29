export const del = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaControle.del(args)
}
