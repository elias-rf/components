export const read = (dataSource) => async (args) => {
  return dataSource.plano.nfSaidaLote.read(args)
}
