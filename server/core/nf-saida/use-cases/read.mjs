export const read = (dataSource) => async (args) => {
  return dataSource.plano.nfSaida.read(args)
}
