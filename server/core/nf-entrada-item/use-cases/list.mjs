export const list = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaItem.list(args)
}
