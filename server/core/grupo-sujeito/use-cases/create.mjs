export const create = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupoSujeito.create(args)
}
