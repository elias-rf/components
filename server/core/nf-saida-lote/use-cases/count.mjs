export const count = (dataSource) => async (args) => {
  return dataSource.plano.nfSaidaLote.count(args)
}
