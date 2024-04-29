export const count = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaExterna.count(args)
}
