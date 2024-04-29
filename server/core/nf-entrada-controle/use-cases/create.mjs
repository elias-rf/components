export const create = (dataSource) => async (args) => {
  return dataSource.plano.nfEntradaControle.create(args)
}
