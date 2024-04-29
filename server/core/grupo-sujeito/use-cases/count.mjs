export const count = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupoSujeito.count(args)
}
