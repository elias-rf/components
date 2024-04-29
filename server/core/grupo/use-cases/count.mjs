export const count = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupo.count(args)
}
