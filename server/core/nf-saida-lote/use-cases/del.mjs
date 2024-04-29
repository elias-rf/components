export const del = (dataSource) => async (args) => {
  return dataSource.plano.nfSaidaLote.del(args)
}
