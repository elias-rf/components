export const count = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoInterna.count(args)
}
