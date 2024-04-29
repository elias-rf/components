export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupoSujeito.read(args)
}
