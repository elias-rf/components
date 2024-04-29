export const increment = (dataSource) => async (args) => {
  return dataSource.plano.estoque.increment(args)
}
