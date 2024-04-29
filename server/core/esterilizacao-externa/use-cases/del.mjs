export const del = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoExterna.del(args)
}
