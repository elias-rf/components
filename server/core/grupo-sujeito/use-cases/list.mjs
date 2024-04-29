export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupoSujeito.list(args)
}
