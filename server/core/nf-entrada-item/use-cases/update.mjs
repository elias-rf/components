export const update = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaItem.update(args)
}
