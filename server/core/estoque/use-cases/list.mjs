export const list = (dataSource) => async (args) => {
  return dataSource.plano.nfEntrada.list(args)
}
