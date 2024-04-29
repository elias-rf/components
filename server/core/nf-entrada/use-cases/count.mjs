export const count = (dataSource) => async (args) => {
  return dataSource.plano.nfEntrada.count(args)
}
