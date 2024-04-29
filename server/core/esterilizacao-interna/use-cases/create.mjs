export const create = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoInterna.create(args)
}
