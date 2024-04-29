export const update = (dataSource) => async (args) => {
  return dataSource.plano.nfSaidaLote.update(args)
}
