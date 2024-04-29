export const update = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupoSujeito.update(args)
}
