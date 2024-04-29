export const del = (dataSource) => async (args) => {
  return dataSource.plano.nfSaida.del(args)
}
