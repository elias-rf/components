export const create = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupo.create(args)
}
