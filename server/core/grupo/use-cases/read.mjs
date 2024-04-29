export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupo.read(args)
}
