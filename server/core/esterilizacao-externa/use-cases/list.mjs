export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoExterna.list(args)
}
