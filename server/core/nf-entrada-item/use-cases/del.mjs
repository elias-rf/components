export const del = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaItem.del(args)
}
