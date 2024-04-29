export const update = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoInterna.update(args)
}
