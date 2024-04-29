export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.esterilizacaoInterna.read(args)
}
