export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.ordemProducaoOperacao.read(args)
}
