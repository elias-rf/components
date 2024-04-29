export const count = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaInterna.count(args)
}
