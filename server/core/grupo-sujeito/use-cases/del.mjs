export const del = (dataSource) => async (args) => {
  return dataSource.oftalmo.grupoSujeito.del(args)
}
