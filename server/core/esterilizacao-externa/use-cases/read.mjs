export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoExterna.read(args)
}
