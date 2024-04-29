export const read = (dataSource) => async (args) => {
  return dataSource.plano.nfEntrada.read(args)
}
