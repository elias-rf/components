export const count = (dataSource) => async (args) => {
  return dataSource.plano.nfSaida.count(args)
}
