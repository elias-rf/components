export const count = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoExterna.count(args)
}
