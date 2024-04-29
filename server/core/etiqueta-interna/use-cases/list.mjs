export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaInterna.list(args)
}
