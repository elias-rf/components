export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.operacaoProducao.read(args)
}
