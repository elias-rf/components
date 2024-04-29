export const read = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaItem.read(args)
}
