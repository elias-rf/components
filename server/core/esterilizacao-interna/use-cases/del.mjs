export const del = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoInterna.del(args)
}
