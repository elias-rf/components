export const create = (dataSource) => async (args) => {
  return dataSource.plano.nfEntrada.create(args)
}
