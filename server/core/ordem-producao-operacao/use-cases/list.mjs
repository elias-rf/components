export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.ordemProducaoOperacao.list(args)
}
