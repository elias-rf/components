export const update = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupo.update(args)
}
