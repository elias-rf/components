export const del = (dataSource) => async (args) => {
  return dataSource.plano.nfEntrada.del(args)
}
