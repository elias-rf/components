export const count = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaItem.count(args)
}
