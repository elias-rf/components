export const update = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoExterna.update(args)
}
