export const list = (dataSource) => async (args) => {
  return dataSource.plano.nfSaidaLote.list(args)
}
