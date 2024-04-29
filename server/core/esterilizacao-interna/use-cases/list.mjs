export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoInterna.list(args)
}
