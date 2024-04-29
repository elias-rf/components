export const update = (dataSource) => async (args) => {
  return dataSource.plano.nfSaida.update(args)
}
