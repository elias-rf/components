export const create = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaItem.create(args)
}
