export const update = (dataSource) => async (args) => {
  return dataSource.plano.nfEntrada.update(args)
}
