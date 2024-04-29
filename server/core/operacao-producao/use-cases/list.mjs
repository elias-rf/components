export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.operacaoProducao.list(args)
}
