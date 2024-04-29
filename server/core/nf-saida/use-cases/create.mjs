export const create = (dataSource) => async (args) => {
  return dataSource.plano.nfSaida.create(args)
}
