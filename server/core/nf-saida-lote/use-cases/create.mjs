export const create = (dataSource) => async (args) => {
  return dataSource.plano.nfSaidaLote.create(args)
}
