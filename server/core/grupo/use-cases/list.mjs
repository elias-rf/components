export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupo.list(args)
}
