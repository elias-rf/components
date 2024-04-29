export const create = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoExterna.create(args)
}
