export const del = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupo.del(args)
}
