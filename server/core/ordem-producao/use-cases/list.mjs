export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.ordemProducao.list(args)
}
