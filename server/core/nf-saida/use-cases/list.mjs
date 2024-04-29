export const list = (dataSource) => async (args) => {
  return dataSource.plano.nfSaida.list(args)
}
