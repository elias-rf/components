export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.ordemProducao.read(args)
}
